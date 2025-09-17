"use client"
import React from 'react';
import {useState} from "react"
import { InteractiveHoverButton } from "@/components/ui/InterractiveHoverButton"
import styles from "@/components/Hero.module.css"

const AboutUsSlick = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  return (
    <div className="w-full flex flex-col items-center">

      {/* Hero-like Introduction Section */}
      <div className="relative overflow-hidden w-full bg-gradient-to-r from-pink-100 to-red-100">
        <img
          src="/image-4.jpeg"
          alt="Main fashion shot"
          className="w-full h-[75vh] object-cover object-top brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-8 md:p-12">
          <div className="text-center max-w-3xl mb-20">
            <span className="text-white text-sm font-semibold uppercase tracking-widest block mb-2">Our Vision</span>
            <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight drop-">
              Fashion Without Fuss, Just You
            </h1>
            <p className="mt-6 text-white text-lg md:text-xl opacity-90">
              We handpick 6 essential styles each season so you can stop scrolling and start wearing what's next.
            </p>
            <a 
              href="#"
              className={styles.button}
              style={{
                marginTop: "20px"
              }} 
             >
            <span
              className={styles.text}
              style={{fontSize: "1.1rem"}}
              >Checkout
              <img
                src="/arrow-up-right.svg"
                alt="Arrow up right"
                className={styles.arrow}
              />
             </span>
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 max-w-7xl mt-30">
        {/* First Column: Two Hover Images */}
        <div className="grid grid-cols-2 gap-14">
          {/* First Hover Image */}
          <div 
            className="flex justify-center relative"
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            <img 
              src="/image-5.jpg" 
              alt="Woman in stylish clothing" 
              className={`w-[280px] h-[480px] object-cover rounded-full transition-opacity duration-500 ${isHovered1 ? 'opacity-0' : 'opacity-100'}`} 
            />
            <img 
              src="/image-6.jpg" 
              alt="Another stylish woman" 
              className={`absolute top-0 left-1/2 -translate-x-1/2 w-[280px] h-[480px] object-cover rounded-full transition-opacity duration-500 ${isHovered1 ? 'opacity-100' : 'opacity-0'}`} 
            />
          </div>

          {/* Second Hover Image */}
          <div 
            className="flex justify-center relative"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <img 
              src="/image-7.jpeg" 
              alt="Stylish outfit" 
              className={`w-[300px] h-[480px] object-cover rounded-full transition-opacity duration-500 ${isHovered2 ? 'opacity-0' : 'opacity-100'}`} 
            />
            <img 
              src="/image-8.jpg" 
              alt="Another stylish outfit" 
              className={`absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[480px] object-cover rounded-full transition-opacity duration-500 ${isHovered2 ? 'opacity-100' : 'opacity-0'}`} 
            />
          </div>
        </div>

        {/* Second Column: Text Content */}
        <div className="p-4">
          <span className="text-pink-primary text-sm font-semibold uppercase tracking-widest block mb-4">Our Philosophy</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Style is a Statement, Not a Collection.
          </h2>
          <p className="mt-6 text-gray-700 text-lg">
            We believe that true style comes from intentional choices. That's why we focus on perfecting a select few pieces, ensuring each item is versatile, high-quality, and designed to seamlessly integrate into your personal wardrobe.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <span className="text-pink-primary text-3xl font-bold">6</span>
            <span className="text-xl font-medium text-gray-800">Perfectly Curated Looks</span>
          </div>
        </div>
      </div>

      {/* Features Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl my-10">
        <div className="p-6 bg-white text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Limited Drops</h3>
          <p className="text-gray-600">Fewer options mean better curation and a cleaner look. Exclusivity guaranteed.</p>
        </div>
        <div className="p-6 bg-white text-center ">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Quality First</h3>
          <p className="text-gray-600">Premium materials ensure your pieces last, season after season. No fast fashion.</p>
        </div>
        <div className="p-6 bg-white text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable Focus</h3>
          <p className="text-gray-600">Consciously made fashion for a better future, minimizing environmental impact.</p>
        </div>
      </div>

      {/* Call to Action / Testimonial Section */}
      <div className="bg-pink-light p-10 md:p-16 text-center ">
        <p className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight max-w-4xl mx-auto">
          "You don't need a million options. You just need the right one."
        </p>
        <p className="mt-8 text-xl text-gray-700">— Our Chamki Team</p>
        <InteractiveHoverButton className="mt-12">
          All Products
        </InteractiveHoverButton>
      </div>
    </div>
  );
};

export default AboutUsSlick;