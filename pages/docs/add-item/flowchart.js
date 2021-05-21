import Head from 'next/head'
import Link from 'next/link'

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
        <div className='docs__container'>
          <div className='docs__summary'>
            <Nav />
          </div>
          <div className='docs__right__container'>
            <div className='docs__content'>
              <h1>ITEM ADDITION FLOWCHART</h1>
              <h2>A flowchart explaining adding items in Recover application using Blockchain and Ethereum smart contracts</h2>

              <div className='docs__container__img'>
                <img
                  className='docs__img'
                  src='/docs/item-add/flowchart-lost-and-found.jpg'
                  alt='Wagner Nicolas biography - blockchain developer'
                />
              </div>

              <div className='docs__content__nav'>
                <div className='docs__content__nav__link'>
                  <Link href='/docs/add-item/introduction'><a>← INTRODUCTION</a></Link>
                </div>
                <div className='docs__content__nav__link'>
                  <Link href='/docs/add-item/steps-to-add-item'><a>ITEM ADDITION IN FEW EASY STEPS →</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
