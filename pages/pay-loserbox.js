import Head from 'next/head'
import React, { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useMediaQuery } from 'react-responsive'
const mattAbi = require('../contracts/MultipleArbitrationToken.json')
import Web3 from 'web3'
import etherscanBg from '../asset/etherscan-bg.png'
import { BounceLoader } from 'react-spinners'

const Faq = dynamic(() => import('../components/faq'), { ssr: false })

import Layout from '../components/layout'

export default function PayLoserBox() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)',
  })

  const [txHash, settxHash] = useState('')
  const [isValidate, setisValidate] = useState(false)
  const [buttonView, setButtonView] = useState(true)
  const [isPending, setIsPending] = useState(false)
  const [isOngoing, setIsOngoing] = useState(false)
  const [txError, setTxError] = useState(false)
  const [networkName, setNetworkName] = useState('')

  const pay = async () => {
    setIsPending(true)
    setIsOngoing(false)
    setButtonView(false)

    await window.ethereum.enable()
    const web3 = (window.web3 = new Web3(window.ethereum))
    const accounts = await web3.eth.getAccounts()
    if (accounts && accounts.length > 0) {
      // setAccount(accounts[0])
      const networkId = await web3.eth.net.getId()
      // switch (networkId) {
      //   case 1:
      //     setNetworkName('')
      //     break
      //   case 3:
      //     setNetworkName('ropsten')
      //     setIsNetworkWarning(true)
      //     break
      //   case 4:
      //     setNetworkName('rinkeby')
      //     setIsNetworkWarning(true)
      //     break
      //   case 5:
      //     setNetworkName('goerli')
      //     setIsNetworkWarning(true)
      //     break
      //   case 42:
      //     setNetworkName('kovan')
      //     break
      //   default:
      //     break
      // }

      if (networkId == 1 || networkId == 42) {
        let mattContract
        let decimals
        let amount
        if (networkId === 1) {
          mattContract = new web3.eth.Contract(
            mattAbi,
            process.env.NEXT_PUBLIC_MAINNET_MULTIPLE_ARBITRABLE_CONTRACT_ADDRESS
          )
          // Use BigNumber
          decimals = web3.utils.toBN(
            process.env.NEXT_PUBLIC_MAINNET_TOKEN_DECIMALS
          )
          amount = web3.utils.toBN(
            process.env.NEXT_PUBLIC_MAINNET_TOKEN_AMOUNT
          )
        } else {
          mattContract = new web3.eth.Contract(
            mattAbi,
            process.env.NEXT_PUBLIC_KOVAN_MULTIPLE_ARBITRABLE_CONTRACT_ADDRESS
          )
          // Use BigNumber
          decimals = web3.utils.toBN(
            process.env.NEXT_PUBLIC_KOVAN_TOKEN_DECIMALS
          )
          amount = web3.utils.toBN(process.env.NEXT_PUBLIC_KOVAN_TOKEN_AMOUNT)
        }
        let value = amount.mul(web3.utils.toBN(10).pow(decimals))

        const TxId = await mattContract.methods
          .getTransactionIDsByAddress(accounts[0])
          .call();

        console.log('TxId', TxId)

        var data = mattContract.methods.pay(TxId[TxId.length - 1], value).encodeABI()
        console.log('data', data)

        const transactionParameters = {
          to: mattContract._address, // Required except during contract publications.
          from: accounts[0], // must match user's active address.
          data: data,
        }

        web3.eth
          .sendTransaction(transactionParameters)
          .on('transactionHash', function (hash) {
            console.log('transactionHash', hash)
            setIsOngoing(true)
            settxHash(hash)
          })
          .once('confirmation', function (confirmationNumber, receipt) {
            console.log('confirmation', receipt)
            if (receipt.status) {
              router.push('/')
            }
          })
          .on('error', (error) => {
            setTxError(true)
          })
      }
    }
  }

  return (
    <Layout noRightButton>
      <Head>
        <title>Recover.ws - Loser Box to protect your item from loss</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div style={{ paddingTop: 50 }}>
        <div className='row form-group' style={{ padding: '.375rem .80rem' }}>
          <h4>
            <span style={{ color: '#13a2dc' }}>Pay</span> Order
        </h4>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='alert' style={{ background: '#A6FFCC' }} role='alert'>
              <p style={{ paddingTop: '15px' }}>
                Finish the transaction with the Pay button.
            </p>
            </div>
            {buttonView || txError ? (
              <button
                className='new-button'
                style={{
                  width: '100%',
                  marginTop: '20px',
                  backgroundColor: '#A6FFCC',
                }}
                type='button'
                onClick={pay}
              >
                <strong>Pay</strong>
              </button>
            ) : null}

            {isPending ? (
              <div
                className='col-md-12'
                className='pendingBox'
                onClick={() =>
                  window.open(`https://${networkName === '' ? '' : networkName + '.'}etherscan.io/tx/${txHash}`)
                }
              >
                <div className='pending'>
                  <div>
                    {(isPending || isOngoing) && !txError
                      ? 'Transaction pending...'
                      : null}
                    {txError ? 'Transaction rejected. Please try again.' : null}
                  </div>
                  <div>
                    {isOngoing ? <BounceLoader size={50} color={'#fff'} /> : null}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Layout>
  )
}
