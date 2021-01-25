import Link from 'next/link'
import Button from './button'

import styles from '../../styles/elements/Header.module.scss'

const Header = ({ isTop }) => (
  <div
    className={`${styles.headerMenu} ${isTop ? styles.headerMenuIsTop : ''}`}
  >
    <div className={styles.logoContainer}>
      <Link href="/">
        <img
          className={styles.headerMenuLogo}
          src="/RECOVER-logo.svg"
          alt="Recover Logo"
        />
      </Link>
    </div>
    <div className={styles.linksContainer}>
      <div className={styles.linkContainer}>
        <a
          className={styles.link}
          href="https://app.recover.ws/"
          target="_blank"
        >
          APPLICATION
        </a>
      </div>
      <div className={styles.linkContainer}>
        <Link href="/blog">
          <a className={styles.link}>BLOG</a>
        </Link>
      </div>
      <div className={styles.linkContainer}>
        <Link href="/about">
          <a className={styles.link}>ABOUT</a>
        </Link>
      </div>
    </div>
    <div>
      <Link href="/loser-box">
        <Button isPrimary>Get Your Loser Box</Button>
      </Link>
    </div>
  </div>
)

export default Header
