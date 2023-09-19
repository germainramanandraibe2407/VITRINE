import React, { Component } from "react";

class Valeur extends Component {
  render() {
    return (
      <div className="row ">
        <div className="medium-12 columns">
          <section class="pricing section-padding" id="Valeur">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h2 class="text-white mb-5 text-center">Valeurs</h2>
                </div>

                <div class="">
                  <div class="pricing-plan bg-white">
                    <div class="d-flex flex-wrap align-items-center pricing-header">
                      <i class="pricing-icon bi-person"></i>

                      <div class="pricing-name">
                        <h4>Ethique</h4>
                      </div>
                    </div>

                    <div class="pricing-body">
                      <p class="p_pricing">
                        Nous considérons que tout type de relation dépourvu
                        d’éthique est non seulement long, difficile à gérer,
                        mais surtout improductif à termes. Nous croyons en la
                        possibilité d’une culture de transactions commerciales
                        emprunte d’une certaine valeur éthique.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="mt-5">
                  <div class="pricing-plan border-0 bg-white shadow-lg h-76 ">
                    <div class="d-flex flex-wrap align-items-center pricing-header">
                      <i class="pricing-icon bi-briefcase"></i>

                      <div class="pricing-name">
                        <h4>Respect de qualité</h4>
                      </div>
                    </div>

                    <div class="pricing-body">
                      <p class="p_pricing">
                        Une évolution en termes de marchés passe obligatoirement
                        par un alignement aux exigences qualitatives récurrentes
                        au niveau mondial. La qualité relève d’un véritable
                        processus basé sur un travail de fond, de rigueur et de
                        régularité, et ce, à chaque niveau et détail du
                        processus.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="mt-5">
                  <div class="pricing-plan border-0 bg-white shadow-lg  mb-5">
                    <div class="d-flex flex-wrap align-items-center pricing-header ">
                      <i class="pricing-icon bi-briefcase"></i>

                      <div class="pricing-name">
                        <h4>Crédibilité</h4>
                      </div>
                    </div>

                    <div class="pricing-body">
                      <p class="p_pricing">
                        Des informations qualitativement fiables sont vitales
                        dans toute forme de développement, d’autant plus
                        importantes qu’elles sont les clés d’une prise de
                        décision pertinente et avisée. Dans cet esprit, en vue
                        de permettre et de favoriser une qualité d’échanges
                        profitables et porteurs de croissance, la fiabilité et
                        la crédibilité des informations partagées entre les
                        différentes parties est indispensable et nous déployons
                        toutes les ressources disponibles pour la vérification
                        des informations, la normalisation des services de vente
                        et l’assurance d’une qualité satisfaisante des services
                        et articles proposés le site.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="overlay dark-overlay"></div>
          </section>
        </div>
      </div>
    );
  }
}
export default Valeur;
