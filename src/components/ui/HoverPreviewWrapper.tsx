"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./HoverPreviewWrapper.module.css";

interface HoverPreviewWrapperProps {
  previewImage: string;
  children: React.ReactNode;
}

export default function HoverPreviewWrapper({ previewImage, children }: HoverPreviewWrapperProps) {
  const [hovered, setHovered] = useState(false);
  const [renderPos, setRenderPos] = useState({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const frame = useRef<number | null>(null); // ✅ fixed

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    cursorPos.current = { x: e.clientX, y: e.clientY };

    if (!frame.current) {
      frame.current = requestAnimationFrame(() => {
        setRenderPos(cursorPos.current);
        frame.current = null;
      });
    }
  };

  useEffect(() => {
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      style={{ cursor: "none" }}
    >
      {children}

      {hovered && (
        <>
          <img
            src={previewImage}
            alt="preview"
            className={styles.previewImage}
            style={{
              left: `${renderPos.x + 30}px`,
              top: `${renderPos.y + 40}px`,
            }}
          />

          <img
            src="/cursor.png"
            alt="custom cursor"
            className={styles.customCursor}
            style={{
              left: `${renderPos.x}px`,
              top: `${renderPos.y}px`,
            }}
          />
        </>
      )}
    </div>
  );
}
