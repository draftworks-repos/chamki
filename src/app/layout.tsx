// src/app/layout.tsx
import { Inter_Tight } from "next/font/google"; // 👈 import Inter Tight
import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// 👇 use Inter Tight instead of Inter
const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight" });

export const metadata: Metadata = {
  title: "Chamki - Fashion Clothing Store",
  description: "Premium fashion clothing store",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={interTight.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
