import { Link } from "react-router-dom";

export default function PromocaoSemana() {
  const produtosDestaque = [
    {
      id: 1,
      nome: "Cimento CP II 50KG",
      codigo: "CIMENTO-001",
      imagem:
        "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=400&h=400&fit=crop",
      selo: "⚡ PROMOÇÃO",
    },
    {
      id: 2,
      nome: "Tijolo Cerâmico 8 Furos",
      codigo: "TIJOLO-008",
      imagem:
        "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&h=400&fit=crop",
      selo: "🔥 OFERTA",
    },
    {
      id: 3,
      nome: "Areia Lavada M³",
      codigo: "AREIA-001",
      imagem:
        "https://images.unsplash.com/photo-1603223120992-529b3f9a3a0a?w=400&h=400&fit=crop",
      selo: "⚡ PROMOÇÃO",
    },
    {
      id: 4,
      nome: "Brita 1 M³",
      codigo: "BRITA-001",
      imagem:
        "https://images.unsplash.com/photo-1614613535362-f4e39f8e67ea?w=400&h=400&fit=crop",
      selo: "🔥 OFERTA",
    },
  ];

  return (
    <section className="mb-12">
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl shadow-2xl mb-6">
        <h2 className="text-4xl font-extrabold text-center mb-3">
          ⚡ PROMOÇÃO DA SEMANA
        </h2>
        <p className="text-center text-xl font-semibold">
          Ofertas especiais com preços imperdíveis!
        </p>
        <div className="text-center mt-4">
          <Link
            to="/produtos"
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-lg"
          >
            🛒 CONSULTE NOSSAS OFERTAS
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        {produtosDestaque.map((produto) => (
          <Link
            key={produto.id}
            to="/produtos"
            className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-700 hover:border-red-500 group"
          >
            <div className="relative overflow-hidden">
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                {produto.selo}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                {produto.nome}
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                Código: {produto.codigo}
              </p>
              <button className="w-full bg-gradient-to-r from-primary to-primary-light text-white py-2 rounded-lg font-semibold hover:from-primary-dark hover:to-primary transition-all">
                Ver Detalhes
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
