import React, { useState } from 'react'
import Image from 'next/image'
import {
  useConnect,
  useAccount,
  useDisconnect,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function NavBar() {

  const { connect, isConnected } = useConnect({
    connector: new InjectedConnector(),
  })
  const { data: accountData } = useAccount();
  const { disconnect } = useDisconnect();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className={`${styles.navbar} fixed flex align-middle items-center justify-between w-screen px-5 bg-[#000000] z-10`}>
      <div className="brand flex-start">
        <Link href="/">
          <Image
            className='logo'
            src="/logo.jpg"
            alt="grand chase logo"
            width="175"
            height="175"
            priority
          />
        </Link>
      </div>
      <div className="link justify-self-end">
        <Link href="/about" className="bg-darkGray hover:bg-lightGray p-2 m-1">About</Link>
        <Link href="/vision" className="bg-darkGray hover:bg-lightGray p-2 m-1">Vision</Link>
        <Link href="/world" className="bg-darkGray hover:bg-lightGray p-2 m-1">World</Link>
        {/* <Link href="/buy" className="bg-darkGray hover:bg-lightGray p-2 m-1">Buy</Link> */}
        <button type="button" onClick={() => setShowDropdown(!showDropdown)} className="bg-darkGray hover:bg-lightGray px-2 m-1 align-middle text-center h-[32px]" id="menu-button" aria-expanded="true" aria-haspopup="true">
          <span className="flex flex-row">
            More
            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </span>
        </button>
        {showDropdown && (
          <div className="absolute right-[282px] z-10 fit-content origin-bottom" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
            <div className="py-1 flex flex-col" role="none">
              <Link href="/faq" className="bg-darkGray hover:bg-lightGray p-2 m-1">FAQ</Link>
              <Link href="/tos" className="bg-darkGray hover:bg-lightGray p-2 m-1">TOS</Link>
            </div>
          </div>
        )}
        <Link href="https://twitter.com/GrandChaseNFT" className="h-[32px] max-h-[32px]">
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
        </Link>
        {/* <span className="bg-darkGray hover:bg-lightGray p-2 m-1">en</span> */}
        {isConnected ? (
          <span onClick={() => disconnect()} className="bg-transparent cursor-pointer text-gray border-2 border-gray p-2 m-1 max-h-[32px]">{`${accountData?.address?.slice(
            0,
            5
          )}...${accountData?.address?.slice(-4)}`}</span>
        ) : (
          <span onClick={() => connect()} className="bg-transparent cursor-pointer text-gray border-2 border-gray p-2 m-1 max-h-[32px]">Connect</span>
        )}
      </div>

    </nav>
  )
}
