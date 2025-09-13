import styles from "./Hero.module.css";

export default function Hero() {
  const slides = [
    { img: "/image-7.png", title: "New Arrivals", link: "Shop Now" },
    { img: "/image-12.png", title: "Premium Collection", link: "Explore" },
    { img: "/image-4.png", title: "Chamki Styles", link: "Discover" },
  ];

  return (
    <section className={styles.hero}>
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`${styles.slide} ${styles[`slide${i + 1}`]}`}
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          <div className={styles.content}>
            <h2>{slide.title}</h2>
            <a href="#" className={styles.button}>
              <span className={styles.text}>{slide.link}
              <img
                src="/arrow-up-right.svg"
                alt="Arrow up right"
                className={styles.arrow}
              />
              </span>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
