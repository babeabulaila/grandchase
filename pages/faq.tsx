import React from 'react'
import Layout from '../components/layout'
import styles from '@/styles/Home.module.css'

export default function FAQ() {
  return (
    <Layout>
      <div className={`${styles.faq} max-w-[1000px] m-auto p-5`}>
        <h1>FAQ</h1>
        <h3>Have a question?</h3>
        <div className={`${styles.question} text-white`}>
          When is mint for the collector pass?
          <span className="text-gray"><br/>012023</span>
        </div>
        <div className={`${styles.question} text-white`}>
          What will be the mint price for the collector pass?
          <span className="text-gray"><br/>0.25 ETH</span>
        </div>
        <div className={`${styles.question} text-white`}>
          When is the phase 2 collection launching?
          <span className="text-gray"><br/>02023</span>
        </div>
        <div className={`${styles.question} text-white`}>
          What type of lifestyle experience can we expect for holders?
          <span className="text-gray"><br/>Networking, dining, and entertainment</span>
        </div>
        <div className={`${styles.question} text-white`}>
          What are the benefits to holding a collector pass?
          <span className="text-gray"><br/>The collector pass acts as a key within the Grand Chase ecosystem being a holder makes you a cahser ensuring that you will recive access to furture drops, collaborations, and events.</span>
        </div>
      </div>
    </Layout>
  )
}
