import { authors } from '../authors'
import { EscrowBlogContent } from './escrowContent'
import { RecoverBlogContent } from './recoverContent'

import DogeImage from '../../../public/doge.png'

import { getAuthorHelper } from '../../../utils/blogs'

export function getPosts() {
  const getAuthor = getAuthorHelper(authors)

  return [
    {
      slug: 'lost-and-found-iphone',
      topic: 'Lost and Found',
      title: 'How can I Recover my Phone if it is lost?',
      teaser:
        'Lorem ipsum dolor sit amet, labore et dolore magna temporsit amet, consectetur adipiscing ut labore et dolore magna',
      cover:
        'https://raw.githubusercontent.com/n1c01a5/recover-website/master/public/Blog_2_Lostphone.jpg',
      content: RecoverBlogContent,
      authors: [getAuthor('nico'), getAuthor('bhavesh')],
      readTime: 6,
      date: '15th DEC, 2020',
      isFeatured: true
    },
    {
      slug: 'securing-valuables-with-escrow-smart-contracts',
      topic: 'Escrow',
      title: 'Securing valuables with Escrow Smart contracts',
      teaser:
        'Lorem ipsum dolor sit amet, labore et dolore magna temporsit amet, consectetur adipiscing ut labore et dolore magna',
      content: EscrowBlogContent,
      cover:
        'https://raw.githubusercontent.com/n1c01a5/recover-website/feature/abstract-blog-content/public/Blog_1_Escrow.jpg',
      authors: [getAuthor('nico'), getAuthor('bhavesh')],
      readTime: 4,
      date: '15th DEC, 2020',
      isFeatured: false
    },
    {
      slug: '#',
      topic: 'Lorem ipsum',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing',
      teaser:
        'Lorem ipsum dolor sit amet, labore et dolore magna temporsit amet, consectetur adipiscing ut labore et dolore magna',
      content: '',
      cover: DogeImage,
      authors: [getAuthor('nico'), getAuthor('bhavesh')],
      readTime: 6,
      date: '15th DEC, 2020',
      isFeatured: false
    },
    {
      slug: '#',
      topic: 'Lorem ipsum',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing',
      teaser:
        'Lorem ipsum dolor sit amet, labore et dolore magna temporsit amet, consectetur adipiscing ut labore et dolore magna',
      content: '',
      cover: DogeImage,
      authors: [getAuthor('nico'), getAuthor('bhavesh')],
      readTime: 6,
      date: '15th DEC, 2020',
      isFeatured: false
    },
    {
      slug: '#',
      topic: 'Lorem ipsum',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing',
      teaser:
        'Lorem ipsum dolor sit amet, labore et dolore magna temporsit amet, consectetur adipiscing ut labore et dolore magna',
      content: '',
      cover: DogeImage,
      authors: [getAuthor('nico'), getAuthor('bhavesh')],
      readTime: 6,
      date: '15th DEC, 2020',
      isFeatured: false
    },
    {
      slug: '#',
      topic: 'Lorem ipsum',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing',
      teaser:
        'Lorem ipsum dolor sit amet, labore et dolore magna temporsit amet, consectetur adipiscing ut labore et dolore magna',
      content: '',
      cover: DogeImage,
      authors: [getAuthor('nico'), getAuthor('bhavesh')],
      readTime: 6,
      date: '15th DEC, 2020',
      isFeatured: false
    },
    {
      slug: '#',
      topic: 'Lorem ipsum',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing',
      teaser:
        'Lorem ipsum dolor sit amet, labore et dolore magna temporsit amet, consectetur adipiscing ut labore et dolore magna',
      content: '',
      cover: DogeImage,
      authors: [getAuthor('nico'), getAuthor('bhavesh')],
      readTime: 6,
      date: '15th DEC, 2020',
      isFeatured: false
    }
  ]
}
