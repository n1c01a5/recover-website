import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../../components/layout'
import Nav from '../../../components/docs/nav'

export default function Introduction () {
  return (
    <Layout>
      <Head>
        <title>Recover.ws - Lost and found introduction to recovery an item</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <div className='docs__container'>
          <div className='docs__summary'>
            <Nav />
          </div>
          <div className='docs__right__container'>
            <div className='docs__content'>
              <h1>INTRODUCTION</h1>
              <h2>Lost item recovery using Recover</h2>

              <p>Our product Loser Box contains items with QR codes to match your valuables and to secure them in case of loss.</p>

              <p>
                After adding your item, this guide will help you understand how the recovery process works in case the item is
                lost and what process to follow. The idea is to present the process of lost and found so that the owner and finder
                can benefit from the service which Recover provides.
              </p>

              <div className='docs__content__nav'>
                <div className='docs__content__nav__link'>
                  <Link href='/docs/add-item/steps-to-add-item'><a>← ITEM ADDITION STEPS</a></Link>
                </div>
                <div className='docs__content__nav__link'>
                  <Link href='/docs/recovery-item/simple-flowchart'><a>SIMPLE RECOVERY FLOWCHART →</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
