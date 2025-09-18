import ProductShowcaseClient, { Product } from "./ProductShowcaseClient";

export const revalidate = 60; // ISR: regenerate page every 60 seconds

// export default async function ProductShowcaseWrapper() {
//   let products: Product[] = [];

//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products`, {
//       next: { revalidate: 60 },
//     });

//     if (res.ok) {
//       const json = await res.json();
//       products = json.products || [];
//     }
//   } catch {
//     products = [];
//   }

//   if (!products.length) return null; // fallback

//   return <ProductShowcaseClient products={products} />;
// }

export default function ProductShowcaseWrapper() {
    const products = [
  {
    id: 'kurti-sleeveless',
    header: 'Women Clothing',
    title: 'Sleeveless Kurti',
    subtitle: '₹ 1,299',
    contentTitle: 'Lightweight cotton kurti with sleeveless design.',
    contentSubtitle: 'Ideal for summer wear, with subtle embroidery on the neckline.',
    bottleBg: '/image-10.jpg',
    bottleImg: '#'
  },
  {
    id: 'kurti-anarkali',
    header: 'Women Clothing',
    title: 'Anarkali Kurti',
    subtitle: '₹ 1,899',
    contentTitle: 'Flared Anarkali style kurti in rayon fabric.',
    contentSubtitle: 'Perfect for festive occasions with rich printed patterns.',
    bottleBg: '/image-9.jpg',
    bottleImg: '#'
  },
  {
    id: 'saree-silk',
    header: 'Women Clothing',
    title: 'Silk Saree',
    subtitle: '₹ 2,999',
    contentTitle: 'Traditional pure silk saree with zari border.',
    contentSubtitle: 'Elegant drape suitable for weddings and special occasions.',
    bottleBg: '/image-10.jpg',
    bottleImg: '#'
  },
  {
    id: 'shirt-formal',
    header: 'Men Clothing',
    title: 'Formal Shirt',
    subtitle: '₹ 1,499',
    contentTitle: 'Slim-fit cotton formal shirt.',
    contentSubtitle: 'Available in pastel shades, ideal for office & meetings.',
    bottleBg: '/image-8.jpg',
    bottleImg: '#'
  },
  {
    id: 'jeans-slimfit',
    header: 'Men Clothing',
    title: 'Slim Fit Jeans',
    subtitle: '₹ 2,199',
    contentTitle: 'Stretchable denim jeans with a modern slim fit.',
    contentSubtitle: 'Comfortable for daily wear with durable stitching.',
    bottleBg: '/image-12.jpg',
    bottleImg: '#'
  },
  {
    id: 'hoodie-oversized',
    header: 'Unisex Clothing',
    title: 'Oversized Hoodie',
    subtitle: '₹ 1,799',
    contentTitle: 'Casual fleece-lined oversized hoodie.',
    contentSubtitle: 'Trendy unisex design, cozy for winters.',
    bottleBg: '/image-5.jpg',
    bottleImg: '#'
  },
];

  return <ProductShowcaseClient products={products} />;
}
