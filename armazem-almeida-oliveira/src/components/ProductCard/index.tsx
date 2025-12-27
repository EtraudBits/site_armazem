import { Produto } from "../../types/produto";
import { useCarrinho } from "../../context/CarrinhoContext";

export default function ProductCard({ produto }: { produto: Produto }) {
  const { adicionar } = useCarrinho();

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg rounded-xl overflow-hidden border-2 border-gray-700 hover:border-secondary-500 hover:shadow-2xl transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-accent-green text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
          ✓ Disponível
        </div>
      </div>
      <div className="p-5 bg-gray-800">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 min-h-[3.5rem]">
          {produto.nome}
        </h3>
        <div className="flex items-center justify-between mb-4">
          <p className="text-yellow-400 font-bold text-2xl">
            R$ {produto.preco.toFixed(2)}
          </p>
          <span className="text-xs text-gray-400">por unidade</span>
        </div>
        <button
          onClick={() => adicionar(produto)}
          className="w-full bg-gradient-to-r from-primary to-primary-light text-white py-3 rounded-lg font-semibold hover:from-primary-dark hover:to-primary hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <span>🛒</span>
          <span>Adicionar ao Carrinho</span>
        </button>
      </div>
    </div>
  );
}
