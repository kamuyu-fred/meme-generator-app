import React from "react";
import "./Navbar.css";



function Navbar() {
  return (
    <div className="Navbar">
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark" >
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MEME GENERATOR</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Generator</a>
            </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
              </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
        
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <a class="btn btn-primary me-md-2" href="#">Log In</a>
        </div>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )}



  export default Navbar;