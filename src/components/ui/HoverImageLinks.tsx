import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

type LinkProps = {
  heading: string;
  subheading: string;
  imgSrc: string;
  href: string;
};

export const HoverImageLinks = () => {
  return (
    <section className="bg-white-950 p-4 md:p-8">
      <div className="mx-auto max-w-[1000px]">
       <Link
        heading="Kurti Sleeveless"
        subheading="Trendy ethnic wear for casual outings"
        imgSrc="/LatesImage-1.jpg"
        href="#"
        />
        <Link
        heading="Saree Collection"
        subheading="Elegant sarees for festive & formal occasions"
        imgSrc="/LatesImage-2.jpg"
        href="#"
        />
        <Link
        heading="Evening Gowns"
        subheading="Chic gowns for parties & special events"
        imgSrc="/LatesImage-3.jpg"
        href="#"
        />
        <Link
        heading="Bodycon Dresses"
        subheading="Modern fits for a bold statement look"
        imgSrc="/LatesImage-4.jpg"
        href="#"
        />
        <Link
        heading="Maxi Dresses"
        subheading="Flowy styles perfect for comfort & elegance"
        imgSrc="/LatesImage-5.jpg"
        href="#"
        />

      </div>
    </section>
  );
};

const Link: React.FC<LinkProps> = ({ heading, subheading, imgSrc, href }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-gray-200 py-4 transition-colors duration-500 hover:border-gray-600 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
         className="relative z-10 block text-neutral-500 transition-colors duration-500 group-hover:text-gray-900 text-4xl font-bold md:text-4xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-gray-900">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-gray-800" />
      </motion.div>
    </motion.a>
  );
};
