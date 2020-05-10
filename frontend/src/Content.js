import React, { useState, useEffect } from "react";
import ModelButton from "./Button";
import logo from "./logo.svg";
import GLOBAL from "./global";
import "./Content.css";

const MODES = [
  {
    name: "Chipotle",
    icon: "https://webstockreview.net/images/green-clipart-milkshake-9.png",
    price: 7.5,
  },
  {
    name: "Boba",
    icon: "https://webstockreview.net/images/green-clipart-milkshake-9.png",
    price: 5.0,
  },
  {
    name: "Chicken Nuggies",
    icon: "https://webstockreview.net/images/green-clipart-milkshake-9.png",
    price: 4.5,
  },
  {
    name: "Toilet Paper Roll",
    icon: "https://webstockreview.net/images/green-clipart-milkshake-9.png",
    price: 1.0,
  },
];

const Content = () => {
  const [mode, setMode] = useState(GLOBAL.mode);

  useEffect(() => {
    setMode(GLOBAL.mode);
  }, []);

  return (
    <div className="content">
      <p>Are you really sure you need to buy that?</p>
      <p>
        <strong>Current Mode: </strong>
        {mode}
      </p>
      <img src={logo} className="App-logo" alt="mode" />
      <div className="modelSelection">
        {MODES.map((mode) => (
          <ModelButton
            text={mode.name}
            icon={mode.icon}
            price={mode.price}
            onPress={setMode}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
