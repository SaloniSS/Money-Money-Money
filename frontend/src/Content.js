/* global chrome */

import React from "react";
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

const Content = (props) => {
  alert(props.mode);
  const currMode = MODES.find((mode) => mode.name === props.mode);

  if (!currMode) {
    return (
      <div className="content">
        <p>Internal Issue. Please report the bug on our Github.</p>
      </div>
    );
  }

  return (
    <div className="content">
      <p></p>
      <p>
        Are you{" "}
        <i>
          <strong>really</strong>
        </i>{" "}
        sure you need to buy that?
      </p>
      <p>
        <strong>Current Mode: </strong>
        {props.mode}
      </p>
      <img src={logo} className="App-logo" alt="mode" />
      <div className="modelSelection">
        {MODES.map((mode) => (
          <ModelButton
            text={mode}
            icon={currMode.icon}
            price={currMode.price}
            onPress={props.changeMode}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
