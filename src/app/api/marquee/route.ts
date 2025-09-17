import { NextResponse } from "next/server";

export async function GET() {
  // Later need to replace with Shopify fetch
  return NextResponse.json({
    text: "Limited Offer – Free Shipping on orders above ₹1000!",
  });
}
