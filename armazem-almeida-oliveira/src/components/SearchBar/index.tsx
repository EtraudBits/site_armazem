import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate("/produtos");
      // Aqui poderia implementar busca real
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-4">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="🔍 Buscar produtos..."
          className="w-full px-4 py-2.5 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1.5 rounded-md hover:bg-primary-dark transition-colors font-semibold"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}
