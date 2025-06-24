interface ProductCardProps {
  emoji: string;
  name: string;
  price: number;
  rarity: "common" | "rare" | "epic" | "legendary";
  description: string;
}

const ProductCard = ({
  emoji,
  name,
  price,
  rarity,
  description,
}: ProductCardProps) => {
  const rarityStyles = {
    common: "from-slate-200 to-slate-300 text-slate-800 shadow-md",
    rare: "from-blue-200 to-blue-300 text-blue-800 shadow-lg shadow-blue-200",
    epic: "from-purple-200 to-purple-300 text-purple-800 shadow-lg shadow-purple-200",
    legendary:
      "from-amber-200 to-amber-300 text-amber-800 shadow-lg shadow-amber-200",
  };

  const rarityBorders = {
    common: "border-slate-300 hover:border-slate-400",
    rare: "border-blue-300 hover:border-blue-400",
    epic: "border-purple-300 hover:border-purple-400",
    legendary: "border-amber-300 hover:border-amber-400",
  };

  return (
    <div
      className={`modern-card group cursor-pointer border-2 ${rarityBorders[rarity]} hover:border-opacity-80 relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="text-center relative z-10">
        <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-500 floating-animation">
          {emoji}
        </div>
        <div
          className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 bg-gradient-to-r ${rarityStyles[rarity]} border`}
        >
          {rarity.toUpperCase()}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-indigo-700 transition-colors duration-300">
          {name}
        </h3>
        <p className="text-slate-600 text-base mb-8 leading-relaxed">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-black glow-text">{price} ₽</span>
          <button className="bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1">
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
