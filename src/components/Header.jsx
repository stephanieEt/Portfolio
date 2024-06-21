import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Initiales de Stéphanie Etourneau" />
      <nav>
        <ul>
          <NavLink to="/Apropos">
            <li>A propos</li>
          </NavLink>
          <NavLink to="/Projets">
            <li>Mes projets</li>
          </NavLink>
          <NavLink to="/Compétences">
            <li>Mes compétences</li>
          </NavLink>
          <NavLink to="/Contact">
            <li>Contactez-moi</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
