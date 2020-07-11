import Head from 'next/head'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import TextLoop from 'react-text-loop'

import Layout from '../components/layout'
import Button from '../components/elements/button'

export default function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })

  return (
    <Layout>
      <Head>
        <title>Recover.ws - Lost anf Found service based on the Ethereum Blockchain</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <header>
          {
            isDesktopOrLaptop ? (
              <>
                  <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '1250px', margin: '0 auto'}}>
                    <div>
                      <h1>
                        Blockchain Friendly Gadget,
                        <br /><span style={{color: '#12c2e9'}}>Lost & Found</span> Service for&nbsp;
                        <TextLoop mask={true} interval={1400}>
                          <span>Phone</span>
                          <span>Wallet</span>
                          <span>Pets</span>
                          <span>Keys</span>
                          <span>Wallet</span>
                          <span>Bag</span>
                          <span>Tablet</span>
                          <span>Ledger</span>
                          <span>Luggage</span>
                          <span>AirPods</span>
                        </TextLoop>
                        .
                      </h1>
                      <div style={{display: 'flex', justifyContent: 'space-between', width: '500px', marginTop: '50px'}}>
                        <div><Button>How it Works</Button></div>
                        <div><Button isPrimary={true}>Get your Loser Box</Button></div>
                      </div>
                    </div>
                    <div><img src="/doge.png" alt="Doge with QrCode" role="presentation" /></div>
                  </div>
                  <div style={{display: 'flex', width: '100%', background: 'rgba(196, 196, 196, 0.2)', margin: '-90px 0 120px 0'}}>
                      <div><p><a href="https://consensys.net/developers/buidlnetwork/">#BUIDL</a> to on</p></div>
                      <div>
                        <ul>
                          <li><a href="#">Kleros</a></li>
                          <li><a href="#">Ethereum</a></li>
                          <li><a href="#">IPFS</a></li>
                        </ul>
                      </div>
                      <div><p>Hosted By</p></div>
                      <div>STATIONF</div>
                    </div>
              </>
            ) : (<>Mobile</>)
          }
        </header>
      </div>

      <div>
        <section>
          <h2>How I can Protect my Valuables from Loss?</h2>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex'}}>
              <div>
                <p>
                  Generate QrCode with contact information and reward and paste it on your valuable to assure return if lost.
                </p>
              </div>
              <div><img src="/generate-qr-code.jpg" alt="Generate Lost and Found QrCode" role="presentation" /></div>
            </div>
            <div style={{display: 'flex'}}>
              <div><img src="/lose-valuable.jpg" alt="Lose your Valuable" role="presentation" /></div>
              <div>
                <p>If your valuable is lost, the finder is incentivized to return.</p>
              </div>
            </div>
            <div style={{display: 'flex'}}>
              <div>
                <p>If the finder returns your valuable, you share the reward for his good deed.</p>
              </div>
              <div><img src="/exchange-valuable.jpg" alt="Exchange the Reward against the Valuable" role="presentation" /></div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section>
          <h2>Why Choose the Recover Lost and Found Service?</h2>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex'}}>
              <div>
                <h3>Resilience</h3>
              </div>
              <div>
                <h3>Incentive</h3>
              </div>
              <div>
                <h3>Privacy</h3>
              </div>
            </div>
            <div>
              <h3>Participate to the Blockchain Ecosystem</h3>
              <div style={{display: 'flex', flex: '1 1'}}>
                <div>
                  <p>Recover is a blockchain sandbox to improve:</p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section>
          <h2>Take a Look at our Products!</h2>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>FREEMIUM</div>
            <div>LOSER BOX</div>
            <div>BUSINESS</div>
          </div>
        </section>
      </div>

      <div>
        <section>
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li>
              <h3>What is Lorem Ipsum ?</h3>
              <i />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </li>
            <li>
              <h3>Why do we use it ?</h3>
              <i />
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </li>
            <li>
              <h3>Where we can it ?</h3>
              <i />
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            </li>
          </ul>
        </section>
      </div>

      <style jsx>{`
        h1 {
          font-weight: 700;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .tool {
          display: inline;
        }

        li {
          position: relative;
          padding: 0;
          margin: 0;
          padding-bottom: 4px;
          padding-top: 18px;
          border-top: 1px solid #dce7eb;
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

        i.isOpenQuestion:after {
          content: "−";
        }
      `}</style>
    </Layout>
  )
}
