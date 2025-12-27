import AppRoutes from "./routes";
import { CarrinhoProvider } from "./context/CarrinhoContext";

export default function App() {
  return (
    <CarrinhoProvider>
      <AppRoutes />
    </CarrinhoProvider>
  );
}
