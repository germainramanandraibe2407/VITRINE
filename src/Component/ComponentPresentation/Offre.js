import React, { useState } from "react";
import "../../assets/css/Offre.css";
import Modal from "react-bootstrap/Modal";
import Signup from "../HoagTarget/PersonalDetails";

export default function Offre() {
  const [modalShow, setModalShow] = useState(false);
  // STATE de répresentation de member types
  // {
  //   1 : "BASIC",
  //   2 : "SILVER",
  //   3 : "GOLD",
  //   4 : "PREMIUM"
  // }
  const [id_membertype, setId_membertype] = useState();

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Body className="text-center">
            <Signup id_membertype={props.id_membertype} />
          </Modal.Body>
        </Modal.Header>
      </Modal>
    );
  }
  return (
    <div className="row ">
      <div className="medium-12 columns">
        <section class="offre section-padding" id="Offre">
          <div class="col-12">
            <h2 class="mb-5 text-center">
              Vos avantages d'être un membre HOAG Prime
            </h2>
          </div>
          <div className="wrapper">
            <div className="package">
              <div className="name">Basic</div>
              <div className="price">0 Ar</div>
              <div className="trial">Complètement gratuit</div>
              <hr />
              <ul>
                <li>
                  Inscription et utilisation de la plateforme HOAG ECOMMERCE
                </li>
                <li>Outils connexes</li>
              </ul>
              <button
                type="button"
                class="btn btn-primary mb-2"
                onClick={() => {
                  setModalShow(true);
                  setId_membertype(1);
                }}
              >
                S'inscrire
              </button>
              <MyVerticallyCenteredModal
                id_membertype={id_membertype}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
            <div className="package brilliant">
              <div className="name" style={{ color: "#C0C0C0" }}>
                Silver
              </div>
              <div className="price">95 000 Ar</div>
              <div className="trial">
                Abonnement gratuit 2 mois après inscription
              </div>
              <hr />
              <ul>
                <li>Services BASIC</li>
                <li>Création et hébergement d'un Site web vitrine </li>
                <li>Une séance gratuite mensuelle de Coaching par groupe</li>

                <li>
                  Configuration et personnalisation gratuite d'un logiciel de
                  Gestion clientèle
                </li>
                <li>
                  Configuration et personnalisation gratuite d'un logiciel de
                  Gestion commerciale
                </li>
                <li>
                  Mise à la disposition d`un Tableau de bord commercial
                  consultable sur web
                </li>
              </ul>
              <button
                type="button"
                class="btn btn-primary mb-2"
                onClick={() => {
                  setModalShow(true);
                  setId_membertype(2);
                }}
              >
                S'inscrire
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
