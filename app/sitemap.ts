import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://travelcurup.biz.id";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/travel-curup-palembang`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/travel-lebong-palembang`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/travel-curup-lebong`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/travel-bengkulu-palembang`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/sewa-hiace-curup`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
  ];
}
