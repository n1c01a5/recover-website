import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { slide as Menu } from 'react-burger-menu'

function Scroll({setTop, isTop}) {
  useEffect(function onFirstMount() {
    function onScroll() {
      window.document.addEventListener('scroll', () => {
        if ((window.scrollY < 30) !== isTop) {
          setTop(false)
        } else {
          setTop(true)
        }
      })
    }

    window.addEventListener("scroll", onScroll);
  }, []) // empty dependencies array means "run this once on first mount"

  return null
}

const Layout = ({ children }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })

  const [ isMenuOpen, setIsMenuOpen ] = useState(false)
  const [isTop, setTop] = useState(true)

  Scroll({setTop, isTop})

  return (
    <>
      <nav suppressHydrationWarning={true}>{/* FIXME: remove this props to mute warning. */}
        {
          isDesktopOrLaptop ? (
            <div className={`header-menu ${isTop ? 'header-menu__isTop' : ''}`}>
              <div><img className="header-menu-logo" src="/recover.png" alt="Recover Logo" /></div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>APPLICATION</div>
                <div>BLOG</div>
                <div>ABOUT</div>
              </div>
              <div>GET YOUR LOSER BOX</div>
            </div>
          ) : (
            <>Mobile</>
          )
        }
      </nav>

      <main role="main">
        <div className="container">{children}</div>
      </main>

      <div>
        <footer>
          RECOVER 2020
        </footer>
      </div>

      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700');

          body, html {
            min-width: 100vw;
            min-height: 100hw;
          }

          *, *::after, *::before {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }

          body {
            font-family: Montserrat, Roboto, sans-serif;
            text-rendering: optimizeLegibility;
            color: #444;
          }

          .header-menu {
            display: flex;
            position: fixed;
            min-width: 100vw;
            padding: 0 calc((100vw - 1250px) / 2);
            line-height: 60px;
            color: #444;
            box-shadow: 0px 1px 10px #999;
            background: #fff;
            z-index: 100;
          }
          
          .header-menu__isTop {
            position: absolute;
            margin-top: 30px;
            box-shadow: 0 0 0 #fff;
          }

          .header-menu-logo {
            position: relative;
            top: 5px;
          }

          /* Position and sizing of burger button */
          .bm-burger-button {
            position: fixed;
            width: 36px;
            height: 30px;
            right: 36px;
            top: 36px;
          }

          /* Color/shape of burger icon bars */
          .bm-burger-bars {
            background: #373a47;
          }

          /* Color/shape of burger icon bars on hover*/
          .bm-burger-bars-hover {
            background: #a90000;
          }

          /* Position and sizing of clickable cross button */
          .bm-cross-button {
            height: 24px;
            width: 24px;
          }

          /* Color/shape of close button cross */
          .bm-cross {
            background: #bdc3c7;
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
            background: #373a47;
            padding: 2.5em 1.5em 0;
            font-size: 1.15em;
          }

          /* Morph shape necessary with bubble or elastic */
          .bm-morph-shape {
            fill: #373a47;
          }

          /* Wrapper for item list */
          .bm-item-list {
            color: #b8b7ad;
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

          .container-menu {
            display: flex;
            flex-wrap: wrap;
            max-width: 1250px;
            margin: 0 auto;
          }

          .container {
            display: flex;
            flex-wrap: wrap;
            max-width: 1250px;
            margin: 0 auto;
            padding-top: 200px;
          }
        `}
      </style>
    </>
  )
}
  
export default Layout