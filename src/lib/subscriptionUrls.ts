/**
 * Square subscription plan checkout URLs.
 *
 * Each plan type has 4 cadences (biweekly / monthly / quarterly / annually).
 * Each Square plan contains 4 vehicle-size variations (Sedan, Small SUV/Truck,
 * Large SUV/Off-Road Truck, Van) — the customer picks their size at checkout.
 *
 * URLs are shareable Square checkout links (square.link/u/XXX).
 */

/* ── Plan types ── */
export type SubscriptionPlanType =
  | "inside-out"
  | "exterior"
  | "interior";

export type SubscriptionFrequency = "biweekly" | "monthly" | "quarterly" | "annually";

export interface SubscriptionPlan {
  name: string;
  shortName: string;
  description: string;
  urls: Record<SubscriptionFrequency, string>;
}

export const SUBSCRIPTION_PLANS: Record<SubscriptionPlanType, SubscriptionPlan> = {
  "inside-out": {
    name: "Inside/Out Maintenance",
    shortName: "Full Inside & Out",
    description: "Complete interior and exterior detail every visit — our most popular plan.",
    urls: {
      biweekly: "https://square.link/u/0JI1OvbE",
      monthly: "https://square.link/u/fTaLMr7B",
      quarterly: "https://square.link/u/HPD8H99m",
      annually: "https://square.link/u/vDdWApsS",
    },
  },
  exterior: {
    name: "Exterior Only Maintenance",
    shortName: "Exterior Only",
    description: "Professional hand wash, wheels, tires, and exterior protection every visit.",
    urls: {
      biweekly: "https://square.link/u/QyPsNPOH",
      monthly: "https://square.link/u/6SG0qpPh",
      quarterly: "https://square.link/u/fL3FrFXn",
      annually: "https://square.link/u/FcMaegps",
    },
  },
  interior: {
    name: "Interior Only Maintenance",
    shortName: "Interior Only",
    description: "Full interior vacuum, wipe-down, and surface care every visit.",
    urls: {
      biweekly: "https://square.link/u/McgJTokF",
      monthly: "https://square.link/u/U9rcqtz5",
      quarterly: "https://square.link/u/AWw4ew0X",
      annually: "https://square.link/u/5vnJTNae",
    },
  },
};

/** All plan types in display order. */
export const PLAN_TYPE_ORDER: SubscriptionPlanType[] = [
  "inside-out",
  "exterior",
  "interior",
];

/** Helper: get checkout URL for a specific plan + frequency */
export function getCheckoutUrl(
  planType: SubscriptionPlanType,
  frequency: SubscriptionFrequency,
): string {
  return SUBSCRIPTION_PLANS[planType].urls[frequency];
}
