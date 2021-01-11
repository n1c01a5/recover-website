import Head from "next/head";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
const mattAbi = require("../contracts/MultipleArbitrationToken.json");
import Web3 from "web3";
import etherscanBg from "../asset/etherscan-bg.png";
import { BounceLoader } from "react-spinners";

const Faq = dynamic(() => import("../components/faq"), { ssr: false });

import Layout from "../components/layout";

export default function LoserBox() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const [txHash, settxHash] = useState("");
  const [isValidate, setisValidate] = useState(false);
  const [buttonView, setbuttonView] = useState(true);
  const [isPending, setisPending] = useState(false);
  const [isOngoing, setIsOngoing] = useState(false);
  const [issuccess, setIssuccess] = useState(false);
  const [txerror, settxerror] = useState(false);
  const [networkName, setnetworkName] = useState("");

  const pay = async () => {
    setisPending(true);
    setIsOngoing(false);
    setIssuccess(false);
    // setisValidate(false)
    setbuttonView(false);

    const mattAddress = "0xdc73a27c2a81de8646937eac26fa34a870322874";
    // setContract(contract)

    // Use BigNumber
    // let decimals = web3.utils.toBN(18);
    // let amount = web3.utils.toBN(tokenAmount);
    // let value = amount.mul(web3.utils.toBN(10).pow(decimals));

    await window.ethereum.enable();
    const web3 = (window.web3 = new Web3(window.ethereum));
    const contract = new web3.eth.Contract(mattAbi, mattAddress);
    const networkId = await web3.eth.net.getId();
    switch (networkId) {
      case 1:
        setnetworkName("");
        break;
      case 3:
        setnetworkName("ropsten");
        setisnetworkWarning(true);
        break;
      case 4:
        setnetworkName("rinkeby");
        setisnetworkWarning(true);
        break;
      case 5:
        setnetworkName("goerli");
        setisnetworkWarning(true);
        break;
      case 42:
        setnetworkName("kovan");
        break;
      default:
        break;
    }
    const accounts = await web3.eth.getAccounts();
    if (accounts && accounts.length > 0) {
      const TxId = await contract.methods
        .getTransactionIDsByAddress(accounts[0])
        .call();
      console.log("TxId", TxId);
      setnetworkName("");
      // Use BigNumber
      const tokenAmount = 10;
      let decimals = web3.utils.toBN(18);
      let amount = web3.utils.toBN(tokenAmount);
      let value = amount.mul(web3.utils.toBN(10).pow(decimals));

      var data = contract.methods.pay(TxId[TxId.length - 1], value).encodeABI();
      console.log("data", data);
      const transactionParameters = {
        to: "0xdc73a27c2a81de8646937eac26fa34a870322874", // Required except during contract publications.
        from: accounts[0], // must match user's active address.
        data: data,
      };

      web3.eth
        .sendTransaction(transactionParameters)
        .on("transactionHash", function (hash) {
          console.log("transactionHash", hash);
          setIsOngoing(true);
          setIssuccess(false);
          settxHash(hash);
        })
        .once("confirmation", function (confirmationNumber, receipt) {
          console.log("confirmation", receipt);
          if (receipt.status) {
            setIsOngoing(false);
            setIssuccess(true);
            setisPending(false);
            setisValidate(true);
          }
        })
        .on("error", (error) => {
          settxerror(true);
        });
    }
  };

  return (
    <Layout noRightButton>
      <Head>
        <title>Recover.ws - Loser Box to protect your item from loss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ paddingTop: 50 }}>
        <div className="row form-group" style={{ padding: ".375rem .80rem" }}>
          <h4>
            <span style={{ color: "#13a2dc" }}>Pay</span> order
          </h4>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div
              className="alert"
              style={{ background: "#A6FFCC" }}
              role="alert"
            >
              <p style={{ paddingTop: "15px" }}>
                Finish the transaction with the Pay button.
              </p>
            </div>
            {buttonView ? (
              <button
                className="btn btns"
                style={{
                  width: "100%",
                  marginTop: "20px",
                  backgroundColor: "#A6FFCC",
                }}
                type="button"
                onClick={pay}
              >
                <strong>Pay</strong>
              </button>
            ) : null}
            <br />
            <br />
            {isPending ? (
              <div
                className="col-md-12"
                className="pendingBox"
                onClick={() =>
                  window.open(
                    `https://${networkName}.etherscan.io/tx/${txHash}`
                  )
                }
              >
                <div
                  className="alert btnsimg"
                  style={{
                    backgroundImage: "url(" + etherscanBg + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    background: "#A6FFCC",
                  }}
                  role="alert"
                >
                  <div style={{ display: "flex" }}>
                    <div>
                      {(isPending || isOngoing) && !txerror ? (
                        <p style={{ paddingTop: "10px" }} className="trans">
                          Transaction pending...
                        </p>
                      ) : null}
                      {txerror ? (
                        <div>
                          <p
                            style={{
                              paddingTop: "10px",
                              fontSize: "25px",
                              fontWeight: "600",
                              marginLeft: "60px",
                            }}
                            className="trans"
                          >
                            Transaction
                            <span
                              style={{
                                color: "red",
                                fontSize: "25px",
                              }}
                            >
                              &nbsp;Failed.
                              <span
                                style={{
                                  color: "red",
                                  fontSize: "16px",
                                }}
                              >
                                &nbsp;[Click] to see more details
                              </span>
                            </span>
                          </p>
                        </div>
                      ) : null}
                      {issuccess ? (
                        <Link href="/">
                          <button
                            className="btn btns"
                            style={{
                              width: "100%",
                              marginTop: "20px",
                              backgroundColor: "#A6FFCC",
                            }}
                            type="button"
                          >
                            <strong>Return to the Homepage</strong>
                          </button>
                        </Link>
                      ) : null}
                    </div>
                    <div style={{ marginLeft: "50%" }}>
                      {isOngoing ? (
                        <BounceLoader size={50} color={"#fff"} />
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Layout>
  );
}
