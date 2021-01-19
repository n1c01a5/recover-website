import Head from 'next/head'
import Layout from '../../components/layout'

export default function About () {
  return (
    <Layout>
      <Head>
        <title>Recover.ws - Loser Box to protect your item from loss</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='about__main-container'>
        <section className='about__hero'>
          <div className='img-container'>
            <img src='/wagner-nicolas.jpg' alt='Wagner Nicolas biography - blockchain developer' />
          </div>
          <div className='about__hero-text'>
            <p>
              Nicolas est un autodidacte.
            </p>
          </div>
        </section>
        <section className='social-links'>
          <ul>
            <li>
              <a href='#'>Twitter</a>
            </li>
            <li>
              <a href='#'>Linkedin</a>
            </li>
            <li>
              <a href='#'>Mail</a>
            </li>
            <li>
              <a href='#'>Github</a>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}
