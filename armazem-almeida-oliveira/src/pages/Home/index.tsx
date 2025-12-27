import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import BannerCarousel from "../../components/BannerCarousel";
import PromocaoSemana from "../../components/PromocaoSemana";
import CategoriasDestaque from "../../components/CategoriasDestaque";
import MarcasParceiras from "../../components/MarcasParceiras";
import Newsletter from "../../components/Newsletter";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Armazém Almeida Oliveira | Materiais de Construção</title>
        <meta
          name="description"
          content="Loja completa em materiais de construção. Qualidade, variedade e preço justo!"
        />
      </Helmet>

      {/* Banner Carrossel */}
      <BannerCarousel />

      {/* Promoção da Semana */}
      <PromocaoSemana />

      {/* Categorias em Destaque */}
      <CategoriasDestaque />

      {/* Marcas Parceiras */}
      <MarcasParceiras />

      {/* Destaques */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Por que escolher a gente?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-secondary-500">
            <div className="text-5xl mb-4 text-center">🏆</div>
            <h3 className="text-xl font-bold text-center mb-3 text-yellow-400">
              Qualidade Garantida
            </h3>
            <p className="text-gray-300 text-center">
              Produtos de primeiras marcas com certificação de qualidade.
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-secondary-500">
            <div className="text-5xl mb-4 text-center">💰</div>
            <h3 className="text-xl font-bold text-center mb-3 text-yellow-400">
              Melhor Preço
            </h3>
            <p className="text-gray-300 text-center">
              Preços competitivos e condições especiais de pagamento.
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-secondary-600">
            <div className="text-5xl mb-4 text-center">🚚</div>
            <h3 className="text-xl font-bold text-center mb-3 text-yellow-400">
              Entrega Rápida
            </h3>
            <p className="text-gray-300 text-center">
              Entregamos em toda região com agilidade e segurança.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-secondary-800 to-secondary-900 text-white p-12 rounded-2xl text-center shadow-xl">
        <h2 className="text-3xl font-bold mb-4">
          Pronto para construir seu sonho?
        </h2>
        <p className="text-lg mb-6">
          Confira nosso catálogo completo de produtos!
        </p>
        <Link
          to="/produtos"
          className="inline-block bg-gradient-to-r from-primary to-primary-light text-white px-10 py-4 rounded-lg font-bold text-lg hover:from-primary-dark hover:to-primary transform hover:scale-105 transition-all shadow-lg"
        >
          🛒 Ver Todos os Produtos
        </Link>
      </section>
    </>
  );
}
