import Head from 'next/head'

import Layout from '../../components/layout'
import FeaturedBlogTile from '../../components/blog/featured-tile'
import Blogs from '../../components/blog/posts'
import { getPosts } from '../../pages/api/posts'
import { getFeaturedBlog } from '../../utils/blogs'

import styles from '../../styles/blogs/index.module.scss'

export default function BlogIndex ({ posts }) {
  const featuredBlog = getFeaturedBlog(posts)

  const Hero = () => (
    <section className={styles.hero}>
      <section className={styles.heroOverlay}>
        <FeaturedBlogTile featuredBlog={featuredBlog} />
      </section>
    </section>
  )

  return (
    <Layout>
      <Head>
        <title>Recover.ws - Loser Box to protect your item from loss</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='main-container'>
        <Hero />
        <Blogs posts={posts} />
      </section>
    </Layout>
  )
}

BlogIndex.getInitialProps = async ({ req }) => {
  const res = getPosts()
  return { posts: res }
}
