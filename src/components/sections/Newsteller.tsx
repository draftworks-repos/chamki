"use client";

import React, { useState, useEffect } from "react";
import { InteractiveHoverButton } from "../ui/InterractiveHoverButton";
import Image from "next/image";
import { Instagram } from "lucide-react";

const App = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  useEffect(() => {
    if (isMessageVisible) {
      const timer = setTimeout(() => {
        setIsMessageVisible(false);
        setMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isMessageVisible]);

  const handleSubscribe = () => {
    if (email) {
      setMessage("Thank you for subscribing!");
    } else {
      setMessage("Please enter a valid email address.");
    }
    setIsMessageVisible(true);
    setEmail("");
  };

  // ✅ Images
  const images = [
    { src: "/image-14.jpg", link: "https://instagram.com" },
    { src: "/image-14.jpg", link: "https://instagram.com" },
    { src: "/image-14.jpg", link: "https://instagram.com" },
    { src: "/image-14.jpg", link: "https://instagram.com" },
    { src: "/image-14.jpg", link: "https://instagram.com" },
    { src: "/image-14.jpg", link: "https://instagram.com" },
  ];

  return (
    <div className="flex items-center justify-center min-h-[50vh] my-auto bg-[#f7f4f1] border-t border-zinc-200">
      <div className="w-[1400px] grid grid-cols-1 md:grid-cols-2 items-center px-6 py-18 gap-8">
        
        {/* Left: 2x2 Image Grid (smaller) */}
        <div className="mx-auto max-w-[600px]">
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            {images.map((item, i) => (
             <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-48 aspect-square group"  // 👈 add w-24 or w-28
            >
              <Image
                src={item.src}
                alt={`Image ${i + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <Instagram className="text-white w-6 h-6" />
              </div>
            </a>
            ))}
          </div>
        </div>

        {/* Right: Text + Form */}
        <div className="text-center md:text-center">
          <h1 className="text-3xl md:text-4xl font-normal tracking-wider text-neutral-800 mb-6 uppercase">
            Get an instant Discount!
          </h1>
          <div className="space-y-4 text-sm md:text-base text-neutral-700 font-light mb-8">
            <p>Enjoy a straight 10% off on large orders — no coupons needed.</p>
            <p>Planning a bulk or custom order? We’ve got special pricing just for you.</p>
            <p>Contact us directly to get the best offer on your purchase.</p>
          </div>
          <div className="w-full flex flex-col sm:flex-row items-center md:items-center justify-center gap-4 mt-8">
            <div className="relative">
              <input
                placeholder="Search..."
                className="input shadow-lg border-2 border-transparent focus:border-2 focus:border-gray-300 px-5 py-3 rounded-full w-56 transition-all focus:w-64 outline-none"
                name="search"
                type="search"
              />
              <svg
                className="size-6 absolute top-3 right-3 text-gray-500"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </div>
            <InteractiveHoverButton onClick={handleSubscribe}>
              Email Us
            </InteractiveHoverButton>
          </div>
        </div>
      </div>

      {/* Floating Message Box */}
      {isMessageVisible && (
        <div className="w-[1400px]  fixed top-4 right-4 bg-gray-800 text-white py-2 px-4 rounded-md shadow-lg transition-opacity duration-300">
          {message}
        </div>
      )}
    </div>
  );
};

export default App;
