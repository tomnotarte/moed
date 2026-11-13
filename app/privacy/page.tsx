import { LegalPage } from "@/components/LegalPage";

export const metadata = { title: "Privacy Policy — Moed" };

const h2 = "pt-6 font-semibold text-[20px] text-ink";
const list = "list-disc space-y-2 pl-6";

export default function Page() {
  return (
    <LegalPage title="Privacy Policy">
      <p className="text-ink/60">Last updated: November 2026</p>

      <p>
        Moed (&ldquo;the app&rdquo;) is a devotional companion app. This policy explains what
        information the app collects and how it&rsquo;s used.
      </p>

      <h2 className={h2}>Information We Collect</h2>
      <ul className={list}>
        <li>
          <strong>Account information:</strong> your email address and display name, used to
          create and manage your account.
        </li>
        <li>
          <strong>Profile information:</strong> an optional profile photo and birthday.
        </li>
        <li>
          <strong>Church membership:</strong> the church you select, which may require approval
          from that church&rsquo;s admin before certain content is shown.
        </li>
        <li>
          <strong>Location:</strong> when you use &ldquo;Find a Church&rdquo; or tap
          &ldquo;Pray&rdquo; on the Prayer screen, the app requests your device&rsquo;s precise
          location. Location shared while praying is visible to other signed-in users on the
          Prayer Map; this is optional each time and can be declined without affecting the rest
          of the app.
        </li>
        <li>
          <strong>Content you create:</strong> SOAP journal entries, sermon notes, posts, prayer
          requests, and Bible verse notes.
        </li>
        <li>
          <strong>Device information:</strong> a push notification token, used to deliver
          reminders and updates (such as the Verse of the Day) to your device.
        </li>
      </ul>

      <h2 className={h2}>How We Use Information</h2>
      <p>
        All information collected is used solely to operate and provide the app&rsquo;s features
        — authenticating your account, displaying your content and profile to other users where
        applicable, enabling location-based features, and delivering notifications. We do not use
        your information for advertising, and we do not sell or share your information with data
        brokers or advertising networks.
      </p>

      <h2 className={h2}>Data Storage</h2>
      <p>
        Your information is stored securely using Supabase, our backend service provider, which
        hosts the app&rsquo;s database and handles authentication.
      </p>

      <h2 className={h2}>Data Sharing With Other Users</h2>
      <p>
        Some content is visible to other users of the app by design: your display name and
        profile photo, posts you share, prayer requests, and your location when you choose to
        share it while praying. Journal entries and sermon notes are private to your account.
      </p>

      <h2 className={h2}>Data Retention and Deletion</h2>
      <p>
        You can delete your account at any time from Profile settings, which permanently removes
        your account and all associated data, including journal entries.
      </p>

      <h2 className={h2}>Children&rsquo;s Privacy</h2>
      <p>
        Moed is rated 13+ and is not directed at children under 13. We do not knowingly collect
        information from children under 13.
      </p>

      <h2 className={h2}>Contact</h2>
      <p>
        If you have questions about this privacy policy or your data, contact us at{" "}
        <a href="mailto:tomnotarte@gmail.com" className="underline underline-offset-2">
          tomnotarte@gmail.com
        </a>
        .
      </p>
    </LegalPage>
  );
}
