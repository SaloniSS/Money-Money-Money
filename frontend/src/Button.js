/* global chrome */

import React from "react";
import { Button } from "semantic-ui-react";
import GLOBAL from "./global";
import "./Button.css";

const ModelButton = (props) => {
  const changeMode = (mode) => {
    GLOBAL.mode = props.text;
    GLOBAL.unitPrice = props.price;
    props.onPress(props.text);
    chrome.storage.local.set(
      { mode: props.text, price: props.price },
      function () {
        console.log("Value is set to " + props.text);
      }
    );
  };

  return (
    <Button animated="vertical" size="huge" onClick={() => changeMode(props)}>
      <Button.Content hidden>{props.text}</Button.Content>
      <Button.Content visible>
        <img className="thumbnail" src={props.icon} alt={props.text} />
      </Button.Content>
    </Button>
  );
};

export default ModelButton;
