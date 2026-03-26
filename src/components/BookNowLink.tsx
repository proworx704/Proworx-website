/**
 * Smart booking link — opens the booking app directly.
 * Links to book.proworxdetailing.com to avoid Safe Browsing cache issues
 * with the /book proxy route.
 */

const BOOKING_APP = "https://book.proworxdetailing.com";

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
    // Relative path like /book?service=... — rewrite to booking app domain
    const bookPath = href.startsWith("/book") ? href.replace(/^\/book/, "/book") : href;
    return (
      <a href={`${BOOKING_APP}${bookPath}`} className={className}>
        {children}
      </a>
    );
  }

  // Default: link directly to booking app
  return (
    <a href={`${BOOKING_APP}/book`} className={className}>
      {children}
    </a>
  );
}
