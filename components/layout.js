import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import MobileNavbar from "./mobileNavbar";
import MobileFooter from "./mobileFooter";
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from "react";

const Layout = ({ children }) => {

  const [arrow, setArrow] = useState('scroll-down')

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        let rootElement = document.documentElement
        let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
          if ((rootElement.scrollTop / scrollTotal) > 0.9) {
            setArrow('scroll-up')
          } else if ((rootElement.scrollTop / scrollTotal) < 0.1) {
            setArrow('scroll-down')
          }
      }
    };
      handleScroll();
        window.addEventListener("scroll", handleScroll);
          return () => {
            window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className={styles.main}>
      <Navbar />
      <MobileNavbar />
      {children}
      <MobileFooter/>
      <Footer arrow={arrow} />
    </main>
  );
};

export default Layout;
