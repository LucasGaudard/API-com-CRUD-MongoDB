import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import VendaMensal from "./models/VendaMensal.js";
import User from "./models/user.js";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Conectado ao MongoDB");
  } catch (error) {
    console.log("❌ Erro ao conectar com o MongoDB", error);
    process.exit(1);
  }
};

connectDB();


// 🔐 MIDDLEWARE DE AUTENTICAÇÃO
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token não enviado" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    return res.status(401).json({ error: "Token inválido" });
  }
};


// =====================
// 🔐 ROTAS DE USUÁRIO
// =====================

// REGISTER
app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const senhaCriptografada = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: senhaCriptografada,
    });

    res.json({
      id: user._id,
      email: user.email,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});


// LOGIN
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }

    const senhaValida = await bcrypt.compare(password, user.password);

    if (!senhaValida) {
      return res.status(400).json({ error: "Senha inválida" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});


// =====================
// 📊 ROTAS DE VENDAS (PROTEGIDAS)
// =====================

// CREATE
app.post("/vendas", authMiddleware, async (req, res) => {
  try {
    const novaVenda = await VendaMensal.create(req.body);
    res.json(novaVenda);
  } catch (error) {
    res.json({ error: error.message });
  }
});

// READ
app.get("/vendas", authMiddleware, async (req, res) => {
  try {
    const vendasMensais = await VendaMensal.find();
    res.json(vendasMensais);
  } catch (error) {
    res.json({ error: error.message });
  }
});

// UPDATE
app.put("/vendas/:id", authMiddleware, async (req, res) => {
  try {
    const vendaAtualizada = await VendaMensal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(vendaAtualizada);
  } catch (error) {
    res.json({ error: error.message });
  }
});

// DELETE
app.delete("/vendas/:id", authMiddleware, async (req, res) => {
  try {
    const vendaDeletada = await VendaMensal.findByIdAndDelete(
      req.params.id
    );
    res.json(vendaDeletada);
  } catch (error) {
    res.json({ error: error.message });
  }
});


app.listen(PORT, () =>
  console.log(`🚀 Servidor rodando na porta ${PORT}`)
);