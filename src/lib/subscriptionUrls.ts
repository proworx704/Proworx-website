/**
 * Square subscription plan checkout URLs.
 *
 * Monthly-only maintenance plans (simplified Aug 2026 — biweekly/quarterly/
 * annually and the Interior Only plan were dropped).
 * Each Square plan contains multiple vehicle-size variations — the customer
 * picks their size at checkout.
 *
 * URL is a shareable Square checkout link (square.link/u/XXX).
 */

/* ── Plan types ── */
export type SubscriptionPlanType = "inside-out" | "exterior";

export interface SubscriptionPlan {
  name: string;
  shortName: string;
  description: string;
  monthlyUrl: string;
}

export const SUBSCRIPTION_PLANS: Record<SubscriptionPlanType, SubscriptionPlan> = {
  "inside-out": {
    name: "Inside/Out Maintenance",
    shortName: "Full Inside & Out",
    description: "Complete interior and exterior detail every visit — our most popular plan.",
    monthlyUrl: "https://square.link/u/fTaLMr7B",
  },
  exterior: {
    name: "Exterior Only Maintenance",
    shortName: "Exterior Only",
    description: "Professional hand wash, wheels, tires, and exterior protection every visit.",
    monthlyUrl: "https://square.link/u/6SG0qpPh",
  },
};

/** All plan types in display order. */
export const PLAN_TYPE_ORDER: SubscriptionPlanType[] = ["inside-out", "exterior"];

/** Helper: get the monthly checkout URL for a plan type */
export function getCheckoutUrl(planType: SubscriptionPlanType): string {
  return SUBSCRIPTION_PLANS[planType].monthlyUrl;
}
