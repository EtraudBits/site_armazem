export default function MarcasParceiras() {
  const marcas = [
    { id: 1, nome: "Krona", emoji: "🔧" },
    { id: 2, nome: "Mizu", emoji: "🏗️" },
    { id: 3, nome: "Quartzolit", emoji: "🧱" },
    { id: 4, nome: "Tramontina", emoji: "🔨" },
    { id: 5, nome: "Weg", emoji: "⚡" },
    { id: 6, nome: "Atlas", emoji: "🎨" },
    { id: 7, nome: "Fortlev", emoji: "💧" },
    { id: 8, nome: "Eternit", emoji: "🏠" },
  ];

  return (
    <section className="mb-12 bg-gradient-to-r from-gray-800 to-gray-900 py-12 rounded-2xl shadow-inner">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        🏆 Marcas Parceiras
      </h2>
      <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
        Trabalhamos com as melhores marcas do mercado para garantir qualidade e
        confiabilidade em nossos produtos
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 px-6">
        {marcas.map((marca) => (
          <div
            key={marca.id}
            className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center group cursor-pointer border-2 border-gray-600 hover:border-secondary-500"
          >
            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
              {marca.emoji}
            </div>
            <p className="text-sm font-bold text-white text-center">
              {marca.nome}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
