"use client";

import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <section className={styles.hero}>
      <h2 className={styles.heading}>Latest Trendy</h2>
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
