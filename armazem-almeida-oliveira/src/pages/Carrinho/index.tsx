import { useCarrinho } from "../../context/CarrinhoContext";

export default function Carrinho() {
  const { itens, remover, limpar } = useCarrinho();

  const total = itens.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  if (itens.length === 0)
    return (
      <p className="text-center text-neutral text-lg">
        Seu carrinho está vazio.
      </p>
    );

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">Carrinho de Compras</h1>

      <div className="bg-white shadow rounded-md overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Produto</th>
              <th className="p-3">Preço</th>
              <th className="p-3">Quantidade</th>
              <th className="p-3">Subtotal</th>
              <th className="p-3">Ações</th>
            </tr>
          </thead>
          <tbody>
            {itens.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={item.imagem}
                    alt={item.nome}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <span>{item.nome}</span>
                </td>
                <td className="p-3">R$ {item.preco.toFixed(2)}</td>
                <td className="p-3">{item.quantidade}</td>
                <td className="p-3 font-semibold">
                  R$ {(item.preco * item.quantidade).toFixed(2)}
                </td>
                <td className="p-3">
                  <button
                    onClick={() => remover(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={limpar}
          className="bg-gray-300 text-neutral px-4 py-2 rounded hover:bg-gray-400 transition"
        >
          Limpar Carrinho
        </button>

        <div className="text-right">
          <p className="text-xl font-bold text-neutral">
            Total: <span className="text-primary">R$ {total.toFixed(2)}</span>
          </p>
          <button
            onClick={() => alert("Pedido finalizado com sucesso!")}
            className="mt-2 bg-secondary text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </section>
  );
}
