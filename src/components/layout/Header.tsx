"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import CartSidebar from "@/components/cart/CartSidebar";

export default function Header() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <>
      {/* Pass toggle function to Navbar */}
      <Navbar setSidebarIsOpen={setSidebarIsOpen} />
      <CartSidebar
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      />
    </>
  );
}
