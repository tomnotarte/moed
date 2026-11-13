"use client";

import { useEffect, useState } from "react";
import { LogoNav } from "./Logo";

/**
 * Supabase redirects here (an https page) after verifying the recovery
 * link, with a PKCE `code` query param (the app uses flowType: 'pkce', so
 * there's no access_token in the hash - just ?code=... to exchange for a
 * session). Mobile browsers and email clients don't reliably follow an
 * https -> custom-scheme redirect on Supabase's own server-side hop, so
 * this page forwards the query string on to the app's moed:// deep link
 * itself, with a manual fallback button.
 */
export function ResetPasswordClient() {
  const [href, setHref] = useState("moed://reset-password");

  useEffect(() => {
    const deepLink = "moed://reset-password" + window.location.search;
    setHref(deepLink);
    window.location.replace(deepLink);
  }, []);

  return (
    <>
      <header className="bg-ink">
        <div className="wrap flex h-16 items-center sm:h-[72px]">
          <a href="/" className="text-cream" aria-label="Moed home">
            <LogoNav className="h-8 w-auto sm:h-9" />
          </a>
        </div>
      </header>
      <main className="wrap max-w-xl py-24 text-center">
        <h1 className="h-display text-[32px] sm:text-[40px]">Opening Moed…</h1>
        <p className="mt-5 text-[16.5px] leading-[1.75] text-ink/75">
          We&rsquo;re taking you back to the app to finish resetting your password.
        </p>
        <a href={href} className="btn-gold mt-9">Open Moed</a>
        <p className="mt-6 text-[14px] text-ink/50">
          If nothing happens, make sure the Moed app is installed, then tap the button above.
        </p>
      </main>
    </>
  );
}
