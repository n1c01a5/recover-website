import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Typography from '@material-ui/core/Typography'
import Layout from '../components/layout'
import Web3 from 'web3'
import PersonalDetails from '../components/stepper/personal-details'
import ConnectWeb3 from '../components/stepper/connect-web3'
import SwapToken from '../components/stepper/swap-token'
import ApproveDAI from '../components/stepper/approve-dai'
import TransferDAI from '../components/stepper/transfer-dai'
const mattAbi = require('../contracts/MultipleArbitrationToken.json')
const erc20Abi = require('../contracts/ERC20.json')

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

function getSteps() {
  return [
    'Personal Details',
    'Connect to Web3',
    `Swap ETH to ${process.env.NEXT_PUBLIC_MAINNET_TOKEN_AMOUNT} DAI`,
    'Approve DAI Transfer',
    'Transfer DAI to the Escrow',
  ]
}
let pageCount

export default function LoserboxStepper() {
  const router = useRouter()
  const [account, setAccount] = useState('')
  const [mattContract, setMattContract] = useState(null)
  const [tokenContract, setTokenContract] = useState(null)
  const [web3, setWeb3] = useState(null)
  const [tokenAmount, setTokenAmount] = useState()
  const [networkName, setNetworkName] = useState('')
  const [isnetworkWarning, setIsNetworkWarning] = useState(false)
  const [buttonView, setbuttonView] = useState(true)
  const [isPending, setisPending] = useState(false)
  const [isOngoing, setIsOngoing] = useState(false)
  const [issuccess, setIssuccess] = useState(false)
  const [txerror, setTxerror] = useState(false)
  const [tokenBalanceApproved, setTokenBalanceApproved] = useState(false)
  const [cid, setCid] = useState('')
  const [envData, setEnvData] = useState({})
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const steps = getSteps()

  const changeNet = () => {
    if (localStorage.getItem('userDetails')) {
      router.push({
        pathname: '/loserbox-stepper',
        query: { step: 2 },
      })
      pageCount = 2
      setActiveStep(1)
      setTokenBalanceApproved(false)
    } else {
      router.push({
        pathname: '/loserbox-stepper',
        query: { step: 1 },
      })
      setActiveStep(0)
      pageCount = 1
    }
  }

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', () => {
        changeNet()
      })
      window.ethereum.on('chainChanged', () => {
        changeNet()
        window.location.reload()
      })
      console.log('activeStep', activeStep)
      console.log('getItem', localStorage.getItem('userDetails'))
    }
  }, [])

  useEffect(() => {
    changeNet()
  }, [])

  const findMetamaskAccounts = async () => {
    // const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    await window.ethereum.enable()
    const web3 = (window.web3 = new Web3(window.ethereum))
    setWeb3(web3)
    const accounts = await web3.eth.getAccounts()
    if (accounts && accounts.length > 0) {
      setAccount(accounts[0])
      const networkId = await web3.eth.net.getId()
      switch (networkId) {
        case 1:
          setNetworkName('')
          break
        case 3:
          setNetworkName('ropsten')
          setIsNetworkWarning(true)
          break
        case 4:
          setNetworkName('rinkeby')
          setIsNetworkWarning(true)
          break
        case 5:
          setNetworkName('goerli')
          setIsNetworkWarning(true)
          break
        case 42:
          setNetworkName('kovan')
          break
        default:
          break
      }

      if (networkId == 1 || networkId == 42) {
        let tokenContract
        let mattContract
        let decimals
        let amount
        if (networkId === 1) {
          setEnvData({
            ERCTOKEN: process.env.NEXT_PUBLIC_MAINNET_ERC_TOKEN,
            MATTADDRESS:
              process.env
                .NEXT_PUBLIC_MAINNET_MULTIPLE_ARBITRABLE_CONTRACT_ADDRESS,
            TIMEOUTPAYMENT: process.env.NEXT_PUBLIC_MAINNET_TIMEOUT_PAYMENT,
            RECEIVER: process.env.NEXT_PUBLIC_MAINNET_RECEIVER_ADDRESS,
            METAEVIDENCE: process.env.NEXT_PUBLIC_MAINNET_METAEVIDENCE,
          })

          tokenContract = new web3.eth.Contract(
            erc20Abi,
            process.env.NEXT_PUBLIC_MAINNET_ERC_TOKEN
          )
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
          setEnvData({
            ERCTOKEN: process.env.NEXT_PUBLIC_KOVAN_ERC_TOKEN,
            MATTADDRESS:
              process.env
                .NEXT_PUBLIC_KOVAN_MULTIPLE_ARBITRABLE_CONTRACT_ADDRESS,
            TIMEOUTPAYMENT: process.env.NEXT_PUBLIC_KOVAN_TIMEOUT_PAYMENT,
            RECEIVER: process.env.NEXT_PUBLIC_KOVAN_RECEIVER_ADDRESS,
            METAEVIDENCE: process.env.NEXT_PUBLIC_KOVAN_METAEVIDENCE,
          })
          tokenContract = new web3.eth.Contract(
            erc20Abi,
            process.env.NEXT_PUBLIC_KOVAN_ERC_TOKEN
          )
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

        setTokenContract(tokenContract)

        setMattContract(mattContract)
        let value = amount.mul(web3.utils.toBN(10).pow(decimals))
        setTokenAmount(value)

        const userTokenBalance = await tokenContract.methods
          .balanceOf(accounts[0])
          .call()
        if (userTokenBalance > value) {
          setTokenBalanceApproved(true)
        }
        handleNext(networkId)
      }
    }
  }

  const handleNext = (networkId) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    pageCount = pageCount + 1
    let queryName
    if (networkId === 42 || networkName !== '') {
      queryName = { network: 'kovan', step: encodeURI(pageCount) }
    } else {
      queryName = { step: encodeURI(pageCount) }
    }
    router.push({
      pathname: '/loserbox-stepper',
      query: queryName,
    })
    console.log('activeStepNext', activeStep + 1)
  }

  const changeState = () => {
    setisPending(true)
    setIsOngoing(false)
    setIssuccess(false)
    setbuttonView(false)
  }

  const setCidDada = (data) => {
    setCid(data)
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <PersonalDetails next={handleNext} />
      case 1:
        return (
          <ConnectWeb3
            isnetworkWarning={isnetworkWarning}
            findMetamaskAccounts={findMetamaskAccounts}
            networkName={networkName}
          />
        )
      case 2:
        return (
          <SwapToken
            tokenBalanceApproved={tokenBalanceApproved}
            handleNext={handleNext}
            changeState={changeState}
            buttonView={buttonView}
            isPending={isPending}
            networkName={networkName}
            isOngoing={isOngoing}
            txerror={txerror}
          />
        )
      case 3:
        return (
          <ApproveDAI
            handleNext={handleNext}
            tokenContract={tokenContract}
            web3={web3}
            tokenAmount={tokenAmount}
            account={account}
            networkName={networkName}
            envData={envData}
            setCid={setCidDada}
          />
        )
      case 4:
        return (
          <TransferDAI
            mattContract={mattContract}
            web3={web3}
            tokenAmount={tokenAmount}
            account={account}
            networkName={networkName}
            envData={envData}
            cid={cid}
          />
        )
      default:
        return 'Unknown stepIndex'
    }
  }

  return (
    <Layout noRightButton>
      <Head>
        <title>Recover.ws - Loser Box to protect your item from loss</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap'
        rel='stylesheet'
      />
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            const stepProps = {}
            const labelProps = {}
            if (label === `Swap ETH to ${process.env.NEXT_PUBLIC_MAINNET_TOKEN_AMOUNT} DAI`) {
              labelProps.optional = (
                <Typography
                  variant='caption'
                  style={{ color: 'rgba(0, 0, 0, 0.54)', display: 'block' }}
                  align='center'
                >
                  Optional
                </Typography>
              )
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel className='hideOnMobile' {...labelProps}>
                  {label}
                </StepLabel>
              </Step>
            )
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
            </div>
          ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>
              </div>
            )}
        </div>
      </div>
    </Layout>
  )
}
