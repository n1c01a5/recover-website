import React from "react";
import DEXAG from "dexag-sdk";
export default function SwapToken({
  tokenBalanceApproved,
  changeState,
  handleNext,
  buttonView,
  isPending,
  networkName,
  isOngoing,
  txerror,
}) {
  if (tokenBalanceApproved) {
    console.log("BALANCE APPROVED");
    handleNext();
  }
  const swap = async () => {
    changeState();
    const sdk = DEXAG.fromProvider(window.ethereum);

    // receive status messages as the client executes the trade
    sdk.registerStatusHandler((status, data) => {
      console.log("status, data ===> ", status, data);
    });
    const price = sdk.getPrice({
      to: "DAI",
      from: "ETH",
      toAmount: 1,
      dex: "ag",
    });
    console.log("price", price);

    // get trade
    const tx = await sdk.getTrade({
      to: "DAI",
      from: "ETH",
      toAmount: 1,
      dex: "ag",
    });
    console.log("tx", tx);

    // checkout
    const valid = await sdk.validate(tx);
    console.log("valid", valid);
    if (valid) {
      // transaction data is valid, make a trade
      sdk.trade(tx);
      setIsOngoing(false);
      setIssuccess(true);
      setisPending(false);
      setisValidate(true);
      handleNext();
    }
  };

  return (
    <div style={{ paddingTop: 50 }}>
      <div className="row form-group" style={{ padding: ".375rem .75rem" }}>
        <h4>
          <span style={{ color: "#13a2dc" }}>Swap</span> to DAI
        </h4>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="alert" style={{ background: "#A6FFCC" }} role="alert">
            <p style={{ paddingTop: "15px" }}>
              To buy the Loser Box, you need to swap your Ether to 50 DAI.
            </p>
          </div>
          {buttonView ? (
            <button
              className="new-button"
              onClick={swap}
              style={{
                width: "100%",
                marginTop: "20px",
                backgroundColor: "#A6FFCC",
              }}
              type="button"
              disabled={!tokenBalanceApproved}
            >
              <strong>Swap</strong>
            </button>
          ) : null}
          <br />
          <br />
          {isPending ? (
            <div
              className="col-md-12"
              className="pendingBox"
              onClick={() =>
                window.open(`https://${networkName}.etherscan.io/tx/${txId}`)
              }
            >
              <div className="pending">
                <div>
                  {(isPending || isOngoing) && !txerror
                    ? "Transaction pending..."
                    : null}
                  {txerror ? "Transaction rejected. Please try again." : null}
                </div>
                <div>
                  {isOngoing ? <BounceLoader size={50} color={"#fff"} /> : null}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
