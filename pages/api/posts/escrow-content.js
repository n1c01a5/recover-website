import image3 from '../../../public/photos-blog-1/image3.png'
import klerosAndSmartContract from '../../../public/photos-blog-1/kleros-and-smart-contract.jpg'
import smartContractHot from '../../../public/photos-blog-1/smart-contract-hot.png'

export const EscrowBlogContent = `
    <div class="escrow-container">
      <section class="blog__section">
        <h2>What is a generic Escrow?</h2>
        <p>
          In traditional transactions, both the parties (payee and the payer)
          are always concerned about foul play or mistrust. The payer is usually
          concerned about the products/services they will receive and payee for
          money being received. To fix this, an escrow is a financial
          arrangement where a third party is responsible for regulating and
          payment of funds which is required for multiple parties involved in a
          given transaction. The third-party involved only release the funds
          when all terms of the contract are respected. It helps in the
          transaction being more secure as the funds are kept in an escrow
          account which is managed by the
          <a
            class="blog_link"
            href="https://en.wikipedia.org/wiki/Online_dispute_resolution"
          >
            arbitrator
          </a>
          . Also, it adds an extra level of trust both parties have for the
          Escrow so chances of foul play are less.
          <br/><br />
          
          There are certain obligations
          that need to be fulfilled before a payment is released and in case the
          terms of the contract are not respected a dispute can be raised.
          
          <br/><br />
          
          Escrow technology takes care of your transaction without fraud or risk
          of losing money. It is always better to trust Escrow than making a
          handshake deal which can result in foul play afterward.
        </p>
      </section>
      <section class="blog__section">
        <h2>How Escrow Financial Transaction Works?</h2>
        <div class="blog__section-image"  style="background-image: url('${image3}') "></div>
        <div class="blog__section-image-caption">A trustless process for smooth flow of transactions</div>
        <p>
          Initially, either the payee or the payer approaches Escrow which acts
          as an arbitrator, the terms and conditions should be agreed upon
          before the transaction is started.
          <ul class="blog__list">
            <li>
              The buyer puts the payment to escrow to purchase a product or
              service.
            </li>
            <li>
              Then, the seller ships the product or the service to the buyer.
            </li>
            <li>
              If everything works well, the buyer releases the funds to the
              seller. If not, a dispute can be created and the arbitrator will
              solve it.
            </li>
          </ul>
        </p>
      </section>
      <section class="blog__section">
        <h2>What is an Escrow Smart Contract?</h2>
        <div class="blog__section-image"  style="background-image: url('${smartContractHot}') "></div>
        <div class="blog__section-image-caption">Can you see the future with those contracts? </div>
        <p>
          A smart contract is a program that is smart enough to execute a piece
          of code instructions when conditions are met. Also, smart contracts do
          not require any third-party control and run solely on the basis of
          pre-programmed logic which is overseen by a distributed, decentralized
          network of computers that runs on<a
            class="blog_link"
            href="https://www.investopedia.com/terms/b/blockchain.asp#what-is-blockchain"
          >
          blockchain
          </a>
          . It is a computer protocol that is used to digitally and
          automatically facilitate, verify, and enforce the terms of a contract.
          The main benefit of the Escrow smart contract is to reduce the
          dependency of intermediates, centralized arbitrators to help reduce
          fraud transactions. 
            
          <br/><br />
          
          The program automatically validates a condition
          and determines whether an asset will go to one person or back to the
          person who sent it. It is interesting to know that during the process,
          the<a
            class="blog_link"
            href="https://searchcio.techtarget.com/definition/distributed-ledger"
          >
            distributed ledger
          </a>
          can also store and make a copy of the document which provides added
          security and immutability.
        </p>
      </section>
      <section class="blog__section">
        <h2>Main Advantages of using Escrow Smart Contracts</h2>
        <div class="blog__section-image"  style="background-image: url('${klerosAndSmartContract}') "></div>
        <div class="blog__section-image-caption">When the transactions has a low-price and high security, it is here to stay</div>
        <div>
          <p>
            <div  class="blog__section-subtitle">
            Smart Contract enforcement
            </div>
            Smart contracts are
            enforced the same way as normal programs are done. Smart contracts
            are similar to real-world contracts but not exactly. In the real
            world, if a contract is broken you can take the person to court but
            in the case of smart contracts, there are predefined rules that are
            defined by parties and enforced by the blockchain. It’s smart
            contract enforcement.
          </p>
          <p>
              Arbitration Decentralized (reduce conflict interest) with
              <a class="blog_link" href="https://kleros.io/">
                Kleros
              </a>/<a
                class="blog_link no_left_margin"
                href="https://aragon.org/blog/aragon-network-jurisdiction-part-1-decentralized-court-c8ab2a675e82"
              >
                Aragon
              </a>
            : 
            <br /><br />
            The arbitration is decentralized and if any conflict of interest
            arises, it is being dealt with
            <a class="blog_link" href="https://kleros.io/">
              Kleros
            </a>
            , a Decentralized Autonomous Organisation (DAO) to solve disputes.
          </p>
          <p>
          <div  class="blog__section-subtitle">
          Interoperable (switch the arbitrator)

          </div>
            Escrow smart contracts are Interoperable that means if you don’t trust the
            arbitrator you can easily change the arbitrator, being said the
            smart contract follows the arbitrator standard. It allows a
            <a
              class="blog_link"
              href="https://blog.kleros.io/kleros-layer-2/"
            >
              decentralized arbitrator
            </a>
            to easily switch from one arbitration service to another one. Or to
            allow their users to choose themselves their arbitration services.
          </p>
          <p>
            <div  class="blog__section-subtitle">
            Resilient
            </div>
            The service is resilient and is here to
            stay. In other words, the service is always up. With an escrow smart
            contract, you can be sure that your fund is never lost because it
            uses blockchain protocol with high availability.
          </p>
          <p>
          <div  class="blog__section-subtitle">
          Less Arbitratation fees (if the gas is affordable :p) 
          </div>
            Smart contracts act as a less expensive way
            of doing business between two or more parties. In case of any
            dispute, you just have to pay the arbitration fee. Also,
            decentralized arbitrators like Kleros are cheap and affordable as
            they use a crowd of jurors to reduce the cost of arbitration.
          </p>
        </div>
      </section>
      <section class="blog__section">
        <h2>Use cases where an Escrow plays a major role</h2>
        <p>
        
          <div class="blog__section-subtitle">1. Recover </div>
          <ul class="blog__list">
            <li>Let us see how Recover functions in few easy steps.</li>
            <li>The finder finds your lost valuable.</li>
            <li>
              The honest finder will definitely return your valuable, but the
              dishonest person (who is not willing to not return the product) on
              seeing the reward capped higher than the market price is
              incentivized to return it to the owner.
            </li>
            <li> When the item is returned the finder gets the reward.</li>
            <li>
              If not, a dispute is created which is handled by the arbitrator.
            </li>
          </ul>
          <div class="blog__section-subtitle">2. Hiring Freelancers </div>

          <ul class="blog__list">
            <li>Escrow can work tremendously well when it comes to hiring freelancers for 
            a project. The money is sent to an Escrow and is only released when the expected 
            work is delivered within the time. </li>
          </ul>
        </p>
      </section>
    <section className="blog__section">
      <h2>Conclusion</h2>
      <p>
      Escrow financial agreement not only helps make the transaction secure but also adds more trust among two parties. 
      <br/><br/>
      On the other hand, Escrow smart contracts provide advantages like smart contract enforcement, interoperability, resilience, and less arbritation fees to name a few. 
      <br/><br/>
      
      Morover, the Smart contract can aslo be secured with Kleros dispute resolution which helps the transaction being more secure. 
      <br/><br/>
      
      
      The Recover Loser box comes with all the advantages of escrow smart contracts with easy implementation to make sure your valuable is returned, the next time you lose it. 
      <br/><br/>
      
      Now that we have learned briefly how escrow smart contracts work, let us discover
            
      <a class="blog_link" href="/">
      Recover
      </a>
        .
      </p>
    </section>
  </div>
`
