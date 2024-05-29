import React from 'react'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '@/styles/Home.module.css'

export default function MobileLanding() {
  return (
    <Layout>
      <div className={styles.more}>
        <Image
          src="/assets/everyone.png"
          alt="everyone character"
          height="400"
          width="400"
        />
      </div>
    </Layout>
  )
}
