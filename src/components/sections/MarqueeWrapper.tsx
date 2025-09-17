import Marquee from "./Marquee";

async function getMarqueeText() {
  try {
    // Later: Replace with Shopify API call
    // Example: const res = await fetch("https://api.shopify.com/...")
    throw Error
    const res = await fetch("http://localhost:3000/api/marquee", {
      // ISR enabled
      next: { revalidate: 60 }, // rebuild every 60s
    });

    if (!res.ok) throw new Error("Failed to fetch marquee");
    const data = await res.json();

    return data.text || null;
  } catch {
    return null;
  }
}

export default async function MarqueeWrapper() {
  const text = await getMarqueeText();

  return (
    <Marquee text={text || "Free shipping on all orders • New arrivals every week • Exclusive limited collections • Easy returns within 7 days • Student discounts available • Secure checkout guaranteed • Chamki – where style meets confidence"} />
  );
}
