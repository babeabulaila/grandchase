import React from 'react'
import styles from '@/styles/Home.module.css'
export default function footer({arrow}: {arrow: string}) {

  let upArrow = 
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 7 18 24" stroke-width="2.5" stroke="currentColor" className="w-6 h-6">
    <path stroke-linecap="round"  d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>

  let downArrow = 
  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 6 18 24" stroke-width="2.5" stroke="currentColor" className="w-6 h-6">
    <path stroke-linecap="round"  d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>

  const arrowDirection = () => {
    if (arrow === 'scroll-up') {
      return upArrow
    } else {
      return downArrow
    }
  }

  return (
    <div className={`${styles.footer} flex justify-between`}>
      <div className="launch flex flex-row"><div className="h-[10px] w-[10px] bg-green" />&nbsp;Launching Soon</div>
      <div className="footer-llc">Ⓒ 2023 Grand Chase LLC. All Rights Reserved.</div>
      <div className="scroll">
        <span className="footer-arrow">
          Scroll {arrowDirection()}
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          </svg>
        </span>
      </div>
      <div className={`${arrow}`}>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
