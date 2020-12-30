import React from 'react'
import { useState, useEffect } from 'react'
import DEXAG from 'dexag-sdk'
export default function Test() {

    const dexag = async () => {
        const sdk = DEXAG.fromProvider(window.ethereum);
        // console.log('WINDOW', window.ethereum);
        // console.log('DEXAG', DEXAG);
        console.log('sdk', sdk);

        // receive status messages as the client executes the trade
        sdk.registerStatusHandler((status, data) => {
            console.log('status, data ===> ', status, data);
            // console.log(status, data)
        });
        const price = sdk.getPrice({ to: 'DAI', from: 'ETH', toAmount: 1, dex: 'ag' })
        console.log('price', price);
        
        // get trade
        const tx = await sdk.getTrade({ to: 'DAI', from: 'ETH', toAmount: 1, dex: 'ag' });
        console.log('tx', tx);

        // checkout
        const valid = await sdk.validate(tx);
        console.log('valid', valid);
        if (valid) {
            // transaction data is valid, make a trade
            sdk.trade(tx);
        }


    }

    return (
        <div>
            <h1>HELLO WORLD</h1>
            <button onClick={dexag} className="btn btn-lg btn-primary">Click Me</button>
        </div>
    )
}

// loser-box?network=kovan