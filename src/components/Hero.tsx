const Hero = () => {
  return (
    <section className="text-center py-16 mb-12">
      <div className="minecraft-card max-w-4xl mx-auto">
        <h1 className="text-4xl font-minecraft text-minecraft-gold mb-6 animate-minecraft-bounce">
          🗡️ МАГАЗИН РЕСУРСОВ MINECRAFT 🗡️
        </h1>
        <p className="text-lg text-gray-200 mb-8 leading-relaxed">
          Лучшие предметы для выживания и PvP
        </p>
        <div className="flex justify-center gap-4">
          <button className="minecraft-button bg-minecraft-gold text-black">
            💎 Премиум товары
          </button>
          <button className="minecraft-button">⚔️ Оружие</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
