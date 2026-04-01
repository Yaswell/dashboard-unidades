import { LayoutDashboard, Globe, Menu, X, BarChart3 } from "lucide-react";
import { useState } from "react";
import "./NavBar.css";
type Props = {
  onNavigate: (url: string) => void;
  currentUrl: string;
};

function Navbar({ onNavigate, currentUrl }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "Unidades",
      url: "inicio",
      icon: <LayoutDashboard size={18} />,
    },
    {
      name: "Metas de Unidad",
      url: "https://yaswell.github.io/dashboard-metas/",
      icon: <BarChart3 size={18} />,
    },
    {
      name: "Conversos Recientes",
      url: "https://yaswell.github.io/proyecto-estaca-villa-mella/",
      icon: <Globe size={18} />,
    },
  ];

  const handleNav = (url: string) => {
    onNavigate(url);
    setIsOpen(false);
  };

  // 💡 Lógica para obtener el nombre de la página actual
  const currentPage = navLinks.find((link) => link.url === currentUrl);
  const pageTitle = currentPage ? currentPage.name : "Unidades";

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div
          className="nav-logo"
          onClick={() => handleNav("inicio")}
          style={{ cursor: "pointer" }}
        >
          <span>
            Estaca Villa Mella <strong>|</strong> <b>{pageTitle}</b>
          </span>
        </div>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleNav(link.url)}
                className={`nav-btn ${currentUrl === link.url ? "active" : ""}`}
              >
                {link.icon}
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        <button className="nav-mobile-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <ul className="nav-mobile-menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleNav(link.url)}
                className="nav-mobile-link"
              >
                {link.icon}
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
