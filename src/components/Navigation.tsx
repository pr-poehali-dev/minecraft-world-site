import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="modern-nav sticky top-0 z-50 px-8 py-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-black glow-text floating-animation">
          CountryVanila Shop
        </div>
        <div className="flex gap-4">
          <Link
            to="/"
            className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
              location.pathname === "/"
                ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                : "text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 shadow-md hover:shadow-lg"
            }`}
          >
            Главная
          </Link>
          <Link
            to="/donate"
            className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
              location.pathname === "/donate"
                ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                : "text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 shadow-md hover:shadow-lg"
            }`}
          >
            Донат
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
