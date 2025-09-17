import Banner from "./Banner";

interface BannerData {
  message: string;
  link: string;
}

// export default async function BannerWrapper() {
//   let data: BannerData | null = null;

//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/banner`, {
//       next: { revalidate: 60 } // ISR every 60s
//     });

//     if (res.ok) {
//       const json = await res.json();
//       data = json?.message ? { message: json.message, link: json.link } : null;
//     }
//   } catch {
//     data = null;
//   }

//   if (!data) return null;

//   return <Banner message={data.message} link={data.link} />;
// }

export default function BannerWrapper() {
  return <Banner message="Temporary text will be replaced before deployment" link="#" />;
}