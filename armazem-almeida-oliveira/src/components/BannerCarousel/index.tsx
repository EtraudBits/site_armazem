import { useState, useEffect } from "react";

const banners = [
  {
    id: 1,
    title: "🔨 Ferramentas em Promoção",
    subtitle: "Descontos de até 30% em toda linha de ferramentas",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1200&h=400&fit=crop",
    color: "from-blue-600 to-blue-800",
  },
  {
    id: 2,
    title: "🏗️ Materiais de Construção",
    subtitle: "Tudo que você precisa para sua obra com o melhor preço",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=400&fit=crop",
    color: "from-orange-600 to-orange-800",
  },
  {
    id: 3,
    title: "💡 Elétrica e Hidráulica",
    subtitle: "Produtos de qualidade para instalações profissionais",
    image:
      "https://images.unsplash.com/photo-1621905252472-123bffc52d39?w=1200&h=400&fit=crop",
    color: "from-secondary-700 to-secondary-900",
  },
];

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  return (
    <div className="flex justify-center mb-8">
      <div className="relative w-full max-w-5xl h-[300px] overflow-hidden rounded-2xl shadow-2xl group">
        {/* Banners */}
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner) => (
            <div key={banner.id} className="min-w-full h-full relative">
              {/* Imagem de fundo com overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${banner.image})` }}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-r ${banner.color} opacity-85`}
              />

              {/* Conteúdo */}
              <div className="relative h-full flex items-center justify-center text-center px-6">
                <div className="max-w-3xl">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-lg">
                    {banner.title}
                  </h2>
                  <p className="text-lg md:text-xl text-white font-semibold drop-shadow-md">
                    {banner.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botões de navegação */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
