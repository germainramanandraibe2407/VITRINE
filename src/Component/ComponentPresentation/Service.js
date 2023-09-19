import React, { Component } from "react";

class Service extends Component {
  render() {
    return (
      <div className="row ">
        <div className="medium-12 columns">
          <section class="services section-padding" id="Service">
            <div class="container">
              <div class="row">
                <h2 class="mb-5 text-center">Services</h2>
                <div class="col-lg-4 col-12 d-flex bg-primary p-0">
                  <img
                    src="images/conception.png"
                    class="img-fluid services-image"
                    alt="illustration service offert par HOAG Target"
                  />
                </div>

                <div class="col-lg-4 col-12 p-0">
                  <div class="services-info custom-icon-left paddingText">
                    <h4 class="">
                      <a className="nav-link" href="/presentation#Offre">
                        Mise à disposition d’outils intégrés{" "}
                      </a>
                    </h4>

                    <p class="mb-4">
                      (commerciaux, marketing, communication, prospection, prise
                      de décision, etc.)
                    </p>
                  </div>
                </div>

                <div class="col-lg-4 col-12 d-flex bg-warning p-0">
                  <img
                    src="images/transfert.jpg"
                    class="img-fluid services-image"
                    alt="illustration service offert par HOAG Target"
                  />
                </div>

                <div class="col-lg-4 col-12 p-0 order-lg-0 order-sm-5">
                  <div class="services-info custom-icon-right paddingText order-lg-0 order-sm-2">
                    <h4 class="">Transfert</h4>

                    <p class="mb-4">
                      Le transfert d'informations, d'outils technologiques, de
                      process de digitalisation, et tout type de transfert
                      d'outils ou d'information liée aux objectifs de la
                      structure{" "}
                    </p>
                  </div>
                </div>

                <div class="col-lg-4 col-12 d-flex bg-success p-0 order-lg-0 order-sm-4">
                  <img
                    src="images/ecommerce.webp"
                    class="img-fluid services-image"
                    alt="illustration service offert par HOAG Target"
                  />
                </div>

                <div class="col-lg-4 col-12 p-0 ">
                  <div class="services-info custom-icon-top paddingText">
                    <h4 class="">HOAG Ecommerce</h4>

                    <p class="mb-4 ">
                      L'endroit idéal pour vendre et acheter à un meilleur
                      rapport Qualité-Prix des produits et des <br />
                      articles de MADAGASCAR
                    </p>

                    {/* <a class="custom-btn custom-bg-dark btn" href="#">
                      Voir le site ecommerce
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default Service;
