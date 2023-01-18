import App from 'next/app'
import { MainProvider } from '../contexts/Main.context.js'
import {AnimatePresence} from 'framer-motion'

import 'normalize.css'
import '../public/fonts/rubik.css'
import '../bemit/bemit.scss'

function MyApp({ Component, pageProps, router }) {
  return (
     <MainProvider>
      <AnimatePresence mode='wait' initial={true}>
        <Component {...pageProps} key={router.asPath}/>
      </AnimatePresence>
      </MainProvider>
    )
}

export default MyApp
