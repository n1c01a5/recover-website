import { authors } from '../authors'
import { EscrowBlogContent } from './escrow-content'
import { RecoverBlogContent } from './recover-content'
import { BlockchainInsuranceBlogContent } from './blockchain-insurance-content'
import { CryptoActorsBlogContent } from './crypto-actors-content'
import { getAuthorHelper } from '../../../utils/blogs'

import EscrowImage from '../../../public/photos-blog-1/escrow-bond.jpg'
import RecoverImage from '../../../public/photos-blog-2/losing-yourself-in-unknown.jpg'
import BlockchainInsuranceCover from '../../../public/photos-blog-3/flight-delay-insurance-cover.jpg'
import CryptoActorsCover from '../../../public/photos-blog-4/ethereum-mass-adoption.png'

export function getPosts () {
  const getAuthor = getAuthorHelper(authors)

  return [
    {
      slug: 'lost-and-found-iphone',
      topic: 'Lost and Found',
      title: 'How can I Recover my Phone if it is lost?',
      teaser:
        'A guide to explain what measures to take right after your phone is lost and which services can help you retrieve it',
      cover: RecoverImage,
      content: RecoverBlogContent,
      authors: [getAuthor('n1c0'), getAuthor('bhavesh')],
      readTime: 6,
      date: '15th DEC, 2020',
      isFeatured: true
    },
    {
      slug: 'securing-valuables-with-escrow-smart-contracts',
      topic: 'Decentralized Escrow',
      title: 'Securing valuables with Escrow Smart contracts',
      teaser:
        'Democratize escrow to add more trust in transactions through Smart contracts and DAOs',
      content: EscrowBlogContent,
      cover: EscrowImage,
      authors: [getAuthor('n1c0'), getAuthor('bhavesh')],
      readTime: 4,
      date: '15th DEC, 2020',
      isFeatured: false
    },
    {
      slug: 'crypto-actors-blockchain-ecosystem',
      topic: 'Blockchain ecosystem',
      title: 'Who are the actors of the Crypto ecosystem?',
      teaser:
        'A road to meet the people who frame the crypto ecosystem. From millionaires to regulators, we have it covered.',
      content: CryptoActorsBlogContent,
      cover: CryptoActorsCover,
      authors: [getAuthor('n1c0')],
      readTime: 6,
      date: '15th DEC, 2020',
      isFeatured: false
    },
    {
      slug: 'blockchain-insurance',
      topic: 'Decentralized Insurance',
      title: 'Blockchain as a new powerhouse for insurance industry',
      teaser:
        'The hacks of smart contracts is one of the major problems in DeFi whose impact can be reduced by insurances. Let\'s see this practical case of decentralized insurance and many others!',
      content: BlockchainInsuranceBlogContent,
      cover: BlockchainInsuranceCover,
      authors: [getAuthor('n1c0')],
      readTime: 6,
      date: '15th DEC, 2020',
      isFeatured: false
    }
  ]
}
