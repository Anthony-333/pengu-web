import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL, LegalPage, LegalSection, legalMetadata } from "../_components/LegalPage";

export const metadata: Metadata = legalMetadata(
  "Privacy Policy",
  "How Pengu collects, uses, shares and protects the information co-parents and their families keep in the app.",
  "/privacy",
);

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
            profile photo from that provider, along with the sign-in tokens it issues. If you
            use Apple&apos;s &ldquo;Hide My Email&rdquo;, we receive the relay address Apple
            gives us instead of your real one.
          </li>
          <li>
            <strong>Profile:</strong> the display name and color you use in each nest, and an
            optional profile photo.
          </li>
          <li>
            <strong>Information about your children:</strong> name, date of birth or age,
            pronouns, gender, an optional photo, and the custody rotation you choose.
          </li>
          <li>
            <strong>Nest content:</strong>
            <ul>
              <li>calendar events and handovers, and custody schedule proposals (the rotation, handover time and any note), including who proposed and who accepted them;</li>
              <li>transfer notes, their priority, and whether they have been acknowledged;</li>
              <li>shared expenses: title, amount, category, date, how the cost is split, status, receipt photos, comments, and, when someone settles up, the settlement note and any proof-of-payment photo;</li>
              <li>memories: photos, videos of up to 60 seconds, captions, tags and reactions;</li>
              <li>activity log entries;</li>
              <li>chat messages, including any photos and voice messages you attach.</li>
            </ul>
          </li>
          <li>
            <strong>Nest membership:</strong> the role each member has (parent, step-parent,
            guardian or view-only) and which parts of the nest they can see or edit.
          </li>
          <li>
            <strong>Invitations:</strong> when you invite someone, their name and email
            address, the role you give them, any personal note you add, and the invite link and
            join code we create for it. To stop join codes being guessed, we count incorrect
            code attempts on your account for a short period.
          </li>
          <li>
            <strong>Safety reports and blocks:</strong> if you report a message, memory or
            note, we keep the reason and a copy of the reported text (up to 500 characters,
            plus a reference to any attached photo, video or voice message) so it can be
            reviewed. The report, with your email address, is sent to our moderation inbox. We
            also keep a record of anyone you block.
          </li>
          <li>
            <strong>Support:</strong> anything you send us when you email for help or report a
            bug, including any screenshots or logs you choose to attach.
          </li>
        </ul>

        <h3>Information collected automatically</h3>
        <ul>
          <li>
            <strong>Sign-in sessions:</strong> a record of each signed-in session, including
            the IP address and device or app type (user agent) it was started from, so we can
            keep your account secure.
          </li>
          <li>
            <strong>Usage analytics and diagnostics:</strong> which screens you open, the
            features you use (for example, that an expense was logged, with its category and a
            rough amount range, never the exact amount), app open and close events, and error
            reports (the error message and where in the app it happened). These events are
            linked to your Pengu account, including your account ID, name and email address,
            so we can investigate problems you report. They also carry your device model,
            operating system, app version, language and time zone, and your IP address, which
            may be used to estimate your approximate location (country or city).
          </li>
          <li>
            <strong>Session replays:</strong> on iOS and Android, analytics also includes
            recordings of how you move through the app&apos;s screens, along with the
            app&apos;s diagnostic log messages. All text you type and all images are masked on
            your device before anything is sent, so replays don&apos;t contain your
            children&apos;s photos, your messages or your receipts. Network traffic is not
            recorded.
          </li>
          <li>
            <strong>Free-plan usage:</strong> counts of what you have added in each nest this
            month (for example, how many expenses or notes), so we can apply the free
            plan&apos;s allowances.
          </li>
          <li>
            <strong>Notifications:</strong> your device&apos;s push notification token and
            platform (iOS or Android), and the history of in-app notifications sent to you.
          </li>
          <li>
            <strong>Subscription status:</strong> whether you have Pengu Pro, which plan, and
            when it renews or expires, as reported by Apple or Google through our subscription
            provider. Payments are handled entirely by Apple or Google. We never see your card
            details.
          </li>
        </ul>
        <p>
          Analytics, including session replay, is on by default and you can turn it off at any
          time (see <Link href="#your-choices">Your choices</Link>).
        </p>

        <h3>Information kept only on your device</h3>
        <p>
          Some things never leave your phone: your sign-in token, the child you last had open,
          your light or dark theme, which screen tours you have already seen, and a list that
          matches nest events to the copies Pengu added to your device calendar. Photos and
          videos you view may also be cached on your device so they load faster.
        </p>
      </LegalSection>

      <LegalSection id="device-permissions" title="3. Device permissions">
        <p>
          Pengu asks for access to device features only when you use something that needs them,
          and you can change these permissions at any time in your device settings.
        </p>
        <ul>
          <li>
            <strong>Camera and photo library:</strong> to add memories, attach photos to
            messages, photograph receipts and proof of payment, and set profile and child
            photos. We upload only the photos and videos you choose. Photos are resized and
            re-compressed on your device before upload.
          </li>
          <li>
            <strong>Microphone:</strong> to record voice messages, and only while you are
            recording one.
          </li>
          <li>
            <strong>Calendar:</strong> to add your child&apos;s handovers and events to a
            &ldquo;Pengu&rdquo; calendar on your device and keep them updated when plans change.
            Pengu reads events only inside that Pengu calendar, to find the ones it added. It
            doesn&apos;t read the events in your other calendars or your reminders, and nothing
            from your device calendar is uploaded to our servers.
          </li>
          <li>
            <strong>Notifications:</strong> to tell you about new messages, notes, expenses,
            events, schedule proposals, memories, invitations and other activity in your
            nests.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="how-we-use" title="4. How we use information">
        <ul>
          <li>To provide the Service: create your account and nests, sync shared content between co-parents, and send notifications and emails you need (such as verification, password reset, invitations and account-deletion confirmation).</li>
          <li>To manage subscriptions and apply the free plan&apos;s allowances.</li>
          <li>To keep Pengu safe: authenticate requests, enforce nest permissions, prevent abuse and fraud, and review content reported to us.</li>
          <li>
            To screen text automatically. When you post a message, note, memory caption,
            expense comment or settlement note, our servers check its text against a short list
            of slurs and explicit threats. Text that matches is refused and not saved. This check is
            automatic and is not used to profile you.
          </li>
          <li>To understand how Pengu is used, fix bugs and improve features.</li>
          <li>To respond to your support requests.</li>
          <li>To meet legal obligations and enforce our <Link href="/terms">Terms of Service</Link>.</li>
        </ul>
        <p>
          Where laws such as the GDPR apply, we rely on: <strong>performance of a contract</strong>{" "}
          (providing the Service you signed up for), <strong>legitimate interests</strong>{" "}
          (security, abuse prevention, and analytics to fix and improve the app, which you can
          turn off at any time), <strong>consent</strong> (device permissions, which you can
          withdraw in your device settings), and <strong>legal obligation</strong> where it
          applies.
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
            &ldquo;Show my email to co-parents&rdquo; is on in your privacy settings.
          </li>
          <li>
            <strong>Whether you have a Pengu account</strong> can be confirmed to someone who
            enters your email address only if &ldquo;Let people find me by email&rdquo; is on.
            Invitations sent to your email still reach you either way.
          </li>
          <li>
            <strong>Push notifications</strong> may show message and note text on your lock
            screen. You can turn on &ldquo;Hide content in notifications&rdquo; to keep that
            text off it.
          </li>
          <li>
            <strong>Invitation emails</strong> show the person you invite your name, the
            child&apos;s name, the role you chose, the join code and any personal note you
            wrote.
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
          <li><strong>Convex</strong>: application database and backend. It stores your account, nest content and the other information described above.</li>
          <li><strong>Cloudflare (R2)</strong>: private storage for photos, videos, voice messages, receipts and proof-of-payment photos.</li>
          <li><strong>Resend</strong>: delivery of account, invitation and moderation emails, including the contents of those emails.</li>
          <li><strong>Expo, Apple Push Notification service and Firebase Cloud Messaging</strong>: delivery of push notifications. They receive your push token and the notification&apos;s title and text.</li>
          <li><strong>PostHog</strong> (United States): product analytics, error reports and session replay, as described in section 2.</li>
          <li><strong>RevenueCat</strong>: subscription management. It receives your Pengu account ID, your purchase and renewal history from the App Store or Google Play, and basic device information.</li>
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
        <p>In the app, under <strong>Account → Privacy &amp; sharing</strong>, you can:</p>
        <ul>
          <li>Choose whether co-parents can see your email address and whether people can find you by email.</li>
          <li>Hide message and note content from push notifications.</li>
          <li>Turn usage analytics (including session replay) off or back on.</li>
          <li>See who can read each nest and, if you are a parent there, change what other members can see.</li>
          <li>
            <strong>Export your data</strong> as a JSON file. The export contains what your
            account can currently see in each of your nests. For very large histories it is a
            recent snapshot, and the file marks any section that was shortened.
          </li>
        </ul>
        <p>
          You can <strong>delete your account</strong> from <strong>Account → Delete
          account</strong> (see below). You can also change device permissions in your
          phone&apos;s settings, and manage or cancel your subscription through the App Store
          or Google Play.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="9. Retention and deletion">
        <p>
          We keep your information for as long as your account is active. Invitations expire
          14 days after they are sent. You can delete your account from{" "}
          <strong>Account → Delete account</strong>. To protect shared family records from
          someone holding an unlocked phone, we email you a confirmation link that expires
          after one hour. Your account is deleted only once you open that link.
        </p>
        <p>When you confirm deletion:</p>
        <ul>
          <li>
            Your account, sign-in sessions, linked Google or Apple sign-ins, profile and
            uploaded profile photo, push tokens, notifications, sent invitations, free-plan
            usage counts, join-code attempt records, blocks you made and blocks others made
            against you, and the reports you filed are deleted.
          </li>
          <li>For any nest where you are the <strong>only remaining member</strong>, the whole nest is deleted, along with its calendar, schedules, notes, expenses and comments, memories and reactions, activity, messages, invitations, reports and stored media.</li>
          <li>
            For nests that <strong>still have other members</strong>, your membership is
            removed, but content you contributed stays in the nest, shown with the display name
            you used there. It is part of the family&apos;s shared record that the other
            members rely on. That content is deleted when the nest itself is deleted.
          </li>
          <li>If you signed in with Apple, we revoke Pengu&apos;s access to your Apple ID.</li>
        </ul>
        <p>
          We keep a few records after deletion. Reports that others filed about content you
          posted stay with that nest as a moderation record, and report emails stay in our
          moderation inbox. Analytics events already sent to PostHog are kept for that
          service&apos;s retention period; email us if you want them deleted too. Your
          subscription history stays with Apple or Google and RevenueCat. Our service
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
          Sign-in tokens are kept in your device&apos;s secure storage. Resetting your
          password signs you out everywhere.
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
