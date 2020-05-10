/* global chrome */

import React, {useState, useEffect} from "react";
import "./App.css";
import "./semantic-ui.css";
import Content from "./Content";
import AlternatePrice from "./AlternatePrice";

function App() {

  const [productPage, setProductPage] = useState(false)

  useEffect(() => {
    //get product id
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        const url = tabs[0].url;
        const index = url.indexOf("/dp/");
        if (index == -1){
          //content = content
          setProductPage(false);
        } else{
          //content = alternateprice
          setProductPage(true);
        }
    });
  });

  return (
    <div className="App">
      <header className="header">
        <h2>MoneyMoneyMoney</h2>
      </header>
      {(productPage && <AlternatePrice/>) || <Content/>}
    </div>
  );
}

export default App;
