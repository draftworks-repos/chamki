// "use client";

// import { useState } from "react";
// import styles from "./ProductShowcase.module.css";

// const products = [
//   {
//     id: 1,
//     title: "Bayleaf Green Cord Set",
//     price: "₹3,495.00",
//     image: "/image-6.png",
//     thumb: "/image-6.png",
//     soldOut: true,
//   },
//   {
//     id: 2,
//     title: "Classic Black Kurta",
//     price: "₹2,999.00",
//     image: "/image-7.png",
//     thumb: "/image-7.png",
//     soldOut: false,
//   },
//   {
//     id: 3,
//     title: "Floral Cotton Dress",
//     price: "₹1,899.00",
//     image: "/image-5.png",
//     thumb: "/image-5.png",
//     soldOut: false,
//   },
// ];

// export default function ProductShowcase() {
//   const [index, setIndex] = useState(0);

//   const nextProduct = () => {
//     setIndex((prev) => (prev + 1) % products.length);
//   };

//   const product = products[index];

//   return (
//     <section className={styles.showcase}>
//       {/* Left: Main image */}
//       <div className={styles.mainImageWrapper}>
//         <img
//           key={product.id}
//           src={product.image}
//           alt={product.title}
//           className={styles.mainImage}
//         />
//       </div>

//       {/* Right: Info Panel */}
//       <div className={styles.infoPanel}>
//         {product.soldOut && <span className={styles.soldOut}>SOLD OUT</span>}
//         <div className={styles.thumbWrapper}>
//           <img
//             key={product.id}
//             src={product.thumb}
//             alt={product.title}
//             className={styles.thumb}
//           />
//         </div>
//         <h3 className={styles.title}>{product.title}</h3>
//         <p className={styles.price}>{product.price}</p>
//         <div className={styles.buttons}>
//           <button className={styles.viewBtn}>VIEW PRODUCT</button>
//           <button className={styles.nextBtn} onClick={nextProduct}>
//             NEXT →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState } from "react";

export interface Product {
  id: string;
  header: string;
  title: string;
  subtitle: string;
  contentTitle: string;
  contentSubtitle: string;
  bottleBg: string;
  bottleImg: string;
}

interface ProductShowcaseProps {
  products: Product[];
}

