import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch from Shopify securely
    const res = await fetch("https://your-shopify-store.myshopify.com/api/banner", {
      headers: {
        "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_STOREFRONT_TOKEN!
      }
    });

    if (!res.ok) throw new Error("Failed to fetch banner");

    const data = await res.json(); 

    return NextResponse.json({
      message: data.message || null,
      link: data.link || "#"
    });
  } catch {
    return NextResponse.json({ message: null, link: "#" });
  }
}
