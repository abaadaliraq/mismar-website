import type { MetadataRoute } from "next";
import {
  absoluteUrl,
  localizedPath,
  SUPPORTED_LOCALES,
  type Locale,
} from "@/lib/seo";

const routes = [
  { path: "", priority: 1 },
  { path: "about", priority: 0.8 },
  { path: "activities", priority: 0.8 },
  { path: "restoration", priority: 0.8 },
  { path: "projects", priority: 0.9 },
  { path: "contact", priority: 0.7 },
  { path: "privacy", priority: 0.4 },
  { path: "terms", priority: 0.4 },
];

const lastModified = new Date("2026-10-02");

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    SUPPORTED_LOCALES.map((locale: Locale) => ({
      url: absoluteUrl(localizedPath(locale, route.path)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
  );
}
