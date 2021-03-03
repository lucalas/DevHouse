// Styles
import '../styles/theme.css'
import '../styles/globals.css'
import initAuth from '../utils/initAuth'

initAuth();

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
