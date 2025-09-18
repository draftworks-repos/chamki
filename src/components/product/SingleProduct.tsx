"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Share2, Heart, Star } from "lucide-react";
import Link from "next/link";
import RelatedProducts from "./RelatedProducts";
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

  const tabs = ["Description", "Details", "Delivery & Return"];
  const [activeTab, setActiveTab] = useState("Description");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const index = tabs.indexOf(activeTab);
    const currentTab = tabRefs.current[index];
    if (currentTab) {
      setIndicatorStyle({ left: currentTab.offsetLeft, width: currentTab.offsetWidth });
    }
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case "Description":
        return (
          <p className="text-gray-700 text-sm">
            This kurti is crafted with premium fabric, offering comfort and style. Perfect for daily wear or special occasions.
          </p>
        );
      case "Details":
        return (
          <p className="text-gray-700 text-sm">
            Material: Cotton Blend. Size: S, M, L, XL. Care Instructions: Hand wash or gentle machine wash.
          </p>
        );
      case "Delivery":
        return (
          <p className="text-gray-700 text-sm">
            Delivery: Estimated within 5-7 business days. T&C apply.
          </p>
        );
      default:
        return null;
    }
  };
  return (
    <div className="max-w-[1300px] mt-32 mb-12 mx-auto p-4 bg-white">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm md:text-base text-gray-500 mb-6 space-x-1 md:space-x-2">
      <Link 
        href="/" 
        className="hover:text-gray-900 transition-colors"
      >
        Homepage
      </Link>

      <ChevronRight className="w-4 h-4 text-gray-400" />

      <Link
        href={`/category/${product.category.toLowerCase().replace(/\s+/g, "-")}`}
        className="hover:text-gray-900 transition-colors"
      >
        {product.category}
      </Link>

      <ChevronRight className="w-4 h-4 text-gray-400" />

      <span className="text-gray-900 font-medium">{product.name}</span>
    </div>


      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8">
        {/* Image Section */}
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          {/* Thumbnails on the left (vertical) */}
          <div className="hidden lg:flex flex-col space-y-3">
            {product.images.map((image: string, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`
                  cursor-pointer w-24 h-24 overflow-hidden border-2 transition-colors 
                  ${selectedImageIndex === index
                    ? "border-black"
                    : "border-gray-200 hover:border-gray-300"
                  }
                `}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Image + stacked images below */}
          <div className="flex-1">
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
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 " />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 " />
              </button>

              {/* Top Right Icons */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  onClick={handleShare}
                  className="bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                >
                  <Share2 className="w-5 h-5 cursor-pointer" />
                </button>
              </div>
            </div>

            {/* Stacked images below main image (not clickable) */}
            <div className="flex flex-col mt-4 space-y-3">
              {product.images.map((image: string, index: number) => (
                <div
                  key={`stacked-${index}`}
                  className="w-full overflow-hidden border-2 border-gray-200 "
                >
                  <img
                    src={image}
                    alt={`Stacked ${index + 1}`}
                    className="w-full h-96 lg:h-[700px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* For smaller screens, show clickable thumbnails below main image */}
          <div className="flex lg:hidden mt-4 space-x-3">
            {product.images.map((image: string, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`
                  cursor-pointer w-20 h-20 overflow-hidden border-2 transition-colors rounded-md
                  ${selectedImageIndex === index
                    ? "border-black"
                    : "border-gray-200 hover:border-gray-300"
                  }
                `}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>



        {/* Product Details */}
        <div className="h-full">
          {/* Brand and Title */}
          <div className="h-fit space-y-6 sticky top-24">
            <div className="space-y-4">
              {/* Brand and Name */}
              <div>
                <p className="text-sm uppercase text-gray-600 mb-1 tracking-wide">
                  {product.brand} <span className="capitalize">({product.category})</span>
                </p>
                <h1 className="text-2xl lg:text-4xl font-medium uppercase text-gray-900 tracking-tight mt-2">
                  {product.name}
                </h1>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center space-x-3">
                  <span className="text-lg uppercase text-gray-500 line-through">
                    INR {Number(product.currentPrice) + 100}
                  </span>
                  <span className="text-2xl md:text-3xl uppercase font-semibold text-gray-900">
                    INR {product.currentPrice}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mt-4">
                {/* Description (hidden for now) */}
                <div className="hidden">
                  <h3 className="text-sm uppercase font-medium text-gray-900 mb-2 tracking-wide">
                    Description:
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {showFullDescription ? product.description : truncatedDescription}
                    {product.description.split(" ").length > wordLimit && (
                      <span
                        className="text-gray-900 ml-1 cursor-pointer font-medium hover:text-[#CC007E] transition-colors"
                        onClick={() => setShowFullDescription(!showFullDescription)}
                      >
                        {showFullDescription ? "See Less" : "See More..."}
                      </span>
                    )}
                  </p>
                </div>

                {/* Stock */}
                <div>
                  <h3 className="text-sm uppercase font-medium text-gray-900 tracking-wide">
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
            </div>

            {/* Color Selection */}
            <div className="mt-6">
              <h3 className="text-sm md:text-sm uppercase font-medium text-gray-900 mb-3 tracking-wide">
                COLOUR: <span className="font-normal">{selectedColor}</span>
              </h3>

              <div className="flex space-x-3">
                {product.colors.map((color: { name: string; value: string }, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color.name)}
                    title={color.name}
                    className={`
                      relative w-10 h-10 cursor-pointer rounded-full transition-all
                      border
                      ${selectedColor === color.name 
                        ? "border-gray-900" 
                        : "border-gray-200 hover:border-gray-900"}
                    `}
                    style={{
                      backgroundColor: color.value,
                      boxShadow: "inset 0 0 0 2px white", // inner border for subtle separation
                    }}
                  />
                ))}
              </div>
            </div>


            {/* Size Selection */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm md:text-base uppercase font-medium text-gray-900 tracking-wide">
                  Size: <span className="font-normal">{selectedSize}</span>
                </h3>

                {/* Check Guide button/link */}
                <button className="text-xs md:text-sm text-gray-500 hover:text-gray-800 underline cursor-pointer transition-colors">
                  Check guide
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size: string) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      px-4 py-1 border rounded-full text-sm md:text-base font-medium transition-colors cursor-pointer
                      ${selectedSize === size
                        ? "border-gray-900 text-gray-900"
                        : "border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900"
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 text-sm md:text-base">
              <button className="flex-1 bg-black text-white py-3 font-medium rounded-full cursor-pointer border border-black transition-colors duration-300 ease-in-out hover:bg-white hover:text-black">
                Add To Cart
              </button>

              <button className="flex-1 bg-black text-white py-3 font-medium rounded-full cursor-pointer border border-black transition-colors duration-300 ease-in-out hover:bg-white hover:text-black">
                Checkout Now
              </button>
            </div>



            {/* Delivery Info */}
            <div className="pt-4 border-t border-gray-200">
              {/* Tabs */}
              <div className="relative flex bg-gray-100 rounded-full p-1 mb-4">
                {/* Sliding Indicator */}
                <span
                  className="absolute top-0 left-0 h-full bg-black rounded-full shadow transition-all duration-300 ease-in-out"
                  style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
                />

                {tabs.map((tab, idx) => (
                  <button
                    key={tab}
                    ref={(el) => {
                      tabRefs.current[idx] = el;
                    }}
                    onClick={() => setActiveTab(tab)}
                    className={`
                      relative z-10 flex-1 text-center py-2 px-2 text-sm md:text-base font-medium cursor-pointer transition-colors duration-300 ease-in-out
                      ${activeTab === tab ? "text-white" : "text-gray-600 hover:text-gray-900"}
                    `}
                  >
                    {tab}
                  </button>
                ))}
              </div>


              {/* Tab Content */}
              <div className="bg-gray-50 rounded-xl p-6 md:p-8 text-gray-700 text-sm md:text-base leading-relaxed">
                {activeTab === "Description" && (
                  <p className="text-gray-800">
                    This kurti is a perfect blend of comfort and elegance, designed to suit both everyday wear and festive gatherings. Crafted from soft, breathable fabric, it drapes beautifully while offering lasting comfort. The versatile design allows easy pairing with leggings, palazzos, or jeans. Whether at work, family events, or casual outings, this kurti adds a refined and contemporary charm to your wardrobe essentials.
                  </p>
                )}

                {activeTab === "Details" && (
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><span className="font-medium text-gray-900">Fabric:</span> Premium Cotton Blend</li>
                    <li><span className="font-medium text-gray-900">Pattern:</span> Subtle Hand-Block Print</li>
                    <li><span className="font-medium text-gray-900">Neckline:</span> Round Neck with Keyhole</li>
                    <li><span className="font-medium text-gray-900">Sleeves:</span> 3/4th Sleeves</li>
                    <li><span className="font-medium text-gray-900">Length:</span> Knee Length</li>
                    <li><span className="font-medium text-gray-900">Fit:</span> Regular Comfort Fit</li>
                  </ul>
                )}

                {activeTab === "Delivery & Return" && (
                  <div className="space-y-5 text-gray-700">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Delivery</h4>
                      <p className="leading-relaxed">
                        Orders are shipped within <span className="font-semibold">6–7 business days</span> across India. Any unexpected delay will be communicated via email. Free shipping is available on all domestic orders above <span className="font-semibold">5000 INR</span>.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Return Policy</h4>
                      <p className="leading-relaxed">
                        Returns are accepted within <span className="font-semibold">7 days</span> of delivery, provided the product is unused and in original packaging. Refunds are processed after quality inspection. Note: customized or sale items are not eligible for return. For return requests, please contact our customer support team.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
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
    "/image-5.jpg",
    "/image-6.jpg",
    "/image-7.jpeg",
    "/image-8.jpg",
    "/image-9.jpg",
    "/image-10.jpg",
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
