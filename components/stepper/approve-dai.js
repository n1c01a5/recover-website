import React, { useState } from 'react'
import { BounceLoader } from 'react-spinners'
const ipfsClient = require('ipfs-http-client')

export default function ApproveDAI ({
  handleNextStep,
  tokenContract,
  web3,
  tokenAmount,
  account,
  networkName,
  envData,
  setCid
}) {
  const [buttonView, setButtonView] = useState(true)
  const [isPending, setIsPending] = useState(false)
  const [isOngoing, setIsOngoing] = useState(false)
  const [txError, setTxerror] = useState(false)
  const [txId, setTxId] = useState('')

  const submitPersonalDetails = async () => {
    try {
      const ipfs = ipfsClient({
        host: process.env.NEXT_PUBLIC_IPFSNODE,
        port: process.env.NEXT_PUBLIC_IPFSPORT,
        protocol: process.env.NEXT_PUBLIC_IPFSPROTOCOL
      })
      const { cid } = await ipfs.add({
        path: account,
        content: localStorage.getItem('userDetails')
      })
      setCid(cid.toString())
      handleNextStep()
    } catch (error) {
      console.error('Unable to publish to IPFS', error)
    }
  }

  const approve = async () => {
    setTxerror(false)
    setIsPending(true)
    setIsOngoing(false)
    setButtonView(false)

    const data = tokenContract.methods
      .approve(envData.MULTIPLE_ARBITRABLE_CONTRACT_ADDRESS, tokenAmount)
      .encodeABI()

    const transactionParameters = {
      to: envData.ERCTOKEN, // Required except during contract publications.
      from: account, // must match user's active address.
      data: data
    }

    web3.eth
      .sendTransaction(transactionParameters)
      .on('transactionHash', (hash) => {
        setIsOngoing(true)
        setTxId(hash)
      })
      .once('confirmation', (confirmationNumber, receipt) => {
        if (receipt.status) {
          submitPersonalDetails()
        }
      })
      .on('error', (error) => {
        console.error('error', error)
        setIsOngoing(false)
        setIsPending(false)
        setTxerror(true)
      })
  }

  return (
    <div style={{ paddingTop: 50 }}>
      <div className='row form-group' style={{ padding: '.375rem .80rem' }}>
        <h4>
          <span style={{ color: '#13a2dc' }}>Approve</span> DAI Transfer
        </h4>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <div className='alert' style={{ background: '#A6FFCC' }} role='alert'>
            <p style={{ paddingTop: '15px' }}>
              Confirm the DAI transfer to pay for your Loser Box.
            </p>
          </div>
          {buttonView || txError
            ? (
              <button
                className='new-button'
                style={{
                  width: '100%',
                  marginTop: '20px',
                  backgroundColor: '#A6FFCC'
                }}
                type='button'
                onClick={approve}
              >
                <strong>Approve DAI Transfer</strong>
              </button>
              )
            : null}

          {isPending
            ? (
              <div
                className='pendingBox'
                onClick={() =>
                  window.open(`https://${networkName === '' ? '' : (networkName + '.')}etherscan.io/tx/${txId}`)}
              >
                <div className='pending'>
                  <div>
                    {(isPending || isOngoing) && !txError
                      ? 'Transaction pending...'
                      : null}
                    {txError ? 'Transaction rejected. Please try again.' : null}
                  </div>
                  <div>
                    {isOngoing ? <BounceLoader size={50} color='#fff' /> : null}
                  </div>
                </div>
              </div>
              )
            : null}
        </div>
      </div>
    </div>
  )
}
