import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { createContext, useContext, useMemo } from "react";

type PhotoMap = Record<string, string>;

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
        map[p.slot] = p.storageUrl || p.staticPath;
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
  return map[slot] || fallback;
}

/**
 * Drop-in replacement for <img> that reads from CMS photo slots.
 * Usage: <CmsImg slot="homepage-hero" fallback="/images/escalade-front.jpg" alt="..." className="..." />
 */
export function CmsImg({ slot, fallback, ...props }: { slot: string; fallback: string } & Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src">) {
  const url = usePhotoUrl(slot, fallback);
  return <img src={url} {...props} />;
}
