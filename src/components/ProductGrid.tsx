import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      emoji: "⚔️",
      name: "Премиальный меч",
      price: 600,
      rarity: "legendary" as const,
      description:
        "Эксклюзивное оружие с уникальными характеристиками и стильным дизайном",
    },
    {
      emoji: "🛡️",
      name: "Защитный комплект",
      price: 2000,
      rarity: "epic" as const,
      description:
        "Полный набор защиты премиум-класса для максимальной безопасности",
    },
    {
      emoji: "💎",
      name: "Драгоценности",
      price: 800,
      rarity: "rare" as const,
      description: "Коллекция редких драгоценных камней высочайшего качества",
    },
    {
      emoji: "🧪",
      name: "Магическое зелье",
      price: 300,
      rarity: "rare" as const,
      description: "Уникальный эликсир с мощными свойствами усиления",
    },
    {
      emoji: "🏹",
      name: "Элитный лук",
      price: 1200,
      rarity: "epic" as const,
      description:
        "Профессиональное оружие дальнего боя с превосходной точностью",
    },
    {
      emoji: "🍎",
      name: "Целебное яблоко",
      price: 400,
      rarity: "common" as const,
      description: "Натуральный продукт с восстанавливающими свойствами",
    },
  ];

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          🔥 Популярные товары
        </h2>
        <p className="text-slate-600 text-lg">
          Откройте для себя самые востребованные предметы нашей коллекции
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
