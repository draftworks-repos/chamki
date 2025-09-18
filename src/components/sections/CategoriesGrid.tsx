'use client';
import { useMemo, createRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CategoriesGrid.module.css';
import Cursor1 from '@/components/ui/Cursor1';

const categories = [
  { id: 1, name: 'Kurti Collection', type: 'Kurti', image: '/image-3.jpg', href: '/product' },
  { id: 2, name: 'Saree Collection', type: 'Saree', image: '/image-8.jpg', href: '/product' },
  { id: 3, name: 'Lehenga Collection', type: 'Lehenga', image: '/image-5.jpg', href: '/product' },
  { id: 4, name: 'Shirt Collection', type: 'Shirt', image: '/image-10.jpg', href: '/product' },
  { id: 5, name: 'Jeans Collection', type: 'Jeans', image: '/image-7.jpeg', href: '/product' },
  { id: 6, name: 'Jacket Collection', type: 'Jacket', image: '/image-12.jpg', href: '/product' },
];

export default function CategoriesGrid() {
  const refs = useMemo(
    () => categories.map(() => createRef<HTMLDivElement>()),
    []
  );

  return (
    <div className="relative max-w-full mx-auto p-4">
      <div className="mb-12">
        <h2 className="text-center text-[2.75rem] font-normal tracking-[0.06em] text-neutral-800 mb-6 uppercase">
          Ready to Explore?
        </h2>
        <p className="text-center text-[1.125rem] leading-[1.75] font-light text-neutral-700 max-w-[680px] mx-auto mb-8">
          Discover styles tailored to your vibe — from timeless classics to the latest 
          trends, all in one place.
        </p>
      </div>



      <Cursor1 targets={refs} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, i) => (
          <div
            key={category.id}
            ref={refs[i]}
            className="relative group overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <Link
              href={category.href}
              target="_blank"
              className="relative w-full h-64 sm:h-72 md:h-[30rem] block cursor-none"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover object-top transition-transform duration-3000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-25 transition-all duration-500 ease-in-out"></div>

             <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <span className="text-white text-sm md:text-base font-medium tracking-wide uppercase drop-shadow-md">
                  {category.name}
                </span>
              </div>


            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
