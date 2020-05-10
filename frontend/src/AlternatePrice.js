
/* global chrome */

import React, { useState, useEffect } from "react";
import "./Content.css";
import Content from './Content';
const axios = require("axios").default;

const AlternatePrice = () => {

    const [product, setProduct] = useState('');
    const [price, setPrice] = useState(0);
    const [mode, setMode] = useState('');
    const [unitPrice, setUnitPrice] = useState(0);
    const [newPrice, setNewPrice] = useState(0);

    useEffect(() => {

        //get product id
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            const url = tabs[0].url;
            const index = url.indexOf("/dp/");
            const productID = url.substring(index+4, index+14);
            console.log(productID);
            setProduct(productID);
        });

        //get price
        const fetchData = async () => {
            const result = await axios(
                `https://hacklarious.wl.r.appspot.com/${product}`
            );
            console.log(result.data);
            setPrice(result.data);
        };
        fetchData();

        //get current mode
        chrome.storage.local.get(["mode"], function (result) {
            if (!result) setMode("Set initial.");
            setMode(result.mode);
        });

        //get unit price
        chrome.storage.local.get(["price"], function (result) {
            if (!result) setMode("Set initial.");
            console.log("oof " + result.price);
            setUnitPrice(result.price);
        });

        setNewPrice(price / unitPrice);
    });

    return (
        <div className="content">
            <p>Are you really sure you need to buy that?</p>
            <p>
                <strong>Price of one {mode}: </strong> ${unitPrice}
            </p>
            <p>
                <strong>Current Price: </strong> ${price}
            </p>
            <p>
                <strong>This is equivalent to: </strong> {newPrice} {mode}
            </p>
            <Content/>
        </div>
    );
};

export default AlternatePrice;
