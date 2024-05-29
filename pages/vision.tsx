import React from 'react'
import styles from '@/styles/Home.module.css'
import Layout from '../components/layout'

export default function Vision() {
  return (
    <Layout>
      <div className={styles.header}>
        <h1>About Our Vision</h1>
        <div className="scroll"></div>
      </div>
      <div className={styles.more}>
        <h2 className="text-center pb-8">Grand Vision</h2>
        <p className={styles.description}>
          Our vision is to see Grand Chase grow into a lifestyle brand. Together, we are building a community where we encourage each other to achieve new heights.
          <br/><br/>
          We are passionate about prioritizing holders&apos; benefits through events, dining experiences, and ultimately building a clubhouse that focuses on expanding our IP together.
          <br/><br/>
          We are creating A second home where chasers may come together and host events on a regular basis.
        </p>
      </div>
    </Layout>
  )
}
