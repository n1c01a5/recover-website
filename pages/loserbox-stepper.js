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
import PersonalDetailsFormData from '../components/stepper/personal-details'
import ConnectWeb3 from '../components/stepper/connect-web3'
import SwapToken from '../components/stepper/swap-token'
import ApproveDAI from '../components/stepper/approve-dai'
import TransferDAI from '../components/stepper/transfer-dai'
import styles from '../styles/loser-box/LoserBoxStepper.module.scss'
const mattAbi = require('../contracts/MultipleArbitrationToken.json')
const erc20Abi = require('../contracts/ERC20.json')

const useStyles = makeStyles((theme) => ({
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  stepIcon: {
    color: '#a6ffcb !important'
  }
}))

function getSteps() {
  return [
    'Personal Details',
    'Connect to Web3',
    `Swap ETH to ${process.env.NEXT_PUBLIC_MAINNET_TOKEN_AMOUNT} DAI`,
    'Approve DAI Transfer',
    'Transfer DAI to the Escrow'
  ]
}
let pageCount = 1

export default function LoserboxStepper() {
  const router = useRouter()
  const [account, setAccount] = useState('')
  const [multipleArbitrableTokenContract, setMattContract] = useState(null)
  const [tokenContract, setTokenContract] = useState(null)
  const [web3, setWeb3] = useState(null)
  const [tokenAmount, setTokenAmount] = useState()
  const [networkName, setNetworkName] = useState('')
  const [isNetworkWarning, setIsNetworkWarning] = useState(false)
  const [userEthBalance, setUserEthBalance] = useState('')
  const [tokenBalanceApproved, setTokenBalanceApproved] = useState(false)
  const [cid, setCid] = useState('')
  const [envData, setEnvData] = useState({})
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const steps = getSteps()

  const changeNet = () => {
    const step = window.location.search.split('step=')

    if (localStorage.getItem('userDetails') && step[1] > 1) {
      router.push({
        pathname: '/loserbox-stepper',
        query: { step: 2 }
      })
      pageCount = 2
      setActiveStep(1)
      setTokenBalanceApproved(false)
    } else {
      router.push({
        pathname: '/loserbox-stepper',
        query: { step: 1 }
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
    }
  }, [])

  useEffect(() => {
    changeNet()
    setIconViewBox()
  }, [])

  const setIconViewBox = () => {
    document
      .querySelector('.MuiSvgIcon-root')
      .setAttribute('viewBox', '-1 -1 27 27')
  }

  const findMetamaskAccounts = async () => {
    // const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    await window.ethereum.enable()
    const web3 = (window.web3 = new Web3(window.ethereum))
    setWeb3(web3)
    const accounts = await web3.eth.getAccounts()
    if (accounts && accounts.length > 0) {
      setAccount(accounts[0])
      findNetworks(web3, accounts)
    }
  }

  const findNetworks = async (web3, accounts) => {
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

    if (networkId === 1 || networkId === 42) {
      findContractData(web3, accounts, networkId)
    }
  }

  const findContractData = async (web3, accounts, networkId) => {
    let tokenContract
    let multipleArbitrableTokenContract
    let decimals
    let amount
    if (networkId === 1) {
      setEnvData({
        ERC_TOKEN: process.env.NEXT_PUBLIC_MAINNET_ERC_TOKEN,
        MULTIPLE_ARBITRABLE_CONTRACT_ADDRESS:
          process.env.NEXT_PUBLIC_MAINNET_MULTIPLE_ARBITRABLE_CONTRACT_ADDRESS,
        TIMEOUTPAYMENT: process.env.NEXT_PUBLIC_MAINNET_TIMEOUT_PAYMENT,
        RECEIVER: process.env.NEXT_PUBLIC_MAINNET_RECEIVER_ADDRESS
      })

      tokenContract = new web3.eth.Contract(
        erc20Abi,
        process.env.NEXT_PUBLIC_MAINNET_ERC_TOKEN
      )
      multipleArbitrableTokenContract = new web3.eth.Contract(
        mattAbi,
        process.env.NEXT_PUBLIC_MAINNET_MULTIPLE_ARBITRABLE_CONTRACT_ADDRESS
      )
      // Use BigNumber
      decimals = web3.utils.toBN(process.env.NEXT_PUBLIC_MAINNET_TOKEN_DECIMALS)
      amount = web3.utils.toBN(process.env.NEXT_PUBLIC_MAINNET_TOKEN_AMOUNT)
    } else {
      setEnvData({
        ERC_TOKEN: process.env.NEXT_PUBLIC_KOVAN_ERC_TOKEN,
        MULTIPLE_ARBITRABLE_CONTRACT_ADDRESS:
          process.env.NEXT_PUBLIC_KOVAN_MULTIPLE_ARBITRABLE_CONTRACT_ADDRESS,
        TIMEOUTPAYMENT: process.env.NEXT_PUBLIC_KOVAN_TIMEOUT_PAYMENT,
        RECEIVER: process.env.NEXT_PUBLIC_KOVAN_RECEIVER_ADDRESS
      })
      tokenContract = new web3.eth.Contract(
        erc20Abi,
        process.env.NEXT_PUBLIC_KOVAN_ERC_TOKEN
      )
      multipleArbitrableTokenContract = new web3.eth.Contract(
        mattAbi,
        process.env.NEXT_PUBLIC_KOVAN_MULTIPLE_ARBITRABLE_CONTRACT_ADDRESS
      )
      // Use BigNumber
      decimals = web3.utils.toBN(process.env.NEXT_PUBLIC_KOVAN_TOKEN_DECIMALS)
      amount = web3.utils.toBN(process.env.NEXT_PUBLIC_KOVAN_TOKEN_AMOUNT)
    }

    setTokenContract(tokenContract)
    setMattContract(multipleArbitrableTokenContract)

    const value = amount.mul(web3.utils.toBN(10).pow(decimals))
    setTokenAmount(value)

    const userEthBalance = await web3.eth.getBalance(accounts[0])
    setUserEthBalance(userEthBalance)

    let userTokenBalance = await tokenContract.methods
      .balanceOf(accounts[0])
      .call()
    userTokenBalance = web3.utils.toBN(userTokenBalance)

    if (userTokenBalance.sub(value) >= 0) {
      setTokenBalanceApproved(true)
    }
    handleNextStep(networkId)
  }

  const handleNextStep = (networkId) => {
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
      query: queryName
    })
  }

  const setCidDada = (data) => {
    setCid(data)
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <PersonalDetailsFormData handleNextStep={handleNextStep} />
      case 1:
        return (
          <ConnectWeb3
            isNetworkWarning={isNetworkWarning}
            findMetamaskAccounts={findMetamaskAccounts}
            networkName={networkName}
          />
        )
      case 2:
        return (
          <SwapToken
            web3={web3}
            tokenBalanceApproved={tokenBalanceApproved}
            userEthBalance={userEthBalance}
            handleNextStep={handleNextStep}
            networkName={networkName}
          />
        )
      case 3:
        return (
          <ApproveDAI
            handleNextStep={handleNextStep}
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
            multipleArbitrableTokenContract={multipleArbitrableTokenContract}
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
    <Layout>
      <Head>
        <title>Recover.ws - Loser Box to protect your item from loss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            const stepProps = {}
            const labelProps = {}
            if (
              label ===
              `Swap ETH to ${process.env.NEXT_PUBLIC_MAINNET_TOKEN_AMOUNT} DAI`
            ) {
              labelProps.optional = (
                <Typography
                  variant="caption"
                  style={{ color: 'rgba(0, 0, 0, 0.54)', display: 'block' }}
                  align="center"
                >
                  Optional
                </Typography>
              )
            }
            return (
              <Step key={label}>
                <StepLabel
                  className="hideOnMobile"
                  StepIconProps={{
                    classes: {
                      active: classes.stepIcon,
                      completed: classes.stepIcon
                    }
                  }}
                  {...labelProps}
                >
                  {label}
                </StepLabel>
              </Step>
            )
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <p className={classes.instructions}>All steps completed</p>
            </div>
          ) : (
            <div>{getStepContent(activeStep)}</div>
          )}
        </div>
      </div>
    </Layout>
  )
}
