import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL, LegalPage, LegalSection, legalMetadata } from "../_components/LegalPage";

export const metadata: Metadata = legalMetadata(
  "Terms of Service",
  "The terms that govern your use of Pengu, including subscriptions, free trials, shared nests and acceptable use.",
  "/terms",
);

const toc = [
  { id: "acceptance", label: "Accepting these terms" },
  { id: "eligibility", label: "Eligibility and accounts" },
  { id: "nests", label: "Nests and shared content" },
  { id: "subscriptions", label: "Subscriptions and free trial" },
  { id: "your-content", label: "Your content" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "safety", label: "Reporting and blocking" },
  { id: "not-advice", label: "Not legal or financial advice" },
  { id: "our-rights", label: "Pengu's rights" },
  { id: "termination", label: "Ending your use" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "liability", label: "Limitation of liability" },
  { id: "indemnity", label: "Indemnity" },
  { id: "law", label: "Governing law and disputes" },
  { id: "app-stores", label: "App store terms" },
  { id: "general", label: "General" },
  { id: "contact", label: "Contact us" },
];

const mail = `mailto:${LEGAL.contactEmail}`;

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      toc={toc}
      intro={
        <p>
          These terms are an agreement between you and {LEGAL.company}{" "}
          (&ldquo;Pengu&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), and they cover your use
          of the Pengu apps and website (the &ldquo;Service&rdquo;). Please read them along
          with our <Link href="/privacy">Privacy Policy</Link>, which explains how we handle
          your information.
        </p>
      }
    >
      <LegalSection id="acceptance" title="1. Accepting these terms">
        <p>
          By creating an account or using the Service, you agree to these terms. If you don&apos;t
          agree, please don&apos;t use Pengu. We may update these terms from time to time. If
          a change is material, we will tell you in the app or by email before it takes effect.
          If you keep using Pengu after that, you accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection id="eligibility" title="2. Eligibility and accounts">
        <ul>
          <li>You must be at least 18 years old and able to enter a binding contract.</li>
          <li>Give accurate information when you sign up and keep it up to date.</li>
          <li>
            You are responsible for keeping your login secure and for everything that happens
            under your account. If you think someone else has accessed it, tell us right away.
          </li>
          <li>One person per account. Don&apos;t share your account or create accounts to get around a suspension or the one-trial-per-device rule.</li>
        </ul>
      </LegalSection>

      <LegalSection id="nests" title="3. Nests and shared content">
        <p>
          A &ldquo;nest&rdquo; is the shared space for one child. When you create one, you
          decide who to invite and what role and access each person has. Members can see
          content in the nest according to that access. Members with the right permissions
          can also add, edit or settle content there.
        </p>
        <ul>
          <li>
            By adding a child to Pengu, you confirm that you are that child&apos;s parent or
            legal guardian (or are acting with their permission), and that you have the right
            to share the child&apos;s information with the people you invite.
          </li>
          <li>
            Content in a nest is a shared family record. If you leave a nest or delete your
            account while other members remain, the content you added stays available to
            them, as described in our <Link href="/privacy#retention">Privacy Policy</Link>.
          </li>
          <li>
            Custody schedules, events and expenses in Pengu are records that you and your
            co-parents keep. They are not court orders. If a court order or a legal agreement
            conflicts with what is in Pengu, the order or agreement wins.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="subscriptions" title="4. Subscriptions and free trial">
        <p>
          Some features need a <strong>Pengu subscription</strong>, including adding calendar
          events, notes, memories, expenses and activity. The price and billing period are
          shown in the app before you buy, and they may vary by country and currency.
        </p>
        <ul>
          <li>
            <strong>Billing:</strong> subscriptions are bought and billed through your Apple
            App Store or Google Play account, under that store&apos;s terms. We don&apos;t
            process payments or see your payment details.
          </li>
          <li>
            <strong>Auto-renewal:</strong> your subscription renews automatically at the end of
            each period, at the then-current price, unless you cancel at least 24 hours before
            the period ends. Your account is charged for the renewal within 24 hours before
            the current period ends.
          </li>
          <li>
            <strong>Free trial:</strong> eligible new subscribers may get a free trial. When it
            ends, you are charged automatically unless you cancel at least 24 hours before the
            trial ends. Each person and each device can claim the trial once. We use a device
            identifier to apply this rule. Any unused part of a trial is forfeited when you
            buy a subscription.
          </li>
          <li>
            <strong>Managing and cancelling:</strong> manage or cancel your subscription in your
            App Store or Google Play account settings. Deleting the app or your Pengu account
            does <em>not</em> cancel your subscription. If you cancel, you keep access until the
            end of the current period.
          </li>
          <li>
            <strong>Refunds:</strong> refunds are handled by Apple or Google under their
            policies. We can&apos;t issue refunds for purchases made through their stores.
          </li>
          <li>
            <strong>Price changes:</strong> if the price changes, you will be told in advance
            as the store&apos;s rules require, and you can cancel before the new price applies.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="your-content" title="5. Your content">
        <p>
          You own the photos, videos, voice messages, notes, messages and other content you
          add to Pengu (&ldquo;your content&rdquo;). You give us a limited, worldwide,
          royalty-free license to host, store, copy, process and display your content. We use
          this license only to run the Service for you and the members of the nests you share
          it with, and for no other purpose. This license ends when your content is deleted
          from the Service, except where the content remains in a shared nest as described
          above.
        </p>
        <p>
          You are responsible for your content. Make sure you have the right to share it,
          including any photos of other people.
        </p>
      </LegalSection>

      <LegalSection id="acceptable-use" title="6. Acceptable use">
        <p>You agree not to:</p>
        <ul>
          <li>Harass, threaten, intimidate, stalk or abuse anyone, including your co-parents.</li>
          <li>Post content that is unlawful, hateful, sexually explicit, or that exploits or endangers a child in any way.</li>
          <li>Add information about a child you don&apos;t have authority to share, or invite people to a nest to cause harm.</li>
          <li>Impersonate anyone or misrepresent your relationship to a child.</li>
          <li>Access or try to access nests, accounts or data you aren&apos;t authorized to see.</li>
          <li>Reverse-engineer, scrape, overload or interfere with the Service, or get around its security, permissions or trial limits.</li>
          <li>Use the Service for spam or any commercial purpose other than managing your own family.</li>
        </ul>
        <p>
          We report child sexual abuse material to the appropriate authorities.
        </p>
      </LegalSection>

      <LegalSection id="safety" title="7. Reporting and blocking">
        <p>
          You can report a message, memory or note that breaks these terms, and you can block
          another member. Blocking mutes their notifications and hides their chat messages
          wherever you share a nest. Shared records in the nest stay in place. We review
          reports and may remove content or suspend accounts that break these terms. If
          someone is in immediate danger, contact local emergency services first.
        </p>
      </LegalSection>

      <LegalSection id="not-advice" title="8. Not legal or financial advice">
        <p>
          Pengu is an organizing and communication tool. Nothing in it is legal, financial,
          tax, medical or psychological advice. Expense totals and balances are calculated from
          what members enter, and they may not reflect what anyone legally owes. Talk to a
          qualified professional about custody, support or other legal matters.
        </p>
      </LegalSection>

      <LegalSection id="our-rights" title="9. Pengu's rights">
        <p>
          Pengu, its name, logo, design and software belong to {LEGAL.company} and its
          licensors. We give you a personal, non-exclusive, non-transferable, revocable license
          to use the app for its intended purpose, under these terms. If you send us feedback,
          we may use it without any obligation to you.
        </p>
        <p>
          We are always improving Pengu. We may add, change or remove features, and we will
          try to give you reasonable notice of changes that significantly affect you.
        </p>
      </LegalSection>

      <LegalSection id="termination" title="10. Ending your use">
        <p>
          You can stop using Pengu at any time and delete your account from{" "}
          <strong>Account → Privacy &amp; data</strong>. Remember to cancel your subscription
          separately in the App Store or Google Play. We may suspend or end your access if you
          seriously or repeatedly break these terms, if the law requires it, or if your use
          puts others at risk. Where it&apos;s appropriate, we will tell you first. Sections that
          by their nature should survive termination will survive it, including sections 5, 8
          and 11 to 16.
        </p>
      </LegalSection>

      <LegalSection id="disclaimers" title="11. Disclaimers">
        <p>
          We work hard to keep Pengu reliable, but the Service is provided{" "}
          <strong>&ldquo;as is&rdquo; and &ldquo;as available&rdquo;</strong>. To the fullest
          extent the law allows, we disclaim all warranties, express or implied, including
          merchantability, fitness for a particular purpose and non-infringement. We
          don&apos;t guarantee that the Service will be uninterrupted or error-free, or that
          notifications or reminders will always be delivered on time. Don&apos;t rely on
          Pengu as your only record of important dates or documents.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="12. Limitation of liability">
        <p>
          To the fullest extent the law allows, Pengu will not be liable for any indirect,
          incidental, special, consequential or punitive damages, or for loss of data, profits
          or goodwill. Our total liability for any claim relating to the Service is limited
          to the greater of the amount you paid us in the 12 months before the claim and
          USD $50. Some jurisdictions don&apos;t allow these limitations, so they may not
          apply to you. Nothing in these terms limits liability that can&apos;t be limited
          by law.
        </p>
      </LegalSection>

      <LegalSection id="indemnity" title="13. Indemnity">
        <p>
          To the extent the law allows, you agree to defend and indemnify Pengu against any
          claims, losses and costs (including reasonable legal fees) that arise from your
          content, from your misuse of the Service, or from your breach of these terms.
        </p>
      </LegalSection>

      <LegalSection id="law" title="14. Governing law and disputes">
        <p>
          These terms are governed by the laws of {LEGAL.jurisdiction}, without regard to its
          conflict-of-law rules. Before filing a claim, please contact us at{" "}
          <a href={mail}>{LEGAL.contactEmail}</a> so we can try to resolve it informally.
          Disputes will be heard in the courts of {LEGAL.jurisdiction}, unless the law where
          you live gives you the right to bring a claim in your local courts. If you are a
          consumer, you keep any mandatory protections that your local law gives you.
        </p>
      </LegalSection>

      <LegalSection id="app-stores" title="15. App store terms">
        <p>
          If you downloaded Pengu from the Apple App Store, you acknowledge that these terms
          are between you and Pengu, not Apple. Apple is not responsible for the app or its
          content, and it has no obligation to provide maintenance or support. Apple and its
          subsidiaries are third-party beneficiaries of these terms and may enforce them
          against you. Your use of the app must also comply with Apple&apos;s Licensed
          Application End User License Agreement and the App Store&apos;s usage rules. If you
          downloaded Pengu from Google Play, Google Play&apos;s terms also apply. If those
          terms conflict with these, the store&apos;s terms win for matters the store
          controls.
        </p>
      </LegalSection>

      <LegalSection id="general" title="16. General">
        <p>
          These terms, together with our Privacy Policy, are the entire agreement between you
          and Pengu about the Service. If any part is found unenforceable, the rest still
          applies. If we don&apos;t enforce a provision right away, we haven&apos;t waived it.
          You may not transfer these terms without our consent. We may transfer them as part
          of a merger, acquisition or sale of assets.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="17. Contact us">
        <p>
          Questions about these terms: <a href={mail}>{LEGAL.contactEmail}</a>
          <br />
          {LEGAL.company}, {LEGAL.address}
        </p>
      </LegalSection>
    </LegalPage>
  );
}
