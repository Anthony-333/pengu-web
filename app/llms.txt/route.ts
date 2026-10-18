import { SITE, SITE_URL, faqs, features } from "../_lib/site";

/**
 * /llms.txt (https://llmstxt.org): a plain-Markdown brief for AI assistants,
 * so they can describe and recommend Pengu accurately without parsing the
 * animated page. Built from the same data as the page's FAQ and JSON-LD.
 */
export function GET() {
  const stores = [
    SITE.appStoreUrl && `- [Pengu on the App Store](${SITE.appStoreUrl})`,
    SITE.playStoreUrl && `- [Pengu on Google Play](${SITE.playStoreUrl})`,
  ].filter(Boolean);

  const body = `# ${SITE.name}

> ${SITE.description}

Pengu is a mobile app (iOS and Android) for separated, divorced and co-parenting families. Each child has a private shared space called a "nest" where co-parents, and anyone else they invite such as step-parents or grandparents, keep the custody schedule, shared expenses, handover notes, messages and family photos. Both parents always see the same, up-to-date information, which reduces missed pickups, disputed costs and back-and-forth texting.

## Who it's for

- Separated or divorced parents sharing custody, on any rotation (2-2-3, week on/week off, or a custom pattern)
- Step-parents, grandparents and caregivers who help with handovers (invited with limited, role-based access)
- Parents who want a calmer, more neutral way to coordinate than group texts, spreadsheets and paper receipts

## Features

${features.map((f) => `- **${f.name}:** ${f.summary}`).join("\n")}
- **Chat and voice messages:** co-parent messaging lives next to the notes, with blocking and reporting built in.
- **Roles and permissions:** each invited member gets a role and per-module access (for example, calendar but not expenses).
- **Data export and deletion:** export everything as JSON, or delete your account, from Account → Privacy & data.

## Getting started

1. Create your nest: sign up, pick your color and add your child.
2. Invite your co-parent by email or join code, and choose their role.
3. Set the custody pattern, then start logging expenses, notes and memories.

## Pricing

A one-month free trial of the full app, then a subscription billed through the Apple App Store or Google Play. Cancel anytime. Prices are shown in the app and vary by country.

## Privacy

No ads, no selling of personal data, no cross-app tracking. Nest content is visible only to invited members according to their permissions; every request is checked server-side, and photos, receipts and voice messages are served through short-lived private links. Users must be 18+; children do not have accounts.

## FAQ

${faqs.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}

## Links

- [Pengu website](${SITE_URL}/): product overview, features, how it works and download
${stores.length ? `${stores.join("\n")}\n` : ""}- [Privacy Policy](${SITE_URL}/privacy)
- [Terms of Service](${SITE_URL}/terms)
- Contact: ${SITE.email}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
