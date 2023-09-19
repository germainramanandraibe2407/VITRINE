import React from "react";
import Faq from "./../Component/ComponentPresentation/Faq";
import About from "./../Component/ComponentPresentation/About";
import Offre from "./../Component/ComponentPresentation/Offre";
import Footer from "./../Component/ComponentPresentation/Footer";
import Navbar from "./../Component/ComponentPresentation/Navbar";
import Valeur from "./../Component/ComponentPresentation/Valeur";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Acceuil from "./../Component/ComponentPresentation/Acceuil";
import Service from "./../Component/ComponentPresentation/Service";
import Contact from "./../Component/ComponentPresentation/Contact";
import Objectif from "./../Component/ComponentPresentation/Objectif";
import Annuaire from "./../Component/ComponentPresentation/Annuaire";
import { getCurrentCompte } from "../utils/service_hoag_prime/user/user";

function Presentation() {
  return (
    <div>
      <Navbar />
      <Acceuil />
      {/* {getCurrentCompte() && getCurrentCompte().token && <Annuaire />} */}
      <About />
      <Service />
      <Objectif />
      <Valeur />
      <Offre />
      <Contact />
      <Faq />
      <Footer />
      <MessengerCustomerChat
        pageId={process.env.REACT_APP_PAGE_ID}
        appId={process.env.REACT_APP_APP_ID}
      />
    </div>
  );
}
export default Presentation;
