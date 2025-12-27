import { useEffect, useState } from "react";
import { listarProdutos } from "../../api/produtos";
import { Produto } from "../../types/produto";
import ProductCard from "../../components/ProductCard";

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listarProdutos().then((data) => {
      setProdutos(data);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-secondary-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-300">Carregando produtos...</p>
        </div>
      </div>
    );

  return (
    <section>
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 -mx-6 px-6 py-8 mb-8 rounded-xl border-2 border-secondary-500 shadow-lg">
        <h1 className="text-4xl font-bold text-white mb-3">
          📦 Nossos Produtos
        </h1>
        <p className="text-lg text-gray-300">
          Encontre tudo o que você precisa para sua obra!
        </p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {produtos.map((p) => (
          <ProductCard key={p.id} produto={p} />
        ))}
      </div>
    </section>
  );
}
