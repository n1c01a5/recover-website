import Head from 'next/head'
import Layout from '../../components/layout'

import { FeaturedBlogTile } from '../../components/blog/FeaturedBlogTile'
import { Blogs } from '../../components/blog/Blogs'

import { getPosts } from '../../pages/api/posts'

import { getFeaturedBlog } from '../../utils/blogs'

export default function Blog({ posts }) {
  const featuredBlog = getFeaturedBlog(posts)

  const Hero = () => (
    <section className="hero">
      <section className="hero-overlay">
        <FeaturedBlogTile featuredBlog={featuredBlog} />
      </section>
    </section>
  )

  return (
    <Layout>
      <Head>
        <title>Recover.ws - Loser Box to protect your item from loss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main-container">
        <Hero />
        <Blogs posts={posts} />
      </main>
    </Layout>
  )
}

Blog.getInitialProps = async ({ req }) => {
  const res = getPosts()
  return { posts: res }
}
