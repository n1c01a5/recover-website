import { useState, useEffect } from 'react'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

import Footer from './elements/footer'
import Nav from './elements/nav'

import styles from '../styles/elements/layout.module.scss'

function Scroll({ setTop, isTop }) {
  useEffect(function onFirstMount() {
    function onScroll() {
      window.document.addEventListener('scroll', () => {
        if (window.scrollY < 30 !== isTop) {
          setTop(false)
        } else {
          setTop(true)
        }
      })
    }

    window.addEventListener('scroll', onScroll)
  }, [])
}

const Layout = ({ children }) => {
  const [isTop, setTop] = useState(true)

  Scroll({ setTop, isTop })

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Menu right>
          <a className="menu-item" href="app.recover.ws" target="_blank" rel="noreferrer">
            APPLICATION
          </a>
          <span className="menu-item">
            <Link href="/blog" className="menu-item">
              <a>BLOG</a>
            </Link>
          </span>
          <span className="menu-item">
            <Link href="/about" className="menu-item">
              <a>ABOUT</a>
            </Link>
          </span>
        </Menu>
        <nav suppressHydrationWarning>
          <Nav isTop={isTop} />
        </nav>
        <div className={styles.container}>
          <main role="main">{children}</main>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default Layout
