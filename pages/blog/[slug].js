import Head from 'next/head'
import styles from '../../styles/blogs/post.module.scss'

import Layout from '../../components/layout'
import BlogHeader from '../../components/blog/header'
import { getPosts } from '../api/posts'
export default function Post({ post }) {
  const { content, cover } = post

  const createMarkup = () => {
    return { __html: content }
  }

  const BlogCover = () => (
    <img
      className={styles.blogCover}
      src={cover}
<<<<<<< HEAD
    />
=======
    ></img>
>>>>>>> 0ffabf0ddc6a03cb56974fc07393c540de8a6a16
  )

  const BlogContent = () => <div dangerouslySetInnerHTML={createMarkup()} />

  return (
    <Layout>
      <Head>
        <title>Recover.ws - Loser Box to protect your item from loss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <BlogHeader post={post} />
        <BlogCover />
        <BlogContent />
      </div>
    </Layout>
  )
}

Post.getInitialProps = async (ctx) => {
  const posts = getPosts()
  const post = posts.find((post) => post.slug === ctx.query.slug)
  return { post }
}
