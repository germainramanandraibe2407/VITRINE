import React, { Component } from "react";

class Objectif extends Component {
  render() {
    return (
      <div className="row ">
        <div className="medium-12 columns">
          <section class="work section-padding" id="Objectif">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h2 class="mb-5 text-center">Objectifs</h2>
                </div>

                <div class="col-lg-6 col-12 mb-lg-0 mt-5">
                  <div class="work-thumb mb-4">
                    <div class="work-image-wrap">
                      <a href="images/conseil.jpg" class="image-popup">
                        <img
                          src="images/conseil.jpg"
                          class="img-fluid work-image"
                          alt="illustration objectif HOAG"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-12 col-lg-5 col-12 m-auto mt-4">
                  <div class="work-thumb mb-4">
                    <p class="title">
                      <b>Hoag Target s’est fixé pour objectif de :</b>
                    </p>

                    <ul>
                      <li>
                        Favoriser une dynamique entrepreneuriale et commerciale
                        entre des marchés jeunes et petits mais à fort
                        potentiel, et des espaces marchés plus grands, plus
                        exigeants, plus expérimenté
                      </li>
                      <br />
                      <li>
                        Contribuer à développer une culture commerciale alignée
                        aux exigences du marché mondial, et qui soit intégrée
                        progressivement dans les processus d’échanges
                        commerciaux au niveau local 
                      </li>
                      <br />
                      <li>
                        Dans cette approche, orienter les acteurs des secteurs
                        en demande vers une approche plus axée valeur ajoutée
                      </li>
                      <br />
                      <li>
                        Se positionner en support technique et conseil aux
                        opérateurs et filières en demande 
                      </li>
                    </ul>
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
export default Objectif;
