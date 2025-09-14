"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { User, ShoppingCart, Package } from "lucide-react";
import Link from "next/link";
import Banner from "../ui/Banner";

// ✅ Define props interface
interface NavbarProps {
  setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ setSidebarIsOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.navWrapper}>
      <Banner />
      <nav className={`${styles.navbar} ${scrolled ? styles.glassy : styles.transparent}`}>
        {/* Logo */}
        <div className={styles.logo}>CHAMKI</div>

        {/* Nav Links */}
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/collection" className={styles.navLink}>Our Collection</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </div>

        {/* Icons */}
        <div className={styles.icons}>
          <User className={styles.icon} />
          {/* Cart icon opens the sidebar */}
          <ShoppingCart
            className={styles.icon}
            onClick={() => setSidebarIsOpen(true)}
          />
          <Package className={styles.icon} />
        </div>
      </nav>
    </div>
  );
}
