import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="col-md-6 card-img-projet">
        <a href="#" onClick={handleShow}>
          <img src={data.picture} className="img-thumbnail" alt={data} />
        </a>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img src={data.picture} className="img-thumbnail" alt={data} />
          <h1 className="text-center">{data.name}</h1>
          <p>{data.description}</p>
          <p>{data.langages}</p>
        </Modal.Body>
        <Modal.Footer className="container-link-projet">
          <Link className="btn btn-primary" to={data.url} target="_blank">
            Voir le site
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

Card.protTypes = {
  data: PropTypes.object.isRequired,
};
export default Card;
