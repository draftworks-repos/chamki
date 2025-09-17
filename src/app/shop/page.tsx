"use client"
import { useState } from "react";
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Classic White Shirt",
    category: "Clothing",
    price: 1200,
    image: "/image-5.jpg",
  },
  {
    id: 2,
    name: "Casual Denim Jeans",
    category: "Clothing",
    price: 2200,
    image: "/image-6.jpg",
  },
  {
    id: 3,
    name: "Leather Jacket",
    category: "Clothing",
    price: 4500,
    image: "/image-7.jpeg",
  },
  {
    id: 4,
    name: "Running Sneakers",
    category: "Shoes",
    price: 3500,
    image: "/image-8.jpg",
  },
  {
    id: 5,
    name: "Classic White Shirt",
    category: "Clothing",
    price: 1200,
    image: "/image-5.jpg",
  },
  {
    id: 6,
    name: "Casual Denim Jeans",
    category: "Clothing",
    price: 2200,
    image: "/image-6.jpg",
  },
];

export default function Shop() {
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
    <div className="max-w-[1250px] mx-auto px-4 mt-47">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center mb-8">OUR COLLECTION</h1>

      

     {/* Filters */}
      <div className="flex justify-between items-center pb-8 mt-10 mb-10">
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

        {/* Category Filter (Left) */}
        <form className="max-w-sm">
          <label htmlFor="category_filter" className="sr-only">Category</label>
          <select
            id="category_filter"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 
                      border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 
                      focus:border-gray-400 peer"
          >
            <option value="All">All Categories</option>
            <option value="Clothing">Clothing</option>
            <option value="Shoes">Shoes</option>
          </select>
        </form>

        {/* Price Filter (Right) */}
        <form className="max-w-sm">
          <label htmlFor="price_filter" className="sr-only">Sort by</label>
          <select
            id="price_filter"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 
                      border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 
                      focus:border-gray-400 peer"
          >
            <option value="">Sort by</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </form>
      </div>


      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-16">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group">
            {/* Product Image */}
            <div className="overflow-hidden relative">
              <Link href="#" >
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
                <Link href="#" >
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
