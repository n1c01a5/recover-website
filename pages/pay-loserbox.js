
import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useMediaQuery } from 'react-responsive'
const mattAbi = require('../contracts/MultipleArbitrationToken.json')
import Web3 from 'web3';


const Faq = dynamic(
  () => import('../components/faq'),
  { ssr: false }
)

import Layout from '../components/layout'
import Button from '../components/elements/button'

import EthereumLogo, { length } from '../public/ethereum-logo.svg'
import KlerosLogo from '../public/kleros-logo.svg'
import IpfsLogo from '../public/ipfs-logo.svg'

export default function LoserBox() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  })

  const confirm = async () => {

    // setisPending(false)
    // setIsOngoing(true)
    console.log('Confirmed');



    const mattAddress = '0xdc73a27c2a81de8646937eac26fa34a870322874'
    // setContract(contract)

    
    // Use BigNumber
    // let decimals = web3.utils.toBN(18);
    // let amount = web3.utils.toBN(tokenAmount);
    // let value = amount.mul(web3.utils.toBN(10).pow(decimals));
    
    await window.ethereum.enable();
    const web3 = window.web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(mattAbi, mattAddress)
    const accounts = await web3.eth.getAccounts()
    if (accounts && accounts.length > 0) {
      const TxId = await contract.methods.getTransactionIDsByAddress(accounts[0]).call()
      console.log('TxId', TxId);


      // Use BigNumber
      const tokenAmount = 10;
      let decimals = web3.utils.toBN(18);
      let amount = web3.utils.toBN(tokenAmount);
      let value = amount.mul(web3.utils.toBN(10).pow(decimals));

      var data = contract.methods.pay(TxId[TxId.length - 1], value).encodeABI();
      console.log('data', data);
      const transactionParameters = {
        to: '0xdc73a27c2a81de8646937eac26fa34a870322874', // Required except during contract publications.
        from: accounts[0], // must match user's active address.
        data: data,
      };

      web3.eth.sendTransaction(transactionParameters)
        .on('transactionHash', function (hash) {
          console.log('transactionHash', hash);
        })
        .once('confirmation', function (confirmationNumber, receipt) {
          console.log('confirmation', receipt);
        })
        .on('error', console.error);
    }

    // contract.methods.pay(txId, value)
    //     .send({ from: account })
    //     .once('receipt', (receipt) => {
    //         console.log('receipt', receipt);

    //         toast.success(CustomToastWithLink(receipt.transactionHash), {
    //             position: "bottom-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //         }); setIsOngoing(false)
    //         setIssuccess(true)
    //         setisValidate(true)
    //         // submitPersonalDetails()

    //     }).on('error', () => {
    //         const varError = `Pay function Failed`
    //         console.error();

    //         toast.error(`Transaction Failed, ${varError} `, {
    //             position: "bottom-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //         });
    //     })
  }


  return (
    <Layout>
      <Head>
        <title>Recover.ws - Loser Box to protect your item from loss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <header>
          <div className="desktop-layout">
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '1250px',
              margin: '0 auto 0 auto'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '128px', height: '128px', overflow: 'hidden', border: '3px solid #ccc', marginBottom: '20px' }}><img src="loser-box-buy.png" style={{ width: '64px' }} /></div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '128px', height: '128px', overflow: 'hidden', border: '3px solid #ccc', marginBottom: '20px' }}><img src="loser-box-pvc-card-keyring-square.jpg" style={{ objectFix: 'cover', width: '128px' }} /></div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '128px', height: '128px', overflow: 'hidden', border: '3px solid #ccc', marginBottom: '20px' }}><img src="loser-box-pvc-card-square.png" style={{ objectFix: 'cover', width: '128px' }} /></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '1000px' }}>
                <img src="loser-box-buy.png" style={{ width: '320px' }} />
              </div>
              <div>
                <h1 style={{ fontSize: '22px', fontWeight: 'bold' }}>
                  LOSER BOX - Lost and Found Pack to prevent your valuables from Loss - Limited Edition (only 42 items)
                  </h1>
                <p style={{ margin: '20px 0', lineHeight: '26px', fontWeight: 'bold' }}>
                  A crafted box with pre-printed QR-code on :
                    <ul>
                    <li style={{ fontWeight: 'bold' }}>- 2 sets of stickers</li>
                    <li style={{ fontWeight: 'bold' }}>- 2 PVC cards</li>
                    <li style={{ fontWeight: 'bold' }}>- 1 key-ring</li>
                  </ul>
                </p>
                <hr />
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                  <p style={{ lineHeight: '50px', fontWeight: 'bold', justifyContent: 'center' }}>Payment secured by an escrow smart contract</p>
                </div>
                <div style={{ margin: '20px 100px', display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                  <img src={EthereumLogo} alt="Ethereum logo svg" style={{ width: '26px' }} />
                  <img src={KlerosLogo} alt="Kleros logo svg" style={{ width: '45px' }} />
                  <img src={IpfsLogo} alt="IPFS logo svg" style={{ width: '35px' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex' }}>
                    <div style={{ background: '#f2f2f2', width: '300px', height: '60px', marginRight: '10px', boxSizing: 'border-box', border: '2px solid gray' }}>
                      <p style={{ lineHeight: '56px', textAlign: 'center', fontSize: '20px' }}>50.00 DAI</p>
                    </div>
                  </div>
                </div>
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div>
                    <Button isPrimary={true} onClick={confirm} style={{ width: '300px' }}>BUY LOSER BOX</Button>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '1250px',
              margin: '50px auto 0 auto'
            }}>
              <h2>Items Description</h2>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '1250px',
              margin: '50px auto 0 auto'
            }}>
              <h2>Loser Box Gallery</h2>
            </div>
          </div>

          <div className="mobile-layout">

          </div>
        </header>
      </div>
      <style jsx>{`
          h1 {
            font-weight: 700;
          }
          .form-group{
            display:block
          }
        `}</style>
    </Layout>
  )

}


// loser-box?network=kovan