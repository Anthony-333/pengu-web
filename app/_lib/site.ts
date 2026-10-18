/**
 * One source of truth for what the site says about Pengu to machines: page
 * metadata, JSON-LD, robots/sitemap and /llms.txt all read from here, and the
 * FAQ section renders the same `faqs`, so the structured data always matches
 * the visible page (Google ignores FAQ markup that doesn't).
 */

/** Production origin. Set NEXT_PUBLIC_SITE_URL to override (no trailing slash). */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pengu.family";

export const SITE = {
  name: "Pengu",
  title: "Pengu — Co-Parenting App for Custody Schedules & Shared Expenses",
  tagline: "Two homes. One calm nest.",
  description:
    "Pengu is the co-parenting app for two homes: a shared custody calendar, split expenses with receipts, handover notes and private family memories. For iOS and Android.",
  email: "hello@pengu.family",
  logo: "/pengu-icon.png",
  screenshot: "/video/app-tour-poster.jpg",
  keywords: [
    "co-parenting app",
    "coparenting app",
    "custody calendar",
    "custody schedule app",
    "shared custody",
    "2-2-3 custody schedule",
    "week on week off custody",
    "split child expenses",
    "co-parent expense tracker",
    "co-parenting communication",
    "divorced parents app",
    "separated parents app",
    "parenting plan",
    "family calendar",
  ],
  /** Fill these in when the store listings go live; they feed JSON-LD and llms.txt. */
  appStoreUrl: null as string | null,
  playStoreUrl: null as string | null,
} as const;

export const features = [
  {
    name: "Custody calendar",
    summary:
      "Set the custody pattern once (2-2-3, week on/week off, or a custom rotation) and every handover lands on both parents' calendars. Schedule changes are proposed by one parent and approved by the other. Handover reminders, and sync to the phone's own calendar.",
  },
  {
    name: "Shared expenses",
    summary:
      "Log any shared child cost, attach a receipt photo, and Pengu works out each parent's share. Settle or dispute in one tap, with a running balance both parents see.",
  },
  {
    name: "Transfer notes",
    summary:
      "Leave a note at every handover (medication, homework, meals), marked urgent, important or FYI, and see when the other parent has acknowledged it. Chat and voice messages sit alongside.",
  },
  {
    name: "Memories",
    summary:
      "A private photo and video wall only the child's nest can see, with tags and reactions, so milestones are kept together whichever home they happened in.",
  },
] as const;

export const faqs = [
  {
    q: "What is Pengu?",
    a: "Pengu is a co-parenting app for separated and divorced parents. It puts the custody calendar, shared expenses, handover notes, messages and family photos in one private space, called a nest, that both parents see in real time.",
  },
  {
    q: "Which custody schedules does Pengu support?",
    a: "Pengu has built-in rotations such as 2-2-3 and week on/week off, and you can set up your own pattern. When plans change, one parent proposes the new schedule and the other approves it, so the calendar is always one you both agreed to.",
  },
  {
    q: "How does Pengu split shared expenses?",
    a: "Log a shared cost, snap the receipt, and Pengu calculates each parent's share. The other parent can settle or dispute it in one tap, and a running ledger shows the current balance to both of you.",
  },
  {
    q: "Is Pengu free?",
    a: "Pengu starts with a one-month free trial of the full app. After that, adding events, notes, expenses and memories needs a subscription, billed through the App Store or Google Play. You can cancel anytime from your store account.",
  },
  {
    q: "Who can see what we share?",
    a: "Only the people you invite to your nest. You choose each person's role and which parts they can access, for example a view-only grandparent. Pengu doesn't sell your data, doesn't show ads and doesn't track you across other apps.",
  },
  {
    q: "Can step-parents or grandparents join?",
    a: "Yes. Invite anyone who helps care for your child by email or join code, and give them only the access they need, such as the calendar but not expenses.",
  },
  {
    q: "Does Pengu sync with my phone's calendar?",
    a: "Yes. Handovers and events can be added to your device calendar and kept up to date as the shared schedule changes.",
  },
  {
    q: "Is Pengu available on iPhone and Android?",
    a: "Yes. Pengu is a mobile app for iOS and Android, and both co-parents can use it whichever phone they have.",
  },
  {
    q: "Can I export or delete my data?",
    a: "Yes. Under Account → Privacy & data you can export your data as a JSON file or delete your account at any time.",
  },
] as const;
