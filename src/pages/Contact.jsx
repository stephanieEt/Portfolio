const Contact = () => {
  return (
    <div className="background">
      <div className="d-flex justify-content-center align-items-center container-page">
        <div className="contact-info">
          <h1>Contactez-moi</h1>
          <div className="info">
            <p>
              <strong>Téléphone:</strong>{" "}
              <a href="tel:0674070670">06-74-07-06-70</a>
            </p>
            <p>
              <strong>Adresse:</strong> 85470 Brétignolles sur mer
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:stetourneau@laposte.net">
                stetourneau@laposte.net
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
