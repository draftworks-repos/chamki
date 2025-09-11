"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // glassy bg after scrolling 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${
        scrolled ? styles.glassy : styles.transparent
      }`}
    >
      <div className={styles.logo}>Chamki</div>

      <div className={styles.navLinks}>
        <a href="/" className={styles.navLink}>Home</a>
        <a href="/products" className={styles.navLink}>Products</a>
        <a href="/contact" className={styles.navLink}>Contact</a>
        <a href="/about" className={styles.navLink}>About</a>
      </div>

      <div className={styles.icons}>
        {/* Profile SVG */}
        <svg className={styles.icon} viewBox="0 0 24 24">
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
        </svg>

        {/* Cart SVG */}
        <svg className={styles.icon} viewBox="0 0 24 24">
          <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-9.83-4l1.72-7h9.18l1.72 7H7.17zM5 6h16v2H5z"/>
        </svg>

        {/* Search SVG */}
        <svg className={styles.icon} viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 001.48-5.34C15.22 5.03 12.19 2 8.61 2 5.03 2 2 5.03 2 8.61s3.03 6.61 6.61 6.61c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6.89 0C6.57 14 4 11.43 4 8.61S6.57 3.22 9.61 3.22s5.61 2.57 5.61 5.61-2.57 5.61-5.61 5.61z"/>
        </svg>
      </div>
    </nav>
  );
}
