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
          <section className="hero-overlay">
          <div className="highlighted_blog">
          <div className="blog_image blog_tile_2"></div>
          <div className="info">
            <a href="/blog/how-can-i-recover-my-phone">
              <h4>lost and found</h4>
            </a>
            <a href="/blog/how-can-i-recover-my-phone">
              <h2>How can I Recover my phone if it is lost?</h2>
            </a>
            <p>
              Lorem ipsum dolor sit amet, labore et dolore
              magna temporsit amet, consectetur adipiscing ut labore et dolore magna
            </p>
          </div>
          </div>
          </section>
        </section>
        <section className="blogs">
          <div className="blog">
            <div className="blog_image blog_tile_1"></div>
            <div>
              <div className="blog_topic">
                <a href="/blog/escrow">
                  <h4>Escrow</h4>
                </a>
              </div>
              <p className="blog_title">
                Lorem ipsum dolor sit amet consectetur adipiscing
              </p>
              <p className="blog_resume">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit sed do eiusmod tempor ut labore et dolore magna
              </p>
            </div>
          </div>
          <div className="blog">
            <div className="blog_image"></div>
            <div>
            <div className="blog_topic">
                  <a href="/blog/escrow">
                    <h4>Lorem ipsum</h4>
                  </a>
                </div>
              <p className="blog_title">
                Lorem ipsum dolor sit amet consectetur adipiscing
              </p>
              <p className="blog_resume">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit sed do eiusmod tempor ut labore et dolore magna
              </p>
            </div>
          </div>
          <div className="blog">
          <div className="blog_image"></div>
            <div>
            <div className="blog_topic">
                  <a href="/blog/escrow">
                    <h4>Lorem ipsum</h4>
                  </a>
                </div>
              <p className="blog_title">
                Lorem ipsum dolor sit amet consectetur adipiscing
              </p>
              <p className="blog_resume">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit sed do eiusmod tempor ut labore et dolore magna
              </p>
            </div>
          </div>
          <div className="divider">
            <hr />
          </div>
          <div className="blog">
            <div className="blog_image"></div>
              <div>
              <div className="blog_topic">
                  <a href="/blog/escrow">
                    <h4>Lorem ipsum</h4>
                  </a>
                </div>
                <p className="blog_title">
                  Lorem ipsum dolor sit amet consectetur adipiscing
                </p>
                <p className="blog_resume">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit sed do eiusmod tempor ut labore et dolore magna
                </p>
            </div>
          </div>
          <div className="blog">
            <div className="blog_image"></div>
              <div>
              <div className="blog_topic">
                  <a href="/blog/escrow">
                    <h4>Lorem ipsum</h4>
                  </a>
                </div>
                <p className="blog_title">
                  Lorem ipsum dolor sit amet consectetur adipiscing
                </p>
                <p className="blog_resume">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit sed do eiusmod tempor ut labore et dolore magna
                </p>
              </div>
          </div>
          <div className="blog">
            <div className="blog_image"></div>
              <div>
                <div className="blog_topic">
                  <a href="/blog/escrow">
                    <h4>Lorem ipsum</h4>
                  </a>
                </div>
                <p className="blog_title">
                  Lorem ipsum dolor sit amet consectetur adipiscing
                </p>
                <p className="blog_resume">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit sed do eiusmod tempor ut labore et dolore magna
                </p>
              </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
