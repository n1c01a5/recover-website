import 'bootstrap/dist/css/bootstrap.min.css' // FIXME: remove bootstrap!!!
import '../styles/globals.scss'

import { AppWrapper } from '../contexts/state'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp ({ Component, pageProps }) {
  return <AppWrapper><Component {...pageProps} /></AppWrapper>
}
