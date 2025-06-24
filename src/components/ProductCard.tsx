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
    common: "from-slate-100 to-slate-200 text-slate-700",
    rare: "from-blue-100 to-blue-200 text-blue-700",
    epic: "from-purple-100 to-purple-200 text-purple-700",
    legendary: "from-amber-100 to-amber-200 text-amber-700",
  };

  const rarityBorders = {
    common: "border-slate-200",
    rare: "border-blue-200",
    epic: "border-purple-200",
    legendary: "border-amber-200",
  };

  return (
    <div
      className={`modern-card group cursor-pointer ${rarityBorders[rarity]} hover:border-opacity-60`}
    >
      <div className="text-center">
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {emoji}
        </div>
        <div
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-gradient-to-r ${rarityStyles[rarity]}`}
        >
          {rarity.toUpperCase()}
        </div>
        <h3 className="text-xl font-bold mb-3 text-slate-800">{name}</h3>
        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {price} ₽
          </span>
          <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
