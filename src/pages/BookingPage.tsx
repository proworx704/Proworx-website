import { Phone } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { useSiteConfig } from "@/hooks/useCms";

export function BookingPage() {
  const { config } = useSiteConfig();
  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Book an Appointment"
        description="Book your mobile auto detailing appointment with ProWorx in Charlotte, NC. Call (980) 272-1903 or book online. Same-week availability."
        keywords="book auto detailing Charlotte, schedule car detail, mobile detailing appointment, car wash booking Charlotte NC"
      />
      {/* Header */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">
                Build Your <span className="text-gradient-gold">Detail Package</span>
              </h1>
              <p className="text-muted-foreground">
                Select your services below and book your appointment. We come to you!
              </p>
            </div>
            <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10 shrink-0" asChild>
              <a href={config.phoneLink}><Phone className="size-4" /> Call {config.phone}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Embedded Square Booking Widget */}
      <section className="flex-1 pb-8">
        <div className="container h-full">
          <div className="rounded-2xl border border-border overflow-hidden bg-white" style={{ minHeight: "80vh" }}>
            <iframe
              src={config.bookingUrl}
              title="Book an appointment with ProWorx Detailing"
              width="100%"
              style={{ minHeight: "80vh", height: "100%", border: "none" }}
              allow="payment"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
