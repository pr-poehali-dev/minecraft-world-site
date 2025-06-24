const Hero = () => {
  return (
    <section className="text-center py-24 mb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/50 via-purple-100/50 to-pink-100/50 rounded-3xl"></div>
      <div className="modern-card max-w-5xl mx-auto animate-fade-in relative z-10 pulse-glow">
        <div className="floating-animation">
          <h1 className="text-6xl md:text-7xl font-black glow-text mb-8 leading-tight">
            ✨ CountryVanila Shop ✨
          </h1>
        </div>
        <p className="text-2xl text-slate-700 mb-10 leading-relaxed max-w-3xl mx-auto font-medium">
          Откройте для себя невероятную коллекцию премиальных товаров с
          эксклюзивными предложениями
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <button className="modern-button text-lg">
            💎 Премиум коллекция
          </button>
          <button className="bg-white/80 backdrop-blur-sm border-3 border-indigo-300 text-indigo-700 font-bold px-8 py-4 rounded-2xl hover:bg-indigo-50 hover:border-indigo-400 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-110 text-lg">
            🔥 Популярное
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
