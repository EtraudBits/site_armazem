import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-secondary-900 via-secondary-800 to-secondary-900 text-white mt-16">
      <div className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              🏗️ Armazém Almeida Oliveira
            </h3>
            <p className="text-white text-sm mb-4">
              Seu parceiro em materiais de construção com qualidade e preço
              justo desde 2021.
            </p>
            <div className="text-sm text-white">
              <p className="font-semibold">CNPJ: 00.000.000/0001-00</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-yellow-400 text-lg">
              Institucional
            </h4>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  🏠 Home
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="hover:text-white transition-colors"
                >
                  ℹ️ Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  to="/produtos"
                  className="hover:text-white transition-colors"
                >
                  📦 Produtos
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="hover:text-white transition-colors"
                >
                  📞 Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-yellow-400 text-lg">
              Fale Conosco
            </h4>
            <ul className="space-y-3 text-sm text-white">
              <li>
                <span className="font-semibold">📞 Telefone:</span>
                <br />
                (84) 3351-0000
              </li>
              <li>
                <a
                  href="https://wa.me/5584981256333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors"
                >
                  <span className="font-semibold">💬 WhatsApp:</span>
                  <br />
                  (84) 98125-6333
                </a>
              </li>
              <li>
                <a
                  href="mailto:armazemalmeidaoliveira@gmail.com"
                  className="hover:text-yellow-400 transition-colors break-all"
                >
                  <span className="font-semibold">✉️ E-mail:</span>
                  <br />
                  armazemalmeidaoliveira@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-yellow-400 text-lg">
              Endereço e Horário
            </h4>
            <div className="space-y-3 text-sm text-white">
              <div>
                <p className="font-semibold">📍 Localização:</p>
                <p>Rua 8 de novembro</p>
                <p>Centro - Parelhas/RN</p>
                <p>CEP 59360-000</p>
              </div>
              <div>
                <p className="font-semibold">🕐 Horário:</p>
                <p>Seg-Sex: 7h-11:30 e 13:30-17:30</p>
                <p>Sábado: 7h-11:30</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white text-center">
              &copy; {new Date().getFullYear()} Armazém Almeida Oliveira - Todos
              os direitos reservados.
            </p>
            <div className="flex gap-4 text-2xl">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="https://wa.me/5584981256333"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
