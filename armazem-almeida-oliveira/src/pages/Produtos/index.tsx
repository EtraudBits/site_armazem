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

  if (loading) return <p>Carregando produtos...</p>;

  return (
    <section className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
      {produtos.map((p) => (
        <ProductCard key={p.id} produto={p} />
      ))}
    </section>
  );
}
