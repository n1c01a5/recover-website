import Head from 'next/head'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../components/layout'

export default function LoserBox () {
  useEffect(() => {
    localStorage.clear()
  }, [])

  return (
    <Layout>
      <Head>
        <title>Recover.ws - Loser Box to protect your item from loss</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div style={{ paddingTop: 50 }}>
        <div className='row form-group' style={{ padding: '.375rem .75rem' }}>
          <h4>
            <span style={{ color: '#13a2dc' }}>Order</span> Confirmation
          </h4>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div
              className='alert btns'
              style={{
                background: '#A6FFCC'
              }}
              role='alert'
            >
              <p style={{ paddingTop: '15px' }}>Your order is on preparation.</p>
            </div>
            <Link href='/'>
              <button
                className='new-button'
                style={{
                  width: '100%',
                  marginTop: '20px',
                  backgroundColor: '#A6FFCC'
                }}
                type='button'
              >
                <strong>Return to the Homepage</strong>
              </button>
            </Link>
            <br /> <br />
          </div>
        </div>
      </div>
    </Layout>
  )
}
