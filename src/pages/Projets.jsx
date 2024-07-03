import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

const Projets = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container-projet container-page">
      <div className="row">
        <div className="col-md-6 card-img-projet">
          <a href="#" onClick={handleShow}>
            <img
              src="./src/assets/images/booki.png"
              className="img-thumbnail"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-6 card-img-projet">
          <a href="#" target="_blank">
            <img
              src="./src/assets/images/ohmyfood.png"
              className="img-thumbnail"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-6 card-img-projet">
          <a href="#" target="_blank">
            <img
              src="./src/assets/images/sophie.png"
              className="img-thumbnail"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-6 card-img-projet">
          <a href="#" target="_blank">
            <img
              src="./src/assets/images/kasa.png"
              className="img-thumbnail"
              alt=""
            />
          </a>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};
export default Projets;
