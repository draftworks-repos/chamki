
import { Inter_Tight } from "next/font/google"; 
import "./globals.css";
import { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import HeaderWrapper from "@/components/layout/HeaderWrapper"

// 👇 use Inter Tight instead of Inter
const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight" });

export default function RootLayout({ children }: { children: ReactNode }) {
  // ✅ Move useState here

  return (
    <html lang="en" className={interTight.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <HeaderWrapper/>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
