import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection, legalMetadata } from "../_components/LegalPage";
import { StoreButtons } from "../_components/StoreButtons";
import { COMPARE_CHECKED, SITE, SITE_URL } from "../_lib/site";

export const metadata: Metadata = legalMetadata(
  "Pengu vs OurFamilyWizard, TalkingParents & AppClose",
  "Looking for an OurFamilyWizard, TalkingParents or AppClose alternative? Pengu is the co-parenting app with a free plan, a custody calendar you both agree on, fair expense splitting and a private family photo wall.",
  "/compare",
);

/**
 * Pengu-first comparison. Every statement about another app must stay true
 * and checkable on that provider's own site (comparative advertising), but the
 * page doesn't link to them or recommend them. Prices are left out because
 * they change often. Re-check the competitor cells and bump `COMPARE_CHECKED`
 * in `_lib/site.ts` whenever you edit this page.
 */
const checked = new Date(`${COMPARE_CHECKED} UTC`).toLocaleDateString("en-US", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const apps = ["Pengu", "OurFamilyWizard", "TalkingParents", "AppClose"] as const;

/** First cell is Pengu's; `win` marks rows where Pengu is the clear pick. */
const rows: { label: string; win?: boolean; cells: [string, string, string, string] }[] = [
  {
    label: "Free plan",
    win: true,
    cells: [
      "Yes, with no time limit. Schedule, calendar and chat are always free",
      "No, paid plans only",
      "No, the app needs a paid plan",
      "No, subscription only",
    ],
  },
  {
    label: "Built for",
    win: true,
    cells: [
      "Calm everyday co-parenting, with the whole family in one place",
      "Court-focused documentation",
      "Court-focused documentation",
      "Records and payments",
    ],
  },
  {
    label: "Custody calendar",
    cells: [
      "2-2-3, week on/week off or custom. Changes need both parents' yes",
      "Yes",
      "Yes",
      "Yes",
    ],
  },
  {
    label: "Shared expenses",
    cells: [
      "Receipt photos, automatic split, settle or dispute in one tap",
      "Yes",
      "Yes",
      "Yes",
    ],
  },
  {
    label: "Handover notes",
    win: true,
    cells: [
      "Urgent, important or FYI notes with read status at every handover",
      "Not a core feature",
      "Not a core feature",
      "Not a core feature",
    ],
  },
  {
    label: "Family photos",
    win: true,
    cells: [
      "Private memories wall with tags and reactions",
      "Not a core feature",
      "Not a core feature",
      "Not a core feature",
    ],
  },
  {
    label: "Messaging",
    cells: ["Chat and voice messages", "Yes", "Yes", "Yes"],
  },
];

const reasons = [
  {
    title: "Free to start, free to stay",
    body: "The custody schedule, calendar and chat are free forever, not for a trial. Expenses, handover notes and memories come with a monthly allowance, and Pengu Pro lifts the limits only if you want it.",
  },
  {
    title: "Built for calm, not for court",
    body: "Pengu is designed to lower the temperature. Schedule changes are proposed and approved, so the calendar is always one you both agreed to, and handover notes replace the long text threads.",
  },
  {
    title: "Your child's whole world in one nest",
    body: "Calendar, costs, notes, chat and photos live together in one private space for each child. Invite step-parents and grandparents with only the access they need, like the calendar but not expenses.",
  },
  {
    title: "Never miss a milestone",
    body: "The memories wall means a first tooth or a school play is shared with both homes the moment it happens, with tags and reactions. No more expired album links.",
  },
  {
    title: "Private by design",
    body: "Only people you invite can see into your nest. Pengu doesn't show ads, doesn't sell your data and doesn't track you across other apps. Export or delete your data anytime.",
  },
];

const toc = [
  { id: "at-a-glance", label: "At a glance" },
  { id: "why-pengu", label: "Why co-parents choose Pengu" },
  { id: "vs-ourfamilywizard", label: "Pengu vs OurFamilyWizard" },
  { id: "vs-talkingparents", label: "Pengu vs TalkingParents" },
  { id: "vs-appclose", label: "Pengu vs AppClose" },
  { id: "switch", label: "Switch tonight" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/compare#webpage`,
  url: `${SITE_URL}/compare`,
  name: "Pengu vs OurFamilyWizard, TalkingParents & AppClose",
  description:
    "How Pengu compares with OurFamilyWizard, TalkingParents and AppClose on free plans, custody calendars, expenses, handover notes and family photos.",
  dateModified: COMPARE_CHECKED,
  inLanguage: "en",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  mainEntity: { "@id": `${SITE_URL}/#app` },
};

export default function ComparePage() {
  return (
    <LegalPage
      title="The co-parenting app that starts free"
      eyebrow="Pengu vs the rest"
      dated={false}
      toc={toc}
      after={
        <>
          <div className="mt-10 rounded-3xl bg-ink px-6 py-12 text-center">
            <p className="mb-2 text-3xl font-bold tracking-tight text-white">
              Two homes. One happy kid.
            </p>
            <p className="mb-7 text-white/70">Free to download. Free plan with no time limit.</p>
            <StoreButtons tone="onDark" />
          </div>
          <p className="mt-6 text-sm text-ink-3">
            Questions? Read the{" "}
            <Link href="/#faq" className="text-accent-ink underline underline-offset-2">
              FAQ
            </Link>{" "}
            or email{" "}
            <a href={`mailto:${SITE.email}`} className="text-accent-ink underline underline-offset-2">
              {SITE.email}
            </a>
            .
          </p>
          <p className="mt-2 text-xs text-ink-3">
            OurFamilyWizard, TalkingParents and AppClose are trademarks of their respective
            owners. Pengu isn&apos;t affiliated with or endorsed by them.
          </p>
        </>
      }
      intro={
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
          />
          <p>
            Many co-parenting apps were built for the courtroom and charge from day one. Pengu
            was built for the everyday: who has the kids tonight, who paid for the dentist, what
            medicine goes in the bag, and the photos neither parent should miss. Here&apos;s how
            it compares with OurFamilyWizard, TalkingParents and AppClose.
          </p>
        </>
      }
    >
      <LegalSection id="at-a-glance" title="At a glance">
        <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[680px] border-collapse text-left text-sm">
            <caption className="sr-only">
              Pengu compared with OurFamilyWizard, TalkingParents and AppClose
            </caption>
            <thead>
              <tr className="border-b border-hairline">
                <th scope="col" className="w-[16%] py-3 pr-4">
                  <span className="sr-only">Feature</span>
                </th>
                {apps.map((app, i) => (
                  <th
                    key={app}
                    scope="col"
                    className={
                      i === 0
                        ? "w-[30%] rounded-t-2xl bg-accent px-4 py-3 text-base font-bold text-white"
                        : "py-3 pr-4 pl-4 font-semibold text-ink-3"
                    }
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
                    <td
                      key={apps[i]}
                      className={
                        i === 0
                          ? "bg-accent/10 px-4 py-3 font-semibold text-ink"
                          : "py-3 pr-4 pl-4 text-ink-3"
                      }
                    >
                      {i === 0 && row.win && (
                        <span aria-hidden="true" className="mr-1.5 text-accent-ink">
                          ✓
                        </span>
                      )}
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-ink-3">
          Based on each provider&apos;s published plans and features, last checked {checked}.
          Prices are left out because they change often and vary by country.
        </p>
      </LegalSection>

      <LegalSection id="why-pengu" title="Why co-parents choose Pengu">
        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-hairline bg-paper p-6 sm:last:odd:col-span-2">
              <h3 className="!mt-0">{r.title}</h3>
              <p className="!mb-0 text-[15px]">{r.body}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="vs-ourfamilywizard" title="Pengu vs OurFamilyWizard">
        <p>
          OurFamilyWizard is built around court documentation and has no free plan. Pengu is free
          to start and built for the day-to-day: a calendar you both agree on, fair expense
          splits, handover notes and a shared photo wall, all in one calm, private space. If
          you&apos;re looking for an OurFamilyWizard alternative that feels less like paperwork,
          start with Pengu.
        </p>
      </LegalSection>

      <LegalSection id="vs-talkingparents" title="Pengu vs TalkingParents">
        <p>
          TalkingParents focuses on recording communication, and its app now needs a paid plan.
          Pengu keeps the schedule, calendar and chat free forever and adds what TalkingParents
          doesn&apos;t focus on: handover notes with read status and a private memories wall, so
          both homes share the milestones as well as the logistics.
        </p>
      </LegalSection>

      <LegalSection id="vs-appclose" title="Pengu vs AppClose">
        <p>
          AppClose is a subscription. Pengu gives you the essentials free with no time limit,
          and brings the whole family in: invite step-parents and grandparents with only the
          access they need, and keep your child&apos;s photos and milestones in the same nest as
          the custody calendar.
        </p>
      </LegalSection>

      <LegalSection id="switch" title="Switch tonight">
        <ul>
          <li>
            <strong>Create your nest:</strong> sign up, add your child and pick your color.
          </li>
          <li>
            <strong>Invite your co-parent</strong> by email or join code.
          </li>
          <li>
            <strong>Set your custody pattern</strong> once, and every handover lands on both
            calendars.
          </li>
        </ul>
      </LegalSection>
    </LegalPage>
  );
}
