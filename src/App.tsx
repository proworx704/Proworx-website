import { lazy, Suspense } from "react";
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

// All other pages lazy-loaded (code splitting)
const ServicesPage = lazy(() => import("./pages/ServicesPage").then(m => ({ default: m.ServicesPage })));
const PaintCorrectionPage = lazy(() => import("./pages/PaintCorrectionPage").then(m => ({ default: m.PaintCorrectionPage })));
const CeramicCoatingPage = lazy(() => import("./pages/CeramicCoatingPage").then(m => ({ default: m.CeramicCoatingPage })));
const BookingPage = lazy(() => import("./pages/BookingPage").then(m => ({ default: m.BookingPage })));
const AreasPage = lazy(() => import("./pages/AreasPage").then(m => ({ default: m.AreasPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then(m => ({ default: m.ContactPage })));
const FleetPage = lazy(() => import("./pages/FleetPage").then(m => ({ default: m.FleetPage })));
const BoatDetailingPage = lazy(() => import("./pages/BoatDetailingPage").then(m => ({ default: m.BoatDetailingPage })));
const MaintenancePage = lazy(() => import("./pages/MaintenancePage").then(m => ({ default: m.MaintenancePage })));
const AdminPage = lazy(() => import("./pages/AdminPage").then(m => ({ default: m.AdminPage })));
const BlogPage = lazy(() => import("./pages/BlogPage").then(m => ({ default: m.BlogPage })));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage").then(m => ({ default: m.BlogPostPage })));
const WaxhawPage = lazy(() => import("./pages/WaxhawPage").then(m => ({ default: m.WaxhawPage })));
const CeramicCoatingCharlottePage = lazy(() => import("./pages/CeramicCoatingCharlottePage").then(m => ({ default: m.CeramicCoatingCharlottePage })));
const MobileDetailingCostPage = lazy(() => import("./pages/MobileDetailingCostPage").then(m => ({ default: m.MobileDetailingCostPage })));
const MenuPage = lazy(() => import("./pages/MenuPage").then(m => ({ default: m.MenuPage })));
const CeramicCoatingVsWaxPage = lazy(() => import("./pages/CeramicCoatingVsWaxPage").then(m => ({ default: m.CeramicCoatingVsWaxPage })));
const GyeonCertifiedCharlottePage = lazy(() => import("./pages/GyeonCertifiedCharlottePage").then(m => ({ default: m.GyeonCertifiedCharlottePage })));

const PaintCorrectionCharlottePage = lazy(() => import("./pages/PaintCorrectionCharlottePage").then(m => ({ default: m.PaintCorrectionCharlottePage })));
const MobileDetailingCharlottePage = lazy(() => import("./pages/MobileDetailingCharlottePage").then(m => ({ default: m.MobileDetailingCharlottePage })));
const CarDetailingCharlottePage = lazy(() => import("./pages/CarDetailingCharlottePage").then(m => ({ default: m.CarDetailingCharlottePage })));
const BoatDetailingCharlottePage = lazy(() => import("./pages/BoatDetailingCharlottePage").then(m => ({ default: m.BoatDetailingCharlottePage })));
const CeramicCoatingSouthCharlottePage = lazy(() => import("./pages/CeramicCoatingSouthCharlottePage").then(m => ({ default: m.CeramicCoatingSouthCharlottePage })));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then(m => ({ default: m.NotFoundPage })));

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
          <Route path="/admin" element={<Suspense fallback={<PageLoader />}><AdminPage /></Suspense>} />
          <Route path="*" element={<SiteLayout><NotFoundPage /></SiteLayout>} />
        </Routes>
      </PhotoProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
