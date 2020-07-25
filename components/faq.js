import { useState } from 'react'
import {
  CollapsibleComponent,
  CollapsibleHead,
  CollapsibleContent
} from 'react-collapsible-component'

const Faq = () => {
  const [openCollapsibleComponentByIndex, setOpenCollapsibleComponentByIndex] = useState(null)

  return (
    <>
      <div style={{margin: '5px 0'}} onClick={() => setOpenCollapsibleComponentByIndex(openCollapsibleComponentByIndex !== 0 ? 0 : null)}>
        <CollapsibleComponent>
          <CollapsibleHead className="additionalClassForHead" isExpanded={openCollapsibleComponentByIndex === 0}>
            <h3>Why use blockchain?</h3>
          </CollapsibleHead>
          <CollapsibleContent className="additionalClassForContent" isExpanded={openCollapsibleComponentByIndex === 0}>
            <p>For five main reasons:</p>
            <ol style={{padding: '0 50px'}}>
              <li>
                The service will always be accessible even if recover.ws servers are down.
                It will still be possible to use this service by making requests directly on the blockchain.
              </li>
              <li>
                There are no intermediaries, which means that costs
                are low. All you need to do is pay the transaction fees
                (called gas) to use this service.
              </li>
              <li>
                We do not need to trust a third party service. This is
                called a trustless service. The thing you trust is the
                Ethereum protocol and the smart contracts
                (<a href="https://etherscan.io/address/0x02C86846887faa1d964a838Dc50739B49c8329bc#contracts">Recover</a>&nbsp;
                and <a href="https://etherscan.io/address/0x988b3A538b618C7A603e1c11Ab82Cd16dbE28069#code">Kleros</a>).
                These contracts are public and you can audit them
                (technical skills required).
              </li>
              <li>
                Ethereum makes it easy to make valuable microtransactions,
                which makes it possible to give a reward to the finder easily.
              </li>
              <li>
                The blockchain is interoperable with third-party services as
                companies can easily use this service to plug their items
                with this lost and found service.
              </li>
            </ol>
          </CollapsibleContent>
        </CollapsibleComponent>
      </div>
      <div style={{margin: '5px 0'}} onClick={() => setOpenCollapsibleComponentByIndex(openCollapsibleComponentByIndex !== 1 ? 1 : null)}>
        <CollapsibleComponent>
          <CollapsibleHead className="additionalClassForHead" isExpanded={openCollapsibleComponentByIndex === 1}>
            <h3>Is this application completely decentralized?</h3>
          </CollapsibleHead>
          <CollapsibleContent className="additionalClassForContent" isExpanded={openCollapsibleComponentByIndex === 1}>
            <p>Yes, all the logic of the application is programmed on a smart contract without any ownership.</p>
            <p>To record encrypted contact information we will use our own IPFS node but you can use yours too.</p>
            <p>
              Optional services are centralized such as an email notification you will receive when an object is found.
              It is possible for the user to bypass this service and do it manually.
            </p>
            <p>
              On the other hand, if you use a third party service to print your Qr Code
              it will be able to read the encrypted data. You must have a minimum of trust
              in this service.
            </p>
          </CollapsibleContent>
        </CollapsibleComponent>
      </div>
      <div style={{margin: '5px 0'}} onClick={() => setOpenCollapsibleComponentByIndex(openCollapsibleComponentByIndex !== 2 ? 2 : null)}>
        <CollapsibleComponent>
          <CollapsibleHead className="additionalClassForHead" isExpanded={openCollapsibleComponentByIndex === 2}>
            <h3>How it works if the finder is not a cryptoenthousiast?</h3>
          </CollapsibleHead>
          <CollapsibleContent className="additionalClassForContent" isExpanded={openCollapsibleComponentByIndex === 2}>
            <p>
              It is possible to prefund the function for claiming an item to find which avoids the finder having
              to have Ether to pay for the gas of the "Claim" function.
            </p>
            <p>
              On the other hand, we automatically generate an Ethereum Wallet if the user does not have one.
            </p>
          </CollapsibleContent>
        </CollapsibleComponent>
      </div>
      <div style={{margin: '5px 0'}} onClick={() => setOpenCollapsibleComponentByIndex(openCollapsibleComponentByIndex !== 3 ? 3 : null)}>
        <CollapsibleComponent>
          <CollapsibleHead className="additionalClassForHead" isExpanded={openCollapsibleComponentByIndex === 3}>
            <h3>Is it possible for a regular user to record an item?</h3>
          </CollapsibleHead>
          <CollapsibleContent className="additionalClassForContent" isExpanded={openCollapsibleComponentByIndex === 3}>
            <p>
              Not really, currently it is only possible to add items
              if you know how to use <a href="https://metamask.io/">Metamask</a>.
            </p>
            <p>We are integrating this feature, add item without Metamask, in future versions.</p>
          </CollapsibleContent>
        </CollapsibleComponent>
      </div>
      <div style={{margin: '5px 0'}} onClick={() => setOpenCollapsibleComponentByIndex(openCollapsibleComponentByIndex !== 4 ? 4 : null)}>
        <CollapsibleComponent>
          <CollapsibleHead className="additionalClassForHead" isExpanded={openCollapsibleComponentByIndex === 4}>
            <h3>What happens if the user wants to be rewarded in fiat?</h3>
          </CollapsibleHead>
          <CollapsibleContent className="additionalClassForContent" isExpanded={openCollapsibleComponentByIndex === 4}>
            <p>
              With this release it is not possible to reward him directly in fiat.
            </p>
            <p>
              You have to make an arrangement with the finder to do this.
            </p>
          </CollapsibleContent>
        </CollapsibleComponent>
      </div>
      <div style={{margin: '5px 0'}} onClick={() => setOpenCollapsibleComponentByIndex(openCollapsibleComponentByIndex !== 5 ? 5 : null)}>
        <CollapsibleComponent>
          <CollapsibleHead className="additionalClassForHead" isExpanded={openCollapsibleComponentByIndex === 5}>
            <h3>Why the contact information are not directly visible?</h3>
          </CollapsibleHead>
          <CollapsibleContent className="additionalClassForContent" isExpanded={openCollapsibleComponentByIndex === 5}>
            <p>This avoids showing your personal information directly.</p>
          </CollapsibleContent>
        </CollapsibleComponent>
      </div>
      <div style={{margin: '5px 0'}} onClick={() => setOpenCollapsibleComponentByIndex(openCollapsibleComponentByIndex !== 6 ? 6 : null)}>
        <CollapsibleComponent trigger="Is there a notification service when we claim a found?">
          <CollapsibleHead className="additionalClassForHead" isExpanded={openCollapsibleComponentByIndex === 6}>
            <h3>Is there a notification service when we claim a found?</h3>
          </CollapsibleHead>
          <CollapsibleContent className="additionalClassForContent" isExpanded={openCollapsibleComponentByIndex === 6}>
            <p>
              Yes, the owner receives an email notification if they have subscribed to this service
              but it is preferable to contact them directly with the contact information they have provided
              to maximize your chances to get the reward.
            </p>
          </CollapsibleContent>
        </CollapsibleComponent>
      </div>
      <div style={{margin: '5px 0'}} onClick={() => setOpenCollapsibleComponentByIndex(openCollapsibleComponentByIndex !== 7 ? 7 : null)}>
        <CollapsibleComponent>
          <CollapsibleHead className="additionalClassForHead" isExpanded={openCollapsibleComponentByIndex === 7}>
            <h3>Where do I put the sticker?</h3>
          </CollapsibleHead>
          <CollapsibleContent className="additionalClassForContent" isExpanded={openCollapsibleComponentByIndex === 7}>
            <p>
              Ideally, it is good to put it in a place that is neither too visible nor too hidden.
              Indeed, it should be avoided that the QR code is too accessible for someone to scan it if in case the item is not lost.
              This way the person may have access to your private data. On the other hand,
              the QR code must be visible to a person in case your item is lost.
            </p>
          </CollapsibleContent>
        </CollapsibleComponent>
      </div>
      <div style={{margin: '5px 0'}} onClick={() => setOpenCollapsibleComponentByIndex(openCollapsibleComponentByIndex !== 8 ? 8 : null)}>
        <CollapsibleComponent>
          <CollapsibleHead className="additionalClassForHead" isExpanded={openCollapsibleComponentByIndex === 8}>
            <h3>What happens if the finder does not want a reward?</h3>
          </CollapsibleHead>
          <CollapsibleContent className="additionalClassForContent" isExpanded={openCollapsibleComponentByIndex === 8}>
            <p>
              He has the possibility to refund all or part of the reward if he wishes.
            </p>
          </CollapsibleContent>
        </CollapsibleComponent>
      </div>
      <div style={{margin: '5px 0'}} onClick={() => setOpenCollapsibleComponentByIndex(openCollapsibleComponentByIndex !== 9 ? 9 : null)}>
        <CollapsibleComponent>
          <CollapsibleHead className="additionalClassForHead" isExpanded={openCollapsibleComponentByIndex === 9}>
            <h3>What happens if one of the parties does not respect its commitments?</h3>
          </CollapsibleHead>
          <CollapsibleContent className="additionalClassForContent" isExpanded={openCollapsibleComponentByIndex === 9}>
            <p>
              After trying to resolve the problem in a friendly way it is possible to create a dispute on Kleros
              to arbitrate the dispute to handle the funds.
            </p>
          </CollapsibleContent>
        </CollapsibleComponent>
      </div>
    </>
  )
}

export default Faq