import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

import Layout from '../../components/layout'
import Button from '../../components/elements/button'
import Modal from '../../components/modal'
import { useModalContext } from '../../contexts/state'

import EthereumLogo from '../../public/ethereum-logo.svg'
import KlerosLogo from '../../public/kleros-logo.svg'
import IpfsLogo from '../../public/ipfs-logo.svg'
import DexLogo from '../../public/dex-ag-logo.png'

export default function LoserBox () {
  const { setOpen } = useModalContext()
  const [modalContent, setContentModal] = useState()
  const [photoProductContent, setPhotoProductContent] = useState()

  return (
    <Layout>
      <Head>
        <title>Recover.ws - Loser Box to protect your item from loss</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap' rel='stylesheet' />
      </Head>

      <Modal>{modalContent}</Modal>

      <div>
        <header>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '1250px',
              margin: '10vh auto 3rem auto'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '134px'
              }}
            >
              <div
                onClick={() => setPhotoProductContent(<img src='loser-box-buy.png' style={{ width: '320px', height: '500px' }} />)}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '128px',
                  height: '128px',
                  overflow: 'hidden',
                  border: '3px solid #ccc',
                  marginBottom: '20px',
                  cursor: 'pointer'
                }}
              >
                <img src='loser-box-buy.png' style={{ width: '64px' }} />
              </div>
              <div
                onClick={() => setPhotoProductContent(<img src='loser-box-pvc-card-keyring-square.jpg' style={{ width: '410px', height: '380px' }} />)}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '128px',
                  height: '128px',
                  overflow: 'hidden',
                  border: '3px solid #ccc',
                  marginBottom: '20px',
                  cursor: 'pointer'
                }}
              >
                <img
                  src='loser-box-pvc-card-keyring-square.jpg'
                  style={{ objectFix: 'cover', width: '128px' }}
                />
              </div>
              <div
                onClick={() => setPhotoProductContent(<img src='loser-box-pvc-card-square.png' style={{ width: '410px', height: '380px' }} />)}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '128px',
                  height: '128px',
                  overflow: 'hidden',
                  border: '3px solid #ccc',
                  marginBottom: '20px',
                  cursor: 'pointer'
                }}
              >
                <img
                  src='loser-box-pvc-card-square.png'
                  style={{ objectFix: 'cover', width: '128px' }}
                />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              {
                photoProductContent
                  ? photoProductContent
                  : <img src='loser-box-buy.png' style={{ width: '320px', height: '500px' }} />
              }
            </div>
            <div
              style={{
                width: '500px'
              }}
            >
              <h1 style={{ fontSize: '60px', fontWeight: 'bold', lineHeight: '70px' }}>
                LOSER BOX
              </h1>
              <h2 style={{ fontSize: '32px', fontFamily: 'Montserrat', lineHeight: '32px' }}>
                <span style={{ color: '#12c2e9' }}>Buidl</span> To Recover
              </h2>
              <p style={{ fontFamily: 'Montserrat', fontSize: '22px', paddingTop: '10px' }}>
                PRICE:&nbsp;
                <span style={{ fontWeight: 'bold' }}>
                  {process.env.NEXT_PUBLIC_MAINNET_TOKEN_AMOUNT}DAI
                </span>
              </p>
              <p style={{ fontFamily: 'Montserrat', fontSize: '16px', marginTop: '-14px' }}>
                Lost and Found Pack to prevent your valuables from Loss - Limited Edition (only 42)
              </p>
              <hr
                style={{
                  marginTop: '-4px'
                }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '18px'
                }}
              >
                <p
                  style={{
                    lineHeight: '20px',
                    fontWeight: 'bold',
                    justifyContent: 'center'
                  }}
                >
                  BUILD TOP OF
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  margin: '-2px 0 16px 0'
                }}
              >
                <img
                  src={EthereumLogo}
                  alt='Ethereum logo svg'
                  style={{ width: '26px' }}
                />
                <img
                  src={KlerosLogo}
                  alt='Kleros logo svg'
                  style={{ width: '45px' }}
                />
                <img
                  src={IpfsLogo}
                  alt='IPFS logo svg'
                  style={{ width: '35px' }}
                />
                <img
                  src={DexLogo}
                  alt='Dex logo to swap ETH to DAI'
                  style={{ position: 'relative', top: '7px', height: '34px' }}
                />
              </div>
              <p>A crafted box with pre-printed QR-code on :</p>
              <ul
                style={{
                  marginTop: '-14px'
                }}
              >
                <li style={{ paddingLeft: '20px' }}>💳 PVC cards (Wallet and Luggages)</li>
                <li style={{ paddingLeft: '20px' }}>🏷 stickers (Computer, Ledger...)</li>
                <li style={{ paddingLeft: '20px' }}>🗝 key-ring</li>
              </ul>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
                <div>
                  <Link href='/loser-box/buy?step=1'>
                    <Button isPrimary style={{ width: '500px' }}>
                      BUY LOSER BOX
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              width: '1250px',
              margin: '5px auto 0 auto'
            }}
          >
            <h2 style={{ fontSize: '40px', marginTop: '1rem' }}>
              Items Description
            </h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '200px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row'
                }}
              >
                <div
                  style={{
                    flex: '0 50%',
                    textAlign: 'center'
                  }}
                >
                  <div className='card-wrapper flip-right'>
                    <div className='card'>
                      <div className='front' />
                      <div className='back' />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    flex: '0 50%',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: 'Roboto',
                        color: '#a6ffcc',
                        fontSize: '100px',
                        fontWeight: 'bold'
                      }}
                    >
                      CARDS
                    </p>
                    <p
                      style={{
                        fontFamily: 'Montserrat',
                        fontSize: '24px',
                        padding: '40px',
                        marginTop: '-122px'
                      }}
                    >
                      Put it in your wallet to protect your id documents, credit cards (or crypto cards) or even any other valuables from loss.
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'row',
                  height: '780px',
                  marginTop: '220px'
                }}
              >
                <p
                  style={{
                    position: 'absolute',
                    fontFamily: 'Roboto',
                    color: '#a6ffcc',
                    fontSize: '100px',
                    fontWeight: 'bold',
                    transform: 'rotate(-90deg)',
                    top: '194px',
                    left: '-194px'
                  }}
                >
                  STICKERS
                </p>
                <div
                  style={{
                    position: 'relative',
                    textAlign: 'right',
                    flexBasis: '40%'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      width: '400px',
                      top: '-16px',
                      right: '10px'
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'Montserrat',
                        fontSize: '24px',
                        marginTop: '70px',
                        paddingRight: '20px'
                      }}
                    >
                      Paste it on your Ledger to add an extra insurance for your crypto
                    </p>
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      width: '400px',
                      top: '170px',
                      right: '10px'
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'Montserrat',
                        fontSize: '24px',
                        marginTop: '70px',
                        paddingRight: '20px'
                      }}
                    >
                      Hang it around your pet to avoid the fear of losing it
                    </p>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      width: '400px',
                      top: '310px',
                      right: '10px'
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'Montserrat',
                        fontSize: '24px',
                        marginTop: '70px',
                        paddingRight: '20px'
                      }}
                    >
                      Paste it on your computer or smartphone to minimize the risk of losing
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    position: 'relative',
                    // background: 'yellow',
                    flexBasis: '60%'
                  }}
                >
                  <div className='container container-1'>
                    <span className='btn btn-hvr hvr-curl-top-right'>
                      <img src='loser-box/small-recover-sticker.png' />
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      width: '210px',
                      height: '2px',
                      background: '#12c2e9',
                      top: '110px'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      backgroundColor: '#fff',
                      border: '2px solid #12c2e9',
                      height: '10px',
                      borderRadius: '50%',
                      width: '10px',
                      top: '105px',
                      left: '210px'
                    }}
                  />
                  <div className='container container-2'>
                    <span className='btn btn-hvr hvr-curl-top-right'>
                      <img src='loser-box/big-recover-sticker.png' />
                    </span>
                  </div>

                  <div className='container container-3'>
                    <img src='loser-box/medal-recover-sticker.png' />
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      width: '280px',
                      height: '2px',
                      background: '#12c2e9',
                      top: '274px'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      backgroundColor: '#fff',
                      border: '2px solid #12c2e9',
                      height: '10px',
                      borderRadius: '50%',
                      width: '10px',
                      top: '269px',
                      left: '280px'
                    }}
                  />
                  <div className='container container-4'>
                    <span className='btn btn-hvr hvr-curl-top-right'>
                      <img src='loser-box/big-recover-sticker.png' />
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      width: '440px',
                      height: '2px',
                      background: '#12c2e9',
                      top: '434px'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      backgroundColor: '#fff',
                      border: '2px solid #12c2e9',
                      height: '10px',
                      borderRadius: '50%',
                      width: '10px',
                      top: '429px',
                      left: '440px'
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '-100px'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row'
                  }}
                >
                  <div
                    style={{
                      flex: '0 50%'
                    }}
                  >
                    <div className='container-key-ring'>
                      <img className='key-ring' src='loser-box/key-ring-lost-and-found.png' />
                    </div>
                  </div>
                  <div
                    style={{
                      flex: '0 50%',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: 'Roboto',
                          color: '#a6ffcc',
                          fontSize: '100px',
                          fontWeight: 'bold'
                        }}
                      >
                        KEY RING
                      </p>
                      <p
                        style={{
                          fontFamily: 'Montserrat',
                          fontSize: '24px',
                          padding: '40px',
                          marginTop: '-122px'
                        }}
                      >
                        Put it in your wallet to protect your id documents, credit cards (or crypto cards) or even any other valuables from loss
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                background: '#ffc282',
                borderRadius: '10px',
                padding: '24px 30px',
                marginTop: '300px'
              }}
            >
              <h3>WARNING</h3>
              <p>
                The first product version on offer is a prototype which will help us gain valuable feedback to enrich the upcoming versions. For this reason, you may find the quality “far from perfect” but next versions will be better in terms of quality and functionality.
                <br /><br />
                If it interests you, we would be delighted to count you among our first testers and feedback providers.
              </p>
            </div>
            <div>
              <Link href='/loser-box/buy?step=1'>
                <Button isPrimary style={{ width: '100%', marginTop: '30px' }}>
                  I UNDERSTAND THE RISKS BUT I WANT MY LOSER BOX
                </Button>
              </Link>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              width: '1250px',
              margin: '180px auto 0 auto',
              flexDirection: 'column'
            }}
          >
            <div>
              <h2 style={{ fontSize: '30px' }}>
                Loser Box Gallery
              </h2>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '5rem'
              }}
            >
              <div
                style={{
                  width: '400px',
                  marginRight: '25px',
                  cursor: 'pointer'
                }}
              >
                <img
                  src='loser-box/ledger-lost-and-found.png'
                  style={{ width: '400px' }}
                  onClick={() => { // FIXME: refactor me
                    setContentModal(<img src='loser-box/ledger-lost-and-found.png' style={{ width: '60vw' }} />),
                    setOpen(true)
                  }}
                />
              </div>
              <div
                style={{
                  width: '400px',
                  marginRight: '25px',
                  cursor: 'pointer'
                }}
              >
                <img
                  src='loser-box/ledger-lost-and-found.png'
                  style={{ width: '400px' }}
                  onClick={() => { // FIXME: refactor me
                    setContentModal(<img src='loser-box/ledger-lost-and-found.png' style={{ width: '60vw' }} />),
                    setOpen(true)
                  }}
                />
              </div>
              <div
                style={{
                  width: '400px',
                  cursor: 'pointer'
                }}
              >
                <img
                  src='loser-box/ledger-lost-and-found.png'
                  style={{ width: '400px' }}
                  onClick={() => { // FIXME: refactor me
                    setContentModal(<img src='loser-box/ledger-lost-and-found.png' style={{ width: '60vw' }} />),
                    setOpen(true)
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '3rem'
              }}
            >
              <div
                style={{
                  width: '400px',
                  marginRight: '25px',
                  cursor: 'pointer'
                }}
              >
                <img
                  src='loser-box/ledger-lost-and-found.png'
                  style={{ width: '400px' }}
                  onClick={() => { // FIXME: refactor me
                    setContentModal(<img src='loser-box/ledger-lost-and-found.png' style={{ width: '60vw' }} />),
                    setOpen(true)
                  }}
                />
              </div>
              <div
                style={{
                  width: '400px',
                  marginRight: '25px',
                  cursor: 'pointer'
                }}
              >
                <img
                  src='loser-box/ledger-lost-and-found.png'
                  style={{ width: '400px' }}
                  onClick={() => { // FIXME: refactor me
                    setContentModal(<img src='loser-box/ledger-lost-and-found.png' style={{ width: '60vw' }} />),
                    setOpen(true)
                  }}
                />
              </div>
              <div
                style={{
                  width: '400px',
                  cursor: 'pointer'
                }}
              >
                <img
                  src='loser-box/ledger-lost-and-found.png'
                  style={{ width: '400px' }}
                  onClick={() => { // FIXME: refactor me
                    setContentModal(<img src='loser-box/ledger-lost-and-found.png' style={{ width: '60vw' }} />),
                    setOpen(true)
                  }}
                />
              </div>
            </div>
          </div>

          <div className='mobile-layout' />
        </header>
      </div>
      <style jsx>
        {`
          h1 {
            font-weight: 700;
          }
          .form-group {
            display: block;
          }
          .card-wrapper {
            display: inline-block;
            perspective: 1000px;
            filter: drop-shadow(10px 10px 6px #12c2e9);
            border-radius: 10px;
          }
          .card-wrapper .card {
            position: relative;
            cursor: pointer;
            transition-duration: 0.6s;
            transition-timing-function: ease-in-out;
            transform-style: preserve-3d;
            border-radius: 30px;
          }
          .card-wrapper .card .front,
          .card-wrapper .card .back {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            transform: rotateX(0deg);
          }
          .card-wrapper .card .front {
            z-index: 2;
          }
          .card-wrapper .card .back,
          .card-wrapper.flip-right .card .back {
            transform: rotateY(180deg);
          }
          .card-wrapper:hover .card,
          .card-wrapper.flip-right:hover .card {
            transform: rotateY(180deg);
          }
          .card-wrapper,
          .card {
            width: 451px;
            height: 285px;
            background: transparent;
          }
          .card .front,
          .card .back {
            border-radius: 10px;
          }
          .card-wrapper .card .front {
            background: url(loser-box/card-front.png);
            background-size: 450px;
          }
          .card-wrapper .card .back {
            background: url(loser-box/card-back.png);
            background-size: 450px;
          }

          .container {
            width: 400px;
            filter: drop-shadow(10px 10px 6px #12C2E9);
            transform: rotate(-15deg);
          }
          .container-1 {
            position: absolute;
            top: 30px;
            left: 140px;
          }
          .container-2 {
            position: absolute;
            top: 90px;
            left: 430px;
          }
          .container-3 {
            position: relative;
            top: 170px;
            left: 30px;
          }
          .container-4 {
            position: relative;
            top: 180px;
            left: 190px;
          }
          .btn-hvr {
            border: 0 none;
            color: #666;
            display: inline-block;

            text-decoration: none;
            display: inline-block;
          }
          /* curl top right */
          .hvr-curl-top-right {
            backface-visibility: hidden;
            box-shadow: 0 0 1px rgba(0, 0, 0, 0);
            display: inline-block;
            position: relative;
            transform: translateZ(0px);
            vertical-align: middle;
            top: 0px;
          }
          .hvr-curl-top-right::before {
            margin-top: 6px;
            margin-right: 12px;
            background: rgba(0, 0, 0, 0) linear-gradient(225deg,  #14213D 45%, #aaaaaa 50%, #cccccc 56%, white 80%) repeat scroll 0 0;
            box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.4);
            content: "";
            height: 0;
            pointer-events: none;
            position: absolute;
            right: 00px;
            top: 00px;
            transition-duration: 0.3s;
            transition-property: width, height;
            width: 0;
          }
          .hvr-curl-top-right::before {
            background: rgba(0, 0, 0, 0) linear-gradient(225deg,  #14213D 45%, #aaaaaa 50%, #cccccc 56%, white 80%) repeat scroll 0 0;
            box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.4);
            content: "";
            height: 0;
            pointer-events: none;
            position: absolute;
            right: 0px;
            top: 0px;
            transition-duration: 0.3s;
            transition-property: width, height;
            width: 0;
          }
          .hvr-curl-top-right:hover::before, .hvr-curl-top-right:focus::before, .hvr-curl-top-right:active::before {
            height: 35px;
            width: 35px;
          }

          .key-ring {
            filter: drop-shadow(10px 10px 6px #12c2e9);
          }
          .container-key-ring {
            margin-left: 90px;
            cursor: pointer;
          }
          .container-key-ring:hover {
            transform: rotate(-10deg) translateZ(0);
            transform-origin: 85%  16%;
          }
        `}
      </style>
    </Layout>
  )
}
