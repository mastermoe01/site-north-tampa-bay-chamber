import type { MetadataRoute } from "next";
import { programs } from "@/lib/programs";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/programs", "/membership", "/foundation", "/advocacy", "/explore", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.7 })),
    ...programs.map((p) => ({ url: `${SITE_URL}/programs/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
