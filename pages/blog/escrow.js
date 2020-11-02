import Head from 'next/head'
import Layout from '../../components/layout'

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Recover.ws - Loser Box to protect your item from loss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="escrow-container">
        <h1 className="escrow-header">
          Securing valuables with Escrow Smart Contracts
        </h1>
        <div>
          <section className="blog__section">
            <h2>What is a generic Escrow?</h2>
            <p>
              In traditional transactions, both the parties (payee and the
              payer) are always concerned about foul play or mistrust. The payer
              is usually concerned about the products/services they will receive
              and payee for money being received. To fix this, an escrow is a
              financial arrangement where a third party is responsible for
              regulating and payment of funds which is required for multiple
              parties involved in a given transaction. The third-party involved
              only release the funds when all terms of the contract are
              respected. It helps in the transaction being more secure as the
              funds are kept in an escrow account which is managed by the
              <a
                className="blog_link"
                href="https://en.wikipedia.org/wiki/Online_dispute_resolution"
              >
                arbitrator
              </a>
              . Also, it adds an extra level of trust both parties have for the
              Escrow so chances of foul play are less. There are certain
              obligations that need to be fulfilled before a payment is released
              and in case the terms of the contract are not respected a dispute
              can be raised. Escrow technology takes care of your transaction
              without fraud or risk of losing money. It is always better to
              trust Escrow than making a handshake deal which can result in foul
              play afterward.
            </p>
          </section>
          <section className="blog__section">
            <h2>How Escrow Financial Transaction Works?</h2>
            <p>
              Initially, either the payee or the payer approaches Escrow which
              acts as an arbitrator, the terms and conditions should be agreed
              upon before the transaction is started.
              <ul className="blog__list">
                <li>
                  The buyer puts the payment to escrow to purchase a product or
                  service.
                </li>
                <li>
                  Then, the seller ships the product or the service to the
                  buyer.
                </li>
                <li>
                  If everything works well, the buyer releases the funds to the
                  seller. If not, a dispute can be created and the arbitrator
                  will solve it.
                </li>
              </ul>
            </p>
          </section>
          <section className="blog__section">
            <h2>What is an Escrow Smart contract?</h2>
            <p>
              A smart contract is a program that is smart enough to execute a
              piece of code instructions when conditions are met. Also, smart
              contracts do not require any third-party control and run solely on
              the basis of pre-programmed logic which is overseen by a
              distributed, decentralized network of computers that runs on
              <a
                className="blog_link"
                href="https://www.investopedia.com/terms/b/blockchain.asp#what-is-blockchain"
              >
                blockchain
              </a>
              . It is a computer protocol that is used to digitally and
              automatically facilitate, verify, and enforce the terms of a
              contract. The main benefit of the Escrow smart contract is to
              reduce the dependency of intermediates, centralized arbitrators to
              help reduce fraud transactions. The program automatically
              validates a condition and determines whether an asset will go to
              one person or back to the person who sent it. It is interesting to
              know that during the process, the
              <a
                className="blog_link"
                href="https://searchcio.techtarget.com/definition/distributed-ledger"
              >
                distributed ledger
              </a>{' '}
              can also store and make a copy of the document which provides
              added security and immutability.
            </p>
          </section>
          <section className="blog__section">
            <h2>Main Advantages of using Escrow Smart Contracts</h2>
            <div>
              <p>
                <strong>Smart Contract enforcement:</strong> Smart contracts are
                enforced the same way as normal programs are done. Smart
                contracts are similar to real-world contracts but not exactly.
                In the real world, if a contract is broken you can take the
                person to court but in the case of smart contracts, there are
                predefined rules that are defined by parties and enforced by the
                blockchain. It’s smart contract enforcement.
              </p>
              <p>
                <strong>
                  Arbitration Decentralized (reduce conflict interest) with{' '}
                  <a className="blog_link" href="https://kleros.io/">
                    Kleros
                  </a>
                  /
                  <a
                    className="blog_link no_left_margin"
                    href="https://aragon.org/blog/aragon-network-jurisdiction-part-1-decentralized-court-c8ab2a675e82"
                  >
                    Aragon
                  </a>
                </strong>
                : The arbitration is decentralized and if any conflict of
                interest arises, it is being dealt with{' '}
                <a className="blog_link" href="https://kleros.io/">
                  Kleros
                </a>
                , a Decentralized Autonomous Organisation (DOA) to solve
                disputes.
              </p>
              <p>
                <strong>Interoperable (switch the arbitrator)</strong>: Escrow
                smart contracts are Interoperable that means if you don’t trust
                the arbitrator you can easily change the arbitrator, being said
                the smart contract follows the arbitrator standard. It allows a{' '}
                <a
                  className="blog_link"
                  href="https://blog.kleros.io/kleros-layer-2/"
                >
                  decentralized arbitrator
                </a>{' '}
                to easily switch from one arbitration service to another one. Or
                to allow their users to choose themselves their arbitration
                services.
              </p>
              <p>
                <strong>Resilient</strong>: The service is resilient and is here
                to stay. In other words, the service is always up. With an
                escrow smart contract, you can be sure that your fund is never
                lost because it uses blockchain protocol with high availability.
              </p>
              <p>
                <strong>Cheap</strong>: Smart contracts act as a less expensive
                way of doing business between two or more parties. In case of
                any dispute, you just have to pay the arbitration fee. Also,
                decentralized arbitrators like Kleros are cheap and affordable
                as they use a crowd of jurors to reduce the cost of arbitration.
              </p>
            </div>
          </section>
          <section className="blog__section">
            <h2>Escrow Smart Contract implementation with Recover</h2>
            <p>
              <ul className="blog__list">
                <li>The finder finds your lost valuable.</li>
                <li>
                  The honest finder will definitely return your valuable, but
                  the dishonest person (who is not willing to not return the
                  product) on seeing the reward capped higher than the market
                  price is incentivized to return it to the owner.
                </li>
                <li> When the item is returned the finder gets the reward.</li>
                <li>
                  If not, a dispute is created which is handled by the
                  arbitrator.
                </li>
              </ul>
            </p>
          </section>
          <section className="blog__section">
            <h2>Conclusion</h2>
            <p>
              Now that we have learned briefly how blockchain escrow works, let
              us discover
              <a className="blog_link" href="/">
                Recover
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </Layout>
  )
}
