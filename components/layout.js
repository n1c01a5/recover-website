import Link from 'next/link'
import { useState, useEffect } from 'react'
import { slide as Menu } from 'react-burger-menu'

import Button from './elements/button'
import Footer from './elements/Footer'

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
        {/* FIXME: remove this props to mute warning. */}
        <div className="mobile-layout">
          <div className="header-menu-small">
            <Link href="/">
              <img
                style={{ paddingLeft: '20px' }}
                className="header-menu-logo"
                src="/RECOVER-logo.svg"
                alt="Recover Logo"
              />
            </Link>
            <Menu>
              <a
                style={{
                  textDecoration: 'none',
                  color: '#444',
                  fontWeight: '500'
                }}
                href="https://app.recover.ws/"
                target="_blank"
              >
                APPLICATION
              </a>
              <a
                style={{
                  textDecoration: 'none',
                  color: '#444',
                  fontWeight: '500'
                }}
              >
                <Link href="/blog">
                  <a
                    style={{
                      textDecoration: 'none',
                      color: '#444',
                      fontWeight: '500'
                    }}
                  >
                    BLOG
                  </a>
                </Link>
              </a>
              <a
                style={{
                  textDecoration: 'none',
                  color: '#444',
                  fontWeight: '500'
                }}
              >
                <Link href="/about">
                  <a
                    style={{
                      textDecoration: 'none',
                      color: '#444',
                      fontWeight: '500'
                    }}
                  >
                    ABOUT
                  </a>
                </Link>
              </a>
            </Menu>
          </div>
        </div>
        <div className="desktop-layout">
          <div className={`header-menu ${isTop ? 'header-menu__isTop' : ''}`}>
            <div>
              <Link href="/">
                <img
                  className="header-menu-logo"
                  src="/RECOVER-logo.svg"
                  alt="Recover Logo"
                />
              </Link>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '100%'
              }}
            >
              <div style={{ padding: '0 40px' }}>
                <a
                  style={{
                    textDecoration: 'none',
                    color: '#444',
                    fontWeight: '500'
                  }}
                  href="https://app.recover.ws/"
                  target="_blank"
                >
                  APPLICATION
                </a>
              </div>
              <div style={{ padding: '0 40px' }}>
                <Link href="/blog">
                  <a
                    style={{
                      textDecoration: 'none',
                      color: '#444',
                      fontWeight: '500'
                    }}
                  >
                    BLOG
                  </a>
                </Link>
              </div>
              <div style={{ padding: '0 40px' }}>
                <Link href="/about">
                  <a
                    style={{
                      textDecoration: 'none',
                      color: '#444',
                      fontWeight: '500'
                    }}
                  >
                    ABOUT
                  </a>
                </Link>
              </div>
            </div>
            <div>
              <Link href="/loser-box">
                <Button isPrimary>Get Your Loser Box</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main role="main">
        <div className="body-container">{children}</div>
      </main>

      {/* <div className="mobile-layout">
        <div style={{ marginTop: '40px' }}>
          <footer
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <div>
              <Link href="/">
                <img
                  className="header-menu-logo"
                  src="/RECOVER-logo.svg"
                  alt="Recover Logo"
                  role="presentation"
                />
              </Link>
              <p style={{ marginTop: '10px', textAlign: 'center' }}>
                <strong>Use it, or Lose it</strong>
              </p>
              <p style={{ marginTop: '10px', textAlign: 'center' }}>
                @ RECOVER 2020
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                width: '100vw',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: '30px 14%'
              }}
            >
              <div>
                <p style={{ padding: '8px 0 10px 0', fontSize: '18px' }}>
                  <strong>Protocol</strong>
                </p>
                <ul>
                  <li style={{ paddingBottom: '2px' }}>
                    <a href="https://kleros.io/">Kleros</a>
                  </li>
                  <li style={{ padding: '2px 0' }}>
                    <a href="https://ethereum.org/en/">Ethereum</a>
                  </li>
                  <li style={{ padding: '2px 0' }}>
                    <a href="https://ipfs.io/">IPFS</a>
                  </li>
                </ul>
              </div>
              <div>
                <p style={{ padding: '8px 0 10px 0', fontSize: '18px' }}>
                  <strong>Products</strong>
                </p>
                <ul>
                  <li style={{ paddingBottom: '2px' }}>
                    <a href="/loser-box">Loser Box</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                width: '100vw',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: '0 14%'
              }}
            >
              <div>
                <p style={{ padding: '8px 0 10px 0', fontSize: '18px' }}>
                  <strong>Social</strong>
                </p>
                <ul>
                  <li style={{ paddingBottom: '2px' }}>
                    <a href="https://github.com/blockchain-mafia/">Github</a>
                  </li>
                  <li style={{ padding: '2px 0' }}>
                    <a href="mailto: contact@wagner-nicolas.com">Mail</a>
                  </li>
                </ul>
              </div>
              <div>
                <p style={{ padding: '8px 0 10px 0', fontSize: '18px' }}>
                  <strong>Last Posts</strong>
                </p>
                <ul>
                  <li style={{ paddingBottom: '2px' }}>
                    <a href="/">Escrow</a>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ height: '140px' }}>
              <img
                style={{ height: '140px' }}
                className="footer-cryptokitty-recover"
                src="/cryptokitty-recover.png"
                alt="Cryptokitty with Recover"
                role="presentation"
              />
            </div>
          </footer>
        </div>
      </div> */}
      <Footer />
      <style jsx global>
        {`
          .header-menu {
            display: flex;
            justify-content: space-between;
            position: fixed;
            min-width: 100vw;
            padding: 2px calc((100vw - 1250px) / 2) 0 calc((100vw - 1250px) / 2);
            line-height: 58px;
            color: #444;
            box-shadow: 0px 1px 10px #999;
            background: #fff;
            z-index: 1000;
          }

          .header-menu__isTop {
            position: absolute;
            margin-top: 30px;
            box-shadow: 0 0 0 #fff;
            z-index: 1000;
          }

          .header-menu-logo {
            position: relative;
            top: 7px;
            cursor: pointer;
          }

          .header-menu-small {
            position: fixed;
            box-shadow: 0px 1px 10px #999;
            background: #fff;
            line-height: 60px;
            min-width: 100%;
            color: #444;
            z-index: 100;
          }

          /* Position and sizing of burger button */
          .bm-burger-button {
            position: fixed;
            width: 36px;
            height: 30px;
            right: 36px;
            top: 16px;
          }

          /* Color/shape of burger icon bars */
          .bm-burger-bars {
            background: #444;
          }

          /* Color/shape of burger icon bars on hover*/
          .bm-burger-bars-hover {
            background: #444;
          }

          /* Position and sizing of clickable cross button */
          .bm-cross-button {
            height: 24px;
            width: 24px;
          }

          /* Color/shape of close button cross */
          .bm-cross {
            background: #444;
          }

          /*
          Sidebar wrapper styles
          Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
          */
          .bm-menu-wrap {
            position: fixed;
            height: 100%;
          }

          /* General sidebar styles */
          .bm-menu {
            background: #fff;
            padding: 2.5em 1.5em 0;
            font-size: 1.15em;
          }

          /* Wrapper for item list */
          .bm-item-list {
            color: #444;
            padding: 0.8em;
          }

          /* Individual item */
          .bm-item {
            display: inline-block;
          }

          /* Styling of overlay */
          .bm-overlay {
            background: rgba(0, 0, 0, 0.3);
          }

          .body-container {
            display: flex;
            flex-direction: column;
            padding-top: 150px;
          }

          div[id^='rcc'] {
            padding: 8px 0;
            border-bottom: 1px solid #efefef;
          }

          .additionalClassForHead {
            padding: 5px 0;
            background: #fff !important;
            color: #444 !important;
            font-weight: 300 !important;
          }

          .additionalClassForHeadMobile {
            padding: 5px 0;
            background: #fff !important;
            color: #444 !important;
            font-weight: 300 !important;
          }

          .additionalClassForHead h3 {
            font-family: Montserrat;
            font-size: 22px !important;
            font-weight: 200 !important;
            margin: 0;
            padding: 0;
          }

          .additionalClassForHeadMobile h3 {
            font-family: Montserrat;
            font-size: 18px !important;
            font-weight: 200 !important;
            margin: 0;
            padding: 0;
          }

          .additionalClassForHead:hover,
          .active-accordion {
            color: #444 !important;
            background: #fff !important;
          }

          .additionalClassForHeadMobile:hover,
          .active-accordion {
            color: #444 !important;
            background: #fff !important;
          }

          .additionalClassForContent {
            background: #fff !important;
            margin: 0 !important;
            padding: 17px 0 !important;
            line-height: 24px !important;
          }

          .additionalClassForContent p {
            padding: 7px 0;
          }
        `}
      </style>
    </>
  )
}

export default Layout
