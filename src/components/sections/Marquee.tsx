import React from "react";
import styles from "./Marquee.module.css";

interface MarqueeProps {
  text: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        <span className={styles.marqueeContent}>
          {text} &nbsp; {text} &nbsp; {text} &nbsp; {text}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
