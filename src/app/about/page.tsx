"use client";
import React, { useState } from "react";
import { InteractiveHoverButton } from "@/components/ui/InterractiveHoverButton";
import { ArrowUpRight } from "lucide-react";

const AboutUsSlick = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <div className="w-full flex flex-col items-center ">

      {/* Hero-like Introduction Section */}
      <div className="relative overflow-hidden w-full bg-gradient-to-r from-[#FDEFF6] to-[#F9E9ED]">
        <img
          src="/image-4.jpeg"
          alt="Main fashion shot"
          className="w-full h-[75vh] object-cover object-top brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-8 md:p-12">
          <div className="text-center max-w-3xl mb-20">
            <span className="text-white text-sm font-semibold uppercase tracking-widest block mb-2">
              Our Vision
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight drop-shadow-lg">
              Fashion Without Fuss, Just You
            </h1>
            <p className="mt-6 text-white text-lg md:text-xl opacity-90">
              We handpick 6 essential styles each season so you can stop scrolling and start wearing what&apos;s next.
            </p>
            <a
              href="#"
              className="inline-flex items-center mt-5 px-6 py-3 bg-[#CC007E] text-white font-semibold text-lg hover:bg-[#e60073] transition-colors"
            >
              Chamki Collection <ArrowUpRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Hover Images + Text Column */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 max-w-7xl mt-18">
        {/* First Column: Two Hover Images */}
        <div className="grid grid-cols-2 gap-14">
          {/* First Hover Image */}
          <div
            className="flex justify-center relative transform transition-transform duration-500 hover:scale-105"
          >
            <img
              src="/image-5.jpg"
              alt="Woman in stylish clothing"
              className={`w-[280px] h-[480px] object-cover transition-opacity duration-500 ${isHovered1 ? "opacity-0" : "opacity-100"}`}
            />
          </div>

          {/* Second Hover Image */}
          <div
            className="flex justify-center relative transform transition-transform duration-500 hover:scale-105"
          >
            <img
              src="/image-7.jpeg"
              alt="Stylish outfit"
              className={`w-[300px] h-[480px] object-cover transition-opacity duration-500 ${isHovered2 ? "opacity-0" : "opacity-100"}`}
            />
          </div>
        </div>

        {/* Second Column: Text Content */}
        <div className="p-4">
          <span className="text-[#CC007E] text-sm font-semibold uppercase tracking-widest block mb-4 relative">
            Our Philosophy
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#CC007E] mt-1"></span>
          </span>

          <h2 className="text-[2.75rem] md:text-[3rem] font-light tracking-[0.06em] text-gray-900 uppercase mb-6">
            Style is a Statement, Not a Collection.
          </h2>

          <p className="max-w-[680px] text-[1.125rem] md:text-[1.25rem] leading-[1.75] text-gray-700 font-light mb-12">
            We believe that true style comes from intentional choices. That&apos;s why we focus on perfecting a select few pieces, ensuring each item is versatile, high-quality, and designed to seamlessly integrate into your personal wardrobe.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-[#CC007E] text-3xl font-bold">6</span>
            <span className="text-xl font-medium text-gray-800">Perfectly Curated Looks</span>
          </div>
        </div>
      </div>

      {/* Features Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl my-10">
        {[
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4 text-[#CC007E]" fill="none" viewBox="0 0 24 24" stroke="#CC007E" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l4 7-4 7-4-7 4-7z" />
              </svg>
            ),
            title: "Limited Drops",
            desc: "Fewer options mean better curation and a cleaner look. Exclusivity guaranteed.",
          },
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4 text-[#CC007E]" fill="none" viewBox="0 0 24 24" stroke="#CC007E" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5a4 4 0 118 0v2M5 11h14v2H5v-2z" />
              </svg>
            ),
            title: "Quality First",
            desc: "Premium materials ensure your pieces last, season after season. No fast fashion.",
          },
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4 text-[#CC007E]" fill="none" viewBox="0 0 24 24" stroke="#CC007E" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2s8 4 8 10-8 10-8 10-8-4-8-10 8-10 8-10z" />
              </svg>
            ),
            title: "Sustainable Focus",
            desc: "Consciously made fashion for a better future, minimizing environmental impact.",
          },
        ].map((feature, idx) => (
          <div key={idx} className="p-6 text-center">
            {feature.icon}
            <h3 className="text-2xl font-normal tracking-[0.04em] text-gray-900 uppercase mb-4">
              {feature.title}
            </h3>
            <p className="max-w-[500px] mx-auto text-base leading-[1.6] text-gray-600 font-light">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action / Testimonial Section */}
      <div className="p-10 md:p-14 mt-10 text-center border-y border-gray-200 w-full">

        <p className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-gray-800 uppercase max-w-4xl mx-auto leading-snug">
          &quot;You don&apos;t need a million options. You just need the right one.&quot;
        </p>

        <p className="mt-8 text-lg md:text-xl font-light text-gray-700 max-w-2xl mx-auto leading-relaxed">
          — Our Chamki Team
        </p>

        <InteractiveHoverButton className="mt-12">
          All Products
        </InteractiveHoverButton>
      </div>

    </div>
  );
};

export default AboutUsSlick;
