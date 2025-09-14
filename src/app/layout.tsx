"use client"; // must be first line

import { useState } from "react";
import { Inter_Tight } from "next/font/google"; 
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartSidebar from "@/components/cart/CartSidebar";

// 👇 use Inter Tight instead of Inter
const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight" });

export default function RootLayout({ children }: { children: ReactNode }) {
  // ✅ Move useState here
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <html lang="en" className={interTight.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar setSidebarIsOpen={setSidebarIsOpen} />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartSidebar sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />
      </body>
    </html>
  );
}
