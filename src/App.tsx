import { Navigate, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { PhotoProvider } from "./components/CmsImg";
import ErrorBoundary from "./components/ErrorBoundary";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./contexts/ThemeContext";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { PaintCorrectionPage } from "./pages/PaintCorrectionPage";
import { CeramicCoatingPage } from "./pages/CeramicCoatingPage";
import { BookingPage } from "./pages/BookingPage";
import { AreasPage } from "./pages/AreasPage";
import { ContactPage } from "./pages/ContactPage";
import { FleetPage } from "./pages/FleetPage";
import { BoatDetailingPage } from "./pages/BoatDetailingPage";
import { MaintenancePage } from "./pages/MaintenancePage";
import { AdminPage } from "./pages/AdminPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { WaxhawPage } from "./pages/WaxhawPage";
import { CeramicCoatingCharlottePage } from "./pages/CeramicCoatingCharlottePage";
import { MobileDetailingCostPage } from "./pages/MobileDetailingCostPage";

function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main-content">
        {children}
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
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PhotoProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
