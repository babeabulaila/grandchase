import React, {useState} from 'react'
import Image from 'next/image'
import {
  useConnect,
  useAccount,
  useDisconnect,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function MobileNavbar() {
  const { connect, isConnected } = useConnect({
    connector: new InjectedConnector(),
  })
  const { data: accountData } = useAccount();
  const { disconnect } = useDisconnect();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className={`${styles.mobileNav} flex flex-row fixed align-middle items-center justify-between w-screen bg-[#000000] z-10`}>
      <div className="brand flex float-left">
        <Image
          src="/logo.jpg"
          alt="grand chase logo"
          width="100"
          height="100"
          className="inline-block"
          priority
        />
      </div>
      <div className="link flex float-right align-middle items-center h-[75px] pr-4">
        <button type="button" onClick={() => setShowDropdown(!showDropdown)} className="" id="menu-button" aria-expanded="true" aria-haspopup="true">
          <span className="flex flex-row">
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          </span>
        </button>
        {showDropdown && (
          <div className="absolute top-20 right-0 z-10 fit-content origin-bottom" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
          <div className="py-1 flex flex-col bg-[#000000]" role="none">
            <Link href="/about" className="bg-darkGray hover:bg-lightGray p-2 m-1">About</Link>
            <Link href="/vision" className="bg-darkGray hover:bg-lightGray p-2 m-1">Vision</Link>
            <Link href="/world" className="bg-darkGray hover:bg-lightGray p-2 m-1">World</Link>
            {/* <Link href="/buy" className="bg-darkGray hover:bg-lightGray p-2 m-1">Buy</Link> */}
            <Link href="/faq" className="bg-darkGray hover:bg-lightGray p-2 m-1">FAQ</Link>
            <Link href="/tos" className="bg-darkGray hover:bg-lightGray p-2 m-1">TOS</Link>
            {/* <span className="bg-darkGray hover:bg-lightGray p-2 m-1">en</span> */}
            {isConnected ? (
              <span onClick={() => disconnect()} className="bg-transparent text-gray border-2 border-gray p-2 m-1 max-h-[32px]">{`${accountData?.address?.slice(
                0,
                5
              )}...${accountData?.address?.slice(-4)}`}</span>
            ) : (
              <span onClick={() => connect()} className="bg-transparent text-gray border-2 border-gray p-2 m-1 max-h-[32px]">Connect</span>
            )}
          </div>
        </div>
        )}
        {/* <Link href="https://twitter.com/GrandChaseNFT" className="h-[32px] max-h-[32px]">
          <Image
            src="/assets/discord.png"
            alt="discord"
            width="40"
            height="40"
            className="bg-darkGray hover:bg-lightGray p-2 m-1 inline-block  h-[32px]"
          />
        </Link>
        <Link href="https://twitter.com/GrandChaseNFT" className="h-[32px]">
          <Image
            src="/assets/twitter.png"
            alt="twitter"
            width="40"
            height="25"
            className='bg-darkGray hover:bg-lightGray p-2 m-1 inline-block  h-[32px]'
          />
        </Link> */}
      </div>
    </nav>
  )
}
