import type { MetadataRoute } from "next";

const BASE = "https://jaysonglobal.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/about",
    "/services",
    "/services/residential-roofing",
    "/services/commercial-roofing",
    "/services/storm-and-insurance",
    "/services/siding-and-exteriors",
    "/projects",
    "/reviews",
    "/contact",
    "/quote",
    "/service-areas",
  ];
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path === "/quote" ? 0.9 : 0.7,
  }));
}
