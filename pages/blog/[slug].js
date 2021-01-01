import Head from 'next/head'
import Layout from '../../components/layout'
import BlogHeader from '../../components/blog/BlogHeader'
import { getPosts } from '../api/posts'
export default function Post({ post }) {
  const { slug, content, cover } = post

  const createMarkup = () => {
    return { __html: content }
  }

  const BlogCover = () => (
    <div
      className="blog-cover"
      style={{ backgroundImage: `url(${cover})` }}
    ></div>
  )

  return (
    <Layout>
      <Head>
        <title>Recover.ws - Loser Box to protect your item from loss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogHeader post={post} />
      <div
        className={
          slug == 'lost-and-found-iphone'
            ? 'recover_phone_container'
            : 'escrow-container'
        }
      >
        {BlogCover()}
        <div dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </Layout>
  )
}

Post.getInitialProps = async (ctx) => {
  const posts = getPosts()
  const post = posts.find((post) => post.slug === ctx.query.slug)
  return { post }
}
