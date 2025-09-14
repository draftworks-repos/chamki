'use client';
import { ReactNode, useEffect, useState } from 'react';

type CursorProps = {
  children: ReactNode;
  attachToParent?: boolean;
  onPositionChange?: (x: number, y: number) => void;
} & Record<string, unknown>;



export function Cursor({ children, attachToParent, onPositionChange }: CursorProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (onPositionChange) onPositionChange(e.clientX, e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [onPositionChange]);

  return (
    <div style={{ position: 'fixed', left: position.x, top: position.y, pointerEvents: 'none' }}>
      {children}
    </div>
  );
}
