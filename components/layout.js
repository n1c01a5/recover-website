import { useState, useEffect } from 'react'

import Footer from './elements/Footer'
import Header from './elements/Header'

import styles from '../styles/elements/Layout.module.scss'

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
  }, []) // empty dependencies array means "run this once on first mount"

  return null
}

const Layout = ({ children, noRightButton }) => {
  const [isTop, setTop] = useState(true)

  Scroll({ setTop, isTop })

  return (
    <>
      <nav suppressHydrationWarning>
        <Header isTop={isTop} />
      </nav>
      <main role="main">
        <div className={styles.bodyContainer}>{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
