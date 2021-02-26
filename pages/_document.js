import Document, { Html, Head, Main, NextScript } from 'next/document'

class MainDocument extends Document {
  render () {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <div id='modal' />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MainDocument
