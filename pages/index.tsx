import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import ConnectWallet from './ConnectWallet'
import About from './about'
// import MobileLanding from './mobileLanding'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   if (window.innerWidth <= 700) {
  //     setIsMobile(true)
  //   }
  // }, [])

  return (
    <>
      <Head>
        <title>Grand Chase</title>
        <meta name="description" content="Grand Chase" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* <ConnectWallet /> */}
        <About />
      </main>
    </>
  )
}
