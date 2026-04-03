import { useQuery, useMutation } from "convex/react";
import { useEffect, useRef } from "react";
import { api } from "../../convex/_generated/api";

// Default values (fallback when Convex hasn't loaded yet)
const DEFAULTS: Record<string, string> = {
  appName: "ProWorx Detailing",
  phone: "(980) 272-1903",
  phoneLink: "tel:+19802721903",
  email: "detailing@proworxdetailing.com",
  address: "3008 Collaroy Rd, Waxhaw, NC 28173",
  instagramUrl: "https://www.instagram.com/proworxdetailing/",
  facebookUrl: "https://www.facebook.com/proworxdetailing",
  googleBusinessUrl: "https://g.page/proworxdetailing",
  giftCardsUrl: "https://app.squareup.com/gift/KAXAX104TMA6W/order",
  bookingUrl: "https://book.proworxdetailing.com/book",
  ceramicDepositUrl: "https://square.link/u/NwnNJRm7",
  ceramicDeposit1yr: "",
  ceramicDeposit3yr: "",
  ceramicDeposit10yr: "",
  wisetackUrl: "https://www.wisetack.com/",
  // Per-section booking links (empty = use /book page)
  bookingUrlFullDetail: "",
  bookingUrlInterior: "",
  bookingUrlExterior: "",
  bookingUrlAddOns: "",
  bookingUrlPaintCorrection: "",
  bookingUrlHomeCta: "",
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
  const widgetUrls = useQuery(api.cms.getWidgetUrls);
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
  // Merge widget URLs from dedicated query (ensures all are included
  // even if getAllConfig reactive subscription truncates large results)
  if (widgetUrls) {
    for (const w of widgetUrls) {
      config[w.key] = w.value;
    }
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
 * Hook: returns the Standard Interior package
 */
export function useStandardInterior() {
  const data = useQuery(api.cms.getStandardInterior);
  return { standardInterior: data ?? null, isLoading: data === undefined };
}

/**
 * Hook: returns the Standard Exterior package
 */
export function useStandardExterior() {
  const data = useQuery(api.cms.getStandardExterior);
  return { standardExterior: data ?? null, isLoading: data === undefined };
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

/**
 * Hook: returns the URL for a photo slot.
 * If a custom photo was uploaded, returns the Convex storage URL.
 * Otherwise falls back to the static path.
 */
export function usePhoto(slot: string, fallbackPath?: string): string {
  const photo = useQuery(api.cms.getPhoto, { slot });
  if (photo?.storageUrl) return photo.storageUrl;
  if (photo?.staticPath) return photo.staticPath;
  return fallbackPath ?? "";
}

/**
 * Hook: returns all photo slots (for admin panel)
 */
export function useAllPhotos() {
  const photos = useQuery(api.cms.getAllPhotos);
  return { photos: photos ?? null, isLoading: photos === undefined };
}
