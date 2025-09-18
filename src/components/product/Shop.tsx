"use client";
import { useState } from "react";
import Link from "next/link";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

interface ShopProps {
  products: Product[];
}

export default function Shop({ products }: ShopProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) =>
      category === "All" ? true : product.category === category
    )
    .sort((a, b) =>
      sort === "low-high"
        ? a.price - b.price
        : sort === "high-low"
        ? b.price - a.price
        : 0
    );

  return (
    <div className="max-w-[1250px] mx-auto px-4 mt-42">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center mb-8">OUR COLLECTION</h1>

      {/* Filters */}
<div className="flex flex-col sm:flex-row justify-between items-center pb-4 mt-10 gap-4">
  {/* Search */}
  <div className="relative w-full sm:w-1/3">
    <input
      type="text"
      className="p-2 pl-8 pr-32 border border-gray-300 bg-gray-100 focus:outline-none focus:border-gray-600 focus:shadow-inner w-full"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <svg
      className="w-4 h-4 absolute left-2.5 top-3.5 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  </div>

  {/* Category & Sort & Extra Filters */}
  <div className="flex flex-wrap gap-4 w-full sm:w-auto">
    {/* Category */}
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="bg-gray-100 border border-gray-300 focus:border-gray-600 focus:shadow-inner p-2 cursor-pointer appearance-none w-full sm:w-40"
    >
      <option value="All">Categories</option>
      <option value="Kurti">Kurti</option>
      <option value="Jeans">Jeans</option>
      <option value="Hoodie">Hoodie</option>
    </select>

    {/* Sort */}
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      className="bg-gray-100 border border-gray-300 focus:border-gray-600 focus:shadow-inner p-2 cursor-pointer appearance-none w-full sm:w-40"
    >
      <option value="">Sort by</option>
      <option value="low-high">Price: Low to High</option>
      <option value="high-low">Price: High to Low</option>
    </select>

    {/* Price Range */}
    <select
      value={""}
      onChange={() => {}}
      className="bg-gray-100 border border-gray-300 focus:border-gray-600 focus:shadow-inner p-2 cursor-pointer appearance-none w-full sm:w-40"
    >
      <option value="">Price Range</option>
      <option value="0-500">0 - 500</option>
      <option value="501-1000">501 - 1000</option>
      <option value="1001-2000">1001 - 2000</option>
    </select>

    {/* Color Filter */}
    <select
      value={""}
      onChange={() => {}}
      className="bg-gray-100 border border-gray-300 focus:border-gray-600 focus:shadow-inner p-2 cursor-pointer appearance-none w-full sm:w-40"
    >
      <option value="">Color</option>
      <option value="Red">Red</option>
      <option value="Blue">Blue</option>
      <option value="Green">Green</option>
      <option value="Black">Black</option>
    </select>
  </div>
</div>


      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-16">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group">
            {/* Product Image */}
            <div className="overflow-hidden relative">
              <Link href="#">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[600px] object-cover"
                />
              </Link>

              {/* Hover Cart Icon */}
              <Link href="#" className="absolute w-full px-4 bottom-4 flex justify-center">
                <button
                  className="w-full p-2 rounded-full bg-black text-white text-center
                    border border-transparent cursor-pointer
                    opacity-0 group-hover:opacity-100 
                    transition-all duration-300
                    hover:bg-white hover:text-black hover:border-black"
                >
                  Add to cart
                </button>
              </Link>
            </div>

            {/* Product Details */}
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <Link href="#">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                </Link>
                <span className="text-sm text-gray-500">{product.category}</span>
              </div>
              <p className="text-sm text-gray-700">INR {product.price}.00</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
