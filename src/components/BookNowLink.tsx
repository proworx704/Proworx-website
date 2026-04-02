/**
 * Smart booking link — opens the Square booking page directly.
 * Fires GA4 + Google Ads + Meta Pixel conversion events for tracking.
 */

import { trackBookNowConversion } from "@/lib/tracking";

const SQUARE_BOOKING = "https://book.squareup.com/appointments/wa9b2qyqjdx71w/location/9VRKFJAZZM3HG/services";

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
        <a href={href} className={className} onClick={() => trackBookNowConversion(href)}>
          {children}
        </a>
      );
    }
    // Relative path — treat as Square booking
    return (
      <a href={SQUARE_BOOKING} className={className} onClick={() => trackBookNowConversion(SQUARE_BOOKING)}>
        {children}
      </a>
    );
  }

  // Default: link to Square booking
  return (
    <a href={SQUARE_BOOKING} className={className} onClick={() => trackBookNowConversion(SQUARE_BOOKING)}>
      {children}
    </a>
  );
}
