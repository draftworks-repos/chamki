"use client";

import { useState } from "react";
import styles from "./LatestProducts.module.css";
import { InteractiveHoverButton } from "../ui/InterractiveHoverButton";
import HoverPreviewWrapper from "../ui/HoverPreviewWrapper";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Classic Cotton Kurti",
    image: "/LatesImage-2.jpg",
    hoverImage: "/LatesImage-1.jpg",
    price: 1499,
    currency: "INR",
    category: "Kurtis",
  },
  {
    id: 2,
    title: "Elegant Silk Saree",
    image: "/LatesImage-6.jpg",
    hoverImage: "/LatesImage-5.jpg",
    price: 5999,
    currency: "INR",
    category: "Sarees",
  },
  {
    id: 3,
    title: "Trendy Denim Jacket",
    image: "/LatesImage-4.jpg",
    hoverImage: "/LatesImage-3.jpg",
    price: 2999,
    currency: "INR",
    category: "Jackets",
  },
];


export default function BestSellers() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Latest Products</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <InteractiveHoverButton className="mt-8">
        All Products
      </InteractiveHoverButton>
    </section>
  );
}

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={styles.card}>
      {/* Wrap only the image wrapper */}
      <HoverPreviewWrapper previewImage={product.hoverImage}>
        <div
          className={styles.imageWrapper}
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
      </HoverPreviewWrapper>

      {/* Info stays outside */}
      <div className={styles.info}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.bottomRow}>
          <p className={styles.price}>
            {product.currency} {product.price}{" "}
            <span className={styles.discount}>-10%</span>
          </p>
          <a className={styles.openBtnWrapper} href="#">
            <ArrowRight className={styles.openBtn} size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
