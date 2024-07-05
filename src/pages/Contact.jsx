const Contact = () => {
  return (
    <div className="container-fluid mt-5 contact-page">
      <h1 className="text-center mb-4">Contactez-moi</h1>
      <div className="orbit">
        <div className="orbit-item">
          <div className="card p-4 shadow-sm">
            <div className="card-body">
              <h4 className="card-title">Téléphone:</h4>
              <p className="card-text">06/74/07/06/70</p>
            </div>
          </div>
        </div>
        <div className="orbit-item">
          <div className="card p-4 shadow-sm">
            <div className="card-body">
              <h4 className="card-title">Adresse postale:</h4>
              <p className="card-text">85470 Brétignolles sur mer</p>
            </div>
          </div>
        </div>
        <div className="orbit-item">
          <div className="card p-4 shadow-sm">
            <div className="card-body">
              <h4 className="card-title">Email:</h4>
              <p className="card-text">
                <a href="mailto:stetourneau@laposte.net">
                  stetourneau@laposte.net
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
