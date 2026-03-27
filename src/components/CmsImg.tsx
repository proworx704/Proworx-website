import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { createContext, useContext, useMemo } from "react";

type PhotoEntry = { url: string; focalY?: number };
type PhotoMap = Record<string, PhotoEntry>;

const PhotoContext = createContext<PhotoMap>({});

/**
 * Wrap your app in this to load all CMS photos once.
 * Child components can use <CmsImg> or usePhotoUrl().
 */
export function PhotoProvider({ children }: { children: React.ReactNode }) {
  const allPhotos = useQuery(api.cms.getAllPhotos);
  
  const photoMap = useMemo(() => {
    const map: PhotoMap = {};
    if (allPhotos) {
      for (const p of allPhotos) {
        map[p.slot] = {
          url: p.storageUrl || p.staticPath,
          focalY: (p as Record<string, unknown>).focalY as number | undefined,
        };
      }
    }
    return map;
  }, [allPhotos]);

  return (
    <PhotoContext.Provider value={photoMap}>
      {children}
    </PhotoContext.Provider>
  );
}

/**
 * Get the URL for a photo slot. Returns custom upload URL if available, else static path.
 */
export function usePhotoUrl(slot: string, fallback: string): string {
  const map = useContext(PhotoContext);
  return map[slot]?.url || fallback;
}

/**
 * Get the focal-Y percentage for a photo slot.
 * Returns the DB value if set, otherwise undefined.
 */
export function usePhotoFocalY(slot: string): number | undefined {
  const map = useContext(PhotoContext);
  return map[slot]?.focalY;
}

/**
 * Drop-in replacement for <img> that reads from CMS photo slots.
 * Applies focal-point cropping via object-position when the image uses object-cover.
 *
 * Priority: DB focalY > prop focalY > 50% (center)
 *
 * Usage: <CmsImg slot="homepage-hero" fallback="/images/escalade-front.jpg" alt="..." focalY={25} />
 */
export function CmsImg({
  slot,
  fallback,
  loading = "lazy",
  focalY: focalYProp,
  style,
  ...props
}: {
  slot: string;
  fallback: string;
  focalY?: number;
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src">) {
  const url = usePhotoUrl(slot, fallback);
  const dbFocalY = usePhotoFocalY(slot);
  const focalY = dbFocalY ?? focalYProp ?? 50;
  return (
    <img
      src={url}
      loading={loading}
      style={{ objectPosition: `center ${focalY}%`, ...style }}
      {...props}
    />
  );
}
