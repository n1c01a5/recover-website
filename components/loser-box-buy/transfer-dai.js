import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { BounceLoader } from 'react-spinners'
import {
  Checkbox,
  FormControlLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@material-ui/core'
import Airtable from 'airtable'

import { MetaEvidence } from '../../loser-box-contract/meta-evidence'

export default function TransferDAI ({
  web3,
  tokenAmount,
  account,
  multipleArbitrableTokenContract,
  networkName,
  envData,
  cid
}) {
  const router = useRouter()
  const [buttonView, setButtonView] = useState(true)
  const [isPending, setIsPending] = useState(false)
  const [isOngoing, setIsOngoing] = useState(false)
  const [txError, setTxError] = useState(false)
  const [isAgree, setIsAgree] = useState(false)
  const [txId, setTxId] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const hashPostalAddress = JSON.parse(localStorage.getItem('userDetails')).hashPostalAddress

  const handleClickOpen = (event) => {
    event.preventDefault()

    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const transfer = async () => {
    if (isAgree) {
      setTxError(false)
      setIsPending(true)
      setIsOngoing(false)
      setButtonView(false)

      const data = multipleArbitrableTokenContract.methods
        .createTransaction(
          tokenAmount,
          envData.ERC_TOKEN,
          envData.TIMEOUTPAYMENT.toString(), // FIXME: TIMEOUTPAYMENT => TIMEOUT_PAYMENT
          envData.RECEIVER,
          cid)
        .encodeABI()

      const transactionParameters = {
        to: envData.MULTIPLE_ARBITRABLE_CONTRACT_ADDRESS, // Required except during contract publications.
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
            try {
              const base = new Airtable(
                { apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY })
                .base(networkName === 'kovan'
                  ? process.env.NEXT_PUBLIC_AIRTABLE_KOVAN_BASE
                  : process.env.NEXT_PUBLIC_AIRTABLE_MAINNET_BASE)

              base('Clients').create([
                {
                  'fields': {
                    'Name': address.toLowerCase(),
                    'Ethereum Address': email,
                    'Address': phoneNumber,
                    'Address Complement': address.toLowerCase(),
                    'City': email,
                    'ZipCode': phoneNumber,
                    'Country': phoneNumber,
                    'soliditySha3': address.toLowerCase(),
                    'Mail': email,
                    'Phone Number': phoneNumber
                  }
                }
              ], (error, records) => {
                if (error) {
                  console.error(error)

                  return
                }
                records.forEach(function (record) {
                  console.log(record.getId())
                })
              })
            } catch (error) {
              console.error(error)
            }

            router.push('/loserbox-confirmation')
          }
        })
        .on('error', (error) => {
          console.error('error', error)
          setIsOngoing(false)
          setIsPending(true)
          setTxError(true)
        })
    }
  }

  const labelSellingContractModal = () => {
    return (
      <a
        href='#'
        style={{ color: 'black', textDecoration: 'underline' }}
        onClick={handleClickOpen}
      >
        I agree the terms of the contract.
      </a>
    )
  }

  return (
    <div style={{ paddingTop: 50 }}>
      <div className='row form-group' style={{ padding: '.375rem .75rem' }}>
        <h4>
          <span style={{ color: '#13a2dc' }}>Transfer</span> DAI to the Escrow
        </h4>
      </div>
      <FormControlLabel
        control={
          <Checkbox
            checked={isAgree}
            onChange={() => setIsAgree(!isAgree)}
            name='isAgree'
            color='primary'
          />
        }
        label={labelSellingContractModal()}
      />
      <div className='row'>
        <div className='col-md-12'>
          <div
            className='alert btns'
            style={{ background: '#a6ffcc' }}
            role='alert'
          >
            <p style={{ paddingTop: '15px' }}>
              To transfer the fund to the escrow you have to approve the escrow
              smart contract to handle the fund.
            </p>
          </div>
          {buttonView || txError
            ? (
              <button
                className='new-button'
                onClick={transfer}
                style={{
                  width: '100%',
                  marginTop: '20px',
                  backgroundColor: '#a6ffcc'
                }}
                type='button'
                disabled={!isAgree}
              >
                <strong>Transfer DAI To Escrow</strong>
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
      {isOpen && (
        <Dialog
          maxWidth='md'
          open={isOpen}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>
            Loser Box Contract
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              <div dangerouslySetInnerHTML={{ __html: MetaEvidence({ hashPostalAddress }).extraData['Contract Information'].replace(/\n/g, '<br />') }} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant='contained' style={{ background: '#a6ffcc', color: '#444' }}>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  )
}
