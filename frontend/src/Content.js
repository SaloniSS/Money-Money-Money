/* global chrome */

import React, { useState, useEffect } from "react";
import ModelButton from "./Button";
import logo from "./dollar-sign.svg";
import "./Content.css";

import burrito from "./icons/burrito.png";
import boba from "./icons/boba.png";
import nuggies from "./icons/chicken_nuggies.png";
import tp from "./icons/toilet_paper.png";

const MODES = [
  {
    name: "Chipotle",
    icon: burrito,
    price: 7.5,
  },
  {
    name: "Boba",
    icon: boba,
    price: 5.0,
  },
  {
    name: "Nuggies",
    icon: nuggies, 
    price: 4.5,
  },
  {
    name: "Toilet Paper",
    icon: tp, 
    price: 100,
  },
];

const Content = () => {
  const [mode, setMode] = useState("Set initial.");

  useEffect(() => {
    chrome.storage.local.get(["mode"], function (result) {
      if (!result) setMode("Set initial.");
      console.log("oof " + result.mode);
      setMode(result.mode);
    });
  }, []);


  
  return (
    <div className="content">
      <p></p>
      <p>Are you <i><strong>really</strong></i> sure you need to buy that?</p>
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
