import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL, LegalPage, LegalSection } from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Pengu collects, uses, shares and protects the information co-parents and their families keep in the app.",
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy Policy — Pengu", url: "/privacy" },
};

const toc = [
  { id: "who-we-are", label: "Who we are" },
  { id: "information-we-collect", label: "Information we collect" },
  { id: "device-permissions", label: "Device permissions" },
  { id: "how-we-use", label: "How we use information" },
  { id: "who-can-see", label: "Who can see your information" },
  { id: "service-providers", label: "Service providers" },
  { id: "children", label: "Children's information" },
  { id: "your-choices", label: "Your choices and controls" },
  { id: "retention", label: "Retention and deletion" },
  { id: "security", label: "Security" },
  { id: "your-rights", label: "Your rights" },
  { id: "international", label: "International transfers" },
  { id: "website", label: "This website and cookies" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact us" },
];

const mail = `mailto:${LEGAL.contactEmail}`;

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      toc={toc}
      intro={
        <p>
          Pengu helps co-parents share a calendar, expenses, notes and memories for their
          children. That means you trust us with some of the most personal information a
          family has. This policy explains what we collect, why, who can see it, and the
          controls you have. We don&apos;t sell your information, we don&apos;t show ads, and
          we don&apos;t track you across other apps or websites.
        </p>
      }
    >
      <LegalSection id="who-we-are" title="1. Who we are">
        <p>
          Pengu is provided by {LEGAL.company}, {LEGAL.address} (&ldquo;Pengu&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;). This policy covers the Pengu mobile apps for iOS
          and Android and the website at pengu.family (together, the &ldquo;Service&rdquo;).
          We are the controller of the personal information described here.
        </p>
      </LegalSection>

      <LegalSection id="information-we-collect" title="2. Information we collect">
        <h3>Information you give us</h3>
        <ul>
          <li>
            <strong>Account details:</strong> your name and email address, plus a password if
            you sign up with email (stored hashed, never in plain text). If you sign in with
            Google or Apple, we receive your name, email address and, where available, your
            profile photo from that provider.
          </li>
          <li>
            <strong>Profile:</strong> the display name and color you use in each nest, and an
            optional profile photo.
          </li>
          <li>
            <strong>Information about your children:</strong> name, date of birth or age,
            pronouns, gender, an optional photo, and the custody rotation you set up.
          </li>
          <li>
            <strong>Nest content:</strong> calendar events and handovers, custody schedule
            proposals, transfer notes, shared expenses (amounts, categories, status and receipt
            photos), memories (photos, videos, captions, tags and reactions), activity log
            entries, and chat messages, including any images and voice messages you attach.
          </li>
          <li>
            <strong>Invitations:</strong> when you invite someone, their name and email
            address, the role you give them, and any personal note you add.
          </li>
          <li>
            <strong>Safety reports and blocks:</strong> if you report a message, memory or
            note, we keep the reason and a copy of the reported content so it can be reviewed.
            We also keep a record of anyone you block.
          </li>
          <li>
            <strong>Support:</strong> anything you send us when you email for help or report a
            bug.
          </li>
        </ul>

        <h3>Information collected automatically</h3>
        <ul>
          <li>
            <strong>Usage and diagnostics:</strong> which screens you open, the features you
            use, app lifecycle events, logs and crash information. Collection includes{" "}
            <strong>session replays</strong> that show how you move through the app.
            In these replays, all text you type and all images are masked on your device before
            anything is sent, so they don&apos;t contain your children&apos;s photos, your
            messages or your receipts. You can turn analytics off at any time (see{" "}
            <Link href="#your-choices">Your choices</Link>).
          </li>
          <li>
            <strong>Device identifier:</strong> an identifier for your device, used to work
            out whether you&apos;re eligible for the free trial and to prevent the trial from
            being claimed repeatedly with new accounts.
          </li>
          <li>
            <strong>Push notification token:</strong> lets us send notifications to your
            device.
          </li>
          <li>
            <strong>Subscription status:</strong> whether you have an active subscription or
            trial, and when it renews or expires. Payments are handled entirely by Apple or
            Google. We never see your card details.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="device-permissions" title="3. Device permissions">
        <p>
          Pengu asks for access to device features only when you use something that needs them,
          and you can change these permissions at any time in your device settings.
        </p>
        <ul>
          <li>
            <strong>Camera and photo library:</strong> to add memories, attach photos to
            messages, photograph receipts and set profile pictures. We upload only the photos
            and videos you choose.
          </li>
          <li>
            <strong>Microphone:</strong> to record voice messages, and only while you are
            recording one.
          </li>
          <li>
            <strong>Calendar:</strong> to add your child&apos;s handovers and events to your
            device calendar and keep them updated. Pengu may also read your device calendar
            so it can show your other events next to the nest calendar. That reading happens
            on your device. We don&apos;t upload the events in your device calendar to our
            servers.
          </li>
          <li>
            <strong>Notifications:</strong> to tell you about new messages, notes, expenses,
            events, memories and invitations.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="how-we-use" title="4. How we use information">
        <ul>
          <li>To provide the Service: create your account and nests, sync shared content between co-parents, and send notifications and emails you need (such as verification, password reset, invitations and account-deletion confirmation).</li>
          <li>To manage subscriptions and free-trial eligibility.</li>
          <li>To keep Pengu safe: authenticate requests, enforce nest permissions, prevent abuse and fraud, and review content reported to us.</li>
          <li>To understand how Pengu is used, fix bugs and improve features.</li>
          <li>To respond to your support requests.</li>
          <li>To meet legal obligations and enforce our <Link href="/terms">Terms of Service</Link>.</li>
        </ul>
        <p>
          Where laws such as the GDPR apply, we rely on: <strong>performance of a contract</strong>{" "}
          (providing the Service you signed up for), <strong>legitimate interests</strong>{" "}
          (security, abuse prevention and product improvement), <strong>consent</strong>{" "}
          (analytics and device permissions, which you can withdraw), and{" "}
          <strong>legal obligation</strong> where it applies.
        </p>
        <p>
          We do not sell or rent personal information. We do not use it for advertising, and we
          do not share it for cross-context behavioral advertising.
        </p>
      </LegalSection>

      <LegalSection id="who-can-see" title="5. Who can see your information">
        <p>
          A nest is shared space. Content you add to a nest is visible to the other members of
          that nest, according to the role and module access each member has been given (for
          example, a view-only member, or one who can see the calendar but not expenses).
          Your display name and color appear next to the things you add.
        </p>
        <ul>
          <li>
            <strong>Your email address</strong> is shown to your co-parents only if
            &ldquo;Share email&rdquo; is on in your privacy settings.
          </li>
          <li>
            <strong>Whether you have a Pengu account</strong> can be confirmed to someone who
            enters your email address only if &ldquo;Discoverable by email&rdquo; is on.
            Invitations sent to your email still reach you either way.
          </li>
          <li>
            <strong>Push notifications</strong> may show message and note text on your lock
            screen. You can turn on &ldquo;Hide push content&rdquo; to keep that text off it.
          </li>
        </ul>
        <p>
          Please think carefully about who you invite to a nest. Anything shared there can be
          seen, and potentially saved or screenshotted, by its members.
        </p>
      </LegalSection>

      <LegalSection id="service-providers" title="6. Service providers">
        <p>
          We use trusted providers to run Pengu. They process information on our behalf, under
          contracts that limit what they can do with it:
        </p>
        <ul>
          <li><strong>Convex</strong>: application database and backend.</li>
          <li><strong>Cloudflare (R2)</strong>: storage for photos, videos, voice messages and receipts.</li>
          <li><strong>Resend</strong>: delivery of account and invitation emails.</li>
          <li><strong>Expo, Apple Push Notification service and Firebase Cloud Messaging</strong>: delivery of push notifications.</li>
          <li><strong>PostHog</strong>: product analytics, diagnostics and session replay.</li>
          <li><strong>RevenueCat</strong>: subscription management and entitlement status.</li>
          <li><strong>Apple and Google</strong>: sign-in (if you choose it), app distribution and payment processing.</li>
        </ul>
        <p>
          We may also disclose information if the law requires it, to protect the rights,
          safety or property of our users or others, or as part of a merger, acquisition or
          sale of assets. If that happens, this policy will continue to apply to your
          information.
        </p>
      </LegalSection>

      <LegalSection id="children" title="7. Children's information">
        <p>
          Pengu is for adults (parents, step-parents and guardians) and is not meant to be used
          by children. You must be 18 or older to create an account. Children don&apos;t sign
          in and we don&apos;t knowingly collect information directly from children.
        </p>
        <p>
          The Service does hold information that adults enter <em>about</em> children. We treat
          it with extra care. We use it only to provide the Service to that child&apos;s
          nest, never for advertising or profiling. We store media under keys tied to the
          child&apos;s nest, so that every request is checked against nest membership. Images are
          masked out of analytics session replays. By adding a child, you confirm that you
          have the authority to share their information with the people you invite.
        </p>
        <p>
          If you believe a child has created an account, or that information about a child
          was added without proper authority, contact us at{" "}
          <a href={mail}>{LEGAL.contactEmail}</a> and we will look into it.
        </p>
      </LegalSection>

      <LegalSection id="your-choices" title="8. Your choices and controls">
        <p>In the app, under <strong>Account → Privacy &amp; data</strong>, you can:</p>
        <ul>
          <li>Choose whether co-parents can see your email address and whether you are discoverable by email.</li>
          <li>Hide message and note content from push notifications.</li>
          <li>Turn analytics (including session replay) off or back on.</li>
          <li>
            <strong>Export your data</strong> as a JSON file. The export contains what your
            account can currently see in each of your nests. For very large histories it is a
            recent snapshot, and the file marks any section that was shortened.
          </li>
          <li><strong>Delete your account</strong> (see below).</li>
        </ul>
        <p>
          You can also change device permissions in your phone&apos;s settings, and manage or
          cancel your subscription through the App Store or Google Play.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="9. Retention and deletion">
        <p>
          We keep your information for as long as your account is active. You can delete your
          account from <strong>Account → Privacy &amp; data</strong>. To protect shared family
          records from someone holding an unlocked phone, we email you a confirmation link
          that expires after one hour. Your account is deleted only once you open that link.
        </p>
        <p>When you confirm deletion:</p>
        <ul>
          <li>Your account, sign-in sessions, profile, push tokens, notifications, sent invitations, blocks and the reports you filed are deleted.</li>
          <li>For any nest where you are the <strong>only remaining member</strong>, the whole nest is deleted, along with its calendar, notes, expenses, memories, activity, messages and stored media.</li>
          <li>
            For nests that <strong>still have other members</strong>, your membership is
            removed, but content you contributed stays in the nest. It is part of the family&apos;s
            shared record that the other members rely on. That content is deleted when the
            nest itself is deleted.
          </li>
          <li>If you signed in with Apple, we revoke Pengu&apos;s access to your Apple ID.</li>
        </ul>
        <p>
          We keep a few records after deletion. Device identifiers linked to free-trial use are
          kept so the trial can&apos;t be claimed again on the same device. Reports that others
          filed about content you posted stay with that nest as a moderation record. Our service
          providers may hold residual copies in backups for a limited time before they are
          overwritten. We may also keep information where the law requires it.
        </p>
      </LegalSection>

      <LegalSection id="security" title="10. Security">
        <p>
          Every request to read or change nest content is checked on our servers against your
          membership and permissions in that nest. Photos, videos, voice messages and
          receipts sit in private storage and can only be opened through links that are
          issued to authorized members and expire after an hour. Data is encrypted in transit.
          Sign-in tokens are kept in your device&apos;s secure storage.
        </p>
        <p>
          No system is perfectly secure. If you think your account has been compromised, reset
          your password and contact us right away.
        </p>
      </LegalSection>

      <LegalSection id="your-rights" title="11. Your rights">
        <p>
          Depending on where you live (for example, in the EU, the UK, or California and other
          US states), you may have the right to access, correct, delete or receive a copy of your personal
          information, to object to or restrict certain processing, and to withdraw consent.
          Most of this you can do directly in the app. For anything else, email{" "}
          <a href={mail}>{LEGAL.contactEmail}</a>. We will respond within the time the law
          requires and won&apos;t treat you differently for exercising your rights. You can
          also complain to your local data protection authority.
        </p>
      </LegalSection>

      <LegalSection id="international" title="12. International transfers">
        <p>
          Our service providers may process information in the United States and other
          countries whose data protection laws may differ from yours. Where required, we rely
          on appropriate safeguards such as Standard Contractual Clauses for these transfers.
        </p>
      </LegalSection>

      <LegalSection id="website" title="13. This website and cookies">
        <p>
          pengu.family is an informational site. It doesn&apos;t require an account and
          doesn&apos;t use advertising or analytics cookies. Our hosting provider may keep
          standard server logs (such as IP address and browser type) to operate and secure the
          site.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="14. Changes to this policy">
        <p>
          We may update this policy as Pengu changes. When we do, we will update the effective
          date above. If a change is significant, we will let you know in the app or by email
          before it takes effect.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="15. Contact us">
        <p>
          Questions or requests about privacy: <a href={mail}>{LEGAL.contactEmail}</a>
          <br />
          {LEGAL.company}, {LEGAL.address}
        </p>
      </LegalSection>
    </LegalPage>
  );
}
