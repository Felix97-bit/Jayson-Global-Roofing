import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://jaysonglobal.com/sitemap.xml",
    host: "https://jaysonglobal.com",
  };
}
