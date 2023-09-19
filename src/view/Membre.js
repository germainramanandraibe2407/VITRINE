import React from "react";
import Navbar from "./../Component/espaceMembre/Navbar";
import Bienvenue from "./../Component/espaceMembre/Bienvenue";
import Coaching from "./../Component/espaceMembre/Coaching";
import Footer from "./../Component/ComponentPresentation/Footer";


function Membre() {
  return (
    <div className="Membre">
        <Navbar/>
        <Bienvenue/>
        <Coaching/>
        <Footer />
    </div>
  );
}
export default Membre;
