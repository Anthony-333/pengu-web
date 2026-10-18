import type { MetadataRoute } from "next";
import { LEGAL } from "./_components/LegalPage";
import { SITE_URL } from "./_lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Parse as UTC so the build machine's timezone can't shift the day.
  const legalUpdated = new Date(`${LEGAL.effectiveDate} UTC`);
  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/privacy`, lastModified: legalUpdated, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: legalUpdated, changeFrequency: "yearly", priority: 0.3 },
  ];
}
