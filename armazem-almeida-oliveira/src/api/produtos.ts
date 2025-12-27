import axios from "axios";
import { Produto } from "../types/produto";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export async function listarProdutos(): Promise<Produto[]> {
  const response = await api.get("/produtos");
  return response.data;
}
