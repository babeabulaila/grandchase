import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import {
  useConnect,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import styles from '@/styles/Home.module.css'
// import MobileLanding from '../mobileLanding'

export default function ConnectWallet() {
  const [isMobile, setIsMobile] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);
  const { connect, isConnected } = useConnect({
    connector: new InjectedConnector(),
  })

  useEffect(() => {
    if (window.innerWidth <= 700 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsTimeout(true)
    }, 7000)
  }, [])

  const handleVideoEnd = () => {
    setIsFinished(true);
  }

  const goHome = () => {
    window.location.replace('/about');
  }

  return (
    <div>
    {isFinished || isTimeout ? (
      <div className="h-screen">
      <div className={`${styles.banner} uppercase border-t-8 border-b-8 border-white p-2`}>
        grandchaseproject // launching soon // grandchaseproject // launching soon // grandchaseproject // launching soon // grandchaseproject // launching soon // grandchaseproject // launching soon // grandchaseproject // launching soon // grandchaseproject // launching soon // grandchaseproject // launching soon // grandchaseproject // launching soon // grandchaseproject // launching soon //
      </div>
      {!isConnected ? (
        <button onClick={() => connect()} className={`${styles.connectButton} uppercase p-2 border-4 border-gray`}>Connect Wallet</button>
      ) : (
        <button onClick={goHome} className={`${styles.connectButton} uppercase p-2 border-4 border-gray`}>Enter</button>
      )}
      <div className={`${styles.banner} uppercase border-t-8 border-b-8 border-white p-2`}>
        grandchaseproject // launching soon // grandchaseproject // launching soon // grandchaseproject // launching soon // grandchaseproject // launching soon // grandchaseproject // launching soon // grandchaseproject // launching soon // grandchaseproject // launching soon // grandchaseproject // launching soon // grandchaseproject // launching soon // grandchaseproject // launching soon //
      </div>
    </div>
    ) : (
      <div>
        {isMobile ? (
          <Image
            src="/mobile-loading.gif"
            alt="mobile loading"
            height="1000"
            width="600"
          />
          // <MobileLanding />
        ) : (
          <video autoPlay muted no-controls onEnded={handleVideoEnd}>
            <source src="/assets/desktop-loading.mp4" type="video/mp4"  />
          </video>
        )}
      </div>
  )}
  </div>
  )
}
