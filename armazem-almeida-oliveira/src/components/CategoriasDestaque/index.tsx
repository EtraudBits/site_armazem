import { Link } from "react-router-dom";

export default function CategoriasDestaque() {
  const categorias = [
    {
      id: 1,
      nome: "🔨 Ferramentas",
      descricao: "Ferramentas profissionais",
      imagem:
        "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=300&fit=crop",
      cor: "from-blue-600 to-blue-800",
    },
    {
      id: 2,
      nome: "🏗️ Materiais Básicos",
      descricao: "Cimento, areia, brita",
      imagem:
        "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=400&h=300&fit=crop",
      cor: "from-orange-600 to-orange-800",
    },
    {
      id: 3,
      nome: "💡 Elétrica",
      descricao: "Materiais elétricos",
      imagem:
        "https://images.unsplash.com/photo-1621905252472-123bffc52d39?w=400&h=300&fit=crop",
      cor: "from-yellow-600 to-yellow-800",
    },
    {
      id: 4,
      nome: "💧 Hidráulica",
      descricao: "Tubos, conexões, registros",
      imagem:
        "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop",
      cor: "from-cyan-600 to-cyan-800",
    },
    {
      id: 5,
      nome: "🎨 Tintas e Pintura",
      descricao: "Tintas, pincéis, rolos",
      imagem:
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop",
      cor: "from-purple-600 to-purple-800",
    },
    {
      id: 6,
      nome: "🚪 Esquadrias",
      descricao: "Portas, janelas, fechaduras",
      imagem:
        "https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=400&h=300&fit=crop",
      cor: "from-green-600 to-green-800",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-secondary-800">
        🏪 Nossas Categorias
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {categorias.map((categoria) => (
          <Link
            key={categoria.id}
            to="/produtos"
            className="group relative h-48 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${categoria.imagem})` }}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${categoria.cor} opacity-85 group-hover:opacity-75 transition-opacity`}
            />

            <div className="relative h-full flex flex-col items-center justify-center text-center p-6">
              <h3 className="text-3xl font-extrabold text-white mb-2 drop-shadow-lg">
                {categoria.nome}
              </h3>
              <p className="text-lg text-white font-semibold drop-shadow-md">
                {categoria.descricao}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
