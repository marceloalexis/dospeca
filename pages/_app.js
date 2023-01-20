import App from 'next/app'
import dynamic from 'next/dynamic'
import { MainProvider } from '../contexts/Main.context.js'
import {AnimatePresence} from 'framer-motion'

import 'normalize.css'
import '../public/fonts/rubik.css'
import '../bemit/bemit.scss'

const BCursorWithNoSSR = dynamic(
  () => import('../bemit/08-blocks/b-cursor/b-cursor.js'),
  {ssr: false}
);

function MyApp({ Component, pageProps, router }) {
  return (
     <MainProvider>
      <AnimatePresence mode='wait' initial={true}>
        <Component {...pageProps} key={router.asPath}/>
      </AnimatePresence>
      <BCursorWithNoSSR />
      </MainProvider>
    )
}

export default MyApp
