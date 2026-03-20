import { useQuery, useMutation } from "convex/react";
import { useEffect, useRef } from "react";
import { api } from "../../convex/_generated/api";

// Default values (fallback when Convex hasn't loaded yet)
const DEFAULTS: Record<string, string> = {
  appName: "ProWorx Detailing",
  phone: "(980) 272-1903",
  phoneLink: "tel:+19802721903",
  email: "detailing@proworxdetailing.com",
  address: "4321 Overbecks Ln, Waxhaw, NC 28173",
  instagramUrl: "https://www.instagram.com/proworxdetailing/",
  facebookUrl: "https://www.facebook.com/proworxdetailing",
  googleBusinessUrl: "https://g.page/proworxdetailing",
  giftCardsUrl: "https://app.squareup.com/gift/KAXAX104TMA6W/order",
  bookingUrl: "https://book.squareup.com/appointments/wa9b2qyqjdx71w/location/9VRKFJAZZM3HG",
  ceramicDepositUrl: "https://square.link/u/NwnNJRm7",
  wisetackUrl: "https://www.wisetack.com/",
  hoursWeekday: "9:30 AM – 6:00 PM",
  hoursSaturday: "9:30 AM – 3:00 PM",
  hoursSunday: "Closed",
};

/**
 * Hook: returns all siteConfig values as a Record<string, string>
 * Auto-seeds on first load if tables are empty.
 */
export function useSiteConfig() {
  const allConfig = useQuery(api.cms.getAllConfig);
  const seed = useMutation(api.cms.checkAndSeed);
  const seeded = useRef(false);

  useEffect(() => {
    if (allConfig !== undefined && allConfig.length === 0 && !seeded.current) {
      seeded.current = true;
      seed().catch(console.error);
    }
  }, [allConfig, seed]);

  if (allConfig === undefined) {
    // Loading state — return defaults
    return { config: DEFAULTS, isLoading: true };
  }

  const config: Record<string, string> = { ...DEFAULTS };
  for (const item of allConfig) {
    config[item.key] = item.value;
  }
  return { config, isLoading: false };
}

/**
 * Hook: returns services grouped by category
 */
export function useServices() {
  const allServices = useQuery(api.cms.getAllServices);
  const standardDetail = useQuery(api.cms.getStandardDetail);

  if (allServices === undefined) {
    return { services: null, standardDetail: null, isLoading: true };
  }

  const grouped: Record<string, typeof allServices> = {};
  for (const s of allServices) {
    if (!grouped[s.category]) grouped[s.category] = [];
    grouped[s.category].push(s);
  }
  // Sort each category by order
  for (const cat of Object.keys(grouped)) {
    grouped[cat].sort((a, b) => a.order - b.order);
  }

  return { services: grouped, standardDetail: standardDetail ?? null, isLoading: false };
}

/**
 * Hook: returns membership plans
 */
export function useMemberships() {
  const memberships = useQuery(api.cms.getMemberships);
  if (memberships === undefined) {
    return { memberships: null, isLoading: true };
  }
  return { memberships, isLoading: false };
}
