import React from "react";
import styles from "./AllProductBtn.module.css";

interface AllProductBtnProps {
  text: string;
  onClick?: () => void;
}

const AllProductBtn: React.FC<AllProductBtnProps> = ({ text, onClick }) => {
  return (
    <button
      className={`${styles.button} ${styles.learnMore}`}
      onClick={onClick}
    >
      <span className={styles.circle} aria-hidden="true">
        <span className={`${styles.icon} ${styles.arrow}`}></span>
      </span>
      <span className={styles.buttonText}>{text}</span>
    </button>
  );
};

export default AllProductBtn;
