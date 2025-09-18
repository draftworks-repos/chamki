// "use client";

// import { useState } from "react";
// import styles from "./LatestProducts.module.css";
// import { InteractiveHoverButton } from "../ui/InterractiveHoverButton";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// const products = [
//   { id: 1, title: "Classic Cotton Kurti", image: "/LatesImage-2.jpg", hoverImage: "/LatesImage-1.jpg", price: 1499, currency: "INR", category: "Kurtis" },
//   { id: 2, title: "Elegant Silk Saree", image: "/LatesImage-6.jpg", hoverImage: "/LatesImage-5.jpg", price: 5999, currency: "INR", category: "Sarees" },
//   { id: 3, title: "Trendy Denim Jacket", image: "/LatesImage-4.jpg", hoverImage: "/LatesImage-3.jpg", price: 2999, currency: "INR", category: "Jackets" },
// ];

// export default function LatestProducts() {
//   return (
//     <section className={styles.section}>
//       <h2 className={styles.heading}>Latest Products</h2>
//       <div className={styles.grid}>
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//       <InteractiveHoverButton className="mt-8">All Products</InteractiveHoverButton>
//     </section>
//   );
// }

// function ProductCard({ product }: { product: (typeof products)[0] }) {
//   const [hovered, setHovered] = useState(false);      // image hover
//   const [cardHovered, setCardHovered] = useState(false); // card hover

//   return (
//    <div
//   className={styles.card}
//   onMouseEnter={() => {
//     setCardHovered(true);
//     setHovered(true);  // start image hover when card is hovered
//   }}
//   onMouseLeave={() => {
//     setCardHovered(false);
//     setHovered(false); // revert image when leaving card
//   }}
// >
//   <Link href={`/product/${product.id}`} className={styles.imageLink}>
//     <div className={styles.imageWrapper}>
//       <img
//         src={product.image}
//         alt={product.title}
//         className={`${styles.image} ${hovered ? styles.fadeOut : styles.fadeIn}`}
//       />
//       <img
//         src={product.hoverImage}
//         alt={product.title}
//         className={`${styles.image} ${hovered ? styles.fadeIn : styles.fadeOut}`}
//       />
//     </div>
//   </Link>

//   {/* Buttons over image */}
//   <div className={`${styles.actionButtons} ${cardHovered ? styles.showButtons : ""}`}>
//     <button className={styles.actionBtn}>
//       <img src="/plus.svg" alt="Add to Cart" className={styles.icon} />
//       <span className={styles.btnText}>Add to Cart</span>
//     </button>
//   </div>

//   {/* Info section */}
//   <div className={styles.info}>
//     <div className={styles.titleWrapper}>
//       <h3 className={styles.title}>{product.title}</h3>
//       <span className={styles.category}>{product.category}</span>
//     </div>
//     <div className={styles.bottomRow}>
//       <p className={styles.price}>
//         <span className={styles.originalPrice}>
//           {product.currency} {(product.price * 1.1).toFixed(0)}
//         </span>{" "}
//         <span className={styles.discountedPrice}>
//           {product.currency} {product.price}
//           <span className={styles.discount}>-10%</span>
//         </span>
//       </p>
//       <Link className={styles.openBtnWrapper} href={`/product/${product.id}`}>
//         <ArrowRight className={styles.openBtn} size={14} />
//       </Link>
//     </div>
//   </div>
// </div>

//   );
// }


"use client";

import { useState } from "react";
import styles from "./LatestProducts.module.css";
import { InteractiveHoverButton } from "../ui/InterractiveHoverButton";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  image: string;
  hoverImage: string;
  price: number;
  currency: string;
  category: string;
}

interface LatestProductsProps {
  products: Product[];
}

export default function LatestProducts({ products }: LatestProductsProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Fresh Arrivals</h2>
      <p className={styles.desc}>
        Step into the season with our latest collection — curated pieces designed 
        to keep your style sharp and effortless.
      </p>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <InteractiveHoverButton className="mt-8">All Products</InteractiveHoverButton>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);
  const [cardHovered, setCardHovered] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => {
        setCardHovered(true);
        setHovered(true);
      }}
      onMouseLeave={() => {
        setCardHovered(false);
        setHovered(false);
      }}
    >
      <Link href={`/product/${product.id}`} className={styles.imageLink}>
        <div className={styles.imageWrapper}>
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
      </Link>

      <div className={`${styles.actionButtons} ${cardHovered ? styles.showButtons : ""}`}>
        <button className={styles.actionBtn}>
          <img src="/plus.svg" alt="Add to Cart" className={styles.icon} />
          <span className={styles.btnText}>Add to Cart</span>
        </button>
      </div>

      <div className={styles.info}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>{product.title}</h3>
          <span className={styles.category}>{product.category}</span>
        </div>
        <div className={styles.bottomRow}>
          <p className={styles.price}>
            <span className={styles.originalPrice}>
              {product.currency} {(product.price * 1.1).toFixed(0)}
            </span>{" "}
            <span className={styles.discountedPrice}>
              {product.currency} {product.price}
              <span className={styles.discount}>-10%</span>
            </span>
          </p>
          <Link className={styles.openBtnWrapper} href={`/product/${product.id}`}>
            <ArrowRight className={styles.openBtn} size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
