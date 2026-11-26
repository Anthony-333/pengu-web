import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL, LegalPage, LegalSection, legalMetadata } from "../_components/LegalPage";

export const metadata: Metadata = legalMetadata(
  "Terms of Service",
  "The terms that govern your use of Pengu, including the free plan, Pengu Pro subscriptions, shared nests and acceptable use.",
  "/terms",
);

const toc = [
  { id: "acceptance", label: "Accepting these terms" },
  { id: "eligibility", label: "Eligibility and accounts" },
  { id: "nests", label: "Nests and shared content" },
  { id: "subscriptions", label: "Subscriptions" },
  { id: "your-content", label: "Your content" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "safety", label: "Reporting, blocking and moderation" },
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
          <li>One person per account. Don&apos;t share your account or create accounts to get around a suspension or the free plan&apos;s limits.</li>
          <li>
            We will email you about your account and your nests (for example, verification,
            invitations, subscription changes and account deletion). We may also send tips and
            updates, which you can turn off at any time with the unsubscribe link or under{" "}
            <strong>Account → Privacy &amp; sharing</strong>.
          </li>
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
          <li>
            A custody schedule, and its terms such as the handoff time, place and who must
            confirm a handoff, takes effect only once both parents accept it, and changes only
            through a new proposal that both accept. A handoff shown as confirmed records what
            the parents tapped in the app. It is not proof that a handoff did or didn&apos;t
            happen.
          </li>
          <li>
            Notifications, Home Screen widgets and Live Activities can show nest information on
            your device&apos;s screen. You are responsible for who can see or use your device.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="subscriptions" title="4. Subscriptions">
        <p>
          Pengu has a <strong>free plan</strong> and an optional paid subscription,{" "}
          <strong>Pengu Pro</strong>. Pengu Pro is an auto-renewing subscription, offered
          monthly and, where available, annually. The price and billing period are shown in
          the app before you buy, and they may vary by country and currency. There is no free
          trial or introductory offer. Pengu Pro is charged from the day you subscribe.
        </p>
        <ul>
          <li>
            <strong>Free plan:</strong> each person gets these allowances in each nest they
            belong to: 10 expenses a month, 10 handoff notes a month, activity log entries on 7
            days a month, 30 photo memories in total, 5 videos and chat attachments (photos,
            videos and voice notes) a month combined, and up to 2 adults in the nest. Each person
            also gets 500 MB of upload storage in total. Monthly allowances reset on the 1st
            of each month (UTC).
          </li>
          <li>
            <strong>Pengu Pro:</strong> removes these allowances, so you can add as many
            expenses, notes, activity entries, memories, videos and attachments as you need,
            bring more adults into a nest, and upload without the storage cap.
          </li>
          <li>
            <strong>File size limits:</strong> every file has a size limit, including on Pengu
            Pro: 10 MB per photo, 100 MB per video and 25 MB per voice note.
          </li>
          <li>
            <strong>Always free:</strong> the custody schedule and calendar events, chat text
            messages, replying to, acknowledging, settling, approving and commenting on
            content, viewing, editing, deleting and exporting your data, reporting and
            blocking, and deleting your account.
          </li>
          <li>
            <strong>Pro is per person:</strong> Pengu Pro lifts only your own allowances, in
            every nest you belong to. It does not upgrade your co-parent or other members of
            your nests.
          </li>
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
            <strong>Managing and cancelling:</strong> manage or cancel your subscription in your
            App Store or Google Play account settings. Deleting the app or your Pengu account
            does <em>not</em> cancel your subscription. If you cancel, you keep Pengu Pro until
            the end of the current period.
          </li>
          <li>
            <strong>If Pengu Pro ends:</strong> nothing you have already added is locked or
            deleted. You go back to the free plan, and only new additions beyond its
            allowances are refused.
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
          <li>Reverse-engineer, scrape, overload or interfere with the Service, or get around its security, permissions or plan limits.</li>
          <li>Use the Service for spam or any commercial purpose other than managing your own family.</li>
        </ul>
        <p>
          We report child sexual abuse material to the appropriate authorities.
        </p>
      </LegalSection>

      <LegalSection id="safety" title="7. Reporting, blocking and moderation">
        <p>
          Pengu has <strong>zero tolerance</strong> for objectionable content and abusive
          users. Messages, notes, comments, captions and invitations are checked automatically,
          and text containing slurs or threats is refused before it is posted.
        </p>
        <p>
          You can report a message, memory or note that breaks these terms (press and hold it,
          then tap <strong>Report</strong>), and you can block another member from the
          Family screen or the message menu. Blocking mutes their notifications and hides their
          chat messages wherever you share a nest. Shared records in the nest stay in place.
        </p>
        <p>
          We review every report within 24 hours. When content breaks these terms we remove it,
          and we may suspend or permanently close the account of the person who posted it. You
          can also email <a href={mail}>{LEGAL.contactEmail}</a> about abuse. If someone is in
          immediate danger, contact local emergency services first.
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
          <strong>Account → Delete account</strong>. Remember to cancel your subscription
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
          If you downloaded Pengu from the Apple App Store, the following also applies:
        </p>
        <ul>
          <li>
            These terms are between you and Pengu, not Apple. Pengu, not Apple, is solely
            responsible for the app and its content.
          </li>
          <li>
            Your license to use the app is limited to Apple-branded devices that you own or
            control, as allowed by the App Store&apos;s Usage Rules, and the app may also be used
            by other accounts associated with you through Family Sharing where it is offered.
          </li>
          <li>
            Pengu is solely responsible for maintenance and support. Apple has no obligation to
            provide any maintenance or support for the app.
          </li>
          <li>
            If the app fails to conform to any applicable warranty, you may notify Apple, and
            Apple will refund the purchase price (if any) for the app. To the maximum extent the
            law allows, Apple has no other warranty obligation for the app. Any other claims,
            losses, liabilities, damages or costs from a failure to conform to a warranty are
            Pengu&apos;s responsibility, to the extent these terms don&apos;t disclaim them.
          </li>
          <li>
            Pengu, not Apple, is responsible for addressing any claims by you or a third party
            relating to the app or your use of it, including product liability claims, claims
            that the app fails to meet a legal or regulatory requirement, and claims under
            consumer protection, privacy or similar laws.
          </li>
          <li>
            If a third party claims that the app or your use of it infringes their intellectual
            property rights, Pengu, not Apple, is solely responsible for investigating,
            defending, settling and discharging that claim.
          </li>
          <li>
            You confirm that you are not located in a country subject to a U.S. Government
            embargo or designated as a &ldquo;terrorist supporting&rdquo; country, and that you
            are not on any U.S. Government list of prohibited or restricted parties.
          </li>
          <li>
            You must comply with any applicable third-party terms when you use the app, such as
            your mobile carrier&apos;s or internet provider&apos;s terms.
          </li>
          <li>
            Questions, complaints or claims about the app go to Pengu at the contact details in{" "}
            <Link href="#contact">Contact us</Link>.
          </li>
          <li>
            Apple and its subsidiaries are third-party beneficiaries of these terms. Once you
            accept them, Apple has the right (and is deemed to have accepted the right) to
            enforce them against you as a third-party beneficiary.
          </li>
        </ul>
        <p>
          Your use of the app must also comply with Apple&apos;s Licensed Application End User
          License Agreement and the App Store&apos;s Usage Rules. If you downloaded Pengu from
          Google Play, Google Play&apos;s terms also apply. If store terms conflict with these,
          the store&apos;s terms win for matters the store controls.
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
