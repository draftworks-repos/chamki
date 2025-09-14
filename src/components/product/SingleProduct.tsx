import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Share2, Heart, Star } from "lucide-react";
import Link from "next/link";
import RelatedProducts from "./RelatedProducts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordion"

type ColorOption = {
  name: string;
  value: string;
};

type Product = {
  brand: string;
  name: string;
  category: string;
  currentPrice: string;
  stockCount: number;
  description: string;
  colors: ColorOption[];
  sizes: string[];
  images: string[];
};

interface SingleProductProps {
  product: Product;
}

const SingleProduct = ({ product }: { product: Product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const wordLimit = 20;
  const truncatedDescription = product.description
  .split(" ")
  .slice(0, wordLimit)
  .join(" ");

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleShare = async () => {
    const url = window.location.href; // current page URL

    if (navigator.share) {
      // Native share dialog for mobile & supported browsers
      try {
        await navigator.share({
          title: document.title, // optional
          url: url,
        });
        console.log("Shared successfully");
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      // Fallback: copy URL to clipboard
      try {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
      } catch (err) {
        console.error("Copy failed:", err);
      }
    }
  };


  return (
    <div className="max-w-7xl mt-18 mb-12 mx-auto p-4 bg-white">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline hover:text-gray-900">
            Homepage
        </Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <Link
            href={`/category/${product.category.toLowerCase().replace(/\s+/g, "-")}`}
            className="hover:underline hover:text-gray-900"
        >
            {product.category}
        </Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-gray-900">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-14">
        {/* Image Section */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative">
            <img
              src={product.images[selectedImageIndex]}
              alt={product.name}
              className="w-full h-96 lg:h-[700px] object-cover"
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className=" absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5 cursor-pointer" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5 cursor-pointer" />
            </button>

            {/* Top Right Icons */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={handleShare} // <- add this
                className="bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
              >
                <Share2 className="w-5 h-5 cursor-pointer" />
              </button>

            </div>
          </div>

          {/* Thumbnail Images */}
          <div className="flex space-x-2 overflow-x-auto">
            {product.images.map((image: string, index: number) => (
            <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`flex-shrink-0 w-20 h-24  overflow-hidden border-2 transition-colors ${
                selectedImageIndex === index
                    ? "border-black"
                    : "border-gray-200 hover:border-gray-300"
                }`}
            >
                <img
                src={image}
                alt={`Product view ${index + 1}`}
                className="w-full h-full object-cover"
                />
            </button>
            ))}

          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          {/* Brand and Title */}
          <div>
            <p className="text-sm uppercase text-gray-600 mb-1">{product.brand} <span className="capitalize">({product.category})</span></p>
            <h1 className="text-2xl mt-4 uppercase lg:text-4xl font-medium text-gray-900">
            {product.name}
            </h1>
        </div>

          {/* Price and Rating */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-lg uppercase text-gray-500 line-through">
                INR {Number(product.currentPrice) + 100}
              </span>
              <span className="text-2xl uppercase font-semibold text-gray-900">
                INR {product.currentPrice}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            {/* Description */}
            <div className="hidden">
              <h3 className="text-[1rem] uppercase font-medium text-gray-900 mb-2">Description:</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {showFullDescription ? product.description : truncatedDescription}
                {product.description.split(" ").length > wordLimit && (
                  <span
                    className="text-black ml-1 cursor-pointer"
                    onClick={() => setShowFullDescription(!showFullDescription)}
                  >
                    {showFullDescription ? "See Less" : "See More..."}
                  </span>
                )}
              </p>
            </div>
            {/* Stock */}
            <div>
              <h3 className="text-[1rem] uppercase font-medium text-gray-900">
                Stock:{" "}
                {product.stockCount > 0 ? (
                  <span className="font-normal">
                    {product.stockCount}{" "}
                    {product.stockCount < 10 && (
                      <span className="text-yellow-600 ml-1 capitalize">(Low stock)</span>
                    )}
                  </span>
                ) : (
                  <span className="text-red-600 font-normal capitalize">Out of stock</span>
                )}
              </h3>
            </div>            
          </div>


          

          {/* Color Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              COLOUR: <span className="font-normal">{selectedColor}</span>
            </h3>
            <div className="flex space-x-3">
              {product.colors.map((color: { name: string; value: string }, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color.name)}
                  className={`
                    relative w-10 h-10 cursor-pointer rounded-3xl transition-colors
                    border-1
                    ${selectedColor === color.name ? "border-[#525252]" : "border-gray-200 hover:border-[#525252]"}
                  `}
                  style={{
                    backgroundColor: color.value,
                    boxShadow: "inset 0 0 0 3px white", // inner border for double border effect
                  }}
                  title={color.name}
                />

                ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-gray-900">
                Size: <span className="font-normal">{selectedSize}</span>
              </h3>

              {/* Check Guide button/link */}
              <button className="text-[0.75rem] text-neutral-500 underline ml-auto hover:text-neutral-800 cursor-pointer">
                Check guide
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size: string) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-[1rem] py-[0.4rem] pb-[0.6rem] border rounded-full text-[0.9rem] font-medium transition-colors cursor-pointer ${
                    selectedSize === size
                      ? "border-[#716a6a] text-[#716a6a]"
                      : "border-gray-300 text-[#716a6a] hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>


          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <button className="w-full bg-black text-white py-3 px-6 font-medium hover:bg-gray-800 transition-colors">
              Add To Cart
            </button>
            <button className="w-full border border-gray-300 text-gray-900 py-3 px-6 font-medium hover:bg-gray-50 transition-colors">
              Checkout Now
            </button>
          </div>

          {/* Delivery Info */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Delivery:</span> T&C
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example product data
const mockProduct = {
  brand: "John Lewis ANYDAY",
  name: "Long Sleeve Overshirt, Khaki",
  category: "Women's Tops",
  currentPrice: "28.00",
  rating: 4.5,
  stockCount: 7,
  description:
    "Cut in a regular fit in a soft jersey silhouette, cotton-stretch mix fabric. Perfect for layering with all-day comfort. Features a classic collar, button-front fastening, long sleeves with buttoned cuffs, and a curved hem. Available in versatile colors to suit any wardrobe.",
  colors: [
    { name: "Royal Brown", value: "#8B6F47" },
    { name: "Light Blue", value: "#87CEEB" },
    { name: "Navy Blue", value: "#4169E1" },
    { name: "Black", value: "#000000" },
  ],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: [
    "/image-5.png",
    "/image-6.png",
    "/image-7.png",
    "/image-8.png",
    "/image-9.png",
    "/image-10.png",
  ],
};

export default function Page() {
  return (
    <>
      <SingleProduct product={mockProduct} />
      <RelatedProducts />
    </>
  );
}
