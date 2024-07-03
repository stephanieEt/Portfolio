import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <nav>
        <div
          className={`burger ${isOpen ? "open" : ""}`}
          onClick={handleToggle}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={isOpen ? "nav-active" : ""}>
          <NavLink to="/Apropos" onClick={() => setIsOpen(false)}>
            <li>A propos</li>
          </NavLink>
          <NavLink to="/Projets" onClick={() => setIsOpen(false)}>
            <li>Mes projets</li>
          </NavLink>
          <NavLink to="/Competences" onClick={() => setIsOpen(false)}>
            <li>Mes compétences</li>
          </NavLink>
          <NavLink to="/Contact" onClick={() => setIsOpen(false)}>
            <li>Contactez-moi</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
