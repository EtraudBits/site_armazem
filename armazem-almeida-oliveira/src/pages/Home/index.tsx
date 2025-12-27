import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <section className="text-center py-8">
      <Helmet>
        <title>Armazém Almeida Oliveira | Materiais de Construção</title>
        <meta
          name="description"
          content="Loja completa em materiais de construção. Qualidade, variedade e preço justo!"
        />
      </Helmet>
      <h1 className="text-4xl font-bold text-primary mb-4">
        Bem-vindo ao Armazém Almeida Oliveira
      </h1>
      <p className="text-lg text-neutral">
        Seu parceiro em materiais de construção, com qualidade e preço justo!
      </p>
    </section>
  );
}
