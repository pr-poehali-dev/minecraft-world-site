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
  const rarityColors = {
    common: "text-gray-300",
    rare: "text-blue-400",
    epic: "text-purple-400",
    legendary: "text-minecraft-gold",
  };

  const rarityBorders = {
    common: "border-gray-500",
    rare: "border-blue-500",
    epic: "border-purple-500",
    legendary: "border-minecraft-gold",
  };

  return (
    <div
      className={`minecraft-card hover:scale-105 transition-transform duration-200 ${rarityBorders[rarity]}`}
    >
      <div className="text-center">
        <div className="text-6xl mb-4">{emoji}</div>
        <h3 className={`text-xl font-minecraft mb-2 ${rarityColors[rarity]}`}>
          {name}
        </h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-minecraft-gold font-minecraft text-lg">
            {price} ₽
          </span>
          <button className="minecraft-button bg-minecraft-green text-white text-sm">
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
