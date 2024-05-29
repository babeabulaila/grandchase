import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Layout from '../components/layout'

export default function World() {
  return (
    <Layout>
      <div className={styles.header}>
        <h1>Our World</h1>
        <div className="scroll"></div>
      </div>
      <div className={`${styles.more} ${styles.world}`}>
        <div className={`${styles.world} flex`}>
          <div className="basis-8/12 self-center">
            <div className={`${styles.box} bg-darkGray border-8 border-gray p-4 m-6 hover:bg-lightGray hover:border-[#ffffff]`}>
              <span>01</span> The Grand Chase
            </div>
            <div className={`${styles.box} bg-darkGray border-8 border-gray p-4 m-6 hover:bg-lightGray hover:border-[#ffffff]`}>
              Coming Soon
            </div>
            <div className={`${styles.box} bg-darkGray border-8 border-gray p-4 m-6 hover:bg-lightGray hover:border-[#ffffff]`}>
              Coming Soon
            </div>
          </div>
          <div className="basis-4/12">
            <Image
              src="/assets/character.png"
              alt="characters"
              width="400"
              height="600"
              className="m-auto"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
