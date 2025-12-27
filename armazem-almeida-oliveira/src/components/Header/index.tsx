import { Link, NavLink } from "react-router-dom";
import { useCarrinho } from "../../context/CarrinhoContext";
import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function Header() {
  const { itens } = useCarrinho();
  const totalItens = itens.reduce((acc, i) => acc + i.quantidade, 0);
  const [menuAberto, setMenuAberto] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Armazém Almeida Oliveira
        </Link>

        {isMobile ? (
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="text-2xl"
          >
            ☰
          </button>
        ) : (
          <nav className="flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-semibold underline" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/produtos"
              className={({ isActive }) =>
                isActive ? "font-semibold underline" : ""
              }
            >
              Produtos
            </NavLink>
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                isActive ? "font-semibold underline" : ""
              }
            >
              Sobre
            </NavLink>
            <NavLink
              to="/contato"
              className={({ isActive }) =>
                isActive ? "font-semibold underline" : ""
              }
            >
              Contato
            </NavLink>
            <NavLink to="/carrinho" className="relative">
              🛒
              {totalItens > 0 && (
                <span className="absolute -top-2 -right-3 bg-secondary text-white text-xs rounded-full px-2 py-0.5">
                  {totalItens}
                </span>
              )}
            </NavLink>
          </nav>
        )}
      </div>

      {isMobile && menuAberto && (
        <nav className="flex flex-col bg-primary px-6 py-4 gap-3 border-t border-orange-300">
          <NavLink to="/" onClick={() => setMenuAberto(false)}>
            Home
          </NavLink>
          <NavLink to="/produtos" onClick={() => setMenuAberto(false)}>
            Produtos
          </NavLink>
          <NavLink to="/sobre" onClick={() => setMenuAberto(false)}>
            Sobre
          </NavLink>
          <NavLink to="/contato" onClick={() => setMenuAberto(false)}>
            Contato
          </NavLink>
          <NavLink to="/carrinho" onClick={() => setMenuAberto(false)}>
            🛒 Carrinho ({totalItens})
          </NavLink>
        </nav>
      )}
    </header>
  );
}
