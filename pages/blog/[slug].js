import Head from 'next/head'
import Layout from '../../components/layout'
import BlogHeader from '../../components/elements/BlogHeader'
import { getPosts } from '../api/posts'

import RecoverBlog from '../api/posts/recover'
import EscrowBlog from '../api/posts/escrow'

const blogsMap = {
  'lost-and-found-iphone': RecoverBlog,
  'securing-valuables-with-escrow-smart-contracts': EscrowBlog
}

export default function Post({ post }) {
  const { slug } = post
  const BlogComponent = blogsMap[slug]

  return (
    <Layout>
      <Head>
        <title>Recover.ws - Loser Box to protect your item from loss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={
          slug == 'lost-and-found-iphone'
            ? 'recover_phone_container'
            : 'escrow-container'
        }
      >
        <BlogHeader post={post} />
        <BlogComponent />
      </div>
    </Layout>
  )
}

Post.getInitialProps = async (ctx) => {
  const posts = getPosts()
  const post = posts.find((post) => post.slug === ctx.query.slug) || {
    authors: []
  }
  return { post }
}
