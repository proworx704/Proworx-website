import type { ReactNode } from "react";
import { Info } from "lucide-react";

/** Shown under every price table / pricing section (Tyler, 2026-11-28). */
export const STARTING_PRICE_NOTE_TEXT =
  "Prices shown are starting prices. Your final price is shown when you book and is based on your location, which covers the drive to you and the local sales tax.";

export function StartingPriceNote({ className = "" }: { className?: string }) {
  return (
    <p className={`mt-4 text-xs leading-relaxed text-muted-foreground ${className}`}>
      {STARTING_PRICE_NOTE_TEXT}
    </p>
  );
}

/**
 * Renders a price as "Starting at $X". Accepts "$X", "Starting at $X" or a bare amount;
 * the "Starting at" prefix is drawn smaller so the amount stays the focus. Non-price
 * strings ("Price varies") render unchanged.
 */
export function PriceLabel({ price, suffix }: { price: string | number; suffix?: ReactNode }) {
  const raw = String(price).trim();
  const m = raw.match(/^starting at\s+/i);
  const amount = m ? raw.slice(m[0].length) : raw;
  const isPrice = /^\$\d/.test(amount);
  return (
    <>
      {isPrice && (
        <span className="text-[max(0.75rem,0.55em)] font-medium text-muted-foreground">{"Starting at "}</span>
      )}
      {amount}
      {suffix}
    </>
  );
}

export const PRICING_DISCLAIMER_TEXT =
  "All prices shown are starting estimates. Final pricing is based on the actual condition of your vehicle: heavy soiling, pet hair, excessive dog hair, sand, stains, odors, water spots, heavy contamination, or any additional labor required will be quoted as an additional cost based on condition. We confirm final pricing with you before any work begins.";

/**
 * Site-wide pricing disclaimer. Rendered on every public page (see SiteLayout in App.tsx)
 * so the condition-based pricing policy is clearly stated everywhere prices appear.
 */
export function PricingDisclaimer() {
  return (
    <aside className="border-t border-border bg-muted/50" aria-label="Pricing disclaimer">
      <div className="mx-auto flex max-w-5xl items-start gap-3 px-4 py-5 sm:px-6">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
        <p className="text-sm leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">Pricing note:</span> {PRICING_DISCLAIMER_TEXT}
        </p>
      </div>
    </aside>
  );
}

/**
 * Compact one-line version placed directly under booking CTAs so customers
 * see the condition-based pricing policy before they book.
 */
export function BookingPriceNote({ className = "" }: { className?: string }) {
  return (
    <p className={`mt-3 text-xs leading-snug text-muted-foreground ${className}`}>
      Prices are starting estimates. Final price depends on your vehicle's condition, and any
      additional labor required is an extra cost. We confirm your total before we start.
    </p>
  );
}
