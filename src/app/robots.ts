import type { MetadataRoute } from "next";
import { getConfig } from "@/lib/client-config";

const config = getConfig();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
        "/api/",
        "/*?s=",
        "/detail/",
        "/gambling-*",
        "/understanding-gambling-*",
        "/understanding-the-psychological-*",
        "/step-by-step-guide-to-mastering-casino-*",
        "/the-historical-evolution-of-gambling-*",
        "/the-thrill-of-risk-*",
        "/understanding-gambling-addiction-*",
        "/a-kaszinok-*",
        "/izgalmas-*",
        "/fejleszd-*",
        "/avaamalla-*",
        "/bassbet-*",
        "/paljasta-*",
        "/opas-*",
        "/opi-*",
        "/budushhee-*",
        "/znamenitye-*",
        "/onlayn-va-*",
        "/odkrijte-*",
        "/verwandle-*",
        "/tarixin-*",
        "/effective-tips-to-enhance-your-athletic-*",
        "/brand-authority-and-review-management/",
        "/cate-*",
        "/wp-content/",
      ],
      },
    ],
    sitemap: `https://${config.domain}/sitemap.xml`,
  };
}
