"use client"
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Classic White Shirt",
    category: "Clothing",
    price: 1200,
    image: "/image-5.png",
  },
  {
    id: 2,
    name: "Casual Denim Jeans",
    category: "Clothing",
    price: 2200,
    image: "/image-5.png",
  },
  {
    id: 3,
    name: "Leather Jacket",
    category: "Clothing",
    price: 4500,
    image: "/image-5.png",
  },
  {
    id: 4,
    name: "Running Sneakers",
    category: "Shoes",
    price: 3500,
    image: "/image-5.png",
  },
];

export default function ShopPage() {
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
    <div className="max-w-[1150px] mx-auto px-4 mt-24">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8">Our Collection</h1>

      {/* Search */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="w-96 border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Filters */}
      <div className="flex justify-between items-center pb-8 border-b border-gray-200 mt-10 mb-10">
        {/* Category Filter (Left) */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
        >
          <option value="All">All Categories</option>
          <option value="Clothing">Clothing</option>
          <option value="Shoes">Shoes</option>
        </select>

        {/* Price Filter (Right) */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
        >
          <option value="">Sort by</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="relative group">
            {/* Product Image */}
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Hover Cart Icon */}
            <button className="absolute top-4 right-4 bg-white p-2 opacity-0 group-hover:opacity-100 transition">
              <ShoppingCart className="w-5 h-5 text-black" />
            </button>

            {/* Product Details */}
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <span className="text-sm text-gray-500">{product.category}</span>
              </div>
              <p className="text-gray-700">INR {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
