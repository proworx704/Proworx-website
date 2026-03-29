/**
 * Smart booking link — opens the booking app directly.
 * Links to book.proworxdetailing.com to avoid Safe Browsing cache issues
 * with the /book proxy route.
 * Also rewrites any legacy viktor.space URLs stored in the CMS.
 * Fires a GA4 'book_now_click' event for conversion tracking.
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

/** Fire GA4 event when user clicks a booking link */
function trackBookNowClick(destination: string) {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", "book_now_click", {
      event_category: "engagement",
      event_label: destination,
      link_url: destination,
    });
  }
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
        <a href={safeUrl} className={className} onClick={() => trackBookNowClick(safeUrl)}>
          {children}
        </a>
      );
    }
    // Relative path like /book?service=... — rewrite to booking app domain
    const fullUrl = `${BOOKING_APP}${href}`;
    return (
      <a href={fullUrl} className={className} onClick={() => trackBookNowClick(fullUrl)}>
        {children}
      </a>
    );
  }

  // Default: link directly to booking app
  const defaultUrl = `${BOOKING_APP}/book`;
  return (
    <a href={defaultUrl} className={className} onClick={() => trackBookNowClick(defaultUrl)}>
      {children}
    </a>
  );
}
