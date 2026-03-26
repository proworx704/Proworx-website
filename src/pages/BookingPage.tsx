import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Phone, ArrowRight, ExternalLink } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { useSiteConfig } from "@/hooks/useCms";

const BOOKING_APP = "https://book.proworxdetailing.com";

export function BookingPage() {
  const { config } = useSiteConfig();
  const [searchParams] = useSearchParams();

  // Build booking URL with any query params forwarded
  const params = searchParams.toString();
  const bookingUrl = params ? `${BOOKING_APP}/book?${params}` : `${BOOKING_APP}/book`;

  // Auto-redirect after a short delay so users see the page
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = bookingUrl;
    }, 1500);
    return () => clearTimeout(timer);
  }, [bookingUrl]);

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Book an Appointment"
        description="Book your mobile auto detailing appointment with ProWorx in Charlotte, NC. Call (980) 272-1903 or book online. Same-week availability."
        keywords="book auto detailing Charlotte, schedule car detail, mobile detailing appointment, car wash booking Charlotte NC"
        schema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://proworxdetailing.com/" },
            { "@type": "ListItem", "position": 2, "name": "Book Now", "item": "https://proworxdetailing.com/book" }
          ]
        }}
      />
      <section className="py-20 md:py-32">
        <div className="container text-center">
          <div className="max-w-lg mx-auto">
            <div className="size-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
              <ExternalLink className="size-8 text-gold" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              Opening <span className="text-gradient-gold">Booking System</span>…
            </h1>
            <p className="text-muted-foreground mb-8">
              You're being redirected to our booking app. If it doesn't open automatically, click the button below.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold"
                asChild
              >
                <a href={bookingUrl}>
                  Open Booking <ArrowRight className="size-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10"
                asChild
              >
                <a href={config.phoneLink}>
                  <Phone className="size-5" /> Call {config.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
