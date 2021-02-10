import { useState } from 'react'
import Link from 'next/link'

import Button from './button'

import styles from '../../styles/elements/header.module.scss'

const Header = ({ isTop, setShowOverlay }) => {
  const [showSidebar, setShowSidebar] = useState(false)

  const handleClick = () => {
    setShowOverlay(!showSidebar)
    setShowSidebar(!showSidebar)
  }

  const ToggleButton = () => {
    return (
      <div className={styles.Menu} onClick={handleClick}>
        <HamburgerMenu />
      </div>
    )
  }

  const HamburgerMenu = () => (
    <div>
      <div className={styles.burgerMenuBar}></div>
      <div className={styles.burgerMenuBar}></div>
      <div className={styles.burgerMenuBar}></div>
    </div>
  )

  return (
    <div
      className={`${styles.headerMenu} ${isTop ? 'header-menu__isTop' : ''}`}
    >
      <div className={styles.logoContainer}>
        <Link href='/'>
          <img
            className={styles.headerMenuLogo}
            src='/RECOVER-logo.svg'
            alt='Recover Logo'
          />
        </Link>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.linkContainer}>
          <a
            className={styles.link}
            href='https://app.recover.ws/'
            rel='noreferrer'
            target='_blank'
          >
            APPLICATION
          </a>
        </div>
        <div className={styles.linkContainer}>
          <Link href='/blog'>
            <a className={styles.link}>BLOG</a>
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <Link href='/about'>
            <a className={styles.link}>ABOUT</a>
          </Link>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Link href='/loser-box'>
          <a><Button isPrimary>Get Your Loser Box</Button></a>
        </Link>
      </div>
      <ToggleButton />
      <div className={`${styles.sidebar} ${showSidebar ? styles.open : ''}`}>
        <div className={styles.crossButton} onClick={handleClick}>
          X
        </div>
        <div className={styles.linkContainer}>
          <a
            className={styles.link}
            href='https://app.recover.ws/'
            target='_blank'
          >
            APPLICATION
          </a>
        </div>
        <div className={styles.linkContainer}>
          <Link href='/blog'>
            <a className={styles.link}>BLOG</a>
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <Link href='/about'>
            <a className={styles.link}>ABOUT</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
