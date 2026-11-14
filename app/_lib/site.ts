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
  title: "Pengu — Co-Parenting App for Calm Custody Schedules & Fair Shared Expenses",
  tagline: "Two homes. One happy kid.",
  description:
    "Co-parent with less stress. Pengu helps you always know who has the kids, split child costs fairly, hand over without forgetting a thing and never miss a milestone. For iOS and Android.",
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
      "Always know who has the kids. Set the custody pattern once (2-2-3, week on/week off, or a custom rotation) and every handover lands on both parents' calendars. Plan changes are proposed by one parent and approved by the other, so the schedule is always one you both agreed to. Handover reminders, and sync to the phone's own calendar.",
  },
  {
    name: "Shared expenses",
    summary:
      "Split child costs fairly without keeping score. Log a shared cost, attach a receipt photo, and Pengu works out each parent's share. Settle or dispute in one tap, with a running balance both parents see.",
  },
  {
    name: "Transfer notes",
    summary:
      "Hand over the kids with nothing forgotten. Leave a note at every handover (medication, homework, meals), marked urgent, important or FYI, and see when the other parent has read it. Chat and voice messages sit alongside.",
  },
  {
    name: "Memories",
    summary:
      "Never miss a milestone, whichever home it happens in. A private photo and video wall only the child's nest can see, with tags and reactions.",
  },
] as const;

export const faqs = [
  {
    q: "What is Pengu?",
    a: "Pengu is a co-parenting app that helps separated and divorced parents stay on the same page without the back-and-forth. Your custody calendar, shared expenses, handover notes, messages and family photos live in one private space, called a nest, and both parents see the same, up-to-date picture.",
  },
  {
    q: "Will Pengu work with our custody schedule?",
    a: "Yes. Pengu has built-in rotations such as 2-2-3 and week on/week off, and you can set up your own pattern. When plans change, one parent proposes the new schedule and the other approves it, so the calendar is always one you both agreed to.",
  },
  {
    q: "How does Pengu help us split costs fairly?",
    a: "Log a shared cost and snap the receipt, and Pengu calculates each parent's share, so nobody has to keep score. The other parent can settle or dispute it in one tap, and a running ledger shows the current balance to both of you.",
  },
  {
    q: "Can I try Pengu for free?",
    a: "Yes. You get a one-month free trial of the full app, so you can see the difference before you pay. After that, adding events, notes, expenses and memories needs a subscription, billed through the App Store or Google Play. You can cancel anytime from your store account.",
  },
  {
    q: "Who can see what we share?",
    a: "Only the people you invite to your nest, so your family's details stay in the family. You choose each person's role and which parts they can access, for example a view-only grandparent. Pengu doesn't sell your data, doesn't show ads and doesn't track you across other apps.",
  },
  {
    q: "Can grandparents and step-parents help out too?",
    a: "Yes. Invite anyone who helps care for your child by email or join code, so they always know the plan too, and give them only the access they need, such as the calendar but not expenses.",
  },
  {
    q: "Will I see custody days in my phone's calendar?",
    a: "Yes. Handovers and events can be added to your device calendar and kept up to date as the shared schedule changes, so you can plan the rest of your life around them.",
  },
  {
    q: "What if my co-parent has a different phone?",
    a: "No problem. Pengu is a mobile app for iPhone and Android, and both co-parents can use it whichever phone they have.",
  },
  {
    q: "Can I take my data with me or delete it?",
    a: "Yes, it's your data. Under Account → Privacy & data you can export it as a JSON file or delete your account at any time.",
  },
] as const;
