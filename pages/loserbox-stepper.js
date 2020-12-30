import Head from 'next/head'

import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DEXAG from 'dexag-sdk'
import { BounceLoader } from 'react-spinners'


import Web3 from 'web3';
const ipfsClient = require('ipfs-http-client')
const mattAbi = require('../contracts/MultipleArbitrationToken.json')
const erc20Abi = require('../contracts/ERC20.json')
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import etherscanBg from '../asset/etherscan-bg.png'

// const Box = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 50px;
//   color: #444;
//   background-color: #a6ffcb;
//   background-image: url(${etherscanBg});
//   background-repeat: no-repeat;
//   background-position: center;
//   overflow: hidden;
//   font-family: Roboto;
//   padding: 0 40px;
//   border-radius: 10px;
//   font-size: 24px;
//   height: 100px;
//   overflow: hidden;
//   &:hover {
//     cursor: pointer;
//   }`



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
  return ['Personal Details', 'Connect to Web3', 'Approve DAI Transfer', 'Transfer DAI to the Escrow', 'Confirmation'];
}

// function getStepContent(stepIndex) {
//   switch (stepIndex) {
//     case 0:
//       return < PersonalDetails />
//     case 1:
//       return < Connectweb />
//     case 2:
//       return ApproveDai();
//     case 3:
//       return transferDAI();
//     case 4:
//       return confirmation();

//     default:
//       return 'Unknown stepIndex';
//   }
// }

