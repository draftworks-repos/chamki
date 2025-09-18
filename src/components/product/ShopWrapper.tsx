import ShopComponent, { Product } from "./Shop";

// export default async function ShopWrapper() {
  // Uncomment this section to fetch from API
  /*
  let products: Product[] = [];

  try {
    const res = await fetch(`${process.env.SITE_URL}/api/products`, {
      next: { revalidate: 60 } // ISR: revalidate every 60 seconds
    });

    if (res.ok) {
      const json = await res.json();
      products = json.products || [];
    }
  } catch (e) {
    products = [];
  }

  if (!products.length) return null; // fallback if no products
  return <ShopComponent products={products} />;
  */

  // Static products fallback
//   const products: Product[] = [
//   ];

//   return <ShopComponent products={products} />;
// }

export default function ShopWrapper() {
  const products: Product[] = [
    { id: 1, name: "Classic White Shirt", category: "Clothing", price: 1200, image: "/image-5.jpg" },
    { id: 2, name: "Casual Denim Jeans", category: "Clothing", price: 2200, image: "/image-6.jpg" },
    { id: 3, name: "Leather Jacket", category: "Clothing", price: 4500, image: "/image-7.jpeg" },
    { id: 4, name: "Running Sneakers", category: "Shoes", price: 3500, image: "/image-8.jpg" },
  ];

  return <ShopComponent products={products} />;
}
