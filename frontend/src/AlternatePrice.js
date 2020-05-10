
/* global chrome */

import React, { useState, useEffect } from "react";
import "./Content.css";
import Content from './Content';

const AlternatePrice = () => {

    const [product, setProduct] = useState('');
    const [price, setPrice] = useState(0);

    useEffect(() => {
        chrome.tabs.onUpdated.addListener(function (tab) {
            if (changeInfo.url) {
                url = tab.url;
                index = url.indexOf("/dp/");
                productID = url.substring(index+4, index+13);
                setProduct(productID);
            }
        })

        const fetchData = async () => {
            const result = await axios(
              `https://hacklarious.wl.r.appspot.com/${product}`
            );
            setPrice(result);
        };
        fetchData();
    });

    return (
        <div className="content">
            <p>Are you really sure you need to buy that?</p>
            <p>
                <strong>Current Price: </strong>
                ${product}
            </p>
            <p>
            <strong>Price in {mode}: </strong>
                {price * modePrice}
            </p>
            <Content/>
        </div>
    );
};

export default AlternatePrice;
