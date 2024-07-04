import { Navbar, Nav } from "react-bootstrap";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      bg="light"
      expand="md"
      className="header sticky-top container-header"
    >
      <NavLink to="/" className="navbar-brand">
        <Logo />
      </NavLink>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ml-auto">
          <NavLink className="nav-link" to="/Apropos">
            A propos
          </NavLink>
          <NavLink className="nav-link" to="/Projets">
            Mes projets
          </NavLink>
          <NavLink className="nav-link" to="/Competences">
            Mes compétences
          </NavLink>
          <NavLink className="nav-link" to="/Contact">
            Contactez-moi
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

/*
/* <nav>
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
      </nav>*/
