import Link from 'next/link'
import { useState, useEffect } from 'react'
import { slide as Menu } from 'react-burger-menu'

import Button from './elements/button'
import Footer from './elements/Footer'
import Header from './elements/Header'

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
        {/* <div className="mobile-layout">
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
        </div> */}

        <Header isTop={isTop} />
      </nav>

      <main role="main">
        <div className="body-container">{children}</div>
      </main>
      <Footer />
      <style jsx global>
        {`
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
