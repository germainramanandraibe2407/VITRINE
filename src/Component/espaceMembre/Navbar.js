import React from "react";


export default function Navbar() {
  
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
    <div class="container-fluid">
    <a href="/" className="navbar-brand">
              <img
                src="logo_hoag.png"
                width="120"
                height="60"
                alt="Logo HOAG Target"
              ></img>
            </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
     
      <div class=" collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto ">
          
          <li class="nav-item dropdown">
            <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{"font-size":"100%"}}>
              Menu
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">A propos</a></li>
              <li><a class="dropdown-item" href="#">Nous contacter</a></li>
              <li><a class="dropdown-item" href="#">Se déconnecter</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    </nav>
   
  );
}
