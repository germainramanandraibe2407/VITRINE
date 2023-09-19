import React, { useState } from "react";
import "../../assets/css/progressBar.css";
import Modal from "react-bootstrap/Modal";
import FormlaireCoaching from "./FormlaireCoaching";
import Button from "react-bootstrap/Button";

export default function Coaching() {
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
          <FormlaireCoaching />
        </Modal.Body>
      </Modal>
    );
  }
  
  return (
    <div className="row ">

      <div class="Coaching">
      <p style={{"font-size":"110%"}}>Services disponibles</p>
      </div>

        <div class="card text-center">
        {/* <div class="card-header">
            Featured
        </div> */}
        <div class="card-body">
            <h5 class="card-title">Demande de coaching</h5>
            <p class="card-text">Cliquez sur le bouton ci-dessous si vous voulez faire un coaching</p>
            <Button
                    variant="primary"
                    class="btn btn-warning"
                    onClick={() => setModalShow(true)}
                  >Demander une scéance de coaching</Button>

                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
        </div>
        
        {/* <div class="card-footer text-muted">
            2 days ago
        </div> */}
        </div>

        <div class="card text-center">
        {/* <div class="card-header">
            Featured
        </div> */}
        <div class="card-body">
            <h5 class="card-title">Consulter le tableau de bord commercial</h5>
            <p class="card-text">Cliquez sur le bouton ci-dessous pour consulter le tableau de bord commercial</p>
            <Button
                    variant="primary"
                    class="btn btn-warning"
                  >Consulter le tableau de bord commercial</Button>

            
        </div>
        
        {/* <div class="card-footer text-muted">
            2 days ago
        </div> */}
        </div>

        <div class="card text-center">
        {/* <div class="card-header">
            Featured
        </div> */}
        <div class="card-body">
            <h5 class="card-title">Consulter l'annuaire</h5>
            <p class="card-text">Cliquez sur le bouton ci-dessous pour consulter l'annuaire</p>
            <a href="/annuaire" target="blank"><Button
                    variant="primary"
                    class="btn btn-warning"
                  >Consulter l'annuaire</Button>
            </a>
        </div>
        
        {/* <div class="card-footer text-muted">
            2 days ago
        </div> */}
        </div>

        <div class="card text-center">
        {/* <div class="card-header">
            Featured
        </div> */}
        <div class="card-body">
            <h5 class="card-title">Hébergement et crétion de site vitrine</h5>
            <p class="card-text">Cliquez sur le bouton ci-dessous pour avoir accès à l'hébergemnt et la création du site vitrine</p>
            <a href="/annuaire" target="blank"><Button
                    variant="primary"
                    class="btn btn-warning"
                  >Créer le site vitrine</Button>
            </a>
        </div>
        
        {/* <div class="card-footer text-muted">
            2 days ago
        </div> */}
        </div>
    </div>
    
  );
}
