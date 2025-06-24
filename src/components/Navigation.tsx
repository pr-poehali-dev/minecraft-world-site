import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="minecraft-nav p-4 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-minecraft text-white">
          ⚔️ MineCraft Shop
        </div>
        <div className="flex gap-4">
          <Link
            to="/"
            className={`minecraft-button ${
              location.pathname === "/" ? "bg-minecraft-gold text-black" : ""
            }`}
          >
            Главная
          </Link>
          <Link
            to="/donate"
            className={`minecraft-button ${
              location.pathname === "/donate"
                ? "bg-minecraft-gold text-black"
                : ""
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
