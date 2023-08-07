import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence  mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}
    >
      <NextNProgress />
      <Component {...pageProps} />
      <Analytics />
    </AnimatePresence>
  )
}
