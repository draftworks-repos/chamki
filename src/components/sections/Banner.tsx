"use client";

import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <section className={styles.hero}>
      <h2 className={styles.heading}>Latest Trendy</h2>
      {/* <p className={styles.desc} >
        Discover the freshest styles making waves right now — bold, modern, and 
        crafted to elevate your everyday look.
      </p> */}
      <p className={styles.desc}>
        Step into what’s new and now — a curated edit of styles designed to keep you ahead of the curve.
      </p>
      <span className={styles.backgroundText}>STYLE</span>
      <div className={styles.imageWrapper}>
        <img
          src="/banner.jpg"
          alt="Banner"
          className={styles.image}
        />
      </div>
    </section>
  );
}
