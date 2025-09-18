"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import React from "react";

const InstagramStrip = () => {
  const images = [
    "/image-14.jpg",
    "/image-20.jpg",
    "/image-14.jpg",
    "/image-14.jpg",
    "/image-19.jpg",
    "/image-14.jpg",
    "/image-14.jpg"
  ]; // replace with actual images
  const instagramLink = "https://www.instagram.com/yourclient/";

  return (
    <div className="w-full overflow-hidden">
      <div className="grid grid-flow-col auto-cols-fr gap-0">
        {images.map((img, idx) => (
          <a
            key={idx}
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full aspect-square cursor-pointer group"
          >
            <Image
              src={img}
              alt={`Instagram ${idx + 1}`}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <Instagram className="w-6 h-6 text-white" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default InstagramStrip;
