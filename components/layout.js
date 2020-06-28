import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

const Layout = ({ children }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })

  const [ isMenuOpen, setIsMenuOpen ] = useState(false)

  return (
    <div className="container">
      <div>
        <nav>
          {isDesktopOrLaptop ? (
              <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: '500'}}>
                <div><img src="/recover.png" alt="Recover Logo" className="logo" /></div>
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
      </div>

      <div><main>{children}</main></div>

      <div>
        <footer>
          RECOVER 2020
        </footer>
      </div>

      <style jsx global>
        {`
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
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Montserrat, Roboto, sans-serif;
            text-rendering: optimizeLegibility;
          }
          
          .container {
            ${isDesktopOrLaptop && 'min-width: 1224px;'}
          }
        `}
      </style>
    </div>
  )
}
  
export default Layout