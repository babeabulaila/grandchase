import React from 'react'
import styles from '@/styles/Home.module.css'

export default function MobileFooter() {
  return (
    <div className={`${styles.mobileFooter} flex justify-center m-auto w-100 mb-2`}>
      <div className="launch flex flex-row text-[12px] align-middle"><div className="h-[10px] w-[10px] bg-green align-middle self-center"/>&nbsp;Launching Soon</div>
    </div>
  )
}
