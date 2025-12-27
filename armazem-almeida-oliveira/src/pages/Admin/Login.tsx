import { useState } from "react";

interface Props {
  onLogin: () => void;
}

export default function Login({ onLogin }: Props) {
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (senha === "admin123") {
      localStorage.setItem("auth", "true");
      onLogin();
    } else {
      setErro("Senha incorreta.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold text-primary mb-6">
        Área Administrativa
      </h1>
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md p-6 rounded-md w-80 space-y-4"
      >
        <label className="block">
          <span className="text-neutral">Senha de acesso:</span>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </label>
        {erro && <p className="text-red-500 text-sm">{erro}</p>}
        <button
          type="submit"
          className="w-full bg-secondary text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
