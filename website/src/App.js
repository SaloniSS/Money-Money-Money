import React from "react";
import logo from "./dollar-sign.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Money Money Money... Always Funny</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IByDClFTOME?start=15"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="Money Money Money video"
        ></iframe>
      </header>
    </div>
  );
}

export default App;
