import { createContext, useContext, useState, ReactNode } from "react";
import { Produto } from "../types/produto";

interface ItemCarrinho extends Produto {
  quantidade: number;
}

interface CarrinhoContextData {
  itens: ItemCarrinho[];
  adicionar: (produto: Produto) => void;
  remover: (id: number) => void;
  limpar: () => void;
}

const CarrinhoContext = createContext<CarrinhoContextData>(
  {} as CarrinhoContextData
);

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);

  const adicionar = (produto: Produto) => {
    setItens((prev) => {
      const existente = prev.find((item) => item.id === produto.id);
      if (existente) {
        return prev.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });
  };

  const remover = (id: number) =>
    setItens((prev) => prev.filter((item) => item.id !== id));

  const limpar = () => setItens([]);

  return (
    <CarrinhoContext.Provider value={{ itens, adicionar, remover, limpar }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}
