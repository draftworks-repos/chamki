'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CategoriesGrid.module.css';
import Cursor1 from '@/components/ui/Cursor1';

const categories = [
  { id: 1, name: 'Kurti Collection', type: 'Kurti', image: '/image-3.png', href: '/kurti' },
  { id: 2, name: 'Saree Collection', type: 'Saree', image: '/image-3.png', href: '/saree' },
  { id: 3, name: 'Lehenga Collection', type: 'Lehenga', image: '/image-3.png', href: '/lehenga' },
  { id: 4, name: 'Shirt Collection', type: 'Shirt', image: '/image-3.png', href: '/shirt' },
  { id: 5, name: 'Jeans Collection', type: 'Jeans', image: '/image-3.png', href: '/jeans' },
  { id: 6, name: 'Jacket Collection', type: 'Jacket', image: '/image-3.png', href: '/jacket' },
];

export default function CategoriesGrid() {
  const refs = categories.map(() => useRef<HTMLDivElement>(null));

  return (
    <div className="relative max-w-full mx-auto p-4">
     <div className="mb-10">
        <h2 className="text-center text-3xl md:text-4xl font-normal tracking-wider text-neutral-800 mb-6 uppercase">
          Categories
        </h2>
      </div>

      <Cursor1 targets={refs} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, i) => (
          <div
            key={category.id}
            ref={refs[i]}
            className="relative group overflow-hidden shadow-md hover:shadow-lg transition"
          >
            {/* Wrap image in Link for navigation */}
            <Link href={category.href} className="relative w-full h-64 sm:h-72 md:h-[25rem] block cursor-none">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-25 transition-all duration-500 ease-in-out"></div>

              {/* Button at bottom center */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <span className={styles.button}>
                  <span className={styles.text}>{category.name}</span>
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
