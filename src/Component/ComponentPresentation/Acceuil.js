import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../../assets/css/css.css";
export default function Acceuil() {
  const [modalShow, setModalShow] = useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="text-center">
          <p className="font-link modal-voir-plus ">
            👉👉 Pour être en contact permanent avec nous, n'oubliez pas de vous
            abonner à notre newsletter 😊😊!!!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={((window.location.href = "#Objectif"), props.onHide)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div className="row ">
      <div className="medium-12 column">
        <section
          class="hero d-flex justify-content-center align-items-center"
          id="Accueil"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-12">
                <div class="heroText">
                  <h1 class="text-warning mb-lg-5">
                    Bienvenue
                    <br />
                    chez HOAG Target
                  </h1>
                  <p class="p warning">
                    Votre partenaire pour votre réussite commerciale
                  </p>
                  <Button
                    variant="primary"
                    class="btn btn-warning"
                    onClick={() => setModalShow(true)}
                  >
                    Voir plus
                  </Button>

                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="overlay"></div>
        </section>
      </div>
    </div>
  );
}
