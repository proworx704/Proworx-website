/**
 * Smart booking link — opens the booking app directly.
 * Links to book.proworxdetailing.com to avoid Safe Browsing cache issues
 * with the /book proxy route.
 * Also rewrites any legacy viktor.space URLs stored in the CMS.
 * Fires GA4 + Google Ads conversion events for tracking.
 */

import { trackBookNowConversion } from "@/lib/tracking";

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
        <a href={safeUrl} className={className} onClick={() => trackBookNowConversion(safeUrl)}>
          {children}
        </a>
      );
    }
    // Relative path like /book?service=... — rewrite to booking app domain
    const fullUrl = `${BOOKING_APP}${href}`;
    return (
      <a href={fullUrl} className={className} onClick={() => trackBookNowConversion(fullUrl)}>
        {children}
      </a>
    );
  }

  // Default: link directly to booking app
  const defaultUrl = `${BOOKING_APP}/book`;
  return (
    <a href={defaultUrl} className={className} onClick={() => trackBookNowConversion(defaultUrl)}>
      {children}
    </a>
  );
}
