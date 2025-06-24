import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="modern-nav sticky top-0 z-50 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          CountryVanila Shop
        </div>
        <div className="flex gap-3">
          <Link
            to="/"
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              location.pathname === "/"
                ? "bg-indigo-100 text-indigo-700"
                : "text-slate-600 hover:text-indigo-600 hover:bg-slate-100"
            }`}
          >
            Главная
          </Link>
          <Link
            to="/donate"
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              location.pathname === "/donate"
                ? "bg-indigo-100 text-indigo-700"
                : "text-slate-600 hover:text-indigo-600 hover:bg-slate-100"
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
