import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Carrinho from "../pages/Carrinho";
import Admin from "../pages/Admin";
import Layout from "../components/Layout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
