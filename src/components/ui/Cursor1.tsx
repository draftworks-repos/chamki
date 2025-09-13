'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { PlusIcon } from 'lucide-react';

type Cursor1Props = {
  targets?: React.RefObject<HTMLDivElement | null>[];
};

export default function Cursor1({ targets }: Cursor1Props) {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springX = useSpring(cursorX, { stiffness: 400, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 400, damping: 28 });

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (!targets) return;

      const isInside = targets.some((ref) => {
        if (!ref.current) return false;
        const rect = ref.current.getBoundingClientRect();
        return e.clientX >= rect.left &&
               e.clientX <= rect.right &&
               e.clientY >= rect.top &&
               e.clientY <= rect.bottom;
      });

      setHovered(isInside);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [targets, cursorX, cursorY]);

  return (
    <>
      {/* Hide default cursor only when hovering */}
      <style>{hovered ? `body { cursor: none; }` : ''}</style>

      <AnimatePresence>
        {hovered && (
          <motion.div
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              x: springX,
              y: springY,
              pointerEvents: 'none',
              zIndex: 9999,
              translateX: '-50%',
              translateY: '-50%',
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          >
            <motion.div
              className="flex items-center justify-center rounded-[24px] bg-gray-500/40 backdrop-blur-md  p-1"
              animate={{ width: 80, height: 32 }}
            >
              <div className="inline-flex items-center text-sm text-white">
                More <PlusIcon className="ml-1 h-4 w-4" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
