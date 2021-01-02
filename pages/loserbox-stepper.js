import Link from 'next/link'

import { slide as Menu } from 'react-burger-menu'
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DEXAG from 'dexag-sdk'
import { BounceLoader } from 'react-spinners'
import Layout from '../components/layout'


import Web3 from 'web3';
const ipfsClient = require('ipfs-http-client')
const mattAbi = require('../contracts/MultipleArbitrationToken.json')
const erc20Abi = require('../contracts/ERC20.json')

import etherscanBg from '../asset/etherscan-bg.png'

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
}));


function getSteps() {
  return ['Personal Details', 'Connect to Web3', `Swap Token`, 'Approve DAI Transfer', 'Transfer DAI to the Escrow', 'Confirmation'];
}

export default function HorizontalLabelPositionBelowStepper() {

  const [account, setAccount] = useState('')
  const [mattContract, setmattContract] = useState(null)
  const [tokenContract, settokenContract] = useState(null)
  const [web3, setWeb3] = useState(null)
  const [txId, setTxId] = useState('')
  const [tokenAmount, settokenAmount] = useState()
  const [networkName, setnetworkName] = useState('')

  const [metamaskConnected, setmetamaskConnected] = useState(false)
  const [isValidate, setisValidate] = useState(false)
  const [buttonView, setbuttonView] = useState(true)
  const [isPending, setisPending] = useState(false);
  const [isOngoing, setIsOngoing] = useState(false)
  const [issuccess, setIssuccess] = useState(false)
  const [tokenBalanceApproved, settokenBalanceApproved] = useState(false)

  const [recepientNameL, setRecepientNameL] = useState("");
  const [addressL, setaddressL] = useState("")
  const [addressCpL, setaddressCpL] = useState("");
  const [cityL, setcityL] = useState("")
  const [zipL, setzipL] = useState("")
  const [countryL, setcountryL] = useState("")
  const [emailL, setemailL] = useState("")
  const [phoneL, setphoneL] = useState("")


  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setisValidate(false)
    setbuttonView(true)
    setIssuccess(false)
    setisPending(false)
    setIsOngoing(false)
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return < PersonalDetails
          recepientNameL={recepientNameL}
          addressL={addressL}
          addressCpL={addressCpL}
          cityL={cityL}
          zipL={zipL}
          countryL={countryL}
          emailL={emailL}
          phoneL={phoneL}
        />
      case 1:
        return < ConnectWeb3 />
      // swapToken
      case 2:
        return < SwapToken />
      case 3:
        return < ApproveDAI />
      case 4:
        return < TransferDAI />
      case 5:
        return < Confirmation />

      default:
        return 'Unknown stepIndex';
    }
  };

  const PersonalDetails = ({ recepientNameL, addressL, addressCpL, cityL, zipL, countryL, emailL, phoneL }) => {
    const [recepientName, setRecepientName] = useState(recepientNameL);
    const [address, setaddress] = useState(addressL)
    const [addressCp, setaddressCp] = useState(addressCpL);
    const [city, setcity] = useState(cityL)
    const [zip, setzip] = useState(zipL)
    const [country, setcountry] = useState(countryL)
    const [email, setemail] = useState(emailL)
    const [phone, setphone] = useState(phoneL)

    const handleNextLocal = () => {
      if (recepientName != '' && address != '' && addressCp != '' && city != '' && zip != '' && country != '' && email != '' && phone != '') {
        setRecepientNameL(recepientName)
        setaddressL(address)
        setaddressCpL(addressCp)
        setcityL(city)
        setzipL(zip)
        setcountryL(country)
        setemailL(email)
        setphoneL(phone)
        handleNext();
      }
    }

    return (
      <div>
        <form>
          <div className="container">
            <div className="row form-group" style={{ padding: ".375rem .75rem" }}>
              <h4><span style={{ color: "#13a2dc" }}>Personal</span> Details</h4>
            </div>

            <div className="form-group" >
              <div className="col-md-12">
                <div className="mb-3">
                  <label htmlFor="Recipient's name" className="form-label">Recipient's name</label>
                  <input type="text"
                    className="form-control"
                    id="recepientName"
                    placeholder=""
                    value={recepientName}
                    onChange={(e) => setRecepientName(e.target.value)} />
                </div>
              </div>
              <div classNameName="col-md-12">
                <div className="mb-3">
                  <label htmlFor="AddresTextarea1" className="form-label">Addres</label>
                  <input type="text" className="form-control" id="address" placeholder="" value={address} onChange={e => setaddress(e.target.value)} />
                </div>
              </div>
              <div classNameName="col-md-12">
                <div className="mb-3">
                  <label htmlFor="AddresComplementTextarea1" className="form-label">Address Complement</label>
                  <input type="text" className="form-control" id="addressCp" placeholder="" value={addressCp} onChange={e => setaddressCp(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-4">
                <div className="mb-3 ">
                  <label htmlFor="City" className="form-label">City</label>
                  <input type="text" className="form-control" id="city" placeholder="" value={city} onChange={e => setcity(e.target.value)} />
                </div>
              </div>
              <div className="col-md-2">
                <div className="mb-3">
                  <label htmlFor="Zip Code" className="form-label">Zip Code</label>
                  <input type="text" className="form-control" id="zip" placeholder="" value={zip} onChange={e => setzip(e.target.value)} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="Recipient's name" className="form-label">Country</label>
                  <input type="text" className="form-control" id="country" placeholder="" value={country} onChange={e => setcountry(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Mail</label>
                  <input type="email" className="form-control" id="email" placeholder="" value={email} onChange={e => setemail(e.target.value)} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="Phone" className="form-label">Phone</label>
                  <input type="text" className="form-control" id="phone" placeholder="" value={phone} onChange={e => setphone(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12 text-center" style={{ margin: "30px 0px" }}>
                <div className="d-grid gap-2">
                  <button className="btn btns" style={{ width: "100%", backgroundColor: "#A6FFCC" }} type="button" onClick={handleNextLocal} ><strong>Validate</strong></button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }

  const submitPersonalDetails = async () => {
    console.log("Hello");

    // const data = recepientName.concat(address, addressCp, city, zip, country, email, phone)
    // console.log('data', data);

    // const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' });
    // const { cid } = await ipfs.add({ path: recepientName, content: data });
    // console.log(cid.toString());

    setRecepientName("")
    setaddress("")
    setaddressCp("")
    setcity("")
    setzip("")
    setcountry("")
    setemail("")
    setphone("")
    setisValidate(true)

  }


  const ConnectWeb3 = () => {
    return (
      <div className="container">
        <div className="row form-group" style={{ padding: ".375rem .75rem" }}>
          <h4><span style={{ color: "#13a2dc" }}>Connect</span> to Web3</h4>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="alert btns" role="alert">
              <p>A pop up will open to connect to your Metamask wallet.</p>
              <p>If you don’t have metamask you can install it in clicking on this link <a target='_blank' href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en'>Metamask</a></p>
            </div>
            <button className="btn btns" style={{ width: "100%", marginTop: '20px', backgroundColor: "#A6FFCC" }} type="button" onClick={findMetamaskAccounts} ><strong>Connect to Web3</strong></button>
          </div>
        </div>
      </div>
    )
  };

  const findMetamaskAccounts = async () => {

    // setisValidate(false)
    // const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    await window.ethereum.enable();
    const web3 = window.web3 = new Web3(window.ethereum);
    setWeb3(web3)
    const accounts = await web3.eth.getAccounts()
    if (accounts && accounts.length > 0) {
      setAccount(accounts[0]);
      setmetamaskConnected(true);
      setisValidate(true)

      const networkId = await web3.eth.net.getId()
      switch (networkId) {
        case 1:
          setnetworkName('')
          break;
        case 3:
          setnetworkName('ropsten')
          break;
        case 4:
          setnetworkName('rinkeby')
          break;
        case 42:
          setnetworkName('kovan')
          break;
        default:
          break;
      }

      const tokenContract = new web3.eth.Contract(erc20Abi, process.env.NEXT_PUBLIC_ERCTOKEN)
      settokenContract(tokenContract)
      const mattContract = new web3.eth.Contract(mattAbi, process.env.NEXT_PUBLIC_MATTADDRESS)
      setmattContract(mattContract)

      // Use BigNumber
      let decimals = web3.utils.toBN(process.env.NEXT_PUBLIC_TOKENDECIMALS);
      let amount = web3.utils.toBN(process.env.NEXT_PUBLIC_TOKENAMOUNT);
      let value = amount.mul(web3.utils.toBN(10).pow(decimals));
      settokenAmount(value)

      const userTokenBalance = await tokenContract.methods.balanceOf(accounts[0]).call()

      if (userTokenBalance > value) {
        settokenBalanceApproved(true)
      }
      handleNext();
    }
  };

  const SwapToken = () => {
    if (tokenBalanceApproved) {
      handleNext();
    } else {
      const swap = async () => {

        const sdk = DEXAG.fromProvider(window.ethereum);

        // receive status messages as the client executes the trade
        sdk.registerStatusHandler((status, data) => {
          console.log('status, data ===> ', status, data);
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
      swap();
      handleNext();

    }

    return (
      <div className="container">
        <div className="row form-group" style={{ padding: ".375rem .75rem" }}>
          <h4><span style={{ color: "#13a2dc" }}>Swap</span> to DAI</h4>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="alert btns" role="alert">
              <p>To buy the Loser Box, you need to swap your Ether to 50 DAI.</p>
            </div>
            <button className="btn btns" style={{ width: "100%", backgroundColor: "#A6FFCC" }} type="button" ><strong>Swap</strong></button>
          </div>
        </div>
      </div>
    )

  }

  const ApproveDAI = () => {

    const approve = async () => {
      setisPending(true)
      setIsOngoing(false)
      setIssuccess(false)
      // setisValidate(false)
      setbuttonView(false)

      var data = tokenContract.methods.approve(process.env.NEXT_PUBLIC_MATTADDRESS, tokenAmount).encodeABI();

      const transactionParameters = {
        to: process.env.NEXT_PUBLIC_ERCTOKEN, // Required except during contract publications.
        from: account, // must match user's active address.
        data: data,
      };

      web3.eth.sendTransaction(transactionParameters)
        .on('transactionHash', (hash) => {
          console.log('transactionHash', hash);
          setIsOngoing(true)
          setIssuccess(false)
          setTxId(hash);
        })
        .once('confirmation', (confirmationNumber, receipt) => {
          console.log('confirmation', receipt);
          setIsOngoing(false)
          setIssuccess(true)
          setisPending(false)
          setisValidate(true)
          handleNext();
        })
        .on('error', console.error);
    };

    return (
      <div className="container">
        <div className="row form-group" style={{ padding: ".375rem .75rem" }}>
          <h4><span style={{ color: "#13a2dc" }}>Approve</span> DAI Transfer</h4>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="alert btns" role="alert">
              <p>Confirm the DAI transfer to pay for your Loser Box</p>
            </div>
            {buttonView ?
              <button className="btn btns" style={{ width: "100%", marginTop: '20px', backgroundColor: "#A6FFCC" }} type="button" onClick={approve} ><strong>Approve DAI Transfer</strong></button>
              : null
            }
            <br /><br /><br /><br />
            {
              isPending ?
                <div className="col-md-12" className="pendingBox" onClick={() => window.open(`https://${networkName}.etherscan.io/tx/${txId}`)} >
                  <div className="alert btns btnsimg" style={{ backgroundImage: "url(" + etherscanBg + ")", backgroundRepeat: 'no-repeat', backgroundPosition: "cener" }} role="alert">
                    <div style={{ display: "flex" }}>
                      <div >
                        {isPending || isOngoing ?
                          <p className="trans">Transaction pending...</p>
                          : null}
                      </div>
                      <div style={{ marginLeft: "50%" }}>
                        {
                          isOngoing ? <BounceLoader size={50} color={'#fff'} /> : null
                        }
                      </div>
                    </div>
                  </div>
                </div>
                : null
            }
          </div>
        </div>
      </div >
    )
  };



  const TransferDAI = () => {

    const transfer = async () => {
      setisPending(true)
      setIsOngoing(false)
      setIssuccess(false)
      setbuttonView(false)


      var data = mattContract.methods.createTransaction(tokenAmount, process.env.NEXT_PUBLIC_ERCTOKEN, (process.env.NEXT_PUBLIC_TIMEOUTPAYMENT).toString(), process.env.NEXT_PUBLIC_RECEIVER, process.env.NEXT_PUBLIC_METAEVIDENCE).encodeABI();
      console.log('data', data);
      const transactionParameters = {
        to: process.env.NEXT_PUBLIC_MATTADDRESS,// Required except during contract publications.
        from: account, // must match user's active address.
        data: data,
      };

      web3.eth.sendTransaction(transactionParameters)
        .on('transactionHash', (hash) => {
          setIsOngoing(true)
          setIssuccess(false)
          setTxId(hash);
        })
        .once('confirmation', (confirmationNumber, receipt) => {
          setIsOngoing(false)
          setIssuccess(true)
          setisPending(false)
          setisValidate(true)
          handleNext();
        })
        .on('error', console.error);
    }
    return (
      <div className="container">
        <div className="row form-group" style={{ padding: ".375rem .75rem" }}>
          <h4><span style={{ color: "#13a2dc" }}>Tranfer</span> DAI to the Escrow</h4>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="alert btns" role="alert">
              <p>To trnsfer the fund to the escrow you have to approve the escrow smart contract to handle the fund.</p>
            </div>
            {buttonView ?
              <button className="btn btns" onClick={transfer} style={{ width: "100%", marginTop: '20px', backgroundColor: "#A6FFCC" }} type="button" ><strong>Transfer DAI To Escrow</strong></button>
              : null
            }
            <br /><br /><br /><br />
            {
              isPending ?
                <div className="col-md-12" className="pendingBox" onClick={() => window.open(`https://${networkName}.etherscan.io/tx/${txId}`)} >
                  <div className="alert btns btnsimg" style={{ backgroundImage: "url(" + etherscanBg + ")", backgroundRepeat: 'no-repeat', backgroundPosition: "cener" }} role="alert">
                    <div style={{ display: "flex" }}>
                      <div >
                        {isPending || isOngoing ?
                          <p className="trans">Transaction pending...</p>
                          : null}
                      </div>
                      <div style={{ marginLeft: "50%" }}>
                        {
                          isOngoing ? <BounceLoader size={50} color={'#fff'} /> : null
                        }
                      </div>
                    </div>
                  </div>
                </div>
                : null
            }
          </div>
        </div>
      </div>
    )
  };



  const Confirmation = () => {
    return (
      <div className="container">
        <div className="row form-group" style={{ padding: ".375rem .75rem" }}>
          <h4><span style={{ color: "#13a2dc" }}>Order</span> Confirmation</h4>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="alert btns" role="alert">
              <p>Your order is on preparation</p>
            </div>
            <Link href="/">
              <button className="btn btns" style={{ width: "100%", marginTop: '20px', backgroundColor: "#A6FFCC" }} type="button" ><strong>Return to the Homepage</strong></button>
            </Link>
            <br /> <br />
          </div>
        </div>
      </div>
    )
  }

  return (

    <div className={classes.root}>
      <nav className="">
        <Link href="/">
          <img
            style={{ paddingLeft: '20px' }}
            className="header-menu-logo"
            src="/RECOVER-logo.svg"
            alt="Recover Logo"
          />
        </Link>
        {/* <Menu> */}
          <a href="https://app.recover.ws/" target="_blank">
            APPLICATION
              </a>
          <a>
            <Link href="/blog">
              <a>BLOG</a>
            </Link>
          </a>
          <a>
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
          </a>
        {/* </Menu> */}
      </nav>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            { label === "Swap Token" ?
              <Typography variant="caption" style={{ marginLeft: "40%", fontWeight: 'bold' }}>Optional</Typography> : null
            }

          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              {activeStep === 0 ? null :
                <div style={{ paddingLeft: "15%" }}>
                  {/* {
                    false ? null :
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.backButton}
                      >
                        Back
                      </Button>
                  } */}
                  {/* {activeStep === 1 ? <Button variant="contained" color="primary" onClick={handleNext}
                    // disabled={!isValidate} 
                    style={{ marginRight: "1%" }}
                  >Skip</Button> : null} */}
                  {/* <Button variant="contained" color="primary" onClick={handleNext}
                    disabled={!isValidate}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button> */}
                </div>
              }
            </div>
          )}
      </div>
    </div>
  );
}
