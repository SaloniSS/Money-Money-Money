import React from "react";
import { Button } from "semantic-ui-react";
import "./Button.css";

const ModelButton = (props) => {
  return (
    <Button animated="vertical" size="huge">
      <Button.Content hidden>{props.text}</Button.Content>
      <Button.Content visible>
        <img className="thumbnail" src={props.icon} />
      </Button.Content>
    </Button>
  );
};

export default ModelButton;
