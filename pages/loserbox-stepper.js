import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import DEXAG from 'dexag-sdk'
import { BounceLoader } from 'react-spinners'
import { Checkbox, FormControlLabel } from '@material-ui/core';

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

function isValidEmail(value) {
  if (value.length !== '') {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  }
  else {
    return false
  }


}

function checkSpecialChar(value) {
  if (value === '') {
    return true
  }
  else {
    if (value.match(/^[a-zA-Z\s]*$/)) {
      // alert("false")
      return false
    } else {
      // alert("True")
      return true
    }
  }

}

function checkNumber(value) {
  if (value === '') {
    return true
  }
  else {
    if (value.match(/^[0-9]+$/)) {
      // alert("false")
      return false
    } else {
      // alert("True")
      return true
    }
  }

}

function checkPhone(value) {
  if (value !== '') {
    if (value.match(/^[0-9 ()+-]+$/)) {
      if (value.length <= 10 && value.length >= 7) {
        // alert("false")
        return false
      }
      else {
        // alert("True")
        return true
      }
    } else {
      // alert("True")
      return true
    }
  }
  else {
    return false
  }

}

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
  const [personalDetails, setPersonalDetails] = useState()
  const [isagree, setIsagree] = useState(false)
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

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return < PersonalDetails />
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

  const PersonalDetails = () => {
    const [recepientName, setRecepientName] = useState('');
    const [address, setaddress] = useState('')
    const [addressCp, setaddressCp] = useState('');
    const [city, setcity] = useState('')
    const [zip, setzip] = useState('')
    const [country, setcountry] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [submit, setSubmit] = useState(false)

    const [formValue, setFormValue] = useState({
      recepientNameValidation: false,
      addressValidation: false,
      cityValidation: false,
      zipValidation: false,
      countryValidation: false,
      emailValidation: false,
      phoneValidation: false,
    });

    const handleNextLocal = () => {
      // setFormValue({
      //   recepientNameValidation: true,
      //   addressValidation: true,
      //   cityValidation: true,
      //   zipValidation: true,
      //   countryValidation: true
      // })
      console.log("isValidEmail(email)", (email === '' || isValidEmail(email)))
      // console.log(" checkPhone(phone)", !checkPhone(phone))

      setSubmit(true)
      if (recepientName != '' &&
        address != '' &&
        city != '' &&
        zip != '' &&
        country != '' &&
        !checkSpecialChar(recepientName) &&
        !checkSpecialChar(country) &&
        !checkPhone(phone) &&
        (email === '' || isValidEmail(email))
      ) {
        const data = {
          recepientName: recepientName,
          address: address,
          addressCp: addressCp,
          city: city,
          zip: zip,
          country: country,
          email: email,
          phone: phone
        }
        setPersonalDetails(data);
        handleNext();
      }
    }

    const onblurChangeValue = (e) => {
      setSubmit(false)
      const name = e.target.name;
      const value = e.target.value;
      const temp = { ...formValue, [name]: true };
      console.log("temptemptemp", temp)
      console.log("checkSpecialChar(recepientName)", checkSpecialChar(recepientName))
      setFormValue(temp);

    }

    return (
      <div>
        <form>
          <div className="container">
            <div className="row form-group" style={{ padding: ".375rem .75rem" }}>
              <h4><span style={{ color: "#13a2dc" }}>Personal</span> Details</h4>
            </div>

            <div className="form-group" >
              <div classNameName="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Recipient's name</label>
                  <input name="recepientNameValidation" type="text" onBlur={(e) => onblurChangeValue(e)} className="form-control" id="recepientName" placeholder="" value={recepientName} onChange={e => setRecepientName(e.target.value)} />
                  {
                    submit && checkSpecialChar(recepientName) ? <span style={{ color: "red", fontSize: "14px" }}> The format of the name is not valid.</span> : null
                  }
                </div>
              </div>
              <div classNameName="col-md-12">
                <div className="mb-3">
                  <label htmlFor="AddresTextarea1" className="form-label">Address</label>
                  <input type="text" name="addressValidation" onBlur={(e) => onblurChangeValue(e)} className="form-control" id="address" placeholder="" value={address} onChange={e => setaddress(e.target.value)} />
                  {
                    submit && address == '' ? <span style={{ color: "red", fontSize: "14px" }}> The address is not valid.</span> : null
                  }
                </div>
              </div>
              <div classNameName="col-md-12">
                <div className="mb-3">
                  <label htmlFor="AddresComplementTextarea1" className="form-label">Address Line 2</label>
                  <input type="text" className="form-control" id="addressCp" placeholder="" value={addressCp} onChange={e => setaddressCp(e.target.value)} />
                </div>
                {/* {
                  submit && addressCp === '' ? <span style={{ color: "red" }}> The address is not valid.</span> : null
                } */}
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-4">
                <div className="mb-3 ">
                  <label htmlFor="City" className="form-label">City</label>
                  <input type="text" name="cityValidation" onBlur={(e) => onblurChangeValue(e)} className="form-control" id="city" placeholder="" value={city} onChange={e => setcity(e.target.value)} />
                  {
                    submit && checkSpecialChar(city) ? <span style={{ color: "red", fontSize: "14px" }}> The format of the city is not valid.</span> : null
                  }
                </div>

              </div>
              <div className="col-md-2">
                <div className="mb-3">
                  <label htmlFor="Zip Code" className="form-label">Zip Code</label>
                  <input type="number" name="zipValidation" onBlur={(e) => onblurChangeValue(e)} className="form-control" id="zip" placeholder="" value={zip} onChange={e => setzip(e.target.value)} />
                  {
                    submit && checkNumber(zip) ? <span style={{ color: "red", fontSize: "14px" }}>The zip not valid.</span> : null
                  }
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="Recipient's name" className="form-label">Country</label>
                  <input type="text" name="countryValidation" onBlur={(e) => onblurChangeValue(e)} className="form-control" id="country" placeholder="" value={country} onChange={e => setcountry(e.target.value)} />
                  {
                    submit && checkSpecialChar(country) ? <span style={{ color: "red", fontSize: "14px" }}> The format of the country is not valid.</span> : null
                  }
                </div>

              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Mail (Optional)*</label>
                  <input type="email" name="emailValidation" onBlur={(e) => onblurChangeValue(e)} className="form-control" id="email" placeholder="" value={email} onChange={e => setemail(e.target.value)} />
                  {
                    (email.length > 0) && submit && formValue.emailValidation && !isValidEmail(email) ? <span style={{ color: "red", fontSize: "14px" }}> The email format is not valid.</span> : null
                  }
                </div>

              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="Phone" className="form-label">Phone (Optional)*</label>
                  <input maxLength={14} type="number" pattern="[+]?\d*" name="phoneValidation" onBlur={(e) => onblurChangeValue(e)} className="form-control" id="phone" placeholder="" value={phone} onChange={e => setphone(e.target.value)} />
                  {
                    submit && formValue.phoneValidation && checkPhone(phone) ? <span style={{ color: "red", fontSize: "14px" }}>The format of the phone is not valid.</span> : null
                  }
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

  const ConnectWeb3 = () => {
    return (
      <div className="container">
        <div className="row form-group" style={{ padding: ".375rem .75rem" }}>
          <h4><span style={{ color: "#13a2dc" }}>Connect</span> to Web3</h4>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="alert" style={{ background: "#A6FFCC" }} role="alert">
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
    }
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

      // swap();
      handleNext();
    }

    return (
      <div className="container">
        <div className="row form-group" style={{ padding: ".375rem .75rem" }}>
          <h4><span style={{ color: "#13a2dc" }}>Swap</span> to DAI</h4>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="alert" style={{ background: "#A6FFCC" }} role="alert">
              <p style={{ paddingTop: "15px" }}>To buy the Loser Box, you need to swap your Ether to 50 DAI.</p>
            </div>
            <button className="btn btns" onClick={swap} style={{ width: "100%", marginTop: '20px', backgroundColor: "#A6FFCC" }} type="button" ><strong>Swap</strong></button>
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
        <div className="row form-group" style={{ padding: ".375rem .80rem" }}>
          <h4><span style={{ color: "#13a2dc" }}>Approve</span> DAI Transfer</h4>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="alert" style={{ background: "#A6FFCC" }} role="alert">
              <p style={{ paddingTop: "15px" }}>Confirm the DAI transfer to pay for your Loser Box</p>
            </div>
            {buttonView ?
              <button className="btn btns" style={{ width: "100%", marginTop: '20px', backgroundColor: "#A6FFCC" }} type="button" onClick={approve} ><strong>Approve DAI Transfer</strong></button>
              : null
            }
            <br /><br /><br /><br />
            {
              isPending ?
                <div className="col-md-12" className="pendingBox" onClick={() => window.open(`https://${networkName}.etherscan.io/tx/${txId}`)} >
                  <div className="alert btnsimg" style={{ backgroundImage: "url(" + etherscanBg + ")", backgroundRepeat: 'no-repeat', backgroundPosition: "center", background: "#A6FFCC" }} role="alert">
                    <div style={{ display: "flex" }}>
                      <div >
                        {isPending || isOngoing ?
                          <p style={{ paddingTop: "10px" }} className="trans">Transaction pending...</p>
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
      if (isagree) {
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
    }

    const linkFun = () => {
      return (
        <a href="#" style={{ color: "black", textDecoration: 'underline' }}> I agree the terms of the contract.</a>
      )
    }
    return (
      <div className="container">
        <div className="row form-group" style={{ padding: ".375rem .75rem" }}>
          <h4><span style={{ color: "#13a2dc" }}>Transfer</span> DAI to the Escrow</h4>
        </div>
        <FormControlLabel
          control={
            <Checkbox
              checked={isagree}
              onChange={() => setIsagree(!isagree)}
              name="isagree"
              color="primary"
            />
          }
          label={linkFun()}
        />
        <div className="row">
          <div className="col-md-12">
            <div className="alert btns" style={{ background: "#A6FFCC" }} role="alert">
              <p style={{ paddingTop: "15px" }}>To transfer the fund to the escrow you have to approve the escrow smart contract to handle the fund.</p>
            </div>
            {buttonView ?
              <button className="btn btns" onClick={transfer} style={{ width: "100%", marginTop: '20px', backgroundColor: "#A6FFCC" }} type="button" ><strong>Transfer DAI To Escrow</strong></button>
              : null
            }
            <br /><br /><br /><br />
            {
              isPending ?
                <div className="col-md-12" className="pendingBox" onClick={() => window.open(`https://${networkName}.etherscan.io/tx/${txId}`)} >
                  <div className="alert btnsimg" style={{ backgroundImage: "url(" + etherscanBg + ")", backgroundRepeat: 'no-repeat', backgroundPosition: "cener", background: "#A6FFCC" }} role="alert">
                    <div style={{ display: "flex" }}>
                      <div >
                        {isPending || isOngoing ?
                          <p style={{ paddingTop: "10px" }} className="trans">Transaction pending...</p>
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

    const submitPersonalDetails = async () => {
      try {
        const ipfs = ipfsClient({ host: process.env.NEXT_PUBLIC_IPFSNODE, port: process.env.NEXT_PUBLIC_IPFSPORT, protocol: process.env.NEXT_PUBLIC_IPFSPROTOCOL });
        const { cid } = await ipfs.add({ path: account, content: JSON.stringify(personalDetails) });
        console.log(cid.toString());
      } catch (error) {
        console.log('Unable to publish to IPFS', error);
      }

    }
    return (
      <div className="container">
        <div className="row form-group" style={{ padding: ".375rem .75rem" }}>
          <h4><span style={{ color: "#13a2dc" }}>Order</span> Confirmation</h4>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="alert btns" style={{ background: "#A6FFCC" }} role="alert">
              <p style={{ paddingTop: "15px" }}>Your order is on preparation</p>
            </div>
            <Link href="/">
              <button className="btn btns" onClick={submitPersonalDetails} style={{ width: "100%", marginTop: '20px', backgroundColor: "#A6FFCC" }} type="button" ><strong>Return to the Homepage</strong></button>
            </Link>
            <br /> <br />
          </div>
        </div>
      </div>
    )
  }

  return (

    <div className={classes.root}>
      <nav className="" style={{ paddingLeft: "14%", paddingRight: "10%" }}>
        {/* <div className="desktop-layout"> */}
        {/* <div className={`header-menu`}> */}
        <div style={{ marginTop: "2%" }}>
          <Link href="/">
            <img
              className="header-menu-logo"
              src="/RECOVER-logo.svg"
              alt="Recover Logo"
              style={{ top: "20px" }}
            />
          </Link>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ padding: '0 40px' }}>
            <a href="https://app.recover.ws/" target="_blank">
              Application
                </a>
          </div>
          <div style={{ padding: '0 40px' }}>
            <Link href="/blog">
              <a>Loser Box</a>
            </Link>
          </div>
          <div style={{ padding: '0 40px' }}>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </div>
          <div style={{ padding: '0 20px' }}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </nav>
      <br /> <br />
      {/* <Stepper activeStep={activeStep} >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            { label === "Swap Token" ?
              <StepLabel>{ 'optional'}</StepLabel>
              : null
              // <Typography variant="caption" style={{ marginLeft: "40%", fontWeight: 'bold' }}>Optional</Typography> : null
            }

          </Step>
        ))}
      </Stepper> */}
      <Stepper activeStep={activeStep} style={{ marginLeft: "13%", marginRight: "13%" }}>
        {steps.map((label, index) => {

          const stepProps = {};
          const labelProps = {};
          if (label === "Swap Token") {
            labelProps.optional = <Typography variant="caption" style={{ color: "rgba(0, 0, 0, 0.54)" }}>Optional</Typography>;
          }
          // if (isStepSkipped(index)) {
          //   stepProps.completed = false;
          // }
          return (

            label === 'Confirmation' ? null :

              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>

          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
          </div>
        ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            </div>
          )}
      </div>
      <div className="desktop-layout" style={{ paddingLeft: "5%", paddingRight: "1%" }}>
        <div
          style={{
            marginTop: '120px',
            padding: '0 calc((100vw - 1370px) / 2) 0 calc((100vw - 1250px) / 2)'
          }}
        >
          <footer style={{ display: 'flex', marginTop: "10%" }}>
            <div
              style={{
                display: 'flex',
                flex: '1',
                paddingTop: '20px',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ width: '191px' }}>
                <Link href="/">
                  <img
                    className="header-menu-logo"
                    src="/RECOVER-logo.svg"
                    alt="Recover Logo"
                    role="presentation"
                  />
                </Link>
                <p
                  style={{
                    width: '191px',
                    marginTop: '30px',
                    textAlign: 'center',
                    marginBottom: "0rem"
                  }}
                >
                  <strong>Use it, or Lose it</strong>
                </p>
                <div style={{ textAlign: 'center' }}>
                  <Link href="/"><a style={{ fontSize: '20px', cursor: 'pointer' }}>🇺🇸</a></Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link href="/fr"><a style={{ fontSize: '20px', cursor: 'pointer' }}>🇫🇷</a></Link>
                </div>
                <p
                  style={{
                    width: '191px',
                    marginTop: '10px',
                    textAlign: 'center',
                    color: "black",
                    fontFamily: "bold"
                  }}
                >
                  @recover 2020
                </p>
              </div>
              <div>
                <p style={{ padding: '8px 0 10px 0', fontSize: '18px' }}>
                  <strong>Protocol</strong>
                </p>
                <ul>
                  <li style={{ paddingBottom: '2px' }}>
                    <a href="https://kleros.io/">Kleros</a>
                  </li>
                  <li style={{ padding: '2px 0' }}>
                    <a href="https://ethereum.org/en/">Ethereum</a>
                  </li>
                  <li style={{ padding: '2px 0' }}>
                    <a href="https://ipfs.io/">IPFS</a>
                  </li>
                </ul>
              </div>
              <div>
                <p style={{ padding: '8px 0 10px 0', fontSize: '18px' }}>
                  <strong>Incubator</strong>
                </p>
                <ul>
                  <li style={{ paddingBottom: '2px' }}>
                    <a href="https://stationf.co/">StationF</a>
                  </li>
                </ul>
              </div>
              <div>
                <p style={{ padding: '8px 0 10px 0', fontSize: '18px' }}>
                  <strong>Social</strong>
                </p>
                <ul>
                  <li style={{ paddingBottom: '2px' }}>
                    <a href="https://github.com/blockchain-mafia/">Github</a>
                  </li>
                  <li style={{ padding: '2px 0' }}>
                    <a href="mailto: contact@wagner-nicolas.com">Mail</a>
                  </li>
                </ul>
              </div>
              <div>
                <p style={{ padding: '8px 0 10px 0', fontSize: '18px' }}>
                  <strong>Last Posts</strong>
                </p>
                <ul>
                  <li style={{ paddingBottom: '2px' }}>
                    <a href="/">Escrow</a>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ height: '180px' }}>
              <img
                style={{ height: '180px' }}
                className="footer-cryptokitty-recover"
                src="/cryptokitty-recover.png"
                alt="Cryptokitty with Recover"
                role="presentation"
              />
            </div>
          </footer>
        </div>
      </div>

      <style jsx global>
        {`
          // @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700');
          // @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

          body,
          html {
            padding: 0;
            margin: 0;
            min-width: 100vw;
            min-height: 100hw;
          }

          *,
          *::after,
          *::before {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }

          // body {
          //   font-family: Montserrat, Roboto, sans-serif;
          //   text-rendering: optimizeLegibility;
          //   color: #444;
          // }

          ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          a {
            text-decoration: none;
            color: #444;
            font-weight: 500;
          }

          strong {
            // font-weight: 700;
          }

          .header-menu {
            display: flex;
            justify-content: space-between;
            position: fixed;
            min-width: 100vw;
            padding: 2px calc((100vw - 1250px) / 2) 0 calc((100vw - 1250px) / 2);
            line-height: 58px;
            color: #444;
            box-shadow: 0px 1px 10px #999;
            background: #fff;
            z-index: 1000;
          }

          .header-menu__isTop {
            position: absolute;
            margin-top: 30px;
            box-shadow: 0 0 0 #fff;
            z-index: 1000;
          }

          .header-menu-logo {
            position: relative;
            top: 7px;
            cursor: pointer;
          }

          .header-menu-small {
            position: fixed;
            box-shadow: 0px 1px 10px #999;
            background: #fff;
            line-height: 60px;
            min-width: 100%;
            color: #444;
            z-index: 100;
          }

          /* Position and sizing of burger button */
          .bm-burger-button {
            position: fixed;
            width: 36px;
            height: 30px;
            right: 36px;
            top: 16px;
          }

          /* Color/shape of burger icon bars */
          .bm-burger-bars {
            background: #444;
          }

          /* Color/shape of burger icon bars on hover*/
          .bm-burger-bars-hover {
            background: #444;
          }

          /* Position and sizing of clickable cross button */
          .bm-cross-button {
            height: 24px;
            width: 24px;
          }

          /* Color/shape of close button cross */
          .bm-cross {
            background: #444;
          }

          /*
          Sidebar wrapper styles
          Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
          */
          .bm-menu-wrap {
            position: fixed;
            height: 100%;
          }

          /* General sidebar styles */
          .bm-menu {
            background: #fff;
            padding: 2.5em 1.5em 0;
            font-size: 1.15em;
          }

          /* Wrapper for item list */
          .bm-item-list {
            color: #444;
            padding: 0.8em;
          }

          /* Individual item */
          .bm-item {
            display: inline-block;
          }

          /* Styling of overlay */
          .bm-overlay {
            background: rgba(0, 0, 0, 0.3);
          }

          .container {
            display: flex;
            flex-direction: column;
            padding-top: 150px;
          }

          div[id^='rcc'] {
            padding: 8px 0;
            border-bottom: 1px solid #efefef;
          }

          .additionalClassForHead {
            padding: 5px 0;
            background: #fff !important;
            color: #444 !important;
            font-weight: 300 !important;
          }

          .additionalClassForHeadMobile {
            padding: 5px 0;
            background: #fff !important;
            color: #444 !important;
            font-weight: 300 !important;
          }

          .additionalClassForHead h3 {
            font-family: Montserrat;
            font-size: 22px !important;
            font-weight: 200 !important;
            margin: 0;
            padding: 0;
          }

          .additionalClassForHeadMobile h3 {
            font-family: Montserrat;
            font-size: 18px !important;
            font-weight: 200 !important;
            margin: 0;
            padding: 0;
          }

          .additionalClassForHead:hover,
          .active-accordion {
            color: #444 !important;
            background: #fff !important;
          }

          .additionalClassForHeadMobile:hover,
          .active-accordion {
            color: #444 !important;
            background: #fff !important;
          }

          .additionalClassForContent {
            background: #fff !important;
            margin: 0 !important;
            padding: 17px 0 !important;
            line-height: 24px !important;
          }

          .additionalClassForContent p {
            padding: 7px 0;
          }
        `}
      </style>

    </div>
  );
}
