"use client";

import { useState } from "react";
import styles from "./HoverPreviewWrapper.module.css";


interface HoverPreviewWrapperProps {
  previewImage: string;
  children: React.ReactNode;
}

export default function HoverPreviewWrapper({ previewImage, children }: HoverPreviewWrapperProps) {
  const [hovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      style={{ cursor: "none" }} // hide default cursor
    >
      {children}

      {hovered && (
        <>
          {/* Hover preview image */}
          <img
            src={previewImage}
            alt="preview"
            className={styles.previewImage}
            style={{
              left: `${cursorPos.x + 30}px`,
              top: `${cursorPos.y + 40}px`,
            }}
          />

          {/* Custom cursor image */}
          <img
            src="/cursor.png"
            alt="custom cursor"
            className={styles.customCursor}
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
            }}
          />
        </>
      )}
    </div>
  );
}
