import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
      <div className={styles.header}>
        <h1>About Grand Chase</h1>
        <div className="scroll"></div>
      </div>
      <div className={styles.more}>
        <h2>Meet the Team</h2>
        <div className={styles.team}>
          <div className={`${styles.member} hover:border-2 hover:bg-lightGray w-[200px] m-4`}>
            <Image
              src="/assets/Unk_B_W.png"
              alt="unknown"
              width="200"
              height="400"
              className={`${styles.bw} pb-4`}
            />
            <Image
              src="/assets/Unk_C.png"
              alt="unknown"
              width="200"
              height="400"
              className={`${styles.color} pb-4`}
            />
            <p className="name text-white">Unknown</p>
            <p className="position text-gray hover:text-white">Co-Founder</p>
            <p className={styles.title}>Professional Bagholder</p>
          </div>
          <div className={`${styles.member} hover:border-2 hover:bg-lightGray w-[200px] m-4`}>
            <Image
              src="/assets/Merch_B_W.png"
              alt="merch"
              width="200"
              height="400"
              className={`${styles.bw} pb-4`}
            />
            <Image
              src="/assets/Merch_C.png"
              alt="merch"
              width="200"
              height="400"
              className={`${styles.color} pb-4`}
            />
            <p className="name text-white">Merch</p>
            <p className="position text-gray hover:text-white">Co-Founder</p>
            <p className={styles.title}>Professional Merchant</p>
          </div>
          <div className={`${styles.member} hover:border-2 hover:bg-lightGray w-[200px] m-4`}>
            <Image
              src="/assets/Gavv_B_W.png"
              alt="gavv"
              width="200"
              height="400"
              className={`${styles.bw} pb-4`}
            />
            <Image
              src="/assets/Gavv_C.png"
              alt="gavv"
              width="200"
              height="400"
              className={`${styles.color} pb-4`}
            />
            <p className="name text-white">Gavv</p>
            <p className="position text-gray hover:text-white">Artist</p>
            <p className={styles.title}>Professional<br/>Artist</p>
          </div>
          <div className={`${styles.member} hover:border-2 hover:bg-lightGray w-[200px] m-4`}>
            <Image
              src="/assets/Cali_B_W.png"
              alt="cali"
              width="200"
              height="400"
              className={`${styles.bw} pb-4`}
            />
             <Image
              src="/assets/Cali_C.png"
              alt="cali"
              width="200"
              height="400"
              className={`${styles.color} pb-4`}
            />
            <p className="name text-white">CaliWu</p>
            <p className="position text-gray hover:text-white">Growth</p>
          </div>
          <div className={`${styles.member} hover:border-2 hover:bg-lightGray w-[200px] m-4`}>
            <Image
              src="/assets/Liq_B_W.png"
              alt="liq"
              width="200"
              height="400"
              className={`${styles.bw} pb-4`}
            />
            <Image
              src="/assets/Liq_C.png"
              alt="liq"
              width="200"
              height="400"
              className={`${styles.color} pb-4`}
            />
            <p className="name text-white">Liq</p>
            <p className="position text-gray hover:text-white">Community</p>
          </div>
          <div className={`${styles.member} hover:border-2 hover:bg-lightGray w-[200px] m-4`}>
            <Image
              src="/assets/Danning_B_W.png"
              alt="danning"
              width="200"
              height="400"
              className={`${styles.bw} pb-4`}
            />
            <Image
              src="/assets/Danning_C.png"
              alt="danning"
              width="200"
              height="400"
              className={`${styles.color} pb-4`}
            />
            <p className="name text-white">Danning</p>
            <p className="position text-gray hover:text-white">Community</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
