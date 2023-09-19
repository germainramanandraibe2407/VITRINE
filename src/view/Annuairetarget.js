import React from "react";
import Footer from "./../Component/ComponentPresentation/Footer";
import Navbar from "./../Component/espaceMembre/Navbar";
import Annuaire from "./../Component/ComponentPresentation/Annuaire";

function Annuairetarget() {
  return (
    <div className="Presentation">
      <Navbar />
      <Annuaire />
      
      <Footer />
     
    </div>
  );
}
export default Annuairetarget;