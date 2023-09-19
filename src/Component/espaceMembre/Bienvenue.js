import React from "react";
import "../../assets/css/progressBar.css";

export default function Bienvenue() {
  
  return (
    <div className="row ">
        <div class="Bienvenue">
            <p style={{"font-size":"150%"}}>Bienvenue sur le plateforme HOAG Prime</p>
            <h6>Vous êtes actellement inscrit à 25% et membre Basic, inscrivez-vous sur <p1 style={{color:"green"}}>HOAG ecommerce</p1> pour passez a l'étape suivante</h6>
            <div class="progress " style={{height: "20px", width: "50%", "margin-left":"35%" }}>
                <div class="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
            <div class="bouton">
              <a href="#" class="btn btn-warning">S'inscrire sur HOAG Ecommerce</a>
            </div>
        </div>

    </div>
  );
}
