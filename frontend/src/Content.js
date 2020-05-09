import React from "react";
import ModelButton from "./Button";
import logo from "./logo.svg";
import "./Content.css";

const MODES = [
  {
    name: "Chipotle",
    icon: "https://webstockreview.net/images/green-clipart-milkshake-9.png",
    price:  7.50
  },
  {
    name: "Boba",
    icon: "https://webstockreview.net/images/green-clipart-milkshake-9.png",
    price: 5.00
  },
  {
    name: "Chicken Nuggies",
    icon: "https://webstockreview.net/images/green-clipart-milkshake-9.png",
    price: 4.50
  },
  {
    name: "Toilet Paper Roll",
    icon: "https://webstockreview.net/images/green-clipart-milkshake-9.png",
    price: 1.00
  },
];

const Content = () => {

  return (
    <div className="content">
      <p>Current Mode:</p>
      <img src={logo} className="App-logo" alt="mode" />
      <div className="modelSelection">
        {MODES.map((mode) => (
          <ModelButton text={mode.name} icon={mode.icon} price={mode.price}/>
        ))}
      </div>
    </div>
  );
};

export default Content;
