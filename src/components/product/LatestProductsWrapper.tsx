import LatestProducts from "./LatestProducts";

interface Product {
  id: number;
  title: string;
  image: string;
  hoverImage: string;
  price: number;
  currency: string;
  category: string;
}

// export default async function LatestProductsWrapper() {
//   let products: Product[] = [];

//   try {
//     const res = await fetch(`${process.env.SITE_URL}/api/latest-products`, {
//       next: { revalidate: 60 }
//     });


//     if (res.ok) {
//       const json = await res.json();
//       products = json.products || [];
//     }
//   } catch (e) {
//     products = [];
//   }

//   if (!products.length) return null; // fallback

//   return <LatestProducts products={products} />;
// }
export default  function LatestProductsWrapper() {
    const products = [
        { id: 1, title: "Classic Cotton Kurti", image: "/LatesImage-2.jpg", hoverImage: "/LatesImage-1.jpg", price: 1499, currency: "INR", category: "Kurtis" },
        { id: 2, title: "Elegant Silk Saree", image: "/LatesImage-6.jpg", hoverImage: "/LatesImage-5.jpg", price: 5999, currency: "INR", category: "Sarees" },
        { id: 3, title: "Trendy Denim Jacket", image: "/LatesImage-4.jpg", hoverImage: "/LatesImage-3.jpg", price: 2999, currency: "INR", category: "Jackets" },
        { id: 4, title: "Classic Cotton Kurti", image: "/LatesImage-2.jpg", hoverImage: "/LatesImage-1.jpg", price: 1499, currency: "INR", category: "Kurtis" }]

  return <LatestProducts products={products} />;
}
