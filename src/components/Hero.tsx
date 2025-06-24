const Hero = () => {
  return (
    <section className="text-center py-20 mb-16">
      <div className="modern-card max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
          ✨ Современный магазин ✨
        </h1>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
          Откройте для себя удивительную коллекцию премиальных товаров
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="modern-button">💎 Премиум коллекция</button>
          <button className="bg-white border-2 border-indigo-200 text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-all duration-300">
            🔥 Популярное
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
