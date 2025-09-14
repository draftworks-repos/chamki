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
          <div className="grid grid-cols-3 gap-3">
            {product.images.map((image: string, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`cursor-pointer w-full h-[300px] overflow-hidden border-2 transition-colors ${
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
        <div className="h-full">
          {/* Brand and Title */}
          <div className="h-fit space-y-6 sticky top-24">
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
              <h3 className="text-[1rem] uppercase font-medium text-gray-900 mb-4">
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
                <h3 className="text-[1rem] uppercase font-medium text-gray-900">
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
            <div className="space-x-3 flex flex-row pt-4 text-[0.9rem]">
              <button className="w-full bg-black text-white py-3  font-medium rounded-full cursor-pointer transition-colors duration-300 ease-in-out hover:bg-white hover:text-black border border-black">
                Add To Cart
              </button>
              <button className="w-full bg-black text-white py-3 font-medium rounded-full cursor-pointer transition-colors duration-300 ease-in-out hover:bg-white hover:text-black border border-black">
                Checkout Now
              </button>
            </div>


            {/* Delivery Info */}
            <div className="pt-4 border-t border-gray-200">
              {/* Tabs */}
              <div className="relative flex bg-gray-100 rounded-full p-1 mb-4">
                {/* Sliding Indicator */}
                <span
                  className="absolute top-0 left-0 h-full bg-black rounded-full shadow-md transition-all duration-300"
                  style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
                />

                {tabs.map((tab, idx) => (
                  <button
                    key={tab}
                    ref={(el) => {
                      tabRefs.current[idx] = el;
                    }}
                    onClick={() => setActiveTab(tab)}
                    className={`relative z-10 flex-1 text-center py-2 px-4 text-sm font-medium cursor-pointer transition-colors duration-300 ${
                      activeTab === tab ? "text-white" : "text-gray-600"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="bg-gray-100 rounded-xl p-4 shadow-inner text-gray-700 text-sm leading-relaxed">
                {activeTab === "Description" && (
                  <p>
                    This kurti is a perfect mix of comfort and elegance, designed to suit 
                    everyday wear as well as festive gatherings. Crafted from soft, breathable 
                    fabric, it drapes beautifully while offering lasting comfort. The versatile 
                    design makes it easy to pair with leggings, palazzos, or jeans. Whether at 
                    work, family events, or casual outings, this kurti adds a refined and 
                    contemporary charm to your wardrobe essentials.
                  </p>
                )}

                {activeTab === "Details" && (
                  <ul className="list-disc pl-5 space-y-1">
                    <li><span className="font-medium">Fabric:</span> Premium Cotton Blend</li>
                    <li><span className="font-medium">Pattern:</span> Subtle Hand-Block Print</li>
                    <li><span className="font-medium">Neckline:</span> Round Neck with Keyhole</li>
                    <li><span className="font-medium">Sleeves:</span> 3/4th Sleeves</li>
                    <li><span className="font-medium">Length:</span> Knee Length</li>
                    <li><span className="font-medium">Fit:</span> Regular Comfort Fit</li>
                  </ul>
                )}

                {activeTab === "Delivery & Return" && (
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-800">Delivery</h4>
                      <p>
                        Orders are shipped within <span className="font-semibold">6–7 business days</span> 
                        across India. Any unexpected delay will be communicated via e-mail.  
                        Free shipping is available on all domestic orders above 
                        <span className="font-semibold"> 5000 INR</span>.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-800">Return Policy</h4>
                      <p>
                        Returns are accepted within <span className="font-semibold">7 days</span> of delivery, 
                        provided the product is unused and in original packaging. Refunds are processed after 
                        quality inspection. Please note: customized or sale items are not eligible for return.  
                        For return requests, contact our customer support team.
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
