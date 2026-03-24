import mongoose from "mongoose";

const VendaMensalSchema = new mongoose.Schema({
  mes: String,
  valorVendido: Number,
});

export default mongoose.model("VendaMensal", VendaMensalSchema);
