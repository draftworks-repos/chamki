"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { User, ShoppingCart, Package } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ setSidebarIsOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Pages that should always have white navbar
  const alwaysWhitePages = ["/contact", "/about", "/product", "/shop"];
  const forceWhite = alwaysWhitePages.includes(pathname);

  return (
      <nav
        className={`${styles.navbar} ${
          forceWhite ? styles.glassy : scrolled ? styles.glassy : styles.transparent
        }`}
      >
        {/* <div className={styles.logo}>CHAMKI</div> */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Chamki Logo"
            width={120}
            height={40}
            className={styles.logoImage}
            priority
          />
        </Link>
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/shop" className={styles.navLink}>Our Collection</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </div>

        <div className={styles.icons}>
          <User className={styles.icon} />
          <ShoppingCart className={styles.icon} onClick={() => setSidebarIsOpen(true)} />
          <Package className={styles.icon} />
        </div>
      </nav>
  );
}
