import Link from 'next/link'
import styles from '../../styles/elements/Footer.module.scss'

export default function () {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <div className={styles.linksContainer}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <img
                className="header-menu-logo"
                src="/RECOVER-logo.svg"
                alt="Recover Logo"
                role="presentation"
              />
            </Link>
            <p className={styles.logoPara}>
              <strong className={styles.strong}>Use it, or Lose it</strong>
            </p>
            <p className={styles.cp}>@ RECOVER 2020</p>
          </div>
          <div>
            <p className={styles.linksPara}>
              <strong className={styles.strong}>Protocol</strong>
            </p>
            <ul className={styles.ul}>
              <li className={styles.firstLi}>
                <a className={styles.a} href="https://kleros.io/">
                  Kleros
                </a>
              </li>
              <li className={styles.otherLi}>
                <a className={styles.a} href="https://ethereum.org/en/">
                  Ethereum
                </a>
              </li>
              <li className={styles.otherLi}>
                <a className={styles.a} href="https://ipfs.io/">
                  IPFS
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.linksPara}>
              <strong className={styles.strong}>Products</strong>
            </p>
            <ul className={styles.ul}>
              <li className={styles.firstLi}>
                <a className={styles.a} href="/loser-box">
                  Loser Box
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.linksPara}>
              <strong className={styles.strong}>Social</strong>
            </p>
            <ul className={styles.ul}>
              <li className={styles.firstLi}>
                <a
                  className={styles.a}
                  href="https://github.com/blockchain-mafia/"
                >
                  Github
                </a>
              </li>
              <li className={styles.otherLi}>
                <a
                  className={styles.a}
                  href="mailto: contact@wagner-nicolas.com"
                >
                  Mail
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.linksPara}>
              <strong className={styles.strong}>Last Posts</strong>
            </p>
            <ul className={styles.ul}>
              <li className={styles.firstLi}>
                <a className={styles.a} href="/">
                  Escrow
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ height: '180px' }}>
          <img
            style={{ height: '180px' }}
            className="footer-cryptokitty-recover"
            src="/cryptokitty-recover.png"
            alt="Cryptokitty with Recover"
            role="presentation"
          />
        </div>
      </footer>
    </div>
  )
}
