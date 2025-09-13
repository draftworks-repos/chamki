import React, { useState } from "react";
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
  originalPrice: string;
  rating: number;
  reviewCount: string;
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative">
            <img
              src={product.images[selectedImageIndex]}
              alt={product.name}
              className="w-full h-96 lg:h-[600px] object-cover"
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Top Right Icons */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <button className="bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors">
                <Heart className="w-5 h-5" />
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
            <p className="text-sm text-gray-600 mb-1">{product.brand}</p>
            <h1 className="text-2xl lg:text-3xl font-medium text-gray-900">
            {product.name}
            </h1>
        </div>

          {/* Price and Rating */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-lg text-gray-500 line-through">
                {product.originalPrice}
              </span>
              <span className="text-2xl font-semibold text-gray-900">
                {product.currentPrice}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">{product.reviewCount}</span>
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 text-sm font-medium">{product.rating}</span>
              </div>
            </div>
          </div>

          {/* Category */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">
                Category: <span className="font-normal">{product.category}</span>
            </h3>
          </div>


          {/* Description */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Description:</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description}
              <button className="text-black underline ml-1">See More...</button>
            </p>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              Colour: <span className="font-normal">{selectedColor}</span>
            </h3>
            <div className="flex space-x-3">
              {product.colors.map((color: { name: string; value: string }, index: number) => (
                <button
                    key={index}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border-2 transition-colors ${
                    selectedColor === color.name
                        ? "border-black"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    style={{ backgroundColor: color.value }}
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
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size: string) => (
                <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-full text-sm font-medium transition-colors ${
                    selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 bg-white text-gray-900 hover:border-gray-400"
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
  currentPrice: "₹28.00",
  originalPrice: "₹40.00",
  rating: 4.5,
  reviewCount: "1,236 In Stock",
  description:
    "Cut in a regular fit in a soft jersey silhouette, cotton-stretch mix fabric. Perfect for layering with all-day comfort.",
  colors: [
    { name: "Royal Brown", value: "#8B6F47" },
    { name: "Light Blue", value: "#87CEEB" },
    { name: "Navy Blue", value: "#4169E1" },
    { name: "Black", value: "#000000" },
  ],
  sizes: ["S", "M", "L", "XL", "XXL"],
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
