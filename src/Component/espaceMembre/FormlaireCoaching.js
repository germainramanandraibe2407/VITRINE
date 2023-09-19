import React from "react";
import "../../assets/css/progressBar.css";

export default function FormlaireCoaching() {
  
  return (
    <div className="row ">
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg">
                
                    <div className="row">
                        <div className="col-md">
                        <div className="contact-wrap w-100 p-md-5 p-4">
                            <h3 className="mb-4">Remplissez le formulaire ci-dessous</h3>
                            <div id="form-message-warning" className="mb-4" />
                            
                            <form
                            method="POST"
                            id="contactForm"
                            name="contactForm"
                            className="contactForm"
                            >
                            <div className="row">
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label className="label" htmlFor="entreprise">
                                    Nom de l'entreprise
                                    </label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="entreprise"
                                    id="entreprise"
                                    placeholder="Nom de l'entreprise"
                                    />
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label className="label" htmlFor="responsable">
                                    Nom du responsable
                                    </label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="responsable"
                                    id="responsable"
                                    placeholder="Nom du responsable"
                                    />
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label" htmlFor="ActiviteP">
                                    Activité principale
                                    </label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="ActiviteP"
                                    id="ActiviteP"
                                    placeholder="Activité principal"
                                    />
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label" htmlFor="#">
                                    Activité secondaire
                                    </label>
                                    <textarea
                                    name="ActiviteS"
                                    className="form-control"
                                    id="ActiviteS"
                                    cols={30}
                                    rows={4}
                                    placeholder="Activité secondaire"
                                    defaultValue={""}
                                    />
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label className="label" htmlFor="Email">
                                    Email
                                    </label>
                                    <input
                                    type="email"
                                    className="form-control"
                                    name="Email"
                                    id="Email"
                                    placeholder="Email"
                                    />
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label className="label" htmlFor="Télephone">
                                    Télephone
                                    </label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="Télephone"
                                    id="Télephone"
                                    placeholder="Télephone"
                                    />
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label className="label" htmlFor="Facebook">
                                    Facebook
                                    </label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="Facebook"
                                    id="Facebook"
                                    placeholder="Facebook"
                                    />
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label className="label" htmlFor="Linkedin">
                                    Linkedin
                                    </label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="Linkedin"
                                    id="Linkedin"
                                    placeholder="Linkedin"
                                    />
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label className="label" htmlFor="Adresse">
                                    Adresse physique
                                    </label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="Adresse"
                                    id="Adresse"
                                    placeholder="Adresse physique"
                                    />
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label className="label" htmlFor="segment">
                                    Segment
                                    </label>
                                    <select name="segment" id="segment">
                                    <option value="">--Choississez un option--</option>
                                    <option value="SM">SM</option>
                                    <option value="SMEs">SMEs</option>
                                    </select>
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label" htmlFor="#">
                                    Points Forts
                                    </label>
                                    <textarea
                                    name="Forts"
                                    className="form-control"
                                    id="Forts"
                                    cols={30}
                                    rows={4}
                                    placeholder="Points Forts"
                                    defaultValue={""}
                                    />
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label" htmlFor="#">
                                    Points Faibles
                                    </label>
                                    <textarea
                                    name="Faibles"
                                    className="form-control"
                                    id="Faibles"
                                    cols={30}
                                    rows={4}
                                    placeholder="Points Faibles"
                                    defaultValue={""}
                                    />
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label" htmlFor="#">
                                    Menaces{" "}
                                    </label>
                                    <textarea
                                    name="Menaces"
                                    className="form-control"
                                    id="Menaces"
                                    cols={30}
                                    rows={4}
                                    placeholder="Menaces"
                                    defaultValue={""}
                                    />
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label" htmlFor="#">
                                    Opportunites
                                    </label>
                                    <textarea
                                    name="Opportunites"
                                    className="form-control"
                                    id="Opportunites"
                                    cols={30}
                                    rows={4}
                                    placeholder="Opportunites"
                                    defaultValue={""}
                                    />
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label" htmlFor="#">
                                    Problemes /Freins
                                    </label>
                                    <textarea
                                    name="Problemes"
                                    className="form-control"
                                    id="Problemes"
                                    cols={30}
                                    rows={4}
                                    placeholder="Problemes /Freins"
                                    defaultValue={""}
                                    />
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label" htmlFor="#">
                                    Besoins /Souhaits
                                    </label>
                                    <textarea
                                    name="Besoins"
                                    className="form-control"
                                    id="Besoins"
                                    cols={30}
                                    rows={4}
                                    placeholder="Besoins /Souhaits"
                                    defaultValue={""}
                                    />
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label" htmlFor="#">
                                    Décision à court terme
                                    </label>
                                    <textarea
                                    name="CT"
                                    className="form-control"
                                    id="CT"
                                    cols={30}
                                    rows={4}
                                    placeholder="Décision à court terme"
                                    defaultValue={""}
                                    />
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label" htmlFor="#">
                                    Décision à long terme
                                    </label>
                                    <textarea
                                    name="LT"
                                    className="form-control"
                                    id="LT"
                                    cols={30}
                                    rows={4}
                                    placeholder="Décision à long terme"
                                    defaultValue={""}
                                    />
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="form-group">
                                    <input
                                    type="submit"
                                    defaultValue="Envoyer"
                                    className="btn btn-primary"
                                    />
                                    <div className="submitting" />
                                </div>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
            </section>


    </div>
  );
}
