import "../../assets/css/css.css";
import React, { Component } from "react";

export default function About() {
  return (
    <div className="row">
      <div className="medium-12 columns">
        <section class="about section-padding" id="Apropos">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-12 ms-lg-auto mb-5 mb-lg-0">
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      class="nav-link active"
                      id="nav-intro-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-intro"
                      type="button"
                      role="tab"
                      aria-controls="nav-intro"
                      aria-selected="true"
                    >
                      Présentation
                    </button>

                    <button
                      class="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Vision
                    </button>

                  </div>
                </nav>
              </div>

              <div class="col-12">
                <div class="tab-content" id="nav-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="nav-intro"
                    role="tabpanel"
                    aria-labelledby="nav-intro-tab"
                  >
                    <div class="row">
                      <div class="col-lg-6 col-12 mb-lg-0 mt-5">
                        <img
                          src="images/presentation.jpg"
                          class="img-fluid"
                          alt="presentation HOAG Target"
                        />
                      </div>

                      <div class="col-lg-5 col-12 m-auto mt-4">
                        <p>
                          HOAG est une galaxie en anneau constituée d’étoiles
                          bleues extrêmement brillantes et relativement jeunes.
                          La science explique l’existence de ces galaxies en
                          anneaux par la collision entre une galaxie jeune et
                          une galaxie plus grande.{" "}
                        </p>

                        <p>
                          Hoag a été choisie par analogie à de jeunes et petits
                          « marchés » comme Madagascar qui disposent d’un
                          potentiel intéressant à tous les niveaux, et qui sont
                          capables de créer des dynamiques exceptionnelles et
                          profitables avec des espaces marchés plus grands, plus
                          expérimentés ou plus exigeants, à condition de penser
                          « autrement » dans leur conception de gestion et de
                          l’exportation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div class="row">
                      <div class="col-lg-5 col-12 m-auto">
                        <h3 class="mb-3">Notre vision</h3>

                        <p>
                          Les récents événements sanitaires qui ont profondément
                          bouleversé le fonctionnement mondial (y compris au
                          niveau des échanges internationaux), ont forcé les
                          structures à se réinventer pour pouvoir rester à
                          flots.
                        </p>
                        <p>
                          C’est ainsi que Hoag Target positionne la
                          digitalisation parmi les priorités fonctionnelles,
                          notamment au niveau commercial. Et c’est dans cet
                          esprit que Hoag Target vise à apporter un
                          accompagnement aux structures vers une transition
                          digitale dans l’utilisation d’outils de Production, de
                          Gestion, et globalement, d’outils axés sur les
                          Processus d’Exportations.
                        </p>
                        <p>
                          Dans cet esprit d’innovation et d’adaptabilité
                          permanente, Hoag Target considère également un
                          paradigme nouveau, plus éthique, plus équitable,
                          toujours plus axée vers les valeurs ajoutées, et qui
                          soit réellement profitable pour les différents marchés
                          en interaction, quelle que soit leur taille, leur
                          niveau de croissance ou leurs exigences et besoins.
                        </p>
                        <p>
                          C’est pourquoi Hoag Target se positionne en support
                          des acteurs et filières dans cette transition pour la
                          mise en place d’une réelle culture d’échanges
                          commerciaux et d’exportation. Une culture basée sur un
                          poositionnement plus intelligent des marchés émergents
                          vers les marchés mieux installés et plus avancés.
                        </p>

                        <ul class="social-icon mt-lg-5 mt-3">
                          <li class="me-3">
                            <strong>Où nous trouver?</strong>
                          </li>

                          <li>
                            <a
                              href="https://www.facebook.com/HoagTarget"
                              class="social-icon-link bi-facebook"
                            ></a>
                          </li>
                        </ul>
                      </div>

                      <div class="col-lg-6 mt-5">
                        <img
                          src="images/avantage.jpg"
                          class="img-fluid"
                          alt="Vision HOAG Target"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
