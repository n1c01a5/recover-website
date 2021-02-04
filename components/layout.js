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
  const [showOverlay, setShowOverlay] = useState(false)

  Scroll({ setTop, isTop })

  return (
    <>
      <nav suppressHydrationWarning>
        <Header isTop={isTop} setShowOverlay={setShowOverlay} />
      </nav>
      <main role="main">
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
