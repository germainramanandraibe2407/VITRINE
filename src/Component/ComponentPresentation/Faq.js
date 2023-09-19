import "../../assets/css/css.css";

export default function Faq() {
  return (
    <div className="row">
      <div className="medium-12 columns">
        <section class="faq section-padding" id="FAQ">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-12 mb-lg-0 mt-5">
                <div class="faq-thumb mb-4">
                  <div class="faq-image-wrap">
                    <a href="images/contact.webp" class="image-popup">
                      <img
                        src="images/contact.webp"
                        class="img-fluid faq-image"
                        alt="illustration objectif HOAG"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-5 col-12 m-auto">
                <h3 class="mb-3">Questions fréquemment posées</h3>

                <div class="accordion" id="accordionGeneral">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordionGeneralOne"
                        aria-expanded="true"
                        aria-controls="accordionGeneralOne"
                      >
                        C'est quoi HOAG Target?
                      </button>
                    </h2>

                    <div
                      id="accordionGeneralOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div class="accordion-body">
                        <p class="large-paragraph">
                          <strong>HOAG Target</strong> est une entreprise de
                          conseil qui positionne la digitalisation parmi les
                          priorités fonctionnelles, spécifiquement au niveau
                          commercial. Et c’est dans cet esprit que Hoag Target
                          vise à apporter un accompagnement aux structures vers
                          une transition digitale dans l’utilisation d’outils de
                          Production, de Gestion, et globalement, d’outils axés
                          sur les Processus d’Exportations.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordionGeneralTwo"
                        aria-expanded="false"
                        aria-controls="accordionGeneralTwo"
                      >
                        Quels sont les services et produits disponibles ?
                      </button>
                    </h2>

                    <div
                      id="accordionGeneralTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div class="accordion-body">
                        <p class=" large-paragraph">
                          Nous disposons actuellemnt deux produits:{" "}
                          <a className="nav-link" href="/presentation#Offre">
                            HOAG Prime
                          </a>
                          et
                          <a className="nav-link" href="/presentation#Offre">
                            HOAG Ecommerce
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordionGeneralThree"
                        aria-expanded="false"
                        aria-controls="accordionGeneralThree"
                      >
                        Quelles sont nos valeurs?
                      </button>
                    </h2>

                    <div
                      id="accordionGeneralThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div class="accordion-body">
                        <p class="large-paragraph">
                          L'éthique, le respect de qualité, et la crédibilité
                          sont nos principaux valeurs
                        </p>
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
