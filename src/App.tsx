import { lazy, Suspense, type ComponentType } from "react";
import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { PhotoProvider } from "./components/CmsImg";
import ErrorBoundary from "./components/ErrorBoundary";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./contexts/ThemeContext";

// Homepage loaded eagerly (landing page — needs fast LCP)
import { HomePage } from "./pages/HomePage";

/**
 * Wrapper around React.lazy that auto-reloads on ChunkLoadError.
 * After a Vercel deploy the cached index.html references old chunk hashes.
 * Clicking a link tries to load a chunk that no longer exists → 404.
 * This catches that error and does a hard refresh to get the new HTML.
 * sessionStorage flag prevents infinite reload loops.
 */
function lazyRetry<T extends ComponentType<unknown>>(
  factory: () => Promise<{ default: T }>,
): React.LazyExoticComponent<T> {
  return lazy(() =>
    factory().catch((err: Error) => {
      const key = "chunk-retry-" + factory.toString().slice(0, 80);
      if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, "1");
        window.location.reload();
      }
      throw err; // already retried — let ErrorBoundary handle
    }),
  );
}

// All other pages lazy-loaded (code splitting)
const ServicesPage = lazyRetry(() => import("./pages/ServicesPage").then(m => ({ default: m.ServicesPage })));
const PaintCorrectionPage = lazyRetry(() => import("./pages/PaintCorrectionPage").then(m => ({ default: m.PaintCorrectionPage })));
const CeramicCoatingPage = lazyRetry(() => import("./pages/CeramicCoatingPage").then(m => ({ default: m.CeramicCoatingPage })));
const BookingPage = lazyRetry(() => import("./pages/BookingPage").then(m => ({ default: m.BookingPage })));
const AreasPage = lazyRetry(() => import("./pages/AreasPage").then(m => ({ default: m.AreasPage })));
const ContactPage = lazyRetry(() => import("./pages/ContactPage").then(m => ({ default: m.ContactPage })));
const FleetPage = lazyRetry(() => import("./pages/FleetPage").then(m => ({ default: m.FleetPage })));
const BoatDetailingPage = lazyRetry(() => import("./pages/BoatDetailingPage").then(m => ({ default: m.BoatDetailingPage })));
const MaintenancePage = lazyRetry(() => import("./pages/MaintenancePage").then(m => ({ default: m.MaintenancePage })));
const AdminPage = lazyRetry(() => import("./pages/AdminPage").then(m => ({ default: m.AdminPage })));
const BlogPage = lazyRetry(() => import("./pages/BlogPage").then(m => ({ default: m.BlogPage })));
const BlogPostPage = lazyRetry(() => import("./pages/BlogPostPage").then(m => ({ default: m.BlogPostPage })));
const WaxhawPage = lazyRetry(() => import("./pages/WaxhawPage").then(m => ({ default: m.WaxhawPage })));
const CeramicCoatingCharlottePage = lazyRetry(() => import("./pages/CeramicCoatingCharlottePage").then(m => ({ default: m.CeramicCoatingCharlottePage })));
const MobileDetailingCostPage = lazyRetry(() => import("./pages/MobileDetailingCostPage").then(m => ({ default: m.MobileDetailingCostPage })));
const MenuPage = lazyRetry(() => import("./pages/MenuPage").then(m => ({ default: m.MenuPage })));
const CeramicCoatingVsWaxPage = lazyRetry(() => import("./pages/CeramicCoatingVsWaxPage").then(m => ({ default: m.CeramicCoatingVsWaxPage })));
const GyeonCertifiedCharlottePage = lazyRetry(() => import("./pages/GyeonCertifiedCharlottePage").then(m => ({ default: m.GyeonCertifiedCharlottePage })));

const PaintCorrectionCharlottePage = lazyRetry(() => import("./pages/PaintCorrectionCharlottePage").then(m => ({ default: m.PaintCorrectionCharlottePage })));
const MobileDetailingCharlottePage = lazyRetry(() => import("./pages/MobileDetailingCharlottePage").then(m => ({ default: m.MobileDetailingCharlottePage })));
const CarDetailingCharlottePage = lazyRetry(() => import("./pages/CarDetailingCharlottePage").then(m => ({ default: m.CarDetailingCharlottePage })));
const BoatDetailingCharlottePage = lazyRetry(() => import("./pages/BoatDetailingCharlottePage").then(m => ({ default: m.BoatDetailingCharlottePage })));
const CeramicCoatingSouthCharlottePage = lazyRetry(() => import("./pages/CeramicCoatingSouthCharlottePage").then(m => ({ default: m.CeramicCoatingSouthCharlottePage })));
const AutoDetailingCharlottePage = lazyRetry(() => import("./pages/AutoDetailingCharlottePage").then(m => ({ default: m.AutoDetailingCharlottePage })));
const InteriorDetailingCharlottePage = lazyRetry(() => import("./pages/InteriorDetailingCharlottePage").then(m => ({ default: m.InteriorDetailingCharlottePage })));
const ExteriorDetailingCharlottePage = lazyRetry(() => import("./pages/ExteriorDetailingCharlottePage").then(m => ({ default: m.ExteriorDetailingCharlottePage })));
const BallantyneDetailingPage = lazyRetry(() => import("./pages/BallantyneDetailingPage").then(m => ({ default: m.BallantyneDetailingPage })));
const MatthewsDetailingPage = lazyRetry(() => import("./pages/MatthewsDetailingPage").then(m => ({ default: m.MatthewsDetailingPage })));
const FortMillDetailingPage = lazyRetry(() => import("./pages/FortMillDetailingPage").then(m => ({ default: m.FortMillDetailingPage })));
const NotFoundPage = lazyRetry(() => import("./pages/NotFoundPage").then(m => ({ default: m.NotFoundPage })));
const PrivacyPolicyPage = lazyRetry(() => import("./pages/PrivacyPolicyPage").then(m => ({ default: m.PrivacyPolicyPage })));
const July4thSalePage = lazyRetry(() => import("./pages/July4thSalePage").then(m => ({ default: m.July4thSalePage })));
const CeramicPromoPage = lazyRetry(() => import("./pages/CeramicPromoPage").then(m => ({ default: m.CeramicPromoPage })));

