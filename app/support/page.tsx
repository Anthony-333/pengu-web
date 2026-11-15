import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection, legalMetadata } from "../_components/LegalPage";

export const metadata: Metadata = legalMetadata(
  "Support",
  "Get help with Pengu: contact support, delete your account, manage or cancel your subscription, and report abuse.",
  "/support",
);

const SUPPORT_EMAIL = "support@pengu.family";
const mail = `mailto:${SUPPORT_EMAIL}`;

const toc = [
  { id: "contact", label: "Contact us" },
  { id: "delete-account", label: "Delete your account" },
  { id: "subscription", label: "Manage or cancel your subscription" },
  { id: "report-abuse", label: "Report abuse" },
];

export default function SupportPage() {
  return (
    <LegalPage
      title="Support"
      eyebrow="Help"
      dated={false}
      toc={toc}
      intro={
        <p>
          Need a hand with Pengu? Here is how to reach us and how to do the things people ask
          about most.
        </p>
      }
    >
      <LegalSection id="contact" title="1. Contact us">
        <p>
          Email <a href={mail}>{SUPPORT_EMAIL}</a> with your question. Please send it from
          the email address on your Pengu account, so we can find your account, and tell us
          which phone you use (iPhone or Android). We reply by email.
        </p>
      </LegalSection>

      <LegalSection id="delete-account" title="2. Delete your account">
        <ul>
          <li>
            In the app, go to <strong>Account → Delete account</strong>.
          </li>
          <li>
            We email you a confirmation link that expires after one hour. Your account is
            deleted only once you open that link. If you sign back in before then, you can
            cancel the deletion.
          </li>
          <li>
            Deleting your account does <em>not</em> cancel a Pengu Pro subscription. Cancel it
            in the App Store or Google Play as described below.
          </li>
        </ul>
        <p>
          What is deleted, and what stays in nests shared with others, is explained in our{" "}
          <Link href="/privacy#retention">Privacy Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection id="subscription" title="3. Manage or cancel your subscription">
        <p>
          Pengu Pro is billed by Apple or Google, so you manage and cancel it in your store
          account, not in Pengu:
        </p>
        <ul>
          <li>
            <strong>iPhone:</strong> open <strong>Settings</strong>, tap your name, then{" "}
            <strong>Subscriptions</strong>, and choose Pengu.
          </li>
          <li>
            <strong>Android:</strong> open the <strong>Google Play</strong> app, tap your
            profile picture, then <strong>Payments &amp; subscriptions → Subscriptions</strong>,
            and choose Pengu.
          </li>
        </ul>
        <p>
          Cancel at least 24 hours before the current period ends to avoid the next renewal.
          You keep Pengu Pro until the end of the period you paid for. Deleting the app or your
          Pengu account does not cancel the subscription. Refunds are handled by Apple or
          Google under their policies. See <Link href="/terms#subscriptions">Subscriptions</Link>{" "}
          in our Terms of Service for the full details.
        </p>
      </LegalSection>

      <LegalSection id="report-abuse" title="4. Report abuse">
        <ul>
          <li>
            <strong>Report content:</strong> use the <strong>Report</strong> option on a
            message in chat, a memory or a note. We review reports.
          </li>
          <li>
            <strong>Block someone:</strong> tap <strong>Block</strong> on a member&apos;s
            profile. Blocking mutes their notifications and hides their chat messages wherever
            you share a nest.
          </li>
          <li>
            For anything else, email <a href={mail}>{SUPPORT_EMAIL}</a>.
          </li>
        </ul>
        <p>
          If someone is in immediate danger, contact local emergency services first.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
