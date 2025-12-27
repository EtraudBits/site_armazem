import { useCarrinho } from "../../context/CarrinhoContext";

export default function Carrinho() {
  const { itens, remover, limpar } = useCarrinho();

  const total = itens.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  if (itens.length === 0)
    return (
      <div className="text-center py-20">
        <div className="text-8xl mb-6">🛒</div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Seu carrinho está vazio
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Adicione produtos para começar suas compras!
        </p>
        <a
          href="/produtos"
          className="inline-block bg-gradient-to-r from-secondary-700 to-secondary-900 text-white px-8 py-4 rounded-lg font-bold hover:from-secondary-800 hover:to-secondary-950 transform hover:scale-105 transition-all shadow-lg"
        >
          📦 Ver Produtos
        </a>
      </div>
    );

  return (
    <section className="space-y-8">
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 -mx-6 px-6 py-8 rounded-xl border-2 border-secondary-500 shadow-lg">
        <h1 className="text-4xl font-bold text-white mb-3">
          🛒 Carrinho de Compras
        </h1>
        <p className="text-lg text-gray-300">
          {itens.length} {itens.length === 1 ? "item" : "itens"} no seu carrinho
        </p>
      </div>

      <div className="bg-gray-800 shadow-xl rounded-xl overflow-hidden border-2 border-gray-700">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gradient-to-r from-secondary-700 to-secondary-900 text-white">
            <tr>
              <th className="p-4 font-bold">Produto</th>
              <th className="p-4 font-bold">Preço</th>
              <th className="p-4 font-bold">Quantidade</th>
              <th className="p-4 font-bold">Subtotal</th>
              <th className="p-4 font-bold">Ações</th>
            </tr>
          </thead>
          <tbody>
            {itens.map((item, index) => (
              <tr
                key={item.id}
                className={index % 2 === 0 ? "bg-gray-700" : "bg-gray-600"}
              >
                <td className="p-4 flex items-center gap-4">
                  <img
                    src={item.imagem}
                    alt={item.nome}
                    className="w-20 h-20 object-cover rounded-lg shadow-md"
                  />
                  <span className="font-semibold text-white">{item.nome}</span>
                </td>
                <td className="p-4 text-gray-300 font-semibold">
                  R$ {item.preco.toFixed(2)}
                </td>
                <td className="p-4">
                  <span className="bg-secondary-700 text-white px-4 py-2 rounded-full font-bold">
                    {item.quantidade}x
                  </span>
                </td>
                <td className="p-4 font-bold text-lg text-yellow-400">
                  R$ {(item.preco * item.quantidade).toFixed(2)}
                </td>
                <td className="p-4">
                  <button
                    onClick={() => remover(item.id)}
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transform hover:scale-105 transition-all font-semibold shadow-md"
                  >
                    🗑️ Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gray-800 p-8 rounded-xl shadow-xl border-2 border-gray-700">
        <div className="flex justify-between items-center">
          <button
            onClick={limpar}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition font-semibold"
          >
            🗑️ Limpar Carrinho
          </button>

          <div className="text-right">
            <p className="text-sm text-gray-300 mb-2">Total do Pedido:</p>
            <p className="text-4xl font-bold text-white mb-4">
              <span className="text-yellow-400">R$ {total.toFixed(2)}</span>
            </p>
            <button
              onClick={() => alert("Pedido finalizado com sucesso! 🎉")}
              className="bg-gradient-to-r from-primary to-primary-light text-white px-10 py-4 rounded-lg font-bold text-lg hover:from-primary-dark hover:to-primary transform hover:scale-105 transition-all shadow-lg"
            >
              ✓ Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
