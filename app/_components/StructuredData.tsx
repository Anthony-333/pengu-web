import { SITE, SITE_URL, faqs, features } from "../_lib/site";

const abs = (path: string) => `${SITE_URL}${path}`;

/**
 * schema.org JSON-LD for the landing page. Reviews and ratings are left out on
 * purpose: Google penalises self-served review markup. Add `offers` (with a
 * price) and the store links once the listings are live, which is what
 * unlocks the software-app rich result.
 */
const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": abs("/#organization"),
      name: SITE.name,
      url: abs("/"),
      logo: { "@type": "ImageObject", url: abs(SITE.logo), width: 1024, height: 1024 },
      email: SITE.email,
      contactPoint: { "@type": "ContactPoint", contactType: "customer support", email: SITE.email },
    },
    {
      "@type": "WebSite",
      "@id": abs("/#website"),
      url: abs("/"),
      name: SITE.name,
      description: SITE.description,
      publisher: { "@id": abs("/#organization") },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": abs("/#webpage"),
      url: abs("/"),
      name: SITE.title,
      description: SITE.description,
      isPartOf: { "@id": abs("/#website") },
      about: { "@id": abs("/#app") },
      primaryImageOfPage: abs("/opengraph-image"),
      inLanguage: "en",
    },
    {
      "@type": "MobileApplication",
      "@id": abs("/#app"),
      name: SITE.name,
      description: SITE.description,
      url: abs("/"),
      image: abs(SITE.logo),
      screenshot: abs(SITE.screenshot),
      operatingSystem: "iOS, Android",
      applicationCategory: "LifestyleApplication",
      applicationSubCategory: "Co-parenting",
      audience: { "@type": "PeopleAudience", audienceType: "Separated, divorced and co-parenting families" },
      featureList: features.map((f) => `${f.name}: ${f.summary}`),
      publisher: { "@id": abs("/#organization") },
      ...(SITE.appStoreUrl || SITE.playStoreUrl
        ? { installUrl: [SITE.appStoreUrl, SITE.playStoreUrl].filter(Boolean) }
        : {}),
    },
    {
      "@type": "FAQPage",
      "@id": abs("/#faq"),
      isPartOf: { "@id": abs("/#webpage") },
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so no string in the data can close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
