import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/layout'
import Button from '../../components/elements/button'

import EthereumLogo from '../../public/ethereum-logo.svg'
import KlerosLogo from '../../public/kleros-logo.svg'
import IpfsLogo from '../../public/ipfs-logo.svg'
import { RotateLoader } from 'react-spinners'

export default function LoserBox () {
  return (
    <Layout>
      <Head>
        <title>Recover.ws - Loser Box to protect your item from loss</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap' rel='stylesheet' />
      </Head>

      <div>
        <header>
          <div
            className='loser-box-container'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '1250px',
              margin: '3rem auto'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '128px',
                  height: '128px',
                  overflow: 'hidden',
                  border: '3px solid #ccc',
                  marginBottom: '20px'
                }}
              >
                <img src='loser-box-buy.png' style={{ width: '64px' }} />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '128px',
                  height: '128px',
                  overflow: 'hidden',
                  border: '3px solid #ccc',
                  marginBottom: '20px'
                }}
              >
                <img
                  src='loser-box-pvc-card-keyring-square.jpg'
                  style={{ objectFix: 'cover', width: '128px' }}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '128px',
                  height: '128px',
                  overflow: 'hidden',
                  border: '3px solid #ccc',
                  marginBottom: '20px'
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
                justifyContent: 'center',
                width: '1000px'
              }}
            >
              <img
                src='loser-box-buy.png'
                style={{ width: '320px', height: '500px' }}
              />
            </div>
            <div>
              <h1 style={{ fontSize: '22px', fontWeight: 'bold' }}>
                LOSER BOX - Lost and Found Pack to prevent your valuables from
                Loss - Limited Edition (only 42 items)
              </h1>
              <p
                style={{
                  margin: '20px 0',
                  lineHeight: '26px',
                  fontWeight: 'bold'
                }}
              >
                A crafted box with pre-printed QR-code on :
                <ul>
                  <li style={{ fontWeight: 'bold' }}>- 2 sets of stickers</li>
                  <li style={{ fontWeight: 'bold' }}>- 2 PVC cards</li>
                  <li style={{ fontWeight: 'bold' }}>- 1 key-ring</li>
                </ul>
              </p>
              <hr />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '20px'
                }}
              >
                <p
                  style={{
                    lineHeight: '50px',
                    fontWeight: 'bold',
                    justifyContent: 'center'
                  }}
                >
                  Payment secured by an escrow smart contract
                </p>
              </div>
              <div
                style={{
                  margin: '20px 100px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '20px'
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
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '100px',
                  marginBottom: '20px'
                }}
              >
                <div style={{ display: 'flex' }}>
                  <div
                    style={{
                      background: '#f2f2f2',
                      width: '300px',
                      height: '60px',
                      marginRight: '10px',
                      boxSizing: 'border-box',
                      border: '2px solid gray'
                    }}
                  >
                    <p
                      style={{
                        lineHeight: '56px',
                        textAlign: 'center',
                        fontSize: '20px'
                      }}
                    >
                      ${process.env.NEXT_PUBLIC_MAINNET_TOKEN_AMOUNT}.00 DAI
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                  <Link href='/loser-box/buy?step=1'>
                    <Button isPrimary style={{ width: '300px' }}>
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
                      CARD
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
                  marginTop: '-130px'
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
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '1250px',
              margin: '180px auto 0 auto'
            }}
          >
            <h2 style={{ fontSize: '30px' }}>
              Loser Box Gallery
            </h2>
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
