"use client";

import Hero from "@/components/Hero";
import LatestProducts from "@/components/product/LatestProducts";
import Banner from "@/components/sections/Banner";
import ProductShowcase from "@/components/product/ProductShowcase";
import CategoriesGrid from "@/components/sections/CategoriesGrid";
import { HoverImageLinks } from "@/components/ui/HoverImageLinks";
import Newsletter from "@/components/sections/Newsteller";

export default function HomePage() {
  return (
    <>
      <Hero/>
      <div style={{maxWidth: "1440px", margin: "0 auto"}}>
        <LatestProducts/>
      </div>
      <Banner/>
      <div style={{maxWidth: "1440px", margin: "0 auto"}}>
        {/* <HoverImageLinks/> */}
        <ProductShowcase/>
        <CategoriesGrid/>
        <Newsletter/>
      </div>
    </>
  );
}
