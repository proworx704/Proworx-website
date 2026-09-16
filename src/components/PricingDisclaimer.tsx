import { Info } from "lucide-react";

export const PRICING_DISCLAIMER_TEXT =
  "All prices shown are starting estimates. Final pricing is based on the actual condition of your vehicle — heavy soiling, pet hair, excessive dog hair, sand, stains, odors, water spots, heavy contamination, or any additional labor required will be quoted as an additional cost based on condition. We confirm final pricing with you before any work begins.";

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
