import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://wilsonif.com";
  const routes = [
    "",
    "/home-insurance",
    "/auto-insurance",
    "/business-insurance",
    "/flood-insurance",
    "/boat-insurance",
    "/pet-insurance",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/accessibility",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
