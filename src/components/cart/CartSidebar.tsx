"use client";

import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";

interface CartSidebarProps {
  sidebarIsOpen: boolean;
  setSidebarIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface Product {
  id: number;
  name: string;
  color: string;
  price: number;
  img: string;
  link: string;
}

export default function CartSidebar({ sidebarIsOpen, setSidebarIsOpen }: CartSidebarProps) {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Kurti",
      color: "Red",
      price: 1699,
      img: "/image-5.png",
      link: "/products/kurti",
    },
    {
      id: 2,
      name: "Sleeveless Kurti",
      color: "Blue",
      price: 1299,
      img: "/image-6.png",
      link: "/products/sleeveless-kurti",
    },
  ]);

  const [quantities, setQuantities] = useState<{ [key: number]: number }>({
    1: 1,
    2: 1,
  });

  const handleQuantityChange = (id: number, delta: number) => {
    setQuantities((prev) => {
      const newQty = Math.max(1, (prev[id] || 1) + delta);
      return { ...prev, [id]: newQty };
    });
  };

  // Calculate totals
  const subtotal = products.reduce(
    (acc, p) => acc + p.price * (quantities[p.id] || 1),
    0
  );
  const tax = Math.round(subtotal * 0.07); // 7% tax
  const total = subtotal + tax;

  return (
    <div className="relative z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-black p-4 text-white focus:outline-2 focus:outline-offset-2 focus:outline-black"
      >
        <span className="sr-only">Toggle Cart Sidebar</span>
        Cart
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-40 flex h-screen w-80 flex-col border-l border-neutral-300 bg-neutral-50 p-4 transition-transform duration-300 ${
          sidebarIsOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-neutral-900">Your Cart</h3>
          <button
            onClick={() => setSidebarIsOpen(false)}
            className="text-neutral-600 cursor-pointer"
          >
            <span className="sr-only">Close Sidebar</span>
            ✕
          </button>
        </div>

        {/* Products */}
        <div className="flex flex-col gap-4 overflow-y-auto py-4">
          {products.map((product) => (
            <div key={product.id} className="flex justify-between gap-4 py-2 relative">
              {/* Product Image */}
              <Link href={product.link}>
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-sm cursor-pointer"
                />
              </Link>

              <div className="flex flex-col gap-1 mr-auto">
                <Link href={product.link}>
                  <p className="text-sm font-bold text-neutral-900 cursor-pointer">
                    {product.name}
                  </p>
                </Link>

                <p className="text-sm text-neutral-600">₹{product.price}</p>
                <p className="text-xs text-neutral-500">{product.color}</p>

                {/* Counter */}
                <div className="mt-1 flex items-center gap-1">
                  <button
                    onClick={() => handleQuantityChange(product.id, -1)}
                    className="h-6 w-6 flex items-center justify-center border border-neutral-300 rounded-l-sm bg-neutral-50 cursor-pointer"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className="w-10 text-center bg-neutral-50 text-neutral-900 border-y border-neutral-300"
                    value={quantities[product.id] || 1}
                    readOnly
                  />
                  <button
                    onClick={() => handleQuantityChange(product.id, 1)}
                    className="h-6 w-6 flex items-center justify-center border border-neutral-300 rounded-r-sm bg-neutral-50 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Product close icon (dummy) */}
              <button className="absolute top-0 right-0 text-neutral-400 cursor-pointer">
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto">
          <div className="divide-y divide-neutral-300">
            <div className="flex justify-between py-2 text-xs font-medium text-neutral-600">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between py-2 text-xs font-medium text-neutral-600">
              <span>Tax</span>
              <span>₹{tax}</span>
            </div>
            <div className="flex justify-between py-2 text-sm font-bold text-neutral-600">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-2 flex flex-col gap-2">
            <button className="cursor-pointer flex w-full items-center justify-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white border transition-colors duration-300 hover:bg-white hover:text-black hover:border-black">
              Checkout
            </button>
            <button className="cursor-pointer flex w-full items-center justify-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white border transition-colors duration-300 hover:bg-white hover:text-black hover:border-black">
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
