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
    <section className="mb-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-6 glow-text floating-animation">
          🔥 Популярные товары
        </h2>
        <p className="text-slate-700 text-xl font-medium max-w-2xl mx-auto">
          Откройте для себя самые востребованные предметы нашей эксклюзивной
          коллекции
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
