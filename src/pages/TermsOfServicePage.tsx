import { Link } from "react-router-dom";
import { PageSEO } from "@/components/PageSEO";

const H2 = "text-lg md:text-xl font-bold text-foreground mb-4";

export function TermsOfServicePage() {
  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Terms of Service — ProWorx Mobile Detailing"
        description="Terms of Service for ProWorx Mobile Detailing. Booking, deposits, pricing, memberships, ceramic coating warranties, and service policies."
      />

      {/* Hero */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-4">
              Terms of <span className="text-gradient-gold">Service</span>
            </h1>
            <p className="text-muted-foreground">
              Last updated: October 30, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-10 text-muted-foreground text-sm md:text-base leading-relaxed">

              <div>
                <p>
                  These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the website{" "}
                  <a href="https://www.proworxdetailing.com" className="text-gold hover:underline">proworxdetailing.com</a>{" "}
                  (the &ldquo;Site&rdquo;) and the mobile detailing, ceramic coating, paint correction, and related services
                  (the &ldquo;Services&rdquo;) provided by ProWorx Mobile Detailing L.L.C. (&ldquo;ProWorx,&rdquo; &ldquo;we,&rdquo;
                  &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By using the Site, booking a service, or purchasing a membership, you agree to these Terms.
                </p>
              </div>

              <div>
                <h2 className={H2}>1. Our Services</h2>
                <p>
                  ProWorx provides mobile auto detailing and related services in the Charlotte, NC metro area. For mobile
                  appointments we bring our own water, power, products, and equipment to your home, office, or other approved
                  location. Some services, such as ceramic coating and paint correction, may be offered as drop-off. Service
                  descriptions on the Site are summaries; the exact work performed is confirmed at booking.
                </p>
              </div>

              <div>
                <h2 className={H2}>2. Booking and Appointments</h2>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Appointments are confirmed once booked through our online booking system, by phone, or by text.</li>
                  <li>Please provide accurate information about your vehicle (year, make, model, size, and condition) and service location.</li>
                  <li>Arrival times are estimates. Traffic, prior appointments, or other factors may occasionally cause delays, and we will keep you updated.</li>
                  <li>You agree to provide safe, legal access to the vehicle and a suitable work area. We may decline or reschedule work if the location is unsafe or not permitted (for example, by an HOA, property manager, or parking rules).</li>
                </ul>
              </div>

              <div>
                <h2 className={H2}>3. Pricing and Vehicle Condition</h2>
                <p>
                  Prices on the Site are starting prices based on vehicle size and typical condition. Final pricing depends on the
                  actual condition of the vehicle. Heavily soiled interiors, excessive pet hair, sand, mold, biohazards, or neglected
                  vehicles may require extra time, which is charged at our base hourly rate or as a condition surcharge. We will
                  always discuss any additional charges with you before starting that work.
                </p>
              </div>

              <div>
                <h2 className={H2}>4. Deposits and Payment</h2>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Certain services, including ceramic coating packages, require a deposit (currently 30%) to reserve your appointment. Deposits are applied to your final service total.</li>
                  <li>Payment of the remaining balance is due when the service is completed unless otherwise agreed in writing.</li>
                  <li>We accept the payment methods shown at booking or on your invoice. Payments are processed by third-party payment processors.</li>
                  <li>Financing, where offered, is provided by a third-party lender under that lender&rsquo;s own terms.</li>
                </ul>
              </div>

              <div>
                <h2 className={H2}>5. Cancellations, Rescheduling, and Weather</h2>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>If you need to cancel or reschedule, please contact us as early as possible so we can offer the time to another customer.</li>
                  <li>Late cancellations or no-shows may result in forfeiture of all or part of any deposit paid.</li>
                  <li>Because our work is performed outdoors, we may reschedule appointments due to rain, extreme temperatures, or other unsafe weather. Weather-related rescheduling by ProWorx carries no penalty, and any deposit is carried over to the new date.</li>
                </ul>
              </div>

              <div>
                <h2 className={H2}>6. Maintenance Memberships</h2>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Maintenance memberships are billed monthly on a recurring basis to the payment method on file until cancelled.</li>
                  <li>Unless a membership states otherwise, there is no long-term contract and you may cancel at any time. Cancellation stops future billing; charges already processed are not refunded.</li>
                  <li>Memberships that include a ceramic coating carry a 12-month agreement. If you cancel within the first 12 months, the full ceramic coating fee becomes due immediately and no partial credits apply. After 12 months, the membership continues month-to-month and may be cancelled at any time.</li>
                </ul>
              </div>

              <div>
                <h2 className={H2}>7. Ceramic Coatings and Warranties</h2>
                <p>
                  Ceramic coating warranties are provided by the coating manufacturer (such as GYEON or IGL), not by ProWorx, and are
                  subject to the manufacturer&rsquo;s terms. Many warranties require periodic inspections or maintenance with a certified
                  installer to remain valid. Coatings resist contamination and make cleaning easier, but they do not make a vehicle
                  scratch-proof, chip-proof, or maintenance-free. Proper washing and care are your responsibility.
                </p>
              </div>

              <div>
                <h2 className={H2}>8. Results and Pre-Existing Conditions</h2>
                <p>
                  We work to deliver the best result possible, but some conditions cannot be fully corrected. Deep scratches,
                  rock chips, clear coat failure, permanent stains, sun damage, odors from long-term sources, and worn or damaged
                  materials may improve but not disappear. Paint correction removes a limited amount of clear coat and cannot remove
                  defects that go through it. We may note or photograph existing damage before starting work.
                </p>
              </div>

              <div>
                <h2 className={H2}>9. Your Responsibilities</h2>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Remove valuables and personal items from the vehicle before service. ProWorx is not responsible for items left in the vehicle.</li>
                  <li>Tell us about any known issues before we begin, such as loose trim, aftermarket parts, prior paint or body work, electrical problems, or sensitive surfaces.</li>
                  <li>Make sure windows, doors, and the trunk close properly and that the vehicle is in a safe condition to be worked on.</li>
                </ul>
              </div>

              <div>
                <h2 className={H2}>10. Satisfaction and Concerns</h2>
                <p>
                  Please inspect your vehicle when the service is complete. If anything was missed, let us know within 24 hours and
                  we will work with you to make it right, which may include returning to address the specific area. Concerns about
                  a completed service should be raised with us directly so we have the opportunity to resolve them.
                </p>
              </div>

              <div>
                <h2 className={H2}>11. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, ProWorx is not liable for damage resulting from pre-existing conditions,
                  defective or aftermarket parts, previous repairs or repaints, normal wear, or information you did not disclose. Our
                  total liability for any claim related to a service is limited to the amount you paid for that service. We are not
                  liable for indirect, incidental, or consequential damages. Any claim of damage caused by our work must be reported
                  within 24 hours of service completion so it can be inspected.
                </p>
              </div>

              <div>
                <h2 className={H2}>12. Communications</h2>
                <p>
                  By providing your phone number or email, you agree that we may contact you by call, text message, or email about your
                  appointments, service, and account. We may also send occasional promotional messages; you can opt out at any time
                  by replying STOP to texts or using the unsubscribe link in emails. Message and data rates may apply.
                </p>
              </div>

              <div>
                <h2 className={H2}>13. Photos and Reviews</h2>
                <p>
                  We may take before-and-after photos or video of our work and use them on our Site, social media, and advertising.
                  We blur or remove license plates and do not publish your personal information. If you prefer that we not use
                  photos of your vehicle, just let us know.
                </p>
              </div>

              <div>
                <h2 className={H2}>14. Use of the Site</h2>
                <p>
                  The content on the Site, including text, photos, logos, and graphics, belongs to ProWorx or its licensors and may not
                  be copied or reused without permission. You agree not to misuse the Site, interfere with its operation, or attempt to
                  access it by unauthorized means. Prices, promotions, and service details on the Site may change without notice.
                  Your use of the Site is also governed by our{" "}
                  <Link to="/privacy-policy" className="text-gold hover:underline">Privacy Policy</Link>.
                </p>
              </div>

              <div>
                <h2 className={H2}>15. Governing Law</h2>
                <p>
                  These Terms are governed by the laws of the State of North Carolina, without regard to its conflict-of-law rules.
                  Any dispute will be handled in the state or federal courts located in North Carolina.
                </p>
              </div>

              <div>
                <h2 className={H2}>16. Changes to These Terms</h2>
                <p>
                  We may update these Terms from time to time. The updated version will be posted on this page with a revised
                  &ldquo;Last updated&rdquo; date. Continued use of the Site or Services after changes are posted means you accept the updated Terms.
                </p>
              </div>

              <div>
                <h2 className={H2}>17. Contact Us</h2>
                <p>Questions about these Terms? Contact us:</p>
                <div className="mt-3 space-y-1">
                  <p><strong className="text-foreground">ProWorx Mobile Detailing L.L.C.</strong></p>
                  <p>Waxhaw, NC 28173</p>
                  <p>
                    Phone:{" "}
                    <a href="tel:+19802721903" className="text-gold hover:underline">(980) 272-1903</a>
                  </p>
                  <p>
                    Email:{" "}
                    <a href="mailto:proworxquo@outlook.com" className="text-gold hover:underline">proworxquo@outlook.com</a>
                  </p>
                  <p>
                    Website:{" "}
                    <a href="https://www.proworxdetailing.com" className="text-gold hover:underline">proworxdetailing.com</a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
