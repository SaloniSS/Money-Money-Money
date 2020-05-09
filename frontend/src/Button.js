import React from "react";
import { Button } from "semantic-ui-react";
import GLOBAL from './global';
import "./Button.css";

const ModelButton = (props) => {
  const setMode = (mode) =>  {
    console.log(props.text +  " is pressed with price " + props.price);
    GLOBAL.mode  =  props.text;
    GLOBAL.unitPrice = props.price;
  }

  return (
    <Button 
      animated="vertical" 
      size="huge" 
      onClick={() => setMode(props)}>
        <Button.Content hidden>{props.text}</Button.Content>
        <Button.Content visible>
          <img className="thumbnail" src={props.icon} alt={props.text}/>
        </Button.Content>
    </Button>
  );
};

export default ModelButton;
