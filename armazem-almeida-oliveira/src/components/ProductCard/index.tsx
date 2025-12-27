import { Produto } from "../../types/produto";
import { useCarrinho } from "../../context/CarrinhoContext";

export default function ProductCard({ produto }: { produto: Produto }) {
  const { adicionar } = useCarrinho();

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden border border-gray-100 hover:shadow-lg transition">
      <img
        src={produto.imagem}
        alt={produto.nome}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-neutral">{produto.nome}</h3>
        <p className="text-primary font-bold text-xl mt-2">
          R$ {produto.preco.toFixed(2)}
        </p>
        <button
          onClick={() => adicionar(produto)}
          className="mt-3 w-full bg-secondary text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}
