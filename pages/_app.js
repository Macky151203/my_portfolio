import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react';
import NextNProgress from 'nextjs-progressbar';
import '../styles/style.css'

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence  mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}
    >
      <div className='m'>
      <NextNProgress />
      <Component {...pageProps} />
      <Analytics />
      </div>
    </AnimatePresence>
  )
}
