import React from "react";
import "./App.css";
import "./semantic-ui.css";
import Content from "./Content";
import AlternatePrice from "./AlternatePrice";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h2>MoneyMoneyMoney</h2>
      </header>
      <AlternatePrice />
    </div>
  );
}

export default App;
