import * as Yup from "yup";
import Login from "./login";
import Swal from "sweetalert2";
import "../../assets/css/css.css";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { yupResolver } from "@hookform/resolvers/yup";
import postEmailAbonne from "../../utils/service/mail";
import withReactContent from "sweetalert2-react-content";
import { logout } from "../../utils/service_hoag_prime/user/user";
import { getCurrentCompte } from "../../utils/service_hoag_prime/user/user";

export default function Navbar() {
  const MySwal = withReactContent(Swal);
  const [show, setShow] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("N'oubliez pas votre email s'il vous plaît!!"),
  });
  const postEmail = async (data) => {
    setIsSubmitting(true);
    await postEmailAbonne(data.email)
      .then((res) => {
        MySwal.fire({
          title: "Abonnement",
          text: res.data.message,
          icon: "success",
          confirmButtonText: "Ok",
        });
        setIsSubmitting(false);
      })
      .catch((err) => {
        MySwal.fire({
          title: "Oops",
          text: "Une erreur est survenue, veuillez réessayer",
          icon: "error",
          confirmButtonText: "Ok",
        });
        setIsSubmitting(false);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Login />
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <div className="row ">
      <div className="medium-12 columns">
        <nav className="navbar fixed-top navbar-expand-lg">
          <div className="container">
            <a href="/" className="navbar-brand">
              <img
                src="logo_hoag.png"
                width="80"
                height="40"
                alt="Logo HOAG Target"
              ></img>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav  ">
                <li className="nav-item">
                  <a className="nav-link" href="/presentation#Accueil">
                    Accueil
                  </a>
                </li>

                {/* {getCurrentCompte() && getCurrentCompte().token && (
                  <li className="nav-item">
                    <a className="nav-link" href="/presentation#Annuaire">
                      Annuaire
                    </a>
                  </li>
                )} */}

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/presentation#Apropos"
                    style={{ size: "8px" }}
                  >
                    À Propos
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/presentation#Service">
                    Services
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/presentation#Objectif">
                    Objectifs
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/presentation#Valeur">
                    Valeurs
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/presentation#Offre">
                    Hoag Prime
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/presentation#Contact">
                    Contact
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/presentation#FAQ">
                    FAQs
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://hoagtarget.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Blog
                  </a>
                </li>

                <li className="nav-item">
                  <div className="nav-btn">
                    <Button
                      className="btn btn-warning social-icon-link bi-bell "
                      variant="primary"
                      onClick={handleShow}
                    >
                      Abonnez-vous
                    </Button>
                  </div>
                </li>

                <li className="nav-item">
                  <div className="nav-btn">
                    {getCurrentCompte() && getCurrentCompte().token ? (
                      <Button
                        className="btn btn-primary "
                        variant="primary"
                        onClick={() => {
                          MySwal.fire({
                            title: "Êtes-vous sûr se déconnecter?",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            cancelButtonText: "Non",
                            confirmButtonText: "Oui",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              logout();
                              // window.location.href = "/presentation#Objectif";
                              window.location.reload();
                            }
                          });
                        }}
                      >
                        Déconnexion
                      </Button>
                    ) : (
                      <Button
                        className="btn btn-primary "
                        variant="primary"
                        onClick={() => setModalShow(true)}
                      >
                        Se connecter
                      </Button>
                    )}

                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </div>
                </li>

                <Modal className="font-link" show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title className="modal-title">
                      Abonnez-vous maintenant à notre newsletter
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form onSubmit={handleSubmit(postEmail)}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Votre adresse mail</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="name@example.com"
                          autoFocus
                          {...register("email")}
                        />
                        <p className="text-danger">{errors.email?.message}</p>
                      </Form.Group>
                      <div className="d-flex justify-content-end">
                        <Button type="submit" variant="warning">
                          {isSubmitting && (
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />
                          )}
                          S'abonner
                        </Button>{" "}
                      </div>
                    </Form>
                  </Modal.Body>
                </Modal>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
