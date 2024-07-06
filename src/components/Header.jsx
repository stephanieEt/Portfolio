import { Navbar, Nav } from "react-bootstrap";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [navExpanded, setNavExpanded] = useState(false);

  const handleCollapse = () => {
    setNavExpanded(false);
  };
  return (
    <Navbar
      bg="light"
      expand="md"
      className="header sticky-top container-header"
      onToggle={() => setNavExpanded(!navExpanded)}
      expanded={navExpanded}
    >
      <NavLink to="/" className="navbar-brand">
        <Logo />
      </NavLink>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ml-auto">
          <NavLink className="nav-link" to="/Apropos" onClick={handleCollapse}>
            A propos
          </NavLink>
          <NavLink className="nav-link" to="/Projets" onClick={handleCollapse}>
            Mes projets
          </NavLink>
          <NavLink
            className="nav-link"
            to="/Competences"
            onClick={handleCollapse}
          >
            Mes compétences
          </NavLink>
          <NavLink className="nav-link" to="/Contact" onClick={handleCollapse}>
            Contactez-moi
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
