
import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import TextLoop from 'react-text-loop'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Web3 from 'web3';
const mattAbi = require('../contracts/MultipleArbitrationToken.json')
const erc20Abi = require('../contracts/ERC20.json')
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Faq = dynamic(
  () => import('../components/faq'),
  { ssr: false }
)

import Layout from '../components/layout'
import Button from '../components/elements/button'

import EthereumLogo, { length } from '../public/ethereum-logo.svg'
import KlerosLogo from '../public/kleros-logo.svg'
import IpfsLogo from '../public/ipfs-logo.svg'
import IllustrationTestEthereum from '../public/illustration_test-ethereum.svg' // TODO: improve this
import IllustrationUserExperienceBlockchain from '../public/illustration_user-experience-blockchain.svg'
import IllustrationBlockchainBusinessModel from '../public/illustration_blockchain-business-model.svg'
import IllustrationBlockchainEscrow from '../public/illustration_blockchain-escrow.svg'
import IllustrationTraceabilityBlockchain from '../public/illustration_traceability-blockchain.svg'
import BackgroundLoserBox from '../public/background_loser-box.svg'

export default function LoserBox() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  })

  const [openPay, setOpenPay] = useState(false);
  const [openSpinner, setOpenSpinner] = useState(false);
  const onOpenModalPay = () => setOpenPay(true);
  const onOpenModalSpinner = () => setOpenSpinner(true);
  const onCloseModalSpinner = () => setOpenSpinner(false);
  const onCloseModalPay = () => setOpenPay(false);

  const [tokenAmount, setTokenAmount] = useState(0);
  const [transactionID, setTransactionID] = useState([])

  const [account, setAccount] = useState('')
  const [contract, setContract] = useState([])
  const [metamaskInstalled, setmetamaskInstalled] = useState(false)
  const [metamaskConnected, setmetamaskConnected] = useState(false)

  const connect = async () => {

    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      web3 = window.web3
      setmetamaskInstalled(true)

      const accounts = await web3.eth.getAccounts()

      if (accounts && accounts.length > 0) {
        setAccount(accounts[0])
        setmetamaskConnected(true)
        loadBlockchainData(accounts[0])
      }
    }
    else {
      setmetamaskInstalled(false)
      console.log("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!");
    }
  }

  useEffect(() => {
    connect();
  }, [])


  const findMetamaskAccounts = async () => {

    // const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    window.ethereum.enable();

    const accounts = await web3.eth.getAccounts()

    if (accounts && accounts.length > 0) {

      console.log(accounts[0]);
      setAccount(accounts[0]);
      setmetamaskConnected(true);
      loadBlockchainData(accounts[0]);

    }

  }

  // Handle Network/Account Changes
  useEffect(() => {

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', findMetamaskAccounts)
      window.ethereum.on('chainChanged', handleChainChanged);
    }
  })


  const handleChainChanged = (_chainId) => {
    // We recommend reloading the page, unless you must do otherwise
    window.location.reload();
  }

  const loadBlockchainData = async (account) => {
    // const web3 = window.web3
    // console.log('WEB####', web3);

    // Load account
    // const accounts = await web3.eth.getAccounts()
    // setaccount(accounts[0])
    // console.log('accounts', account);

    // Load Contracts
    const mattAddress = '0xdc73a27c2a81de8646937eac26fa34a870322874'
    const contract = new web3.eth.Contract(mattAbi, mattAddress)
    setContract(contract)
    console.log('contract ===>>>>>', contract);
    const txID = await contract.methods.getTransactionIDsByAddress(account).call();
    setTransactionID(txID)
    console.log('txIDS', txID);
  }

  const handleBuyLoserBox = () => {

    onCloseModalPay();
    onOpenModalSpinner()

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

        const timeoutPayment = 3600
        const receiver = '0xA5D82471A12FBd6fD1412e5eb5850d9d6aC5d525'
        const metaEvidence = "Mobiloitte Org"
        contract.methods.createTransaction(value, erc20ContractAddress, timeoutPayment.toString(), receiver, metaEvidence)
          .send({ from: account })
          .once('receipt', (receipt) => {

            console.log('receipt', receipt);
            const txId = receipt.events.MetaEvidence.returnValues[0]
            console.log("TXID", txId);

            contract.methods.pay(txId, value)
              .send({ from: account })
              .once('receipt', (receipt) => {

                console.log('receipt', receipt);
                onCloseModalSpinner();

                toast.success(CustomToastWithLink(receipt.transactionHash), {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });

              }).on('error', () => {
                const varError = `Pay function Failed`
                console.error();
                onCloseModalSpinner();

                toast.error(`Transaction Failed, ${varError}`, {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              })

          }).on('error', () => {
            const varError = `createTransaction function Failed`
            console.error();
            onCloseModalSpinner();

            toast.error(`Transaction Failed, ${varError}`, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

          })

      }).on('error', () => {
        const varError = `Approve Token function Failed`

        console.error();
        onCloseModalSpinner();

        toast.error(`Transaction Failed, ${varError}`, {
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

  const CustomToastWithLink = (TxHash) => (
    <p>
      Transaction Successful <a style={{ color: "blue" }} href={`https://kovan.etherscan.io/tx/${TxHash}`} target='_blank' rel='noopener noreferrer'> Click to see on Etherscan</a>.
    </p>
  );

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
                  LOSER BOX prototype - Lost and Found Pack to prevent your valuables from Loss - Limited Edition (only 42 items)
                </h1>
                <p style={{ margin: '20px 0', lineHeight: '26px' }}>
                  A crafted box with pre-printed QR-code on :
                  <ul>
                    <li>- 2 sets of stickers</li>
                    <li>- 2 PVC cards</li>
                    <li>- 1 key-ring</li>
                  </ul>
                </p>
                <hr />
                <div>
                  <p style={{ lineHeight: '50px' }}>Payment only in DAI or ETH secured by an escrow smart contract:</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ display: 'flex' }}>
                    <div style={{ background: '#f2f2f2', width: '120px', height: '60px', marginRight: '10px', boxSizing: 'border-box', border: '2px solid gray' }}>
                      <p style={{ lineHeight: '56px', textAlign: 'center', fontSize: '20px' }}>50.00DAI</p>
                    </div>
                    <div style={{ background: '#f2f2f2', width: '120px', height: '60px', boxSizing: 'border-box' }}>
                      <p style={{ lineHeight: '60px', textAlign: 'center', fontSize: '20px' }}>0.17ETH</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex' }}>
                    <div style={{ background: '#f2f2f2', width: '70px', height: '60px' }}><p style={{ lineHeight: '60px', textAlign: 'center', fontSize: '20px' }}>-</p></div>
                    <div style={{ background: '#f7f9fa', width: '80px', height: '60px' }}><p style={{ lineHeight: '60px', textAlign: 'center', fontSize: '20px' }}>1</p></div>
                    <div style={{ background: '#f2f2f2', width: '70px', height: '60px' }}><p style={{ lineHeight: '60px', textAlign: 'center', fontSize: '20px' }}>+</p></div>
                  </div>
                </div>
                <hr />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                  <div>
                    <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Price</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold', fontSize: '20px' }}>50.00DAI</p>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    {
                      metamaskInstalled ?
                        metamaskConnected ? null : <Button isPrimary={true} style={{ marginRight: 10 }} onClick={() => { findMetamaskAccounts() }}>Connect Wallet</Button>
                        : <Button isPrimary={true} style={{ marginRight: 10 }} > <a target="_blank" href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"> Install Metamask </a> </Button>
                    }
                    {/* {
                      metamaskConnected ? null : <Button isPrimary={true} style={{ marginRight: 10 }} onClick={() => { findMetamaskAccounts() }}>Connect Wallet</Button>
                    } */}

                  </div>
                  <div>
                    <Link href="/loserbox-stepper">
                    <Button isPrimary={true} style={{ width: '300px' }}>BUY YOUR LOSER BOX</Button>
                      {/* <a>content</a> */}
                    </Link>
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
      <Modal open={openPay} onClose={onCloseModalPay} center>
        <div style={{ minWidth: 300 }}>
          <h2 className="">Buy for 50 DAI</h2>
          <div style={{ marginTop: 20, textAlign: 'center' }}><Button isPrimary={true} onClick={() => { handleBuyLoserBox() }}>Proceed</Button></div>
        </div>
      </Modal>
      <Modal open={openSpinner} onClose={onCloseModalSpinner} closeOnOverlayClick={false} showCloseIcon={false} center>
        <div style={{ minWidth: 300, maxWidth: 500 }} >
          <div style={{ marginTop: 20, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className='loader'></div>
          </div>
        </div>
      </Modal>
      <ToastContainer />

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
