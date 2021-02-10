import Link from 'next/link'

import styles from '../../styles/elements/footer.module.scss'

export default function Footer () {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <div className={styles.logoContainer}>
          <Link href='/'>
            <img
              className='header-menu-logo'
              src='/RECOVER-logo.svg'
              alt='Recover Logo'
              role='presentation'
            />
          </Link>
          <p className={styles.logoPara}>
            <strong className={styles.strong}>Use it, or Lose it</strong>
          </p>
          <p className={styles.copyright}>@ RECOVER 2020</p>
        </div>
        <div className={styles.linksContainer}>
          <div className={styles.menuColumn}>
            <p className={styles.linksPara}>
              <strong className={styles.strong}>Protocol</strong>
            </p>
            <ul className={styles.ul}>
              <li className={styles.firstLi}>
                <Link href='https://kleros.io/'>
                  <a className={styles.a}>Kleros</a>
                </Link>
              </li>
              <li className={styles.otherLi}>
                <Link href='https://ethereum.org/en/'>
                  <a className={styles.a}>Ethereum</a>
                </Link>
              </li>
              <li className={styles.otherLi}>
                <Link href='https://ipfs.io/'>
                  <a className={styles.a}>IPFS</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.menuColumn}>
            <p className={styles.linksPara}>
              <strong className={styles.strong}>Products</strong>
            </p>
            <ul className={styles.ul}>
              <li className={styles.firstLi}>
                <Link href='/loser-box'>
                  <a className={styles.a}>Loser Box</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.menuColumn}>
            <p className={styles.linksPara}>
              <strong className={styles.strong}>Social</strong>
            </p>
            <ul className={styles.ul}>
              <li className={styles.firstLi}>
                <Link href='https://github.com/blockchain-mafia/'>
                  <a className={styles.a}>Github</a>
                </Link>
              </li>
              <li className={styles.otherLi}>
                <Link href='mailto: contact@wagner-nicolas.com'>
                  <a className={styles.a}>Mail</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.menuColumn}>
            <p className={styles.linksPara}>
              <strong className={styles.strong}>Last Posts</strong>
            </p>
            <ul className={styles.ul}>
              <li className={styles.firstLi}>
                <Link href='/blog/securing-valuables-with-escrow-smart-contracts'>
                  <a className={styles.a}>Escrow</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerImageContainer}>
          <img
            className={`${styles.footerImage} footer-cryptokitty-recover`}
            src='/cryptokitty-recover.png'
            alt='Cryptokitty with Recover'
            role='presentation'
          />
        </div>
      </footer>
    </div>
  )
}
