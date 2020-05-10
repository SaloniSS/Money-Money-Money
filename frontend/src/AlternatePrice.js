
/* global chrome */

import React, { useState, useEffect } from "react";
import "./Content.css";
import Content from './Content';

const AlternatePrice = () => {

    const [product, setProduct] = useState('');
    const [price, setPrice] = useState(0);

    useEffect(() => {

        //get product id
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            const url = tabs[0].url;
            const index = url.indexOf("/dp/");
            const productID = url.substring(index+4, index+13);
            setProduct(productID);
        });
    });

    return (
        <div className="content">
            <p>Are you really sure you need to buy that?</p>
            <p>
                <strong>Current Price: </strong>
                ${product}
            </p>
        </div>
    );
};

export default AlternatePrice;
