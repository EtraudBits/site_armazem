import { useState, useEffect } from "react";
import Login from "./Login";
import Painel from "./Painel";

export default function Admin() {
  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth === "true") setAutenticado(true);
  }, []);

  return autenticado ? (
    <Painel />
  ) : (
    <Login onLogin={() => setAutenticado(true)} />
  );
}
