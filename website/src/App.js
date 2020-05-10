import React from "react";
import logo from "./dollar-sign.svg";
import "./App.css";
import { Button } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Money Money Money... Always Funny</h1>
        <p>
          Do you want a convenient way to save money? Look no further! Here is
          the extension of the future, Money Money Money! It must be funny in
          the rich man's world... Since we all aren't rich how about you compare
          uncessary purchases to things you really want?
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <iframe
          width="840"
          height="473"
          src="https://www.youtube.com/embed/IByDClFTOME?start=15"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="Money Money Money video"
        ></iframe>
        <img src={logo} className="App-logo" alt="logo" />
        <p>More Info</p>
        <img src={logo} className="App-logo" alt="logo" />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ndNDPgYblGo"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="Demo Video"
        ></iframe>
        <div style={{ justifyContent: "space-between" }}>
          <Button className="button" variant="contained">
            <a href="https://devpost.com/software/moneymoneymoney">More Info</a>
          </Button>
          <Button className="button" variant="contained">
            <a href="https://github.com/SaloniSS/Hacklarious">Source Code</a>
          </Button>
        </div>
        <p>
          {" "}
          Made with 💖 by Megan Tran, Reshmi Ranjith, Saloni Shivdasani, and
          Vincent Vu{" "}
        </p>
      </header>
    </div>
  );
}

export default App;