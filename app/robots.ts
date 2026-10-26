import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

// Requis par `output: "export"` : la route est générée une seule fois au build.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
