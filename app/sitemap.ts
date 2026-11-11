import type { MetadataRoute } from "next";
import { products, siteUrl } from "@/lib/content";
export default function sitemap():MetadataRoute.Sitemap {return ["","/about","/contact","/resources","/privacy",...products.map(p=>`/insurance/${p.slug}`)].map(path=>({url:`${siteUrl}${path}`,changeFrequency:"monthly" as const,priority:path===""?1:path.startsWith("/insurance")?0.8:0.5}));}