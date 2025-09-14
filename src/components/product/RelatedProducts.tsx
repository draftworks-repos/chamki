"use client";

import { useState } from "react";
import styles from "./LatestProducts.module.css";
import extraStyles from "./RelatedProducts.module.css";
import { ArrowRight } from "lucide-react";

type RelatedProduct = {
  id: number;
  title: string;
  image: string;
  hoverImage: string;
  price: number;
  currency: string;
  category: string;
  slug: string;
};

const relatedProducts: RelatedProduct[] = [
  {
    id: 1,
    title: "Classic Cotton Kurti",
    image: "/LatesImage-2.jpg",
    hoverImage: "/LatesImage-1.jpg",
    price: 1299,
    currency: "INR",
    category: "Kurtis",
    slug: "floral-print-kurti",
  },
  {
    id: 2,
    title: "Elegant Silk Saree",
    image: "/LatesImage-6.jpg",
    hoverImage: "/LatesImage-5.jpg",
    price: 4499,
    currency: "INR",
    category: "Sarees",
    slug: "georgette-saree",
  },
  {
    id: 3,
    title: "Trendy Denim Jacket",
    image: "/LatesImage-4.jpg",
    hoverImage: "/LatesImage-3.jpg",
    price: 3599,
    currency: "INR",
    category: "Accessories",
    slug: "leather-handbag",
  },
  {
    id: 4,
    title: "Classic Cotton Kurti",
    image: "/LatesImage-2.jpg",
    hoverImage: "/LatesImage-1.jpg",
    price: 4999,
    currency: "INR",
    category: "Kurtis",
    slug: "embroidered-anarkali",
  },
  {
    id: 5,
    title: "Elegant Silk Saree",
    image: "/LatesImage-6.jpg",
    hoverImage: "/LatesImage-5.jpg",
    price: 2299,
    currency: "INR",
    category: "Jeans",
    slug: "casual-denim-jeans",
  },
];

export default function RelatedProducts() {
  return (
    <section className={styles.section}>
      <h2 className={extraStyles.heading}>Related Products</h2>
      <div className={extraStyles.grid}>
        {/* ✅ limit to 6 products */}
        {relatedProducts.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: RelatedProduct }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={styles.card}>
        <div
          className={styles.imageWrapper}
          style={{ paddingTop: "100%" }} // 4:5 aspect ratio
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={product.image}
            alt={product.title}
            className={`${styles.image} ${hovered ? styles.fadeOut : styles.fadeIn}`}
          />
          <img
            src={product.hoverImage}
            alt={product.title}
            className={`${styles.image} ${hovered ? styles.fadeIn : styles.fadeOut}`}
          />
        </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.bottomRow}>
          <p className={styles.price}>
            {product.currency} {product.price}
          </p>
          <a className={styles.openBtnWrapper} href={`/product/${product.slug}`}>
            <ArrowRight className={styles.openBtn} size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
