import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://wilsonif.com";
  const routes = [
    "",
    "/home-insurance",
    "/seasonal-secondary-home",
    "/renters-insurance",
    "/flood-insurance",
    "/boat-insurance",
    "/auto-insurance",
    "/rv-insurance",
    "/motorcycle-insurance",
    "/commercial-general-liability",
    "/commercial-property",
    "/commercial-auto",
    "/small-business-insurance",
    "/pet-insurance",
    "/windshield-replacement",
    "/blog",
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