const ProductShowcaseClient: React.FC<ProductShowcaseProps> = ({ products }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNext = () => setCurrentSlideIndex((prev) => (prev + 1) % products.length);
  const handlePrev = () => setCurrentSlideIndex((prev) => (prev - 1 + products.length) % products.length);

  return (
    <div className="body" data-sld={currentSlideIndex}>
      <style>{`
        /* Scoped CSS variables and styles for the component */
        .body {
          --body-color: #262626;
          --savanna-bg: #262626;
          --beach-bg: #262626;
          --glacier-bg: #262626;
          --coral-bg: #262626;
          --arrow-fill: #262626;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 5rem 0;
        }


        .body a {
          text-decoration: none;
          color: #262626;
        }

        .body h1, .body h2, .body h3 {
          margin: 0;
        }
        
        .container {
          max-width: 1000px;
          border-radius: 4px;
          max-height: 680px;
          height: 60vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          scroll-behavior: smooth;
          background-color: #fbf9f7;
          padding: 0 30px;
          overflow-y: auto;
          overflow-x: hidden;
          position: relative;
        }

        .left-side {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          max-width: 350px;
          margin-right: 40px;
        }

        .mySwiper {
          display: flex;
          flex-grow: 1;
          position: relative;
          overflow: hidden;
        }

        .main-wrapper.swiper-wrapper {
          display: flex;
          width: 100%;
          height: 100%;
        }

        .main.swiper-slide {
          padding: 42px 0 30px;
          display: flex;
          flex-grow: 1;
          position: relative;
          width: 100%;
          flex-shrink: 0;
          transition: opacity 0.4s ease-in-out;
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
        }

        .swiper-slide-active {
          opacity: 1 !important;
          z-index: 1;
        }

        .main-header {
          color: #cc007e;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 4px;
          font-weight: 600;
          transition-delay: 0.2s;
        }

        .main-title {
          font-size: 100px;
          font-weight: 400;
          margin-top: 10px;
          line-height: 1em;
          transition-delay: 0.3s;
        }

        .main-subtitle {
          color: #cc007e;
          font-weight: 400;
          font-size: 32px;
          margin-top: 14px;
          margin-bottom: 60px;
          transition-delay: 0.4s;
        }

        .main-content__title {
          font-size: 26px;
          font-style: italic;
          margin-bottom: 14px;
          transition-delay: 0.2s;
        }

        .main-content__subtitle {
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 24px;
          letter-spacing: -0.01em;
          transition-delay: 0.3s;
        }

        .more-menu {
          color: #cc007e;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition-delay: 0.4s;
        }

        .more-menu svg {
          width: 28px;
          height: 18px;
          margin-left: 10px;
        }

        .center {
          display: flex;
          margin-left: 120px;
          position: relative;
          flex-shrink: 0;
        }

        .bottle-bg {
          width: 320px;
          height: 450px;
          object-fit: cover;
          border-radius: 160px;
          transition: all 0.6s;
          opacity: 0;
          object-position: 60%;
        }

        .bottle-img {
          position: absolute;
          top: 25%;
          left: 0;
          transform: scale(1.2);
          opacity: 0;
          transition: all 0.8s;
        }

        .swiper-slide-active .bottle-bg {
          opacity: 1;
          transform: none;
          object-position: 50%;
        }

        .swiper-slide-active .bottle-img {
          opacity: 1;
          transform: scale(1.6);
        }
        
        .swiper-slide .main-wrapper > *,
        .swiper-slide .main-content > * {
          transform: translateY(-30px);
          opacity: 0;
          transition-duration: 0.8s;
        }

        .swiper-slide-active .main-wrapper > *,
        .swiper-slide-active .main-content > * {
          transform: none;
          opacity: 1;
        }


        .button-wrapper {
          position: absolute;
          right: 30px;
          bottom: 20px;
          z-index: 1;
          display: flex;
          align-items: center;
        }

        .button-wrapper svg {
          width: 28px;
        }

        .swiper-button {
          border: 1px solid var(--body-color);
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to right, var(--body-color) 40%, transparent 0%);
          background-size: 200% 100%;
          background-position: right bottom;
          transition: all 0.3s ease-out;
          cursor: pointer;
        }

        .swiper-button + .swiper-button {
          margin-left: 16px;
        }

        .swiper-button:hover {
          background-color: var(--body-color);
          background-position: left bottom;
        }

        .swiper-button:hover svg {
          stroke: #fff;
        }

        .swiper-prev-button {
          background: linear-gradient(to left, var(--body-color) 40%, transparent 0%);
          background-size: 200% 100%;
          background-position: left bottom;
          transition: all 0.3s ease-out;
        }

        .swiper-prev-button svg {
          transform: rotate(-180deg);
        }

        .swiper-prev-button:hover {
          background-position: right bottom;
        }

        .swiper-pagination {
          position: absolute;
          right: 30px;
          left: auto;
          top: 50px;
          width: auto;
          bottom: auto;
          z-index: 2;
          font-size: 14px;
          font-weight: 500;
        }

        [data-sld="0"] .container { background-color: #ffffff; }
        [data-sld="1"] .container { background-color: #ffffff; }
        [data-sld="2"] .container { background-color: #ffffff; }
        [data-sld="3"] .container { background-color: #ffffff; }
        [data-sld="4"] .container { background-color: #ffffff; }
        [data-sld="5"] .container { background-color: #ffffff; }

        @media (max-width: 480px) {
          .body { padding: 0; }
        }

        @media (max-width: 930px) {
          .left-side { text-align: center; max-width: 450px; }
          .main { flex-direction: column-reverse; align-items: center; justify-content: center; }
          .center { margin-left: 0; margin-bottom: 56px; }
          .main-content .more-menu { justify-content: center; }
          .button-wrapper { top: 0; left: 0; width: 100%; justify-content: space-between; padding: 0 60px; }
          .swiper-button + .swiper-button { margin-left: 0; }
        }

        @media (max-width: 575px) {
          .container { height: 100%; max-height: 100%; }
          .center .bottle-bg { width: 220px; height: 340px; }
          .button-wrapper { padding: 0 20px; }
        }

        

      `}</style>
       <div className="container">
        <div className="mySwiper">
          <div className="main-wrapper swiper-wrapper">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`main swiper-slide ${index === currentSlideIndex ? 'swiper-slide-active' : ''}`}
                id={product.id}
              >
                <div className="left-side">
                  <div className="main-wrapper">
                    <h3 className="main-header">{product.header}</h3>
                    <h1 className="main-title">{product.title}</h1>
                    <h2 className="main-subtitle">{product.subtitle}</h2>
                  </div>
                  <div className="main-content">
                    <div className="main-content__title">{product.contentTitle}</div>
                    <div className="main-content__subtitle">{product.contentSubtitle}</div>
                    <div className="more-menu" onClick={() => window.location.href = "/shop"}>
                      Shop Now
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="-5" y1="12" x2="19" y2="12" />
                        <line x1="15" y1="16" x2="19" y2="12" />
                        <line x1="15" y1="8" x2="19" y2="12" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="center">
                  <div className="right-side__img">
                    <img className="bottle-bg" src={product.bottleBg} alt="" />
                    <img className="bottle-img" src={product.bottleImg} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="button-wrapper">
          <div className="swiper-button swiper-prev-button" onClick={handlePrev}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </div>
          <div className="swiper-button swiper-next-button" onClick={handleNext}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </div>
        </div>
        <div className="swiper-pagination">
          <span className="swiper-pagination-current">{currentSlideIndex + 1}</span>
          /
          <span className="swiper-pagination-total">{products.length}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcaseClient;