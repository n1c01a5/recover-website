import Head from 'next/head'

import Layout from '../../../components/layout'
import Nav from '../../../components/docs/nav'

export default function Flowchart () {
  return (
    <Layout>
      <Head>
        <title>Recover.ws - Lost and found flowchart to add an item</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <div className='docs__summary'>
          <Nav />
        </div>
        <div className='docs__container'>
          <div className='docs__content'>
            <h1>ITEM ADDITION FLOWCHART</h1>
            <h2>A flowchart explaining adding items in Recover application using Blockchain and Ethereum smart contracts</h2>

            <img src="" />

            <a href="">ITEM ADDITION IN FEW EASY STEPS ➡️</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
