import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      emoji: "⚔️",
      name: "Незеритовый меч",
      price: 1500,
      rarity: "legendary" as const,
      description: "Самое мощное оружие в игре. Урон 8 единиц + прочность 2031",
    },
    {
      emoji: "🛡️",
      name: "Алмазная броня",
      price: 2000,
      rarity: "epic" as const,
      description: "Полный комплект алмазной защиты. Защита 20 единиц",
    },
    {
      emoji: "💎",
      name: "Стак алмазов",
      price: 800,
      rarity: "rare" as const,
      description: "64 алмаза для крафта лучшего снаряжения",
    },
    {
      emoji: "🧪",
      name: "Зелье силы II",
      price: 300,
      rarity: "rare" as const,
      description: "Увеличивает урон на 260% на 1:30 минуты",
    },
    {
      emoji: "🏹",
      name: "Лук Бесконечность",
      price: 1200,
      rarity: "epic" as const,
      description: "Зачарованный лук с бесконечными стрелами",
    },
    {
      emoji: "🍎",
      name: "Золотое яблоко",
      price: 400,
      rarity: "common" as const,
      description: "Восстанавливает здоровье и дает эффекты",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-minecraft text-center mb-8 text-minecraft-gold">
        🔥 ПОПУЛЯРНЫЕ ТОВАРЫ
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
