import React, { useState, useEffect } from 'react'
import DEXAG from 'dexag-sdk'
const fetch = require('node-fetch')

export default function SwapToken ({
  web3,
  tokenBalanceApproved,
  userEthBalance,
  handleNextStep,
  networkName
}) {
  const [isLowBalanceWarning, setIsLowBalanceWarning] = useState(false)

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_DEX_AG)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        userEthBalance = web3.utils.fromWei(userEthBalance)
        const dexPrice = (json.price) * process.env.NEXT_PUBLIC_MAINNET_TOKEN_AMOUNT
        console.log('dexPrice', dexPrice)
        userEthBalance - (dexPrice) >= 0 ? setIsLowBalanceWarning(false) : setIsLowBalanceWarning(true)
      })
  }, [])

  if (tokenBalanceApproved) {
    handleNextStep()
  }
  const swap = async () => {
    const sdk = DEXAG.fromProvider(window.ethereum)

    // receive status messages as the client executes the trade
    sdk.registerStatusHandler((status, data) => {
      console.log('status, data ===> ', status, data)
    })
    const price = sdk.getPrice({
      to: 'DAI',
      from: 'ETH',
      toAmount: process.env.NEXT_PUBLIC_MAINNET_TOKEN_AMOUNT,
      dex: 'ag'
    })
    console.log('price', price)

    // get trade
    const tx = await sdk.getTrade({
      to: 'DAI',
      from: 'ETH',
      toAmount: process.env.NEXT_PUBLIC_MAINNET_TOKEN_AMOUNT,
      dex: 'ag'
    })
    console.log('tx', tx)

    // checkout
    const valid = await sdk.validate(tx)
    console.log('valid', valid)
    if (valid) {
      // transaction data is valid, make a trade
      sdk.trade(tx)
      handleNextStep()
    }
  }

  return (
    <div style={{ paddingTop: 50 }}>
      <div className='row form-group' style={{ padding: '.375rem .75rem' }}>
        <h4>
          <span style={{ color: '#13a2dc' }}>Swap</span> to DAI
        </h4>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          {isLowBalanceWarning
            ? (
              <div
                className='alert'
                style={{ background: '#A6FFCC' }}
                role='alert'
              >
                <p style={{ paddingTop: '15px' }}>
                  Sorry, you don't have enough ETH in your account, to purchase some ETH go to your Metamask wallet.
                </p>
              </div>
              )
            : null}
          <div className='alert' style={{ background: '#A6FFCC' }} role='alert'>
            <p style={{ paddingTop: '15px' }}>
              To buy the Loser Box, you need to swap your Ether to {process.env.NEXT_PUBLIC_MAINNET_TOKEN_AMOUNT} DAI.
            </p>
          </div>
          <button
            className='new-button'
            onClick={swap}
            style={{
              width: '100%',
              marginTop: '20px',
              backgroundColor: '#A6FFCC'
            }}
            type='button'
            disabled={!tokenBalanceApproved && networkName !== ''}
          >
            <strong>Swap</strong>
          </button>

        </div>
      </div>
    </div>
  )
}
