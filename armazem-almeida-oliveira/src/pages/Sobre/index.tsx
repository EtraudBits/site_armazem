export default function Sobre() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 -mx-6 px-6 py-8 rounded-xl border-2 border-secondary-500 shadow-lg">
        <h1 className="text-4xl font-bold text-white mb-3">ℹ️ Sobre Nós</h1>
        <p className="text-lg text-gray-300">
          Conheça nossa história e valores
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border-2 border-secondary-500">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            🏢 Nossa História
          </h2>
          <p className="text-gray-300 leading-relaxed">
            O Armazém Almeida Oliveira é referência em materiais de construção,
            oferecendo produtos de qualidade e atendimento personalizado desde
            2021. Localizado em Parelhas/RN, nos consolidamos como parceiro de
            confiança de construtores, pedreiros e pessoas que buscam realizar
            seus projetos com excelência.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border-2 border-secondary-600">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            🎯 Nossa Missão
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Fornecer materiais de construção de alta qualidade com preços
            justos, garantindo a satisfação dos nossos clientes através de um
            atendimento diferenciado e compromisso com prazos de entrega.
            Queremos ser o seu parceiro em cada etapa da sua obra.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-secondary-700 to-secondary-900 text-white p-10 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">
          💡 Nossos Valores
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-3">✓</div>
            <h3 className="font-bold text-lg mb-2">Qualidade</h3>
            <p className="text-sm">Produtos certificados das melhores marcas</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="font-bold text-lg mb-2">Confiança</h3>
            <p className="text-sm">
              Transparência e honestidade em cada negócio
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-lg mb-2">Agilidade</h3>
            <p className="text-sm">Entregas rápidas e eficientes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
