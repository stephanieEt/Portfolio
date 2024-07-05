import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Assurez-vous que Bootstrap est importé

const Contact = () => {
  return (
    <div className="container mt-5 contact-page">
      <h1 className="text-center mb-4">Contactez-moi</h1>
      <div className="card p-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Téléphone</h5>
          <p className="card-text">06/74/07/06/70</p>
        </div>
        <div className="card-body">
          <h5 className="card-title">Adresse postale</h5>
          <p className="card-text">Brétignooles sur mer</p>
        </div>
        <div className="card-body">
          <h5 className="card-title">Email</h5>
          <p className="card-text">
            <a href="mailto:stetourneau@laposte.net">stetourneau@laposte.net</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
