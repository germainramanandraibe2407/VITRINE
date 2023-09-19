import * as Yup from "yup";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap-icons/font/bootstrap-icons.css";
import { yupResolver } from "@hookform/resolvers/yup";
import postEmailAbonne from "../../utils/service/mail";
import withReactContent from "sweetalert2-react-content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("N'oubliez pas votre email s'il vous plaît!!"),
  });
  // Custom Swal
  const MySwal = withReactContent(Swal);

  const [isSubmitting, setIsSubmitting] = useState(false);
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

  return (
    <div className="row">
      <div className="medium-12 columns">
        <footer class="site-footer" id="footer">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 col-12 me-auto mb-4">
                <h5 class="text-white mb-3">
                  Rejoignez notre Newsletter <br />
                </h5>
                <p class="text-white mb-3">
                  Recevez continuellement des informations nous concernant
                </p>

                <form
                  class="custom-form subscribe-form mt-4"
                  onSubmit={handleSubmit(postEmail)}
                >
                  <div class="row">
                    <div class="col-lg-8 col-md-8 col-7">
                      <input
                        type="email"
                        name="email"
                        id="subscribe-email"
                        pattern="[^ @]*@[^ @]*"
                        class="form-control"
                        placeholder="votre adresse e-mail"
                        required=""
                        {...register("email")}
                      />
                      <p className="text-danger">{errors.email?.message}</p>
                    </div>

                    <div class="col-lg-4 col-md-4 col-5">
                      <button type="submit" class="form-control" id="subscribe">
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
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div class="col-lg-3 col-12 mx-auto my-lg-0 my-4">
                <h5 class="text-white mb-3">Liens utiles</h5>

                <div class="row">
                  <div class="col-lg-5 col-md-6 col-12 my-2">
                    <ul class="footer-menu">
                      <li class="footer-menu-item">
                        <b class="footer-menu-link">></b> <b> </b>
                        <a
                          href="/presentation#Accueil"
                          class="footer-menu-link"
                        >
                          Accueil
                        </a>
                      </li>

                      <li class="footer-menu-item">
                        <b class="footer-menu-link">></b> <b> </b>
                        <a
                          href="/presentation#Apropos"
                          class="footer-menu-link"
                        >
                          A propos
                        </a>
                      </li>

                      <li class="footer-menu-item">
                        <b class="footer-menu-link">></b> <b> </b>
                        <a
                          href="/presentation#Service"
                          class="footer-menu-link"
                        >
                          Services
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-lg-6 col-md-6 col-12 my-2">
                    <ol class="footer-menu">
                      <li class="footer-menu-item">
                        <b class="footer-menu-link">></b> <b> </b>
                        <a
                          href="/presentation#Objectif"
                          class="footer-menu-link"
                        >
                          Objectif
                        </a>
                      </li>

                      <li class="footer-menu-item">
                        <b class="footer-menu-link">></b> <b> </b>
                        <a href="/presentation#Valeur" class="footer-menu-link">
                          Valeurs
                        </a>
                      </li>

                      <li class="footer-menu-item">
                        <b class="footer-menu-link">></b> <b> </b>
                        <a
                          href="/presentation#Contact"
                          class="footer-menu-link"
                        >
                          Contact
                        </a>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-12">
                <h5 class="text-white mb-3">HOAG Target</h5>
                <p class="text-white mb-1">
                  <FontAwesomeIcon icon="fa-duotone fa-house-building" />
                  <i class="bi bi-house-fill"> </i>
                  LOT: 141M Amboavahy
                </p>
                <p class="text-white mb-1">
                  <FontAwesomeIcon icon="fa-duotone fa-house-building" />
                  <i class="bi bi-telephone-fill"> </i>
                  +261 34 06 885 76
                </p>

                <p>
                  <a href="mailto:email@company.com" class="footer-link">
                    <i class="bi bi-envelope-fill"> </i>
                    contact@hoag-target.com
                  </a>
                </p>
              </div>

              <div class="site-footer-bottom mt-5">
                <div class="row pt-4">
                  <div class="col-lg-6 col-12">
                    <p class="copyright-text tooplate-link">
                      Copyright © 2022 HOAG Target{" "}
                    </p>
                  </div>

                  <div class="col-lg-3 col-12 ms-auto">
                    <ul class="social-icon">
                      <li>
                        <a
                          href="https://www.facebook.com/HoagTarget"
                          class="social-icon-link bi-facebook"
                        ></a>
                      </li>

                      {/* <li>
                          <a
                            href="https://twitter.com/search?q=tooplate"
                            class="social-icon-link bi-twitter"
                          ></a>
                        </li>

                        <li>
                          <a href="#" class="social-icon-link bi-instagram"></a>
                        </li>

                        <li>
                          <a href="#" class="social-icon-link bi-linkedin"></a>
                        </li>

                        <li>
                          <a href="#" class="social-icon-link bi-youtube"></a>
                        </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
