export default function Contato() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 -mx-6 px-6 py-8 rounded-xl border-2 border-secondary-500 shadow-lg">
        <h1 className="text-4xl font-bold text-white mb-3">📞 Fale Conosco</h1>
        <p className="text-lg text-gray-300">
          Estamos prontos para atender você!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border-2 border-secondary-500">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            📍 Informações de Contato
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
              <span className="text-3xl">📞</span>
              <div className="flex-1">
                <h3 className="font-bold text-white">Telefone / WhatsApp</h3>
                <p className="text-gray-300">(84) 98125-6333</p>
                <a
                  href="https://wa.me/5584981256333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 bg-accent-green text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-all shadow-md"
                >
                  💬 Chamar no WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-700 rounded-lg">
              <span className="text-3xl">✉️</span>
              <div>
                <h3 className="font-bold text-white">Email</h3>
                <p className="text-gray-300">
                  armazemalmeidaoliveira@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-700 rounded-lg">
              <span className="text-3xl">📍</span>
              <div>
                <h3 className="font-bold text-white">Endereço</h3>
                <p className="text-gray-300">Rua 8 de novembro</p>
                <p className="text-gray-300">Centro - Parelhas/RN</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-700 rounded-lg">
              <span className="text-3xl">🕐</span>
              <div>
                <h3 className="font-bold text-white">
                  Horário de Funcionamento
                </h3>
                <p className="text-gray-300">
                  Seg-Sex: 7h às 11:30 e 13:30 às 17:30
                </p>
                <p className="text-gray-300">Sábado: 7h às 11:30</p>
                <p className="text-gray-300">Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border-2 border-secondary-500">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            📧 Envie uma Mensagem
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-white font-semibold mb-2">
                Nome
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:border-secondary-500 focus:outline-none transition"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:border-secondary-500 focus:outline-none transition"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Telefone
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:border-secondary-500 focus:outline-none transition"
                placeholder="(11) 99999-9999"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Mensagem
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:border-secondary-500 focus:outline-none transition"
                placeholder="Como podemos ajudar?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-primary-light text-white py-3 rounded-lg font-bold hover:from-primary-dark hover:to-primary transform hover:scale-105 transition-all shadow-lg"
            >
              ✉️ Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
