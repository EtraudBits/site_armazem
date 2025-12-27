import { useEffect, useState } from "react";
import { listarProdutos } from "../../api/produtos";
import { Produto } from "../../types/produto";
import axios from "axios";

export default function Painel() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [form, setForm] = useState({
    id: 0,
    nome: "",
    preco: "",
    imagem: "",
    estoque: "",
  });
  const [editando, setEditando] = useState(false);

  const carregar = async () => {
    const res = await listarProdutos();
    setProdutos(res);
  };

  useEffect(() => {
    carregar();
  }, []);

  const salvar = async (e: React.FormEvent) => {
    e.preventDefault();

    const novoProduto = {
      nome: form.nome,
      preco: parseFloat(form.preco),
      estoque: parseInt(form.estoque),
      imagem: form.imagem,
    };

    if (editando && form.id) {
      await axios.put(`http://localhost:5000/produtos/${form.id}`, novoProduto);
    } else {
      await axios.post("http://localhost:5000/produtos", novoProduto);
    }

    setForm({ id: 0, nome: "", preco: "", imagem: "", estoque: "" });
    setEditando(false);
    carregar();
  };

  const excluir = async (id: number) => {
    if (confirm("Deseja excluir este produto?")) {
      await axios.delete(`http://localhost:5000/produtos/${id}`);
      carregar();
    }
  };

  const editar = (produto: Produto) => {
    setForm({
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco.toString(),
      imagem: produto.imagem,
      estoque: produto.estoque.toString(),
    });
    setEditando(true);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    window.location.reload();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary">
          Painel Administrativo
        </h1>
        <button
          onClick={logout}
          className="bg-gray-300 text-neutral px-4 py-2 rounded hover:bg-gray-400 transition"
        >
          Logout
        </button>
      </div>

      <form
        onSubmit={salvar}
        className="grid md:grid-cols-4 gap-3 bg-white p-4 rounded shadow border border-gray-100"
      >
        <input
          placeholder="Nome"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          className="border rounded px-3 py-2"
          required
        />
        <input
          placeholder="Preço"
          type="number"
          step="0.01"
          value={form.preco}
          onChange={(e) => setForm({ ...form, preco: e.target.value })}
          className="border rounded px-3 py-2"
          required
        />
        <input
          placeholder="Estoque"
          type="number"
          value={form.estoque}
          onChange={(e) => setForm({ ...form, estoque: e.target.value })}
          className="border rounded px-3 py-2"
          required
        />
        <input
          placeholder="URL da Imagem"
          value={form.imagem}
          onChange={(e) => setForm({ ...form, imagem: e.target.value })}
          className="border rounded px-3 py-2"
          required
        />
        <button
          type="submit"
          className={`col-span-full ${
            editando ? "bg-primary" : "bg-secondary"
          } text-white py-2 rounded hover:opacity-90 transition`}
        >
          {editando ? "Salvar Alterações" : "Adicionar Produto"}
        </button>
      </form>

      <table className="w-full border-collapse bg-white shadow rounded-md overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Imagem</th>
            <th className="p-3 text-left">Nome</th>
            <th className="p-3 text-left">Preço</th>
            <th className="p-3 text-left">Estoque</th>
            <th className="p-3 text-left">Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((p) => (
            <tr key={p.id} className="border-t hover:bg-gray-50 transition">
              <td className="p-3">
                <img
                  src={p.imagem}
                  alt={p.nome}
                  className="w-14 h-14 object-cover rounded"
                />
              </td>
              <td className="p-3">{p.nome}</td>
              <td className="p-3">R$ {p.preco.toFixed(2)}</td>
              <td className="p-3">{p.estoque}</td>
              <td className="p-3 flex gap-2">
                <button
                  onClick={() => editar(p)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
                >
                  Editar
                </button>
                <button
                  onClick={() => excluir(p.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
