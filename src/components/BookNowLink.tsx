/**
 * Smart booking link — opens the booking app with deep-linked service.
 * If a custom URL is provided, uses that; otherwise links to the booking app.
 */

const BOOKING_APP = "https://proworx-booking-8ee2b7c6.viktor.space";

export function BookNowLink({
  href,
  children,
  className,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
}) {
  // If a custom URL is provided, open it
  if (href) {
    // If it starts with http, open externally; otherwise treat as booking app path
    const isExternal = href.startsWith("http");
    return (
      <a
        href={isExternal ? href : `${BOOKING_APP}${href}`}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  // Default: link to booking app
  return (
    <a href={`${BOOKING_APP}/book`} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