export default function HorizontalLabelPositionBelowStepper() {

  const [account, setAccount] = useState('')
  const [contract, setContract] = useState('')
  const [erc20Contract, setErc20Contract] = useState('')
  const [metamaskInstalled, setmetamaskInstalled] = useState(false)
  const [metamaskConnected, setmetamaskConnected] = useState(false)
  const [isValidate, setisValidate] = useState(false)
  const [web3, setWeb3] = useState(null)
  const [txId, setTxId] = useState('')
  const [buttonView, setbuttonView] = useState(false)
  const [isPending, setisPending] = useState(true);
  const [isOngoing, setIsOngoing] = useState(false)
  const [issuccess, setIssuccess] = useState(false)
  const [tokenBalanceApproved, settokenBalanceApproved] = useState(false)


  // const [recepientName, setRecepientName] = useState("");
  // const [address, setaddress] = useState("")
  // const [addressCp, setaddressCp] = useState("");
  // const [city, setcity] = useState("")
  // const [zip, setzip] = useState("")
  // const [country, setcountry] = useState("")
  // const [email, setemail] = useState("")
  // const [phone, setphone] = useState("")

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
    setisPending(true)
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
        swapToken
      case 2:
        return < ApproveDAI />
      // case 2:
      // return < SwapToken />
      case 3:
        return < TransferDAI />
      case 4:
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
              <div classNameName="col-md-12">
                <div className="mb-3">
                  <label for="Recipient's name" className="form-label">Recipient's name</label>
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
                  <label for="AddresTextarea1" className="form-label">Addres</label>
                  <input type="text" className="form-control" id="address" placeholder="" value={address} onChange={e => setaddress(e.target.value)} />
                </div>
              </div>
              <div classNameName="col-md-12">
                <div className="mb-3">
                  <label for="AddresComplementTextarea1" className="form-label">Address Complement</label>
                  <input type="text" className="form-control" id="addressCp" placeholder="" value={addressCp} onChange={e => setaddressCp(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-4">
                <div className="mb-3 ">
                  <label for="City" className="form-label">City</label>
                  <input type="text" className="form-control" id="city" placeholder="" value={city} onChange={e => setcity(e.target.value)} />
                </div>
              </div>
              <div className="col-md-2">
                <div className="mb-3">
                  <label for="Zip Code" className="form-label">Zip Code</label>
                  <input type="text" className="form-control" id="zip" placeholder="" value={zip} onChange={e => setzip(e.target.value)} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label for="Recipient's name" className="form-label">Country</label>
                  <input type="text" className="form-control" id="country" placeholder="" value={country} onChange={e => setcountry(e.target.value)} />
                </div>
              </div>
            </div>

            <div className="row form-group">
              <div className="col-md-6">
                <div className="mb-3">
                  <label for="email" className="form-label">Mail</label>
                  <input type="email" className="form-control" id="email" placeholder="" value={email} onChange={e => setemail(e.target.value)} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label for="Phone" className="form-label">Phone</label>
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
    const data = recepientName.concat(address, addressCp, city, zip, country, email, phone)
    console.log('data', data);
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
    useEffect(() => {
      // findMetamaskAccounts();
    }, [])
    return (
      <div className="container">
        <div className="row form-group" style={{ padding: ".375rem .75rem" }}>
          <h4><span style={{ color: "#13a2dc" }}>Connect</span> to Web3</h4>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="alert btns" role="alert">
              <p>A pop up will open to connect to your Metamask wallet.</p>
              <p>If you don’t have metamask you can install it in clicking on this link: metamask.io .</p>
            </div>
            <button className="btn btns" style={{ width: "100%", backgroundColor: "#A6FFCC" }} type="button" onClick={findMetamaskAccounts} ><strong>Connect to Web3</strong></button>
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
    // const web3 = window.web3;
    setWeb3(web3)
    const accounts = await web3.eth.getAccounts()
    if (accounts && accounts.length > 0) {
      // console.log(accounts[0]);
      setAccount(accounts[0]);
      setmetamaskConnected(true);
      setisValidate(true)

      const erc20ContractAddress = '0x75A27fa3F7ec1ECB1fd05618DB5Fab78de0755D2';

      const erc20Contract = new web3.eth.Contract(erc20Abi, erc20ContractAddress)
      console.log(erc20Contract);

      const tokenAmount = 10;

      // Use BigNumber
      let decimals = web3.utils.toBN(18);
      let amount = web3.utils.toBN(tokenAmount);
      let value = amount.mul(web3.utils.toBN(10).pow(decimals));

      const tokenBalance = await erc20Contract.methods.balanceOf(accounts[0])

      if (tokenBalance > 50) {
        settokenBalanceApproved(true)
      }
    }
  };

  const SwapToken = () => {

    const swap = async () => {

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
    // const [isPending, setisPending] = useState(true);
    // const [isOngoing, setIsOngoing] = useState(false)
    // const [issuccess, setIssuccess] = useState(false)

    const approve = async () => {
      setisPending(false)
      setIsOngoing(true)
      // setisValidate(false)
      console.log('Approved');
      // setbuttonView(false)

      const erc20ContractAddress = '0x75A27fa3F7ec1ECB1fd05618DB5Fab78de0755D2';

      const erc20Contract = new web3.eth.Contract(erc20Abi, erc20ContractAddress)
      console.log(erc20Contract);

      const tokenAmount = 10;

      // Use BigNumber
      let decimals = web3.utils.toBN(18);
      let amount = web3.utils.toBN(tokenAmount);
      let value = amount.mul(web3.utils.toBN(10).pow(decimals));


      erc20Contract.methods.approve('0xdC73A27c2A81De8646937EAc26Fa34A870322874', value)
        .send({ from: account })
        .on('receipt', (receipt) => {
          console.log('receipt', receipt);
          toast.success(CustomToastWithLink(receipt.transactionHash), {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          setisValidate(true)
          // setbuttonView(true)
          setIsOngoing(false)
          setIssuccess(true)
        }).on('error', () => {
          const varError = `Approve Token function Failed`
          console.error();
          toast.error(`Transaction Failed, ${varError} `, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })


    };

    return (
      <div className="container">
        <div className="row form-group" style={{ padding: ".375rem .75rem" }}>
          <h4><span style={{ color: "#13a2dc" }}>Approve</span> DAI Transfer</h4>
        </div>
        <div className="row">
          <div className="col-md-12">

            {/* <button className="btn btn-lg btn-primary" onClick={approve} >Approve DAI</button>
            <br /><br /> */}
            <div className="alert btns" role="alert">
              <p>Confirm the DAI transfer to pay for your Loser Box</p>
            </div>
            <br />
            <br />
            <button className="btn btns" style={{ width: "100%", backgroundColor: "#A6FFCC" }} type="button" onClick={approve} ><strong>Approve DAI Transfer</strong></button>
            <br></br>
            <br />
            <br />
            <div className="col-md-12" >
              <div className="alert btns btnsimg" style={{ backgroundImage: "url(" + etherscanBg + ")", backgroundRepeat: 'no-repeat', backgroundPosition: "cener" }} role="alert">
                <div style={{ display: "flex" }}>
                  <div >
                    {isPending || isOngoing ?
                      <p className="trans">Transaction pending...</p>
                      : null}
                    {/* {isOngoing ?
                      <p className="trans">Transaction ongoing... </p>
                      : null
                    } */}
                    {issuccess ?
                      <p className="trans">Transaction Successful </p> : null
                    }
                  </div>
                  <div style={{ justifyContent: "flex-end" }}>
                    {
                      isOngoing ? <BounceLoader size={50} color={'#fff'} /> : null
                    }
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  };



  const TransferDAI = () => {

    const transfer = () => {
      setisPending(false)
      setIsOngoing(true)
      console.log('Transfered');

      const mattAddress = '0xdc73a27c2a81de8646937eac26fa34a870322874'
      const contract = new web3.eth.Contract(mattAbi, mattAddress)
      setContract(contract)

      const timeoutPayment = 3600
      const erc20ContractAddress = '0x75A27fa3F7ec1ECB1fd05618DB5Fab78de0755D2';
      const receiver = '0xA5D82471A12FBd6fD1412e5eb5850d9d6aC5d525'
      const metaEvidence = "Mobiloitte Org"

      const tokenAmount = 10;

      // Use BigNumber
      let decimals = web3.utils.toBN(18);
      let amount = web3.utils.toBN(tokenAmount);
      let value = amount.mul(web3.utils.toBN(10).pow(decimals));

      contract.methods.createTransaction(value, erc20ContractAddress, timeoutPayment.toString(), receiver, metaEvidence)
        .send({ from: account })
        .once('receipt', (receipt) => {

          console.log('receipt', receipt);
          const txId = receipt.events.MetaEvidence.returnValues[0]
          console.log("TXID", txId);
          setTxId(txId);


          toast.success(CustomToastWithLink(receipt.transactionHash), {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          setIsOngoing(false)
          setIssuccess(true)
          setisValidate(true)

        }).on('error', () => {
          const varError = `createTransaction function Failed`
          console.error();

          toast.error(`Transaction Failed, ${varError} `, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

        })

    }
    return (
      <div className="container">
        <div className="row form-group" style={{ padding: ".375rem .75rem" }}>
          <h4><span style={{ color: "#13a2dc" }}>Tranfer</span> DAI to the Escrow</h4>
        </div>
        <div className="row">
          <div className="col-md-12">
            <br /> <br />
            <div className="alert btns" role="alert">
              {/* <button onClick={transfer} >Transfer</button> */}
              <p>To trnsfer the fund to the escrow you have to approve the escrow smart contract to handle the fund.</p>
            </div>
            <button className="btn btns" onClick={transfer} style={{ width: "100%", backgroundColor: "#A6FFCC" }} type="button" ><strong>Transfer DAI To Escrow</strong></button>
            <br /><br />
            <div className="alert btns btnsimg" style={{ backgroundImage: "url(" + etherscanBg + ")", backgroundRepeat: 'no-repeat', backgroundPosition: "cener" }} role="alert">
              <div style={{ display: "flex" }}>
                <div >
                  {isPending || isOngoing ?
                    <p className="trans">Transaction pending...</p>
                    : null}
                  {/* {isOngoing ?
                      <p className="trans">Transaction ongoing... </p>
                      : null
                    } */}
                  {issuccess ?
                    <p className="trans">Transaction Successful </p> : null
                  }
                </div>
                <div style={{ justifyContent: "flex-end" }}>
                  {
                    isOngoing ? <BounceLoader size={50} color={'#fff'} /> : null
                  }
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };



  const Confirmation = () => {

    const confirm = () => {
      setisPending(false)
      setIsOngoing(true)
      console.log('Confirmed');

      const mattAddress = '0xdc73a27c2a81de8646937eac26fa34a870322874'
      const contract = new web3.eth.Contract(mattAbi, mattAddress)
      setContract(contract)

      const tokenAmount = 10;

      // Use BigNumber
      let decimals = web3.utils.toBN(18);
      let amount = web3.utils.toBN(tokenAmount);
      let value = amount.mul(web3.utils.toBN(10).pow(decimals));

      contract.methods.pay(txId, value)
        .send({ from: account })
        .once('receipt', (receipt) => {
          console.log('receipt', receipt);

          toast.success(CustomToastWithLink(receipt.transactionHash), {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }); setIsOngoing(false)
          setIssuccess(true)
          setisValidate(true)
          // submitPersonalDetails()

        }).on('error', () => {
          const varError = `Pay function Failed`
          console.error();

          toast.error(`Transaction Failed, ${varError} `, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
    }


    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br /> <br />
            <button className="btn btns" onClick={confirm} style={{ width: "100%", backgroundColor: "#A6FFCC" }} type="button" ><strong>Confirm</strong></button>
            <br></br>
            <br></br>
            <div className="alert btns" role="alert" style={{ backgroundImage: "url(" + etherscanBg + ")", backgroundRepeat: 'no-repeat', backgroundPosition: "cener" }} >
              {/* <button onClick={confirm} >Confirm</button> */}

              <div style={{ display: "flex" }}>
                <div >
                  {isPending || isOngoing ?
                    <p className="trans">Transaction pending...</p>
                    : null}
                  {/* {isOngoing ?
                      <p className="trans">Transaction ongoing... </p>
                      : null
                    } */}
                  {issuccess ?
                    <p className="trans">Transaction Successful </p> : null
                  }
                </div>
                <div style={{ justifyContent: "flex-end" }}>
                  {
                    isOngoing ? <BounceLoader size={50} color={'#fff'} /> : null
                  }
                </div>

              </div>
            </div>
            <br />
            <br />
            <div className="d-grid gap-8">
              <button className="btn btns" type="button" style={{ width: "100%", backgroundColor: "#A6FFCC" }}><strong>Return to the Homepage</strong></button>
            </div>
          </div>
        </div>
      </div>
    )
  }


  const CustomToastWithLink = (TxHash) => (
    <p>
      Transaction Successful <a style={{ color: "blue" }} href={`https://kovan.etherscan.io/tx/${TxHash}`} target='_blank' rel='noopener noreferrer'> Click to see on Etherscan</a>.
    </p >
  );

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
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
                  {
                    false ? null :
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.backButton}
                      >
                        Back
                      </Button>
                  }
                  {activeStep === 1 ? <Button variant="contained" color="primary" onClick={handleNext}
                    // disabled={!isValidate} 
                    style={{ marginRight: "1%" }}
                  >Skip</Button> : null}
                  <Button variant="contained" color="primary" onClick={handleNext}
                    disabled={!isValidate}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              }
            </div>

          )}
      </div>
      <ToastContainer />
    </div>
  );
}
