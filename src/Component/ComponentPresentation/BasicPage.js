import React, {useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../../assets/css/Basic.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function BasicPage()  {
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
          <p className="font-link modal-voir-plus ">
            👉👉 Inscrivez-vous en tant que membre Silver pour pouvoir voir les responsables des entreprises 😊😊!!!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={((window.location.href = "#Offre"), props.onHide)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
    return (
        <div className="row ">
           <Navbar/>
           <header className="header">
            <div className="container">
              <ul className="social-icons pt-3">
                <li className="social-item">
                  <a
                    className="social-link text-light"
                    href="https://web.facebook.com/HoagTarget?_rdc=1&_rdr_rdr"
                  >
                    <i className="ti-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li className="social-item">
                  <a className="social-link text-light" href="#">
                    <i className="ti-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li className="social-item">
                  <a className="social-link text-light" href="#">
                    <i className="ti-google" aria-hidden="true" />
                  </a>
                </li>
                <li className="social-item">
                  <a className="social-link text-light" href="#">
                    <i className="ti-instagram" aria-hidden="true" />
                  </a>
                </li>
                <li className="social-item">
                  <a className="social-link text-light" href="#">
                    <i className="ti-github" aria-hidden="true" />
                  </a>
                </li>
              </ul>
              <div className="header-content">
                <h1 className="header-title">HOAG Target</h1>
                <h6 className="header-mono">
                  Votre partenaire pour votre réussite commerciale
                </h6>
              </div>
            </div>
          </header>

          <div className="container-fluid">
            <div id="about" className="row about-section">
              <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">Présentation</h3>
                <span className="line mb-5" />
                <h5 className="mb-3">Entreprise pour l'accompagnement commerciale</h5>
                <p className="mt-20">
                  HOAG Target est une entreprise qui positionne la digitalisation parmi
                  les priorités fonctionnelles, notamment au niveau commercial. Et c’est
                  dans cet esprit que Hoag Target vise à apporter un accompagnement aux
                  structures vers une transition digitale dans l’utilisation d’outils de
                  Production, de Gestion, et globalement, d’outils axés sur les Processus
                  d’Exportations.
                </p>
                <button className="btn btn-outline-danger">
                  <a href="https://hoag-target.com/" target="blank">
                    Plus d'informations
                  </a>
                </button>
              </div>
              <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">Contact</h3>
                <span className="line mb-5" />
                <ul className="mt40 info list-unstyled">
                  <li>
                    <span>Adresse</span> : LOT: 141M Amboavahy
                  </li>
                  <li>
                    <span>Tel</span> : +261 34 06 885 76
                  </li>
                  <li>
                    <span>Email</span> : contact@hoag-target.com
                  </li>
                  <li>
                    <span>Facebook</span> : HOAG Target{" "}
                  </li>
                  <li>
                  <Button
                    variant="primary"
                    class="btn btn-warning"
                    onClick={() => setModalShow(true)}
                  >
                    Voir les premiers responsables
                  </Button>
                    <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />                 
                  </li>
                </ul>
                <ul className="social-icons pt-3">
                  <li className="social-item">
                    <a
                      className="social-link"
                      href="https://web.facebook.com/HoagTarget?_rdc=1&_rdr"
                    >
                      <i className="ti-facebook" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="social-item">
                    <a className="social-link" href="#">
                      <i className="ti-twitter" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="social-item">
                    <a className="social-link" href="#">
                      <i className="ti-google" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="social-item">
                    <a className="social-link" href="#">
                      <i className="ti-instagram" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="social-item">
                    <a className="social-link" href="#">
                      <i className="ti-github" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">Services</h3>
                <span className="line mb-5" />
                <div className="row">
                  <div className="col-1 text-danger pt-1">
                    <i className="ti-widget icon-lg" />
                  </div>
                  <div className="col-10 ml-auto mr-3">
                    <h6>Mise à disposition d’outils intégrés</h6>
                    <p className="subtitle">
                      {" "}
                      (commerciaux, marketing, communication, prospection, prise de
                      décision, etc.)
                    </p>
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div className="col-1 text-danger pt-1">
                    <i className="ti-paint-bucket icon-lg" />
                  </div>
                  <div className="col-10 ml-auto mr-3">
                    <h6>Transfert</h6>
                    <p className="subtitle">
                      Le transfert d'informations, d'outils technologiques, de process de
                      digitalisation, et tout type de transfert d'outils ou d'information
                      liée aux objectifs de la structure
                    </p>
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div className="col-1 text-danger pt-1">
                    <i className="ti-stats-up icon-lg" />
                  </div>
                  <div className="col-10 ml-auto mr-3">
                    <h6>Ecommerce</h6>
                    <p className="subtitle">
                      L'endroit idéal pour vendre et acheter à un meilleur rapport
                      Qualité-Prix des produits et des articles de MADAGASCAR
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Portfolio Section */}
          <section className="section bg-custom-gray" id="portfolio">
            <div className="container">
              <h1 className="mb-5">Articles phares</h1>
              <div className="portfolio">
                {/* <div class="filters">
                      <a href="#" data-filter=".new" class="active">
                          Nouveau
                      </a>
                      <a href="#" data-filter=".advertising">
                          Publicité
                      </a>
                      <a href="#" data-filter=".branding">
                          Marque
                      </a>
                      <a href="#" data-filter=".web">
                          Web
                      </a>
                  </div> */}
                <div className="portfolio-container">
                  <div className="web new">
                    <div className="portfolio-item">
                      <img
                        src="https://prettywire.fr/55866-thickbox_default/bianca-kaki-robe-longue.jpg"
                        className="img-fluid"
                        alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                      />
                      <div className="content-holder">
                        <a className="img-popup" href="../assets/imgs/web-1.jpg" />
                        <div className="text-holder">
                          <h6 className="title">WEB</h6>
                          <p className="subtitle">HOAG Target!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="web new">
                    <div className="portfolio-item">
                      <img
                        src="https://prettywire.fr/56315-large_default/fleur-boucles-d-oreilles-dorees.jpg"
                        className="img-fluid"
                        alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                      />
                      <div className="content-holder">
                        <a className="img-popup" href="../assets/imgs/web-2.jpg" />
                        <div className="text-holder">
                          <h6 className="title">WEB</h6>
                          <p className="subtitle">HOAG Target!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="advertising new">
                    <div className="portfolio-item">
                      <img
                        src="https://prettywire.fr/51438-large_default/esmee-beige-sac-en-daim-.jpg"
                        className="img-fluid"
                        alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                      />
                      <div className="content-holder">
                        <a className="img-popup" href="../assets/imgs/advertising-2.jpg" />
                        <div className="text-holder">
                          <h6 className="title">Publicité</h6>
                          <p className="subtitle">HOAG Target!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="web">
                    <div className="portfolio-item">
                      <img
                        src="https://prettywire.fr/51438-large_default/esmee-beige-sac-en-daim-.jpg"
                        className="img-fluid"
                        alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                      />
                      <div className="content-holder">
                        <a className="img-popup" href="../assets/imgs/web-4.jpg" />
                        <div className="text-holder">
                          <h6 className="title">WEB</h6>
                          <p className="subtitle">HOAG Target!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="advertising">
                    <div className="portfolio-item">
                      <img
                        src="https://prettywire.fr/56131-large_default/malou-ecru-gilet-mariniere.jpg"
                        className="img-fluid"
                        alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                      />
                      <div className="content-holder">
                        <a className="img-popup" href="../assets/imgs/advertising-1.jpg" />
                        <div className="text-holder">
                          <h6 className="title">Publicité</h6>
                          <p className="subtitle">HOAG Target!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="web new">
                    <div className="portfolio-item">
                      <img
                        src="https://prettywire.fr/51438-large_default/esmee-beige-sac-en-daim-.jpg"
                        className="img-fluid"
                        alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                      />
                      <div className="content-holder">
                        <a className="img-popup" href="../assets/imgs/web-3.jpg" />
                        <div className="text-holder">
                          <h6 className="title">WEB</h6>
                          <p className="subtitle">HOAG Target!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </section>
          {/* End of portfolio section */}


        <section className="section" id="blog">
          <div className="container">
            <h2 className="mb-5">
              Activités<span className="text-danger"></span>
            </h2>
            <div className="row">
              <div className="blog-card">
                <div className="img-holder">
                  <img
                    src="https://prettywire.fr/56131-large_default/malou-ecru-gilet-mariniere.jpg"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  />
                </div>
                <div className="content-holder">
                  <h6 className="title">Consectetur adipisicing elit</h6>
                  <p className="post-details">
                    <a href="#">By: Admin</a>
                    <a href="#">
                      <i className="ti-heart text-danger" /> 234
                    </a>
                    <a href="#">
                      <i className="ti-comment" /> 123
                    </a>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                    nesciunt qui sit velit delectus voluptates, repellat ipsum culpa id
                    deleniti. Rerum debitis facilis accusantium neque numquam mollitia
                    modi quasi distinctio.
                  </p>
                  <p>
                    <b>
                      Necessitatibus nihil impedit! Ex nisi eveniet, dolor aliquid
                      consequuntur repudiandae.
                    </b>
                  </p>
                  <p>
                    Magnam in repellat enim harum omnis aperiam! Explicabo illo,
                    commodi, dolor blanditiis cupiditate harum nisi vero accusamus
                    laudantium voluptatibus dolores quae obcaecati.
                  </p>
                  <a href="#" className="read-more">
                    Read more <i className="ti-angle-double-right" />
                  </a>
                </div>
              </div>
              {/* end of blog wrapper */}
              {/* blog-card */}
              <div className="blog-card">
                <div className="img-holder">
                  <img
                    src="https://prettywire.fr/56131-large_default/malou-ecru-gilet-mariniere.jpg"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  />
                </div>
                <div className="content-holder">
                  <h6 className="title">Explicabo illo</h6>
                  <p className="post-details">
                    <a href="#">By: Admin</a>
                    <a href="#">
                      <i className="ti-heart text-danger" /> 456
                    </a>
                    <a href="#">
                      <i className="ti-comment" /> 264
                    </a>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
                    excepturi laborum enim, vitae ipsam atque eum, ad iusto consequuntur
                    voluptas, esse doloribus. Perferendis porro quisquam vitae
                    exercitationem aliquid, minus eos laborum repudiandae, cumque
                    debitis iusto omnis praesentium? Laborum placeat sit adipisci illum
                    tempore maxime, esse qui quae? Molestias excepturi corporis
                    similique doloribus. Esse vitae earum architecto nulla non dolores
                    illum at perspiciatis quod, et deleniti cupiditate reiciendis harum
                    facere, delectus eum commodi soluta distinctio sit repudiandae
                    possimus sunt. Ipsum, rem.
                  </p>
                  <a href="#" className="read-more">
                    Read more <i className="ti-angle-double-right" />
                  </a>
                </div>
              </div>
              {/* end of blog wrapper */}
              {/* blog-card */}
              <div className="blog-card">
                <div className="img-holder">
                  <img
                    src="https://prettywire.fr/56131-large_default/malou-ecru-gilet-mariniere.jpg"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  />
                </div>
                <div className="content-holder">
                  <h4 className="title">Porro Quisqua</h4>
                  <p className="post-details">
                    <a href="#">By: Admin</a>
                    <a href="#">
                      <i className="ti-heart text-danger" /> 431
                    </a>
                    <a href="#">
                      <i className="ti-comment" /> 312
                    </a>
                  </p>
                  <p>
                    {" "}
                    consectetur adipisicing elit. Impedit excepturi laborum enim, vitae
                    ipsam atque eum, ad iusto consequuntur voluptas, esse doloribus.
                    Perferendis porro quisquam vitae exercitationem aliquid, minus eos
                    laborum repudiandae, cumque debitis iusto omnis praesentium? Laborum
                    placeat sit adipisci illum tempore maxime, esse qui quae? Molestias
                    excepturi corporis similique doloribus. Esse vitae earum architecto
                    nulla non dolores illum at perspiciatis quod, et deleniti cupiditate
                    reiciendis harum facere, delectus eum commodi soluta distinctio sit
                    repudiandae possimus sunt. Ipsum, rem.
                  </p>
                  <a href="#" className="read-more">
                    Read more <i className="ti-angle-double-right" />
                  </a>
                </div>
              </div>
              {/* end of blog wrapper */}
            </div>
          </div>
        </section> 

            <Footer />
        </div>
        
    );
  
}