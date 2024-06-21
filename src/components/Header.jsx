import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/">
        <Logo />
      </NavLink>
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
