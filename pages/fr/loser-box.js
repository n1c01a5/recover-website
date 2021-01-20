import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import TextLoop from 'react-text-loop'

import Layout from '../../components/layout'
import Button from '../../components/elements/button'

import EthereumLogo from '../../public/ethereum-logo.svg'
import KlerosLogo from '../../public/kleros-logo.svg'
import IpfsLogo from '../../public/ipfs-logo.svg'
import IllustrationTestEthereum from '../../public/illustration_test-ethereum.svg' // TODO: improve this
import IllustrationUserExperienceBlockchain from '../../public/illustration_user-experience-blockchain.svg'
import IllustrationBlockchainBusinessModel from '../../public/illustration_blockchain-business-model.svg'
import IllustrationBlockchainEscrow from '../../public/illustration_blockchain-escrow.svg'
import IllustrationTraceabilityBlockchain from '../../public/illustration_traceability-blockchain.svg'
import BackgroundLoserBox from '../../public/background_loser-box.svg'

const Faq = dynamic(
  () => import('../../components/faq'),
  { ssr: false }
)

export default function LoserBox () {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  })

  return (
    <Layout>
      <Head>
        <title>Recover.ws - Loser Box to protect your item from loss</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <header>
          <div className='desktop-layout'>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '1250px',
              margin: '0 auto 0 auto'
            }}
            >
              <div style={{
                display: 'flex',
                flexDirection: 'column'
              }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '128px', height: '128px', overflow: 'hidden', border: '3px solid #ccc', marginBottom: '20px' }}><img src='loser-box-buy.png' style={{ width: '64px' }} /></div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '128px', height: '128px', overflow: 'hidden', border: '3px solid #ccc', marginBottom: '20px' }}><img src='loser-box-pvc-card-keyring-square.jpg' style={{ objectFix: 'cover', width: '128px' }} /></div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '128px', height: '128px', overflow: 'hidden', border: '3px solid #ccc', marginBottom: '20px' }}><img src='loser-box-pvc-card-square.png' style={{ objectFix: 'cover', width: '128px' }} /></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '1000px' }}>
                <img src='loser-box-buy.png' style={{ width: '320px' }} />
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
                  <div />
                  <div><Button isPrimary style={{ width: '300px' }}>BUY YOUR LOSER BOX</Button></div>
                </div>
              </div>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '1250px',
              margin: '50px auto 0 auto'
            }}
            >
              <h2>Items Description</h2>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '1250px',
              margin: '50px auto 0 auto'
            }}
            >
              <h2>Loser Box Gallery</h2>
            </div>
          </div>

          <div className='mobile-layout' />
        </header>
      </div>

      <style jsx>{`
        h1 {
          font-weight: 700;
        }
      `}
      </style>
    </Layout>
  )
}
