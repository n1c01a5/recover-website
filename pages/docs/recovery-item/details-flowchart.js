import Head from 'next/head'

import Layout from '../../../components/layout'
import Nav from '../../../components/docs/nav'

export default function DetailsFlowchart () {
  return (
    <Layout>
      <Head>
        <title>Recover.ws - Lost and found simply flowchart to recovery an item</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <div className='docs__summary'>
          <Nav />
        </div>
        <div className='docs__container'>
          <div className='docs__content'>
            <h1>SIMPLE RECOVERY FLOWCHART</h1>
            <h2>A brief flowchart of how item recovery and reward process works using Recover</h2>

            <figure>
              <img src="" alt="Details flowchart to recover your item" />
              <figcaption>Details flowchart to recover your item</figcaption>
            </figure>

            <a href="">ITEM RECOVERY IN FEW STEPS ➡️</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
