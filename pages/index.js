import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Recover.ws - Lost anf Found service based on the Ethereum Blockchain</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <header>
          <nav style={{display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: '500'}}>
            <div><img src="/recover.png" alt="Recover Logo" className="logo" /></div>
            <div style={{display: 'flex'}}>
              <div>APPLICATION</div>
              <div style={{margin: '0 70px'}}>BLOG</div>
              <div>ABOUT</div>
            </div>
            <div>GET YOUR LOSER BOX</div>
          </nav>
        </header>
      </div>


      <div>
        <main>
          <header style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
              <h1>
                Blockchain Friendly Gadget,
                <br />Lost & Found Service for Ledger.
              </h1>
            </div>
            <div><img src="/doge.png" alt="Doge" className="doge" /></div>
          </header>
          
          <h1 className="title">
          </h1>
        </main>
      </div>

      <div>
        <footer>
          RECOVER 2020
        </footer>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          font-family: Montserrat, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;
        }

        main {
          padding: 10em 0;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          width: 170px;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Montserrat, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          text-rendering: optimizeLegibility;
          padding: 1em 5em;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
