import { useState, useEffect } from 'react'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

import Footer from './elements/footer'
import Header from './elements/header'

import styles from '../styles/elements/layout.module.scss'

function Scroll ({ setTop, isTop }) {
  useEffect(function onFirstMount () {
    function onScroll () {
      window.document.addEventListener('scroll', () => {
        if ((window.scrollY < 30) !== isTop) {
          setTop(false)
        } else {
          setTop(true)
        }
      })
    }

    window.addEventListener('scroll', onScroll)
  }, []) // empty dependencies array means "run this once on first mount"

  return null
}

const Layout = ({ children, noRightButton }) => {
  const [isTop, setTop] = useState(true)
  const [showOverlay, setShowOverlay] = useState(false)

  Scroll({ setTop, isTop })

  return (
    <>
      <Menu right>
        <a className='menu-item' href='app.recover.ws' target='_blank' rel='noreferrer'>APPLICATION</a>
        <a className='menu-item'><Link href='/blog'><a>BLOG</a></Link></a>
        <a className='menu-item'><Link href='/about'><a>ABOUT</a></Link></a>
      </Menu>
      <nav suppressHydrationWarning>
        <Header isTop={isTop} setShowOverlay={setShowOverlay} />
      </nav>
      <main role='main'>
        <div className={styles.container}>
          {showOverlay ? <div className={styles.overlay} /> : null}
          <div className={styles.bodyContainer}>{children}</div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
