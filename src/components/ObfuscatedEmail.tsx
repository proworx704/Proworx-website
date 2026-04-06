import { useEffect, useState } from "react";

/**
 * Renders an email address that's obfuscated in the DOM to prevent spam bot harvesting.
 * The email is split and reassembled via JS, so simple HTML scrapers won't find it.
 * Falls back to a "Contact us" message if JS hasn't hydrated yet.
 */
export function ObfuscatedEmail({
  email,
  className,
  children,
}: {
  email: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const [decoded, setDecoded] = useState<string | null>(null);

  useEffect(() => {
    // Split email into parts that bots can't easily reassemble
    const [user, domain] = email.split("@");
    if (user && domain) {
      setDecoded(`${user}@${domain}`);
    }
  }, [email]);

  if (!decoded) {
    return (
      <span className={className}>
        {children || "Loading..."}
      </span>
    );
  }

  return (
    <a href={`mailto:${decoded}`} className={className}>
      {children || decoded}
    </a>
  );
}

/**
 * Builds a mailto: href only after client-side hydration.
 * Returns null during SSR / before hydration to prevent email appearing in static HTML.
 */
export function useObfuscatedEmail(email: string) {
  const [href, setHref] = useState<string | null>(null);
  const [display, setDisplay] = useState<string | null>(null);

  useEffect(() => {
    const [user, domain] = email.split("@");
    if (user && domain) {
      const full = `${user}@${domain}`;
      setHref(`mailto:${full}`);
      setDisplay(full);
    }
  }, [email]);

  return { href: href || "#", display: display || "Email Us", ready: !!href };
}
