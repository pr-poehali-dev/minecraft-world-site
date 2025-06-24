import Navigation from "@/components/Navigation";

const Donate = () => {
  const donatePackages = [
    {
      name: "Стартовый пакет",
      price: 99,
      items: ["10 алмазов", "Железная броня", "Стак еды"],
      emoji: "📦",
    },
    {
      name: "Премиум пакет",
      price: 299,
      items: ["Алмазный меч", "32 алмаза", "Зелья силы x5"],
      emoji: "💎",
    },
    {
      name: "VIP пакет",
      price: 599,
      items: ["Незеритовое снаряжение", "64 алмаза", "Все зелья"],
      emoji: "👑",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-minecraft text-minecraft-gold mb-4">
            💰 ДОНАТ ПАКЕТЫ
          </h1>
          <p className="text-lg text-gray-200">
            Поддержи сервер и получи крутые награды!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {donatePackages.map((pkg, index) => (
            <div key={index} className="minecraft-card text-center">
              <div className="text-6xl mb-4">{pkg.emoji}</div>
              <h3 className="text-2xl font-minecraft text-minecraft-gold mb-4">
                {pkg.name}
              </h3>
              <div className="text-3xl font-minecraft text-white mb-6">
                {pkg.price} ₽
              </div>
              <ul className="text-gray-300 mb-6 space-y-2">
                {pkg.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm">
                    ✓ {item}
                  </li>
                ))}
              </ul>
              <button className="minecraft-button bg-minecraft-gold text-black w-full">
                Купить пакет
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Donate;
