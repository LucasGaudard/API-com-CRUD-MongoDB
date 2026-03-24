# 📊 API de Vendas Mensais

Projeto Fullstack para gerenciamento de vendas mensais, com autenticação de usuários utilizando JWT, CRUD completo e integração entre frontend e backend.


## 🚀 Tecnologias utilizadas

### 🔧 Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JWT (Json Web Token)
- Bcrypt

### 🎨 Frontend
- React (Vite)
- Axios
- CSS

---

## 📌 Funcionalidades

### 🔐 Autenticação
✔️ Cadastro de usuário  
✔️ Login com geração de token JWT  
✔️ Proteção de rotas  

### 📊 Vendas
✔️ Criar uma venda  
✔️ Listar todas as vendas  
✔️ Atualizar uma venda  
✔️ Deletar uma venda  

---

## 📡 Rotas da API

### 🔐 Auth
| Método | Rota       | Descrição            |
|--------|------------|---------------------|
| POST   | /register  | Criar usuário       |
| POST   | /login     | Login e gerar token |

### 📊 Vendas (Protegidas 🔒)
| Método | Rota           | Descrição              |
|--------|----------------|------------------------|
| POST   | /vendas        | Criar venda            |
| GET    | /vendas        | Listar vendas          |
| PUT    | /vendas/:id    | Atualizar venda        |
| DELETE | /vendas/:id    | Deletar venda          |

---

## 🔐 Autenticação JWT

As rotas de vendas são protegidas.

É necessário enviar o token no header:

