import React, { useState } from "react";
import ModelButton from "./Button";
import logo from "./logo.svg";
import "./Content.css";

const MODES = ["chipotle", "boba", "chicken nuggies", "toilet paper"];

const Content = () => {
  const [mode, setMode] = useState(0);

  return (
    <div className="content">
      <p>Current Mode:</p>
      <img src={logo} className="App-logo" alt="mode" />
      <div className="modelSelection">
        <ModelButton text="hello" icon="shop" />
        <ModelButton text="chipotle burritos" icon="shop" />
      </div>
    </div>
  );
};

export default Content;
