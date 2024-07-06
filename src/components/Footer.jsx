const Footer = () => {
  return (
    <div className="footer">
      <div className="contactLinks">
        <ul>
          <li>
            <a href="mailto:stetourneau@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/st%C3%A9phanie-etourneau-42b7901b7/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/stephanieEt" target="_blank">
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
