export const MetaEvidence = ({
  sender,
  receiver,
  hashPostalAddress
}) => ({
  category: 'Escrow',
  subCategory: 'General Service',
  invoice: false,
  title: 'Loser Box',
  description: 'Loser Box - Lost & Found service based on Ethereum',
  extraData: {
    'Contract Information': `This contract can be used between the buyer and Recover looking to transact a Loser Box using Kleros Escrow acting as the trust system.
      Please be aware that this is an experimental product system and should be used at the buyer and sellers own risk.
      Verification of off-chain assets is still not fully designed yet.

      Recover undertakes to send the package in one month’s time following the order, the time-stamped transaction being proof.

      The buyer will receive a Non-Fungible Token (NFT) to prove that he is the owner of a dedicated Loser Box and this token will be useful to set up the Loser Box.
      He will also receive the physical Loser Box which consists of a key ring, two PVC cards and 2 sets of stickers.
      For each item there is a unique pre-printed qr-code which will incentivize the finder and will help return the product in case of loss.

      This is a prototype. The buyer should not expect high quality products and on the other hand,
      the smart contract on which this product is based has not been audited by an external service. There are no plans to reimburse buyers in case of a hack.

      This remains an experiment and it is hoped that the buyers of this product will take it in this spirit :p

      Here is the hash of the delivery address: ${hashPostalAddress}
    `
  },
  aliases: {
    [sender]: 'sender',
    [receiver]: 'receiver'
  },
  question: 'Which party abided by terms of the contract?',
  rulingOptions: {
    type: 'single-select',
    titles: ['Refund Sender', 'Pay Receiver'],
    descriptions: [
      'Select to return funds to the Sender',
      'Select to release funds to the Receiver'
    ]
  },
  evidenceDisplayInterfaceURI: '/ipfs/QmfPnVdcCjApHdiCC8wAmyg5iR246JvVuQGQjQYgtF8gZU/index.html'
})
