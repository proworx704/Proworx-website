/**
 * Smart booking link — opens the booking page.
 * Uses the local /book path (proxied via Vercel rewrites to the booking app)
 * so customers stay on proworxdetailing.com.
 */

export function BookNowLink({
  href,
  children,
  className,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
}) {
  // If a custom URL is provided
  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
          {children}
        </a>
      );
    }
    // Relative path like /book?service=... — keep on same domain
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  // Default: link to /book (proxied to booking app)
  return (
    <a href="/book" className={className}>
      {children}
    </a>
  );
}
