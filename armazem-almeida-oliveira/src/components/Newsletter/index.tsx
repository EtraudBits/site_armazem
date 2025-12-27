import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && nome) {
      alert(`Obrigado ${nome}! Você receberá nossas ofertas em ${email}`);
      setEmail("");
      setNome("");
    }
  };

  return (
    <section className="mb-12 bg-gradient-to-r from-secondary-700 via-secondary-800 to-secondary-900 text-white py-12 px-6 rounded-2xl shadow-2xl">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-4">
          📬 Cadastre-se e Receba Nossas Ofertas!
        </h2>
        <p className="text-lg mb-8 text-gray-200">
          Seja o primeiro a saber sobre promoções exclusivas, novos produtos e
          ofertas especiais
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
            className="px-6 py-3 rounded-lg text-gray-800 flex-1 max-w-xs focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu e-mail"
            className="px-6 py-3 rounded-lg text-gray-800 flex-1 max-w-xs focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <button
            type="submit"
            className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-dark transform hover:scale-105 transition-all shadow-lg whitespace-nowrap"
          >
            ✉️ Enviar
          </button>
        </form>
        <p className="text-sm text-gray-300 mt-4">
          * Não compartilhamos seus dados com terceiros
        </p>
      </div>
    </section>
  );
}
