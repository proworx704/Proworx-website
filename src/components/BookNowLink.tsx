/**
 * Smart booking link — opens the booking app directly.
 * Links to book.proworxdetailing.com to avoid Safe Browsing cache issues
 * with the /book proxy route.
 * Also rewrites any legacy viktor.space URLs stored in the CMS.
 */

const BOOKING_APP = "https://book.proworxdetailing.com";
const LEGACY_BOOKING_PATTERN = /https?:\/\/proworx-booking[^/]*\.viktor\.space/;

function normalizeBookingUrl(url: string): string {
  // Rewrite any legacy viktor.space booking URLs to production domain
  if (LEGACY_BOOKING_PATTERN.test(url)) {
    return url.replace(LEGACY_BOOKING_PATTERN, BOOKING_APP);
  }
  return url;
}

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
      const safeUrl = normalizeBookingUrl(href);
      return (
        <a href={safeUrl} className={className}>
          {children}
        </a>
      );
    }
    // Relative path like /book?service=... — rewrite to booking app domain
    return (
      <a href={`${BOOKING_APP}${href}`} className={className}>
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
