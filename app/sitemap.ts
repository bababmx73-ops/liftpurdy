import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

// Requis par `output: "export"` : la route est générée une seule fois au build.
export const dynamic = "force-static";

// /mentions-legales est volontairement en `noindex` : on ne la liste pas ici.
// Avec `trailingSlash: true`, l'URL canonique de l'accueil se termine par `/`.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE.url}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
