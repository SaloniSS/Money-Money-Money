import React from "react";
import { Button, Icon } from "semantic-ui-react";
import "./Button.css";

const ModelButton = (props) => {
  return (
    <Button animated="vertical" size="huge">
      <Button.Content hidden>{props.text}</Button.Content>
      <Button.Content visible>
        <Icon name={props.icon} />
      </Button.Content>
    </Button>
  );
};

export default ModelButton;
