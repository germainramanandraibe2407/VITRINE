import React from "react";
import Presentation from "./view/Presentation";
import Home from "./Component/ComponentPresentation/Home";
import BasicPage from "./Component/ComponentPresentation/BasicPage";
import Membre from "./view/Membre";
import Annuairetarget from "./view/Annuairetarget";
import FormlaireCoaching from "./Component/espaceMembre/FormlaireCoaching";

import { getCurrentCompte } from "./utils/service_hoag_prime/user/user";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

function PrivateOutlet() {
  return getCurrentCompte() && getCurrentCompte().token ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
}

export default function App() {
  return (
    <Router>
      <div className="container-fluid font-link">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/basic" element={<PrivateOutlet />}>
            <Route path="/basic" element={<BasicPage />} />
          </Route>
          <Route exact path="/presentation" element={<Presentation />} />
          <Route exact path="/membre" element={<Membre />} />
          <Route exact path="/Coaching" element={<FormlaireCoaching/>} />
          <Route exact path="annuaire" element={<Annuairetarget/>} />
        </Routes>
      </div>
    </Router>
  );
}
