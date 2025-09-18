import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Replace with actual Shopify API call
    const res = await fetch("https://your-shopify-store.myshopify.com/api/products", {
      headers: { "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_STOREFRONT_TOKEN! }
    });
    const data = await res.json();

    return NextResponse.json({ products: data });
  } catch {
    return NextResponse.json({ products: [] });
  }
}
