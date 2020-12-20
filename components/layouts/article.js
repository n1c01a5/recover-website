import Head from 'next/head'

export default ({ title = 'This is the default title', content = 'content' }) => (
  <>
    <Head>
      <title>{ title }</title>  
    </Head>
    <header>{ title }</header>

    <main>{ content }</main>

    <footer>
      Footer
    </footer>
  </>
)