import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.nom = formData.nom ? "" : "Ce champ est requis.";
    tempErrors.prenom = formData.prenom ? "" : "Ce champ est requis.";
    tempErrors.email = formData.email ? "" : "Ce champ est requis.";
    tempErrors.message = formData.message ? "" : "Ce champ est requis.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Formulaire soumis avec succès!");
      // Envoyer les données du formulaire au serveur ici
      // Réinitialiser les champs du formulaire
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="contact">
      <div className="container container-md pt-3 pb-5">
        <form onSubmit={handleSubmit}>
          <h2>Contactez-moi</h2>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">
              Nom:
            </label>
            <input
              type="text"
              className="form-control"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
            {errors.nom && <span className="error">{errors.nom}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Prénom:
            </label>
            <input
              type="text"
              className="form-control"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              required
            />
            {errors.prenom && <span className="error">{errors.prenom}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.prenom && <span className="error">{errors.prenom}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Message:
            </label>
            <textarea
              type="message"
              className="form-control"
              rows="5"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.prenom && <span className="error">{errors.prenom}</span>}
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
