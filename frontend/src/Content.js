import React from "react";
import logo from "./logo.svg";
import "./Content.css";

const Content = () => {
  return (
    <div className="content">
      <p>Current Mode:</p>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};

export default Content;
