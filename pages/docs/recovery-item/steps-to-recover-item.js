import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../../components/layout'
import Nav from '../../../components/docs/nav'

export default function StepToRecoverItem () {
  return (
    <Layout>
      <Head>
        <title>Recover.ws - Lost and found steps to recover an item</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <div className='docs__container'>
          <div className='docs__summary'>
            <Nav />
          </div>
          <div className='docs__right__container'>
            <div className='docs__content'>
              <h1>ITEM RECOVERY IN FEW STEPS</h1>
              <h2>Highlighting the process of item recovery with focus on rewarding the finder</h2>

              <p>
                This document explains a detailed explanation of how item recovery works after
                the item is configured using Recover decentralised application.
              </p>

              <p>
                You can also refer to the Workflow - Detailed to help understand how the flow of product recovery works.
              </p>

              <ol>
                <li>Lost item is found.</li>
                <li>The finder scans the QR code present on the item.</li>
                <li>
                  Redirects to app.recover.ws page. Here the finder sees the reward price (in ETH or in fiat like dollars currency) present for the item.
                  Finder has to choose simple or advanced functionality.
                  <dl>
                    <dt>Simple functionality - By default</dt>
                    <dd>Recover creates the wallet for the finder to receive the reward.</dd>

                    <dt>Advanced functionality</dt>
                    <dd>Allows finder to receive reward in their existing wallet.</dd>
                  </dl>

                  <figure className='docs__container__img'>
                    <img src="/docs/item-recovery/item-recovery-step-3.png" alt="Lost item is found" />
                    <figcaption>Lost item is found</figcaption>
                  </figure>
                </li>
                <li>
                  Have to enter their email address and phone number which will be shown to the owner in the application. After tap on the Claim Discovered button.
                  <figure className='docs__container__img'>
                    <img src="/docs/item-recovery/item-recovery-step-4.png" alt="Transfer contact details to owner" />
                    <figcaption>Transfer contact details to owner</figcaption>
                  </figure>
                </li>
                <li>
                  This will submit the request for the reward and now the owner of the item may contact the finder or vice-versa.
                  In this case, the paymaster wallet will be used which is pre-funded by the owner. The QR code generated when an item is added will pay the gas
                  for the transaction.

                  <br />

                  At the same time, Recover also sends an email to the finder with the private key of the wallet which is functionality of simple mode.
                  <figure className='docs__container__img'>
                    <img src="/docs/item-recovery/item-recovery-step-5.png" alt="Claim has been registered" />
                    <figcaption>Claim has been registered</figcaption>
                  </figure>
                </li>
                <li>
                  The owner receives the message which updates him over the status of the lost item. In the Recover dapp, the owner will see the details
                  of the finder and has the choice to accept or reject the claim.

                  <br />The details shows:
                  <ul>
                    <li>Finder’s wallet address</li>
                    <li>Email to be notified</li>
                    <li>And a message written by the finder</li>
                  </ul>

                  <figure className='docs__container__img'>
                    <img src="/docs/item-recovery/item-recovery-step-6.png" alt="Reward transfer - Accept claim" />
                    <figcaption>Reward transfer - Accept claim</figcaption>
                  </figure>
                </li>
                <li>
                  Owner receives a metamask transaction box which requires permission to send a reward value from the owner's wallet to an Escrow (which is Recover).
                  Escrow helps make sure the finder gets a reward when the item is returned. This will be an Ethereum transaction.
                  <figure className='docs__container__img'>
                    <img src="/docs/item-recovery/item-recovery-step-7.png" alt="Metamask transaction to pay the finder - Owner’s wallet to Escrow" />
                    <figcaption>Metamask transaction to pay the finder - Owner’s wallet to Escrow</figcaption>
                  </figure>
                </li>
                <li>
                  After confirming the transaction and transferring the reward to an Escrow, the owner can reward the finder by clicking on the button which appears
                  on the screen. The reward is only transferred to the finder's wallet if the item is correctly returned. Another metamask transaction
                  on Ethereum will transfer the reward amount from Recover’s smart contract to the finder’s wallet.

                  <figure className='docs__container__img'>
                    <img src="/docs/item-recovery/item-recovery-step-8-a.png" alt="Item Recovered - Reward the finder" />
                    <figcaption>Item Recovered - Reward the finder</figcaption>
                  </figure>

                  <figure className='docs__container__img'>
                    <img src="/docs/item-recovery/item-recovery-step-8-b.png" alt="Metamask transaction to pay the finder - Escrow to finder’s wallet" />
                    <figcaption>Metamask transaction to pay the finder - Escrow to finder’s wallet</figcaption>
                  </figure>
                </li>
                <li>
                  In the last step, a confirmation will be visible which shows that the Recover transaction is done.
                  <figure className='docs__container__img'>
                    <img src="/docs/item-recovery/item-recovery-step-9.png" alt="Confirmation - Transaction finished" />
                    <figcaption>Confirmation - Transaction finished</figcaption>
                  </figure>
                </li>
              </ol>

              <div className='docs__content__nav'>
                <div className='docs__content__nav__link'>
                  <Link href='/docs/recovery-item/details-flowchart'><a>← DETAILED RECOVERY FLOWCHART</a></Link>
                </div>
                <div className='docs__content__nav__link' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
