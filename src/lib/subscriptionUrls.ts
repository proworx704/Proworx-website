/**
 * Square subscription plan checkout URLs.
 *
 * Each plan type has 4 cadences (biweekly / monthly / quarterly / annually).
 * Each Square plan contains 4 vehicle-size variations (Sedan, Small SUV/Truck,
 * Large SUV/Off-Road Truck, Van) — the customer picks their size at checkout.
 *
 * URL format: https://checkout.square.site/merchant/{MERCHANT_ID}/checkout/{PLAN_ID}
 */

const MERCHANT_ID = "KAXAX104TMA6W";
const BASE = `https://checkout.square.site/merchant/${MERCHANT_ID}/checkout`;

/* ── Plan types ── */
export type SubscriptionPlanType =
  | "inside-out"
  | "exterior"
  | "interior"
  | "ceramic-inside-out"
  | "ceramic-exterior"
  | "ceramic-interior";

export type SubscriptionFrequency = "biweekly" | "monthly" | "quarterly" | "annually";

export interface SubscriptionPlan {
  name: string;
  shortName: string;
  description: string;
  ceramic: boolean;
  urls: Record<SubscriptionFrequency, string>;
}

export const SUBSCRIPTION_PLANS: Record<SubscriptionPlanType, SubscriptionPlan> = {
  "inside-out": {
    name: "Inside/Out Maintenance",
    shortName: "Full Inside & Out",
    description: "Complete interior and exterior detail every visit — our most popular plan.",
    ceramic: false,
    urls: {
      biweekly: `${BASE}/QGAMWSPSK3P7TMBVQVS4YO2F`,
      monthly: `${BASE}/5SKKHJOPQPJZN3FX37U4YM5I`,
      quarterly: `${BASE}/PJE5ANU45XXQSGIOBMAOI7BV`,
      annually: `${BASE}/G5ZD4NJSZWUCTTFIR2T456OM`,
    },
  },
  exterior: {
    name: "Exterior Only Maintenance",
    shortName: "Exterior Only",
    description: "Professional hand wash, wheels, tires, and exterior protection every visit.",
    ceramic: false,
    urls: {
      biweekly: `${BASE}/T2DDJ2QNJVOIGV6NNGNZIE6Q`,
      monthly: `${BASE}/J6JV4VJ74AGOUODPZZWKU2WR`,
      quarterly: `${BASE}/3OU5LHSSKAXRBN7IYPAWYPQL`,
      annually: `${BASE}/2K2SMXL57PWFF5SXBJOENMYG`,
    },
  },
  interior: {
    name: "Interior Only Maintenance",
    shortName: "Interior Only",
    description: "Full interior vacuum, wipe-down, and surface care every visit.",
    ceramic: false,
    urls: {
      biweekly: `${BASE}/BNCFO7W5SFEAHHKHUODQNHH5`,
      monthly: `${BASE}/WL7G6VRFFPTTV7DHU5DGEOYS`,
      quarterly: `${BASE}/7J67AHM4AY3FRGYV3RXAOQTS`,
      annually: `${BASE}/UBNLG7PMLLZGCOXERBM5VAWL`,
    },
  },
  "ceramic-inside-out": {
    name: "Ceramic Inside/Out Maintenance",
    shortName: "Ceramic Inside & Out",
    description: "Full I&O detail with GYEON ceramic top-coat refresh and iron decontamination.",
    ceramic: true,
    urls: {
      biweekly: `${BASE}/XSZPZZ2ZG7JVM23J5VNKDXAB`,
      monthly: `${BASE}/56BFX36DC3MOCQK6LRMR7YPH`,
      quarterly: `${BASE}/W4C5FISXUENUUE2ZP6IJMBBS`,
      annually: `${BASE}/BV5BUYHQERXDACQ5PTOE4LQM`,
    },
  },
  "ceramic-exterior": {
    name: "Ceramic Exterior Only Maintenance",
    shortName: "Ceramic Exterior",
    description: "Exterior detail with GYEON ceramic top-coat refresh for coating owners.",
    ceramic: true,
    urls: {
      biweekly: `${BASE}/EKVFB3DOHHTSPFNOZ7OS2MQM`,
      monthly: `${BASE}/4RXSJBRJKC6BJAYOW7KVK66G`,
      quarterly: `${BASE}/5O37TJCHUX26VM27OUVOC72Y`,
      annually: `${BASE}/A6V4UV5MZUOYQGWUHJ2C4NPV`,
    },
  },
  "ceramic-interior": {
    name: "Ceramic Interior Only Maintenance",
    shortName: "Ceramic Interior",
    description: "Interior detail with ceramic trim care and protection for coating owners.",
    ceramic: true,
    urls: {
      biweekly: `${BASE}/VHOOFDDENIVOB2S3Y6YY7WUP`,
      monthly: `${BASE}/HFM6REWUCVXYA7RAU7SVLYT4`,
      quarterly: `${BASE}/F6S4PU4OHT46LOGAVARD2QSS`,
      annually: `${BASE}/5DSG4PODVA5OKXTT2JO54YU2`,
    },
  },
};

/** All plan types in display order (standard first, then ceramic). */
export const PLAN_TYPE_ORDER: SubscriptionPlanType[] = [
  "inside-out",
  "exterior",
  "interior",
  "ceramic-inside-out",
  "ceramic-exterior",
  "ceramic-interior",
];

/** Helper: get checkout URL for a specific plan + frequency */
export function getCheckoutUrl(
  planType: SubscriptionPlanType,
  frequency: SubscriptionFrequency,
): string {
  return SUBSCRIPTION_PLANS[planType].urls[frequency];
}
