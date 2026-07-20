/**
 * Affirm financing badge — shows "Finance with Affirm" messaging.
 * Uses the official Affirm logo SVG inline so we don't depend on external assets.
 */

interface AffirmBadgeProps {
  /** Optional extra classes */
  className?: string;
  /** Compact = just the logo + "as low as $X/mo", full = card with description */
  variant?: "compact" | "full";
  /** Monthly estimate to show (e.g. "$42/mo") */
  monthlyEstimate?: string;
}

function AffirmLogo({ className = "h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 540 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Affirm">
      <path d="M180.2 165.8h-25.5l1.6-8.4c-9.3 7.1-20.2 10.8-31.2 10.8-15.7 0-26-8.7-26-22.3 0-22.6 22.9-33.3 55.8-36.5l1.3-6.4c2.2-11.1-.9-17-12.5-17-10.7 0-21.3 4.9-29.3 11l-7.6-16.4c12.2-8.7 27.1-14.1 41.6-14.1 21 0 34.1 9.8 29.4 33.3l-11.8 58zm-21.8-44.5c-22 3.2-32.6 10.1-32.6 21.2 0 6.8 4.4 10.7 11.8 10.7 8.3 0 16.4-4.2 22.1-10.2l5.8-28.5zm65.5-1.7h-.4l5-22.8h-20.3L195.3 165.8h24l8.1-39.9c4.4-12.2 13.1-19 24.1-19h.5l4.6-22.4c-1.2-.2-2.5-.3-3.7-.3-11.2 0-20.3 6.6-26.5 15.4zm98.9-22.8h-23.2l-7.6 37.2c-3.1 14.8-2.3 20.1 5.1 20.1 3.6 0 7.3-1.2 10.4-3.2l-4 19.8c-5.3 2.6-11.4 4.2-17.5 4.2-19.2 0-22.7-12.6-18.1-34.5l7.5-36.8h-5.7l-.7-6.8 22.7-22.8h6l-2.5 12.4h22.9l-4.1 20.1v.4h8.7zM62.8 165.8h24L100.2 96.8h-24l-13.4 69zM107 69.4c0 8.5-6.7 15-15.1 15-8.5 0-14.6-6.5-14.6-15s6.7-15.1 15.1-15.1c8.5 0 14.6 6.6 14.6 15.1zm118.9 96.4h-24.5l-13.2-69h23.5v.1h.4l-.5 8.2c8.5-6.6 18-10.7 28.1-10.7 6.8 0 12.4 2.4 15.8 7 3.5-3.3 11.2-7 21.7-7 15 0 23 9.2 19.3 27.5l-9.1 43.9h-24l8.2-40.6c1.8-9.8-.3-15-8.2-15-6.1 0-12.5 3.7-16.6 9.2.2 1.7.2 3.6-.2 5.6l-8.5 40.9h-24l8.3-40.6c1.8-9.5-.2-15-8-15-6.1 0-12.2 3.5-16.5 8.8l-9.7 46.7h11.8zm280-69H480l-3.2 15.2h-.4c-2-11.1-10.5-17.6-22-17.6-21 0-36.5 20.7-36.5 44.6 0 17.6 10 28.3 24.7 28.3 11.2 0 19.6-5.9 25.2-15.1h.4l-3.1 14.6H489l13.9-70z" fill="currentColor"/>
      <path d="M454 133.3c0-13.3 6.9-27 18.3-27 8.4 0 12.6 6.4 12.6 15.8 0 14.5-7.3 27.5-18.4 27.5-8 0-12.5-6-12.5-16.3z" fill="currentColor"/>
    </svg>
  );
}

export function AffirmBadge({ className = "", variant = "compact", monthlyEstimate }: AffirmBadgeProps) {
  if (variant === "compact") {
    return (
      <span className={`inline-flex items-center gap-1.5 text-xs text-muted-foreground ${className}`}>
        <AffirmLogo className="h-3.5" />
        {monthlyEstimate ? (
          <span>as low as <span className="font-semibold text-foreground">{monthlyEstimate}</span>/mo</span>
        ) : (
          <span>financing available</span>
        )}
      </span>
    );
  }

  return (
    <div className={`rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 text-center ${className}`}>
      <div className="flex items-center justify-center gap-2 mb-2">
        <AffirmLogo className="h-5" />
        <span className="text-sm font-semibold">Pay Over Time</span>
      </div>
      <p className="text-xs text-muted-foreground">
        Split your payment into easy monthly installments.
        {monthlyEstimate && (
          <> As low as <span className="font-semibold text-foreground">{monthlyEstimate}/mo</span>.</>
        )}
        {" "}No hidden fees. Subject to eligibility.
      </p>
    </div>
  );
}

export { AffirmLogo };
