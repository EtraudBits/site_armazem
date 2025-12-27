import { Link, NavLink } from "react-router-dom";
import { useCarrinho } from "../../context/CarrinhoContext";
import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import SearchBar from "../SearchBar";

export default function Header() {
  const { itens } = useCarrinho();
  const totalItens = itens.reduce((acc, i) => acc + i.quantidade, 0);
  const [menuAberto, setMenuAberto] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <header className="bg-gradient-to-r from-secondary-900 via-secondary-800 to-secondary-900 text-white shadow-xl sticky top-0 z-50">
      {/* Barra superior com informações de contato */}
      <div className="bg-secondary-950 text-white">
        <div className="container mx-auto px-6 py-2 flex flex-wrap justify-between items-center text-sm">
          <div className="flex gap-4 flex-wrap">
            <span>📞 (84) 98125-6333</span>
            <span>✉️ armazemalmeidaoliveira@gmail.com</span>
          </div>
          <div className="flex gap-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              📷
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              📘
            </a>
          </div>
        </div>
      </div>

      {/* Barra principal de navegação */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-3 text-2xl font-bold tracking-wide hover:scale-105 transition-transform whitespace-nowrap"
          >
            <span className="text-3xl">🏗️</span>
            <span className="hidden md:inline">Armazém Almeida Oliveira</span>
            <span className="md:hidden">A.A.O.</span>
          </Link>

          {!isMobile && <SearchBar />}

          {isMobile ? (
            <button
              onClick={() => setMenuAberto(!menuAberto)}
              className="text-2xl"
            >
              ☰
            </button>
          ) : (
            <nav className="flex gap-6 items-center whitespace-nowrap">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-yellow-400 border-b-2 border-yellow-400 pb-1"
                    : "text-white hover:text-yellow-400 transition-colors"
                }
              >
                🏠 Home
              </NavLink>
              <NavLink
                to="/produtos"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-yellow-400 border-b-2 border-yellow-400 pb-1"
                    : "text-white hover:text-yellow-400 transition-colors"
                }
              >
                📦 Produtos
              </NavLink>
              <NavLink
                to="/sobre"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-yellow-400 border-b-2 border-yellow-400 pb-1"
                    : "text-white hover:text-yellow-400 transition-colors"
                }
              >
                ℹ️ Sobre
              </NavLink>
              <NavLink
                to="/contato"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-yellow-400 border-b-2 border-yellow-400 pb-1"
                    : "text-white hover:text-yellow-400 transition-colors"
                }
              >
                📞 Contato
              </NavLink>
              <NavLink
                to="/carrinho"
                className="relative bg-yellow-500 text-secondary-900 px-5 py-2.5 rounded-lg font-bold hover:bg-yellow-400 hover:scale-105 transition-all shadow-lg"
              >
                🛒 Carrinho
                {totalItens > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent-red text-white text-xs font-bold rounded-full px-2 py-1 animate-pulse">
                    {totalItens}
                  </span>
                )}
              </NavLink>
            </nav>
          )}
        </div>

        {/* Barra de busca mobile */}
        {isMobile && (
          <div className="mt-3">
            <SearchBar />
          </div>
        )}
      </div>

      {isMobile && menuAberto && (
        <nav className="flex flex-col bg-secondary-900 px-6 py-4 gap-3 border-t border-yellow-500">
          <NavLink
            to="/"
            onClick={() => setMenuAberto(false)}
            className="py-2 text-white hover:text-yellow-400"
          >
            🏠 Home
          </NavLink>
          <NavLink
            to="/produtos"
            onClick={() => setMenuAberto(false)}
            className="py-2 text-white hover:text-yellow-400"
          >
            📦 Produtos
          </NavLink>
          <NavLink
            to="/sobre"
            onClick={() => setMenuAberto(false)}
            className="py-2 text-white hover:text-yellow-400"
          >
            ℹ️ Sobre
          </NavLink>
          <NavLink
            to="/contato"
            onClick={() => setMenuAberto(false)}
            className="py-2 text-white hover:text-yellow-400"
          >
            📞 Contato
          </NavLink>
          <NavLink
            to="/carrinho"
            onClick={() => setMenuAberto(false)}
            className="py-2 bg-yellow-500 text-secondary-900 rounded-lg text-center font-bold mt-2"
          >
            🛒 Carrinho ({totalItens})
          </NavLink>
        </nav>
      )}
    </header>
  );
}
