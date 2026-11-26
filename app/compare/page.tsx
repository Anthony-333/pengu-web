import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection, legalMetadata } from "../_components/LegalPage";
import { COMPARE_CHECKED, SITE, SITE_URL } from "../_lib/site";

export const metadata: Metadata = legalMetadata(
  "Pengu vs OurFamilyWizard, TalkingParents & AppClose",
  "An honest comparison of co-parenting apps: free plans, custody calendars, expense splitting, messaging and court-ready records. Which app fits your family, including when Pengu isn't the right pick.",
  "/compare",
);

/**
 * Competitor facts are kept to what each provider states on its own site, and
 * prices are left out on purpose: they change often and the published figures
 * disagree. Re-check every row and bump `COMPARE_CHECKED` in `_lib/site.ts`
 * when you edit this page.
 */
const checked = new Date(`${COMPARE_CHECKED} UTC`).toLocaleDateString("en-US", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const apps = ["Pengu", "OurFamilyWizard", "TalkingParents", "AppClose"] as const;

const rows: { label: string; cells: [string, string, string, string] }[] = [
  {
    label: "Best for",
    cells: [
      "Co-parents who mostly get along and want calm everyday logistics",
      "Court-ordered or professionally supervised co-parenting",
      "High-conflict cases that need recorded calls and fixed records",
      "Parents who want records and payments in one subscription",
    ],
  },
  {
    label: "Free plan",
    cells: [
      "Yes, no time limit. Schedule, calendar and chat always free",
      "No. Paid plans (fee waiver program available)",
      "No. A paid plan is needed for the app (fee waivers available)",
      "No. Subscription (fee waivers available)",
    ],
  },
  {
    label: "Custody calendar",
    cells: [
      "Yes. 2-2-3, week on/week off or custom; changes need the other parent's yes",
      "Yes, with trade and swap requests",
      "Yes, shared calendar",
      "Yes, shared calendar",
    ],
  },
  {
    label: "Shared expenses",
    cells: [
      "Track, split, settle or dispute, with receipt photos. No in-app payments",
      "Expense log plus in-app payments (OFWpay)",
      "Expense tracking plus in-app payments",
      "Expense tracking plus in-app payments",
    ],
  },
  {
    label: "Messaging",
    cells: [
      "Chat and voice messages, plus handover notes with read status",
      "Message board with ToneMeter, which flags emotionally charged wording",
      "Secure messaging; recorded calls on higher plans",
      "Secure messaging",
    ],
  },
  {
    label: "Court-ready records",
    cells: [
      "No. Full data export as JSON",
      "Yes",
      "Yes (Unalterable Records)",
      "Yes",
    ],
  },
  {
    label: "Family photos",
    cells: [
      "Private memories wall with tags and reactions",
      "Not a core feature",
      "Not a core feature",
      "Not a core feature",
    ],
  },
];

const sources = [
  { name: "OurFamilyWizard plans and pricing", href: "https://www.ourfamilywizard.com/plans-and-pricing" },
  { name: "OurFamilyWizard ToneMeter", href: "https://www.ourfamilywizard.com/knowledge-center/tips-tricks/tonemeter" },
  { name: "TalkingParents pricing", href: "https://talkingparents.com/pricing" },
  { name: "TalkingParents features", href: "https://talkingparents.com/features" },
  { name: "AppClose pricing", href: "https://appclose.com/pricing" },
];

const toc = [
  { id: "at-a-glance", label: "At a glance" },
  { id: "pengu", label: "Pengu" },
  { id: "ourfamilywizard", label: "OurFamilyWizard" },
  { id: "talkingparents", label: "TalkingParents" },
  { id: "appclose", label: "AppClose" },
  { id: "which-one", label: "Which one fits your family?" },
  { id: "sources", label: "How we compared" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/compare#webpage`,
  url: `${SITE_URL}/compare`,
  name: "Co-parenting apps compared",
  description: "Pengu, OurFamilyWizard, TalkingParents and AppClose compared on free plans, calendars, expenses, messaging and court-ready records.",
  dateModified: COMPARE_CHECKED,
  inLanguage: "en",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  about: apps.map((name) => ({ "@type": "MobileApplication", name })),
};

export default function ComparePage() {
  return (
    <LegalPage
      title="Co-parenting apps compared"
      eyebrow="Compare"
      dated={false}
      toc={toc}
      intro={
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
          />
          <p>
            There&apos;s no single best co-parenting app. It depends on how well you and your
            co-parent work together, and whether a court is involved. We make Pengu, so we&apos;re
            biased, but we&apos;ve tried to be fair, and we say plainly where another app is the
            better pick.
          </p>
          <p className="mt-4 text-sm text-ink-3">
            Last checked {checked}. Features and prices change, so confirm on each provider&apos;s
            site before you subscribe.
          </p>
        </>
      }
    >
      <LegalSection id="at-a-glance" title="At a glance">
        <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[680px] border-collapse text-left text-sm">
            <caption className="sr-only">
              Pengu, OurFamilyWizard, TalkingParents and AppClose compared feature by feature
            </caption>
            <thead>
              <tr className="border-b border-hairline">
                <th scope="col" className="w-[16%] py-3 pr-4 font-semibold text-ink-3">
                  <span className="sr-only">Feature</span>
                </th>
                {apps.map((app) => (
                  <th
                    key={app}
                    scope="col"
                    className={`py-3 pr-4 font-semibold ${app === "Pengu" ? "text-accent-ink" : "text-ink"}`}
                  >
                    {app}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-hairline align-top">
                  <th scope="row" className="py-3 pr-4 font-semibold text-ink">
                    {row.label}
                  </th>
                  {row.cells.map((cell, i) => (
                    <td key={apps[i]} className={`py-3 pr-4 ${i === 0 ? "bg-accent/5" : ""}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection id="pengu" title="Pengu">
        <p>
          Pengu is for co-parents who can mostly cooperate and want less back-and-forth. Each
          child gets a private shared space called a nest, holding the custody calendar, shared
          expenses, handover notes, chat and a family photo wall. Step-parents and grandparents
          can join with only the access they need, such as the calendar but not expenses.
        </p>
        <ul>
          <li>
            <strong>Free plan with no time limit.</strong> The custody schedule, calendar and chat
            are always free. Expenses, handover notes and memories have a monthly allowance, and
            Pengu Pro removes those limits.
          </li>
          <li>
            <strong>Schedule changes are agreed, not announced.</strong> One parent proposes a
            change and the other approves it.
          </li>
          <li>
            <strong>No ads and no selling your data.</strong> Only people you invite can see into
            your nest.
          </li>
        </ul>
        <h3>Where Pengu isn&apos;t the right fit</h3>
        <p>
          Pengu doesn&apos;t produce court-ready records, check the tone of your messages, record
          calls or move money between parents. If a court has ordered a specific app, or you need
          documentation for a custody case, choose one of the apps below.
        </p>
      </LegalSection>

      <LegalSection id="ourfamilywizard" title="OurFamilyWizard">
        <p>
          OurFamilyWizard is one of the longest-running co-parenting platforms, and family courts
          and lawyers often recommend or order it. It covers calendars, an expense log with
          in-app payments, a message board and a journal, and it lets professionals such as
          lawyers or mediators view your records.
        </p>
        <ul>
          <li>
            <strong>Good for:</strong> court-ordered arrangements and cases with professional
            oversight. Its ToneMeter flags wording that could come across as hostile before you
            send it.
          </li>
          <li>
            <strong>Worth knowing:</strong> there&apos;s no free plan, though it runs a fee waiver
            program.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="talkingparents" title="TalkingParents">
        <p>
          TalkingParents is built around accountability. Messages are kept as Unalterable Records
          that you can use in court, and higher plans add recorded phone and video calls. It also
          has a shared calendar and payments.
        </p>
        <ul>
          <li>
            <strong>Good for:</strong> high-conflict situations where every exchange may need to
            be documented.
          </li>
          <li>
            <strong>Worth knowing:</strong> the app now needs a paid plan. Fee waivers are
            available for people facing financial hardship or domestic violence.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="appclose" title="AppClose">
        <p>
          AppClose bundles a calendar, messaging, expense tracking with payments, and records you
          can export into one all-inclusive subscription.
        </p>
        <ul>
          <li>
            <strong>Good for:</strong> parents who want records and payments without choosing
            between tiers.
          </li>
          <li>
            <strong>Worth knowing:</strong> it&apos;s a subscription, with fee waivers for
            financial hardship and domestic violence survivors.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="which-one" title="Which one fits your family?">
        <ul>
          <li>
            <strong>You get along well enough and want to stop texting about logistics:</strong>{" "}
            Pengu. Start on the free plan and see if it sticks.
          </li>
          <li>
            <strong>A court has named an app:</strong> use that one. OurFamilyWizard and
            TalkingParents are the ones courts name most often.
          </li>
          <li>
            <strong>Things are high-conflict and you need a record of everything:</strong>{" "}
            TalkingParents or OurFamilyWizard.
          </li>
          <li>
            <strong>You want to send child-support or expense payments inside the app:</strong>{" "}
            OurFamilyWizard, TalkingParents or AppClose.
          </li>
          <li>
            <strong>Grandparents or step-parents help with handovers:</strong> Pengu lets you give
            each of them access to only the parts they need.
          </li>
        </ul>
        <p>
          Want to try Pengu? <Link href="/#download">Download it free</Link>, or read the{" "}
          <Link href="/#faq">FAQ</Link>. Questions are welcome at{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </LegalSection>

      <LegalSection id="sources" title="How we compared">
        <p>
          We compared each app on what its own website says about features, plans and fee
          waivers. We left prices out because they change often and differ by country and
          platform. If something here is out of date, email{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> and we&apos;ll fix it.
        </p>
        <ul>
          {sources.map((s) => (
            <li key={s.href}>
              <a href={s.href} rel="nofollow noopener" target="_blank">
                {s.name}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-ink-3">
          OurFamilyWizard, TalkingParents and AppClose are trademarks of their respective owners.
          Pengu isn&apos;t affiliated with or endorsed by them.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