/** External redirect helper — replaces window.location for external URLs */
export function ExternalRedirect({ url }: { url: string }) {
  window.location.replace(url);
  return null;
}

/** Minimal loading spinner for lazy chunks.
 *  min-h keeps footer below the viewport during Suspense, preventing CLS. */
function PageLoader() {
  return (
    <div className="flex min-h-[calc(100dvh-6.5rem)] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-gold/30 border-t-gold" />
    </div>
  );
}

function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Suspense fallback={<PageLoader />}>
          {children}
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" switchable={false}>
        <PhotoProvider>
        <Toaster />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<SiteLayout><HomePage /></SiteLayout>} />
          <Route path="/services" element={<SiteLayout><ServicesPage /></SiteLayout>} />
          <Route path="/paint-correction" element={<SiteLayout><PaintCorrectionPage /></SiteLayout>} />
          <Route path="/ceramic-coating" element={<SiteLayout><CeramicCoatingPage /></SiteLayout>} />
          <Route path="/book" element={<SiteLayout><BookingPage /></SiteLayout>} />
          <Route path="/fleet" element={<SiteLayout><FleetPage /></SiteLayout>} />
          <Route path="/boat-detailing" element={<SiteLayout><BoatDetailingPage /></SiteLayout>} />
          <Route path="/maintenance" element={<SiteLayout><MaintenancePage /></SiteLayout>} />
          <Route path="/areas" element={<SiteLayout><AreasPage /></SiteLayout>} />
          <Route path="/contact" element={<SiteLayout><ContactPage /></SiteLayout>} />
          <Route path="/blog" element={<SiteLayout><BlogPage /></SiteLayout>} />
          <Route path="/blog/:slug" element={<SiteLayout><BlogPostPage /></SiteLayout>} />
          <Route path="/waxhaw" element={<SiteLayout><WaxhawPage /></SiteLayout>} />
          <Route path="/ceramic-coating-charlotte-nc" element={<SiteLayout><CeramicCoatingCharlottePage /></SiteLayout>} />
          <Route path="/mobile-detailing-cost" element={<SiteLayout><MobileDetailingCostPage /></SiteLayout>} />
          <Route path="/menu" element={<SiteLayout><MenuPage /></SiteLayout>} />
          <Route path="/ceramic-coating-vs-wax" element={<SiteLayout><CeramicCoatingVsWaxPage /></SiteLayout>} />
          <Route path="/gyeon-certified-installer-charlotte" element={<SiteLayout><GyeonCertifiedCharlottePage /></SiteLayout>} />

          <Route path="/paint-correction-charlotte-nc" element={<SiteLayout><PaintCorrectionCharlottePage /></SiteLayout>} />
          <Route path="/mobile-detailing-charlotte-nc" element={<SiteLayout><MobileDetailingCharlottePage /></SiteLayout>} />
          <Route path="/car-detailing-charlotte-nc" element={<SiteLayout><CarDetailingCharlottePage /></SiteLayout>} />
          <Route path="/boat-detailing-charlotte-nc" element={<SiteLayout><BoatDetailingCharlottePage /></SiteLayout>} />
          <Route path="/ceramic-coating-south-charlotte-nc" element={<SiteLayout><CeramicCoatingSouthCharlottePage /></SiteLayout>} />
          <Route path="/auto-detailing-charlotte-nc" element={<SiteLayout><AutoDetailingCharlottePage /></SiteLayout>} />
          <Route path="/interior-detailing-charlotte-nc" element={<SiteLayout><InteriorDetailingCharlottePage /></SiteLayout>} />
          <Route path="/exterior-detailing-charlotte-nc" element={<SiteLayout><ExteriorDetailingCharlottePage /></SiteLayout>} />
          <Route path="/mobile-detailing-ballantyne-nc" element={<SiteLayout><BallantyneDetailingPage /></SiteLayout>} />
          <Route path="/mobile-detailing-matthews-nc" element={<SiteLayout><MatthewsDetailingPage /></SiteLayout>} />
          <Route path="/mobile-detailing-fort-mill-sc" element={<SiteLayout><FortMillDetailingPage /></SiteLayout>} />
          {/* 4th of July Sale landing pages — standalone (no SiteLayout) */}
          <Route path="/4thsummersale" element={<Suspense fallback={<PageLoader />}><July4thSalePage /></Suspense>} />
          <Route path="/summer-shield" element={<Suspense fallback={<PageLoader />}><July4thSalePage /></Suspense>} />
          <Route path="/ceramic-promo" element={<SiteLayout><Suspense fallback={<PageLoader />}><CeramicPromoPage /></Suspense></SiteLayout>} />
          <Route path="/privacy-policy" element={<SiteLayout><PrivacyPolicyPage /></SiteLayout>} />
          <Route path="/admin" element={<Suspense fallback={<PageLoader />}><AdminPage /></Suspense>} />
          <Route path="*" element={<SiteLayout><NotFoundPage /></SiteLayout>} />
        </Routes>
      </PhotoProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
