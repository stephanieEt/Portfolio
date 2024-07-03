import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contactLinks">
        <ul>
          <li>
            <a href="#">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <h3>Stéphanie Etourneau</h3>
      <p>© 2024 || Tous droits réservés</p>
    </div>
  );
};
export default Footer;
