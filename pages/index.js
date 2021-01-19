import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import TextLoop from 'react-text-loop'

const Faq = dynamic(
  () => import('../components/faq'),
  { ssr: false }
)

import Layout from '../components/layout'
import Button from '../components/elements/button'

import EthereumLogo from '../public/ethereum-logo.svg'
import KlerosLogo from '../public/kleros-logo.svg'
import IpfsLogo from '../public/ipfs-logo.svg'
import DexLogo from '../public/dex-ag-logo.png' 
import IllustrationTestEthereum from '../public/illustration_test-ethereum.svg' // TODO: improve this
import IllustrationUserExperienceBlockchain from '../public/illustration_user-experience-blockchain.svg'
import IllustrationBlockchainBusinessModel from '../public/illustration_blockchain-business-model.svg'
import IllustrationBlockchainEscrow from '../public/illustration_blockchain-escrow.svg'
import IllustrationTraceabilityBlockchain from '../public/illustration_traceability-blockchain.svg'
import BackgroundLoserBox from '../public/background_loser-box.svg'

export default function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  })

  const [whyBlockchainIllustration, setWhyBlockchainIllustration] = useState(IllustrationUserExperienceBlockchain)

  return (
    <Layout>
      <Head>
        <title>Recover.ws - Lost and Found service based on the Ethereum Blockchain</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <header>
          <div className="desktop-layout">
            <div style={{
              display: 'flex', 
              justifyContent: 'space-between', 
              width: '1250px', 
              margin: '50px auto 0 auto'
            }}>
              <div>
                <h1>
                  Blockchain Friendly Gadget,
                  <br /><span style={{color: '#12c2e9'}}>Lost & Found</span> Service for&nbsp;
                  <TextLoop mask={true} interval={1400}>
                    <span>Phone</span>
                    <span>Pets</span>
                    <span>Keys</span>
                    <span>Wallet</span>
                    <span>Bag</span>
                    <span>Laptop</span>
                    <span>Ledger</span>
                    <span>Luggage</span>
                    <span>AirPods</span>
                  </TextLoop>
                </h1>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '500px', marginTop: '50px'}}>
                  <div><Button>How it Works</Button></div>
                  <div><Button isPrimary={true}>Get your Loser Box</Button></div>
                </div>
              </div>
              <div><img src="/doge.png" alt="Doge with QrCode" role="presentation" /></div>
            </div>
            <div style={{
              display: 'flex',
              width: '100vw',
              height: '140px',
              margin: '-90px 0 120px 0',
              padding: '0 calc((100vw - 1250px) / 2) 2px calc((100vw - 1250px) / 2)',
              background: 'rgba(196, 196, 196, 0.2)',
              color: 'rgba(0, 0, 0, 0.4)'
            }}>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <div>
                  <p><a href="https://consensys.net/developers/buidlnetwork/" style={{color: 'rgba(0, 0, 0, 0.4)', textDecoration: 'none'}}>BUIDL</a> top on</p>
                </div>
                <div style={{
                }}>
                  <ul style={{width: '500px', listStyle: 'none', paddingLeft: '40px'}}>
                    <li style={{display: 'inline-block', padding: '10px 20px 0 20px'}}>
                      <a href="https://kleros.io/" style={{textDecoration: 'none'}}>
                        <figure style={{textAlign: 'center'}}>
                          <img src={KlerosLogo} alt="Kleros logo svg" style={{width: '45px'}} />
                          <figcaption style={{fontSize: '12px', color: 'rgba(0, 0, 0, 0.4)'}}>KLEROS</figcaption>
                        </figure>
                      </a>
                    </li>
                    <li style={{display: 'inline-block', padding: '10px 20px 0 20px'}}>
                      <a href="https://ethereum.org/en/" style={{textDecoration: 'none'}}>
                        <figure style={{textAlign: 'center'}}>
                          <img src={EthereumLogo} alt="Ethereum logo svg" style={{width: '26px'}} />
                          <figcaption style={{fontSize: '12px', color: 'rgba(0, 0, 0, 0.4)', textAlign: 'center'}}>ETHEREUM</figcaption>
                        </figure>
                      </a>
                    </li>
                    <li style={{display: 'inline-block', padding: '10px 20px 0 20px'}}>
                      <a href="https://ipfs.io/" style={{textDecoration: 'none'}}>
                        <figure style={{textAlign: 'center'}}>
                          <img src={IpfsLogo} alt="IPFS logo svg" style={{width: '35px'}} />
                          <figcaption style={{fontSize: '12px', color: 'rgba(0, 0, 0, 0.4)', textDecoration: 'none'}}>IPFS</figcaption>
                        </figure>
                      </a>
                    </li>
                    <li style={{display: 'inline-block', padding: '10px 20px 0 20px'}}>
                      <a href="https://dex.ag/" style={{textDecoration: 'none'}}>
                        <figure style={{textAlign: 'center'}}>
                          <img src={DexLogo} alt="DexLogo logo png" style={{width: '35px'}} />
                          <figcaption style={{fontSize: '12px', color: 'rgba(0, 0, 0, 0.4)', textDecoration: 'none'}}>DEX.AG</figcaption>
                        </figure>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-layout">
            <div style={{display: 'flex', flexDirection: 'column', width: '100vw', marginTop: '-40px'}}>
              <div style={{textAlign: 'center'}}><img style={{width: '80vw'}} src="/doge.png" alt="Doge with QrCode" role="presentation" /></div>
              <div style={{marginTop: '20px'}}>
                <h1 style={{textAlign: 'center', fontSize: '22px'}}>
                  Blockchain Friendly Gadget,
                  <br /><span style={{color: '#12c2e9'}}>Lost & Found</span> Service for&nbsp;
                  <TextLoop mask={true} interval={1400}>
                    <span>Phone</span>
                    <span>Pets</span>
                    <span>Keys</span>
                    <span>Wallet</span>
                    <span>Bag</span>
                    <span>Laptop</span>
                    <span>Ledger</span>
                    <span>Luggage</span>
                    <span>AirPods</span>
                  </TextLoop>
                </h1>
              </div>
              <div style={{textAlign: 'center', marginTop: '20px'}}><Button isPrimary={true} isSmallFormat={true}>Get your Loser Box</Button></div>
            </div>
          </div>
        </header>
      </div>

      <div>
        <section>
          <div className="desktop-layout">     
            <h2 style={{fontWeight: '600', fontSize: '28px', padding: '0 calc((100vw - 1250px + 160px) / 2)'}}>
              <span style={{color: '#12c2e9'}}>How</span> I can Protect my Valuables from Loss?
            </h2>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div style={{
                display: 'flex',
                padding: '80px calc((100vw - 1250px + 160px) / 2) 0 calc((100vw - 1250px + 160px) / 2)'
              }}>
                <div style={{
                  position: 'relative',
                  flex: '1',
                  paddingTop: '50px'
                }}>
                  <div>
                    <p style={{width: '450px', paddingLeft: '30px', fontSize: '22px', lineHeight: '34px'}}>
                      Put the QrCode with your personal details and a reward on your valuables to ensure its return in case of loss.
                    </p>
                  </div>
                  <div style={{
                    flex: '1',
                    position: 'absolute', 
                    top: '-10px', 
                    color: 'rgba(166, 255, 203, 0.5)', 
                    fontSize: '90px', 
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    zIndex: '-1'
                  }}> 
                    #1
                  </div>
                </div>
                <div style={{flex: '1', textAlign: 'center'}}>
                  <img style={{width: '240px'}} src="/generate-qr-code.jpg" alt="Generate Lost and Found QrCode" role="presentation" />
                </div>
              </div>
              <div style={{
                display: 'flex',
                padding: '80px calc((100vw - 1250px + 160px) / 2) 0 calc((100vw - 1250px + 160px) / 2)'
              }}>
                <div style={{flex: '1', textAlign: 'center'}}>
                  <img style={{width: '300px'}} src="/lost-valuable.jpg" alt="Lose your Valuable" role="presentation" />
                </div>
                <div style={{
                  position: 'relative',
                  flex: '1',
                  paddingTop: '40px'
                }}>
                  <div>
                    <p style={{width: '450px', paddingLeft: '30px', fontSize: '22px', lineHeight: '34px'}}>
                      If your valuable is lost, the finder is incentivized to return it to the owner.
                    </p>
                  </div>
                  <div style={{
                    flex: '1',
                    position: 'absolute', 
                    top: '-15px', 
                    color: 'rgba(166, 255, 203, 0.5)', 
                    fontSize: '90px', 
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    zIndex: '-1'
                  }}> 
                    #2
                  </div>
                </div>
              </div>
              <div style={{
                display: 'flex',
                padding: '80px calc((100vw - 1250px + 160px) / 2) 0 calc((100vw - 1250px + 160px) / 2)'
              }}>
                <div style={{
                  position: 'relative',
                  flex: '1',
                  paddingTop: '50px'
                }}>
                  <div>
                    <p style={{width: '450px', paddingLeft: '30px', fontSize: '22px', lineHeight: '34px'}}>
                      If the finder returns your valuable, you give back the reward for his good deed.
                    </p>
                  </div>
                  <div style={{
                    flex: '1',
                    position: 'absolute', 
                    top: '-10px',
                    color: 'rgba(166, 255, 203, 0.5)', 
                    fontSize: '90px', 
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    zIndex: '-1'
                  }}> 
                    #3
                  </div>
                </div>
                <div style={{flex: '1', textAlign: 'center'}}>
                  <img style={{width: '270px'}} src="/exchange-reward-to-valuable.jpg" alt="Generate Lost and Found QrCode" role="presentation" />
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-layout">
            <h2 style={{fontWeight: '600', fontSize: '22px', textAlign: 'center', margin: '40px 18px'}}>
              <span style={{color: '#12c2e9'}}>How</span> I can Protect my Valuables from Loss?
            </h2>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <div style={{position: 'relative'}}>
                <img style={{width: '200px', position: 'relative', left: '-14px'}} src="/generate-qr-code.jpg" alt="Generate Lost and Found QrCode" role="presentation" />
                <div style={{
                    position: 'absolute', 
                    top: '-5px',
                    left: '-30px',
                    color: 'rgba(166, 255, 203, 0.5)', 
                    fontSize: '50px', 
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    zIndex: '10'
                  }}> 
                    #1
                  </div>
              </div>

              <div>
                <p style={{padding: '20px', fontSize: '14px', lineHeight: '17px', textAlign: 'center'}}>
                  Put the QrCode with your personal details and a reward on your valuables to ensure its return in case of loss.
                </p>
              </div>
              <div style={{position: 'relative', marginTop: '20px'}}>
                <img style={{width: '190px', paddingTop: '40px', position: 'relative', left: '-14px'}} src="/lost-valuable.jpg" alt="Lose your Valuable" role="presentation" />
                <div style={{
                  position: 'absolute', 
                  top: '-5px',
                  left: '-44px',
                  color: 'rgba(166, 255, 203, 0.5)', 
                  fontSize: '50px', 
                  fontFamily: 'Roboto',
                  fontWeight: '700',
                  zIndex: '10'
                }}> 
                  #2
                </div>
              </div>
              <div>
                <p style={{padding: '20px', fontSize: '14px', lineHeight: '17px', textAlign: 'center'}}>
                  If your valuable is lost, the finder is incentivized to return it to the owner.
                </p>
              </div>

              <div style={{position: 'relative', marginTop: '20px'}}>
                <img style={{width: '190px', paddingTop: '40px', position: 'relative', left: '-14px'}} src="/exchange-reward-to-valuable.jpg" alt="Generate Lost and Found QrCode" role="presentation" />
                <div style={{
                  position: 'absolute', 
                  top: '-5px',
                  left: '-44px',
                  color: 'rgba(166, 255, 203, 0.5)', 
                  fontSize: '50px', 
                  fontFamily: 'Roboto',
                  fontWeight: '700',
                  zIndex: '10'
                }}> 
                  #3
                </div>
              </div>
              <div>
                <p style={{padding: '20px', fontSize: '14px', lineHeight: '17px', textAlign: 'center'}}>
                  If the finder returns your valuable, you give back the reward for his good deed.
                </p>
              </div>
            </div>
            <h2 style={{fontWeight: '600', fontSize: '22px', textAlign: 'center', margin: '30px 18px 10px 18px'}}>
              <span style={{color: '#12c2e9'}}>Why</span> Choose the Recover Lost and Found Service?
            </h2>
            <div style={{display: 'flex', flexDirection: 'column', margin: '0 20px'}}>
              <div>
                <h3>
                  <img style={{position: 'relative', width: '40px', top: '12px', left: '-4px'}} src="/icon-qrcode.png" alt="Incentive people to give back your item" role="presentation" />
                  <span style={{paddingLeft: '5px'}}>Convenient</span>
                </h3>
                <p style={{padding: '20px 0'}}>
                  Simply Put your QrCode on your Valuable to Protect it in case of Loss.
                </p>
              </div>
              <div style={{textAlign: 'right'}}>
                <h3>
                  <span style={{paddingRight: '10px'}}>Incentive</span>
                  <img style={{position: 'relative', width: '40px', top: '12px'}} src="/icon-incentive.png" alt="Incentive people to give back your item" role="presentation" />
                </h3>
                <p style={{padding: '20px 0'}}>
                  A Reward is linked with the QrCode to incentivize the finder to return your valuable.
                </p>
              </div>
              <div>
                <h3>
                  <img style={{position: 'relative', width: '40px', top: '12px', left: '-4px'}} src="/icon-secure.png" alt="Keep private your personal details" role="presentation" />
                  <span style={{paddingLeft: '5px'}}>Privacy</span>
                </h3>
                <p style={{padding: '20px 0'}}>
                  Your Personal details are accessible only to the finder and no other third party services.
                </p>
              </div>
              <div style={{marginTop: '40px'}}>
                <h3 style={{textAlign: 'center'}}>
                  <img style={{position: 'relative', width: '40px', top: '-10px'}} src="/icon-blockchain.png" alt="Blockchain for a lost a found service" role="presentation" />
                  <br />
                  Experiment the Blockchain Ecosystem
                </h3>
                <p style={{padding: '20px 0'}}>
                  Recover is a blockchain sandbox to improve:
                </p>
                <p style={{borderLeft: '2px solid #a6ffcb', paddingLeft: '10px'}}>
                  The Blockchain User Experience (workflow, tools, libraries...) for regular and cryptoenthousiast user.
                </p>
                <p style={{marginTop: '20px', borderLeft: '2px solid #a6ffcb', paddingLeft: '10px'}}>
                  A viable Business Model that does not interfere with the decentralization of the project.
                </p>
                <p style={{marginTop: '20px', borderLeft: '2px solid #a6ffcb', paddingLeft: '10px'}}>
                  The trust for the transactions between parties (seller/buyer, finder/owner) thanks to the escrow technology.
                </p>
                <p style={{marginTop: '20px', borderLeft: '2px solid #a6ffcb', paddingLeft: '10px'}}>
                  The traceability of products and sales by associating a non-fungible token to each Loser Box.
                </p>
              </div>
              <h2 style={{fontWeight: '600', fontSize: '22px', textAlign: 'center', margin: '60px 18px 30px 18px'}}>
                Take a look on the <span style={{color: '#12c2e9'}}>Loser Box</span>!
              </h2>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src='loser-box.png' style={{position: 'relative', width: '240px', top: '-40px', transform: 'rotate(-1.1deg)'}} />
                <div style={{textAlign: 'center', marginTop: '-40px'}}><Button isPrimary={true} isSmallFormat={true}>Get your Loser Box</Button></div>
                <div><p style={{marginTop: '20px'}}><a style={{textDecoration: 'underline'}}>Or test for free</a></p></div>
              </div>
            </div>
          </div>
        </section>
        <section className="mobile-layout">
          <h2 style={{fontWeight: '600', fontSize: '22px', padding: '60px 18px 0 18px', textAlign: 'center'}}>
            Frequently Asked <span style={{color: '#12c2e9'}}>Questions</span>
          </h2>
          <div style={{padding: '20px', height: 'min-content'}}>
            <Faq />
          </div>
        </section>
      </div>

      <div>
        <section>
          <div style={{marginTop: '140px'}} className="desktop-layout">
            <h2 style={{fontWeight: '600', fontSize: '28px', padding: '0 calc((100vw - 1250px + 160px) / 2)'}}>
              <span style={{color: '#12c2e9'}}>Why</span> Choose the Recover Lost and Found Service?
            </h2>
            <div style={{display: 'flex', flexDirection: 'column', padding: '0 calc((100vw - 1250px + 160px) / 2)'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '80px'}}>
                <div style={{flex: '1'}}>
                  <h3 style={{textAlign: 'center', position: 'relative', left: '-10px'}}>
                    <img style={{position: 'relative', width: '40px', top: '12px', left: '-20px'}} src="/icon-incentive.png" alt="Incentive people to give back your item" role="presentation" />
                    <span style={{fontSize: '24px'}}>Incentive</span>
                  </h3>
                  <p style={{margin: '38px auto', fontSize: '22px', width: '300px', lineHeight: '34px'}}>
                    A Reward is linked with the QrCode to incentivize the finder to return your valuable.
                  </p>
                </div>
                <div style={{flex: '1'}}>
                  <h3 style={{textAlign: 'center', position: 'relative', left: '-10px'}}>
                    <img style={{position: 'relative', width: '40px', top: '12px', left: '-20px'}} src="/icon-qrcode.png" alt="Easy to use this lost and found service" role="presentation" />
                    <span style={{fontSize: '24px'}}>Convenient</span>
                  </h3>
                  <p style={{margin: '38px auto', fontSize: '22px', width: '300px', lineHeight: '34px'}}>
                    Simply Put your QrCode on your Valuable to Protect it in case of Loss.
                  </p>
                </div>  
                <div style={{flex: '1'}}>
                  <h3 style={{textAlign: 'center', position: 'relative', left: '-10px'}}>
                    <img style={{position: 'relative', width: '40px', top: '12px', left: '-20px'}} src="/icon-secure.png" alt="Keep private your personal details" role="presentation" />
                    <span style={{fontSize: '24px'}}>Privacy</span>
                  </h3>
                  <p style={{margin: '38px auto', fontSize: '22px', width: '300px', lineHeight: '34px'}}>
                    Your Personal details are accessible only to the finder and no other third party services.
                  </p>
                </div>
              </div>
              <div style={{margin: '78px 0'}}>
                <h3>
                  <img style={{position: 'relative', width: '40px', top: '12px'}} src="/icon-blockchain.png" alt="Blockchain for a lost a found service" role="presentation" />
                  <span style={{paddingLeft: '20px', fontSize: '24px'}}>Experiment the Blockchain Ecosystem</span>
                </h3>
                <div style={{display: 'flex'}}>
                  <div style={{flex: '1'}}>
                    <p style={{margin: '38px auto 18px auto', fontSize: '22px', lineHeight: '34px'}}>Recover is a blockchain sandbox to improve:</p>
                    <ul style={{listStyle: 'none'}}>
                      <li onMouseEnter={() => setWhyBlockchainIllustration(IllustrationUserExperienceBlockchain)} className="why-blockchain">The Blockchain User Experience (workflow, tools, libraries...) for regular and cryptoenthousiast user.</li>
                      <li onMouseEnter={() => setWhyBlockchainIllustration(IllustrationBlockchainBusinessModel)} className="why-blockchain">A viable Business Model that does not interfere with the decentralization of the project.</li>
                      <li onMouseEnter={() => setWhyBlockchainIllustration(IllustrationBlockchainEscrow)} className="why-blockchain">The trust for the transactions between parties (seller/buyer, finder/owner) thanks to the escrow technology.</li>
                      <li onMouseEnter={() => setWhyBlockchainIllustration(IllustrationTraceabilityBlockchain)} className="why-blockchain">The traceability of products and sales by associating a non-fungible token to each Loser Box.</li>
                    </ul>
                  </div>
                  <div style={{display: 'flex', flex: '1', alignItems: 'center'}}>
                    <div style={{width: '100%', textAlign: 'center'}}>
                      <img style={{width: '370px'}} src={whyBlockchainIllustration} role="presentation" alt="User experience and blockchain" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    
      <div className="desktop-layout" style={{background: `url(${BackgroundLoserBox}) no-repeat right`, backgroundSize: 'contain', height: '500px'}}>
        <section>
        <h2 style={{width: '100%', fontWeight: '600', fontSize: '28px', padding: '0 calc((100vw - 1250px + 160px) / 2)', textAlign: 'center'}}>Take a look on the <span style={{color: '#12c2e9'}}>Loser Box</span>!</h2>
        <div style={{display: 'flex', height: 'calc(500px - 34px)', padding: '0 calc((100vw - 1250px + 160px) / 2)', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{marginTop: '-120px'}}>
            <h3 style={{marginBottom: '30px'}}>Discover the loser Box now:</h3>
            <Button isPrimary={true}>Get your Loser Box</Button>
            <a href="https://app.recover.ws/" style={{paddingLeft: '28px', textDecoration: 'underline'}}>or test Recover for free</a>
          </div>
          <div><img src='loser-box.png' style={{position: 'relative', width: '340px', top: '-14px', left: '60px', transform: 'rotate(-1.1deg)'}} /></div>
        </div>
        </section>
      </div> 
   
    
      <div className="desktop-layout">
        <section>
          <h2 style={{fontWeight: '600', fontSize: '28px', padding: '130px calc((100vw - 1250px + 160px) / 2) 50px calc((100vw - 1250px + 160px) / 2)'}}>Frequently Asked <span style={{color: '#12c2e9'}}>Questions</span></h2>
          <div style={{padding: '0 calc((100vw - 1250px + 160px) / 2)', height: 'min-content'}}>
            <Faq />
          </div>
        </section>
      </div>


      <style jsx>{`
        h1 {
          font-weight: 700;
        }

        i {
          position: absolute;
          top: 0;
          right: 0;
          font-size: 30px;
          font-style: normal;
        }

        i:after {
          content: "+";
        }

        .why-blockchain {
          margin: 20px 0;
          padding: 12px 14px;
          border-left: solid 5px #a6ffcb;
        }

        .why-blockchain:hover {
          background: #f2f2f2;
          border-left: solid 5px #12c2e9;
          cursor: pointer;
        }
      `}</style>
    </Layout>
  )
}
