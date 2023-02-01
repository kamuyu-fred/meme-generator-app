import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh"
          }}>
            
            <span><h1>WELCOME TO MEME GENERATOR</h1></span>
          
            <h2>A quick and easy way to generate memes</h2>
            
            <Link to="/generator">
              <button>Generator</button>
            </Link>
          
          </div>
          
    );
}

export default Home;
