import Head from 'next/head'
import Layout from '../../components/layout'

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Recover.ws - Loser Box to protect your item from loss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-container">
        <section className="hero">
          <section className="hero-overlay"></section>
        </section>
        <p className="content-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
        <section className="blogs">
          <div className="blog blog_tile_1">
            <a href="/blog/escrow">
              <h4>What is a generic Escrow?</h4>
            </a>
          </div>
          <div className="blog blog_tile_2">
            <a href="/blog/how-can-i-recover-my-phone">
              <h4>How can I Recover my phone if it is lost?</h4>
            </a>
          </div>
          <div className="blog">
            <a href="#">
              <h4>Lorem ipsum</h4>
            </a>
          </div>
          <div className="blog">
            <a href="#">
              <h4>Lorem ipsum</h4>
            </a>
          </div>
          <div className="blog">
            <a href="#">
              <h4>Lorem ipsum</h4>
            </a>
          </div>
          <div className="blog">
            <a href="#">
              <h4>Lorem ipsum</h4>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  )
}
