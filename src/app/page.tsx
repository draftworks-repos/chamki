"use client";

import Hero from "@/components/Hero";
import LatestProductsWrapper from "@/components/product/LatestProductsWrapper";
import Banner from "@/components/sections/Banner";
import ProductShowcaseWrapper from "@/components/product/ProductShowcaseWrapper";
import CategoriesGrid from "@/components/sections/CategoriesGrid";
import Newsletter from "@/components/sections/Newsteller";
import InstagramGrid from "@/components/sections/InstagramGrid";

export default function HomePage() {
  return (
    <>
      <Hero/>
      <div style={{maxWidth: "1400px", margin: "0 auto"}}>
        <LatestProductsWrapper/>
      </div>
      <Banner/>
      <div style={{maxWidth: "1400px", margin: "0 auto"}}>
        {/* <HoverImageLinks/> */}
        <ProductShowcaseWrapper/>
        <CategoriesGrid/>
      </div>
        <Newsletter/>
    </>
  );
}
