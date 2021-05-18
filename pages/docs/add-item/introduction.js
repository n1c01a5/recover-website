import Head from 'next/head'

import Layout from '../../../components/layout'
import Nav from '../../../components/docs/nav'

export default function Introduction () {
  return (
    <Layout>
      <Head>
        <title>Recover.ws - Lost and found introduction to add an item</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <div className='docs__summary'>
          <Nav />
        </div>
        <div className='docs__container'>
          <div className='docs__content'>
            <h1>INTRODUCTION</h1>
            <h2>Adding items to insure them against loss using Recover</h2>

            <p>Our product Loser Box contains items with QR codes to match your valuables and to secure them in case of loss.</p>

            <p>
              Adding an item to Recover application is the first step which needs to be followed in order to secure your items from loss.
              The application helps you generate QR code(s) as per your item need and set a reward for the finder.
            </p>

            <p>This documentation part will help you understand how to add an item, set item description, personal details and the reward amount.</p>

            <p>All these steps plays a vital role in your item recovery and should be followed as mentioned.</p>

            <a href="">ITEM ADDITION FLOWCHART ➡️</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
