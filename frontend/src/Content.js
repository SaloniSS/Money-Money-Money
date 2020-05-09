import React, { useState } from "react";
import ModelButton from "./Button";
import logo from "./logo.svg";
import "./Content.css";

const MODES = [
  {
    name: "chipotle",
    icon: "https://webstockreview.net/images/green-clipart-milkshake-9.png",
  },
  {
    name: "boba",
    icon: "https://webstockreview.net/images/green-clipart-milkshake-9.png",
  },
  {
    name: "chicken nuggies",
    icon: "https://webstockreview.net/images/green-clipart-milkshake-9.png",
  },
  {
    name: "toilet paper",
    icon: "https://webstockreview.net/images/green-clipart-milkshake-9.png",
  },
];

const Content = () => {
  const [mode, setMode] = useState(0);

  return (
    <div className="content">
      <p>Current Mode:</p>
      <img src={logo} className="App-logo" alt="mode" />
      <div className="modelSelection">
        {MODES.map((mode) => (
          <ModelButton text={mode.name} icon={mode.icon} />
        ))}
      </div>
    </div>
  );
};

export default Content;
