import { PageSEO } from "@/components/PageSEO";

export function PrivacyPolicyPage() {
  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Privacy Policy — ProWorx Mobile Detailing"
        description="Privacy Policy for ProWorx Mobile Detailing. Learn how we collect, use, and protect your personal information."
      />

      {/* Hero */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-4">
              <span className="text-gradient-gold">Privacy</span> Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: July 12, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-invert prose-gold">

            <div className="space-y-10 text-muted-foreground text-sm md:text-base leading-relaxed">

              {/* Intro */}
              <div>
                <p>
                  ProWorx Mobile Detailing L.L.C. (&ldquo;ProWorx,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{" "}
                  <a href="https://www.proworxdetailing.com" className="text-gold hover:underline">
                    proworxdetailing.com
                  </a>{" "}
                  (the &ldquo;Site&rdquo;), use our services, or interact with us through social media, advertising platforms, or other channels.
                </p>
              </div>

              {/* 1. Information We Collect */}
              <div>
                <h2 className="text-lg md:text-xl font-bold text-foreground mb-4">
                  1. Information We Collect
                </h2>

                <h3 className="text-base font-semibold text-foreground mb-2 mt-4">
                  Personal Information You Provide
                </h3>
                <p>
                  When you book a service, request a quote, fill out a contact form, subscribe to a membership plan, or communicate with us, we may collect:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Service address or vehicle location</li>
                  <li>Vehicle information (make, model, year, condition)</li>
                  <li>Payment information (processed securely by third-party payment processors)</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-base font-semibold text-foreground mb-2 mt-4">
                  Information Collected Automatically
                </h3>
                <p>
                  When you visit our Site, we may automatically collect certain information, including:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>IP address and approximate location</li>
                  <li>Browser type and version</li>
                  <li>Device type and operating system</li>
                  <li>Pages viewed, time spent, and navigation paths</li>
                  <li>Referring URL</li>
                  <li>Date and time of your visit</li>
                </ul>

                <h3 className="text-base font-semibold text-foreground mb-2 mt-4">
                  Information from Third Parties
                </h3>
                <p>
                  We may receive information about you from third-party platforms, including Meta (Facebook/Instagram), Google Ads, and Google Analytics, when you interact with our advertisements or social media pages. This may include demographic information, interests, and ad interaction data.
                </p>
              </div>

              {/* 2. How We Use Your Information */}
              <div>
                <h2 className="text-lg md:text-xl font-bold text-foreground mb-4">
                  2. How We Use Your Information
                </h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Provide, maintain, and improve our detailing services</li>
                  <li>Schedule appointments and manage bookings</li>
                  <li>Process payments and manage membership plans</li>
                  <li>Communicate with you about services, promotions, and updates</li>
                  <li>Respond to your inquiries and customer service requests</li>
                  <li>Send marketing communications (with your consent, where required)</li>
                  <li>Run and optimize advertising campaigns on platforms like Meta and Google</li>
                  <li>Analyze website usage to improve our Site and user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              {/* 3. Cookies and Tracking */}
              <div>
                <h2 className="text-lg md:text-xl font-bold text-foreground mb-4">
                  3. Cookies and Tracking Technologies
                </h2>
                <p>
                  Our Site uses cookies and similar tracking technologies to enhance your experience, analyze traffic, and support our advertising efforts. These may include:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    <strong className="text-foreground">Essential cookies</strong> — required for the Site to function properly
                  </li>
                  <li>
                    <strong className="text-foreground">Analytics cookies</strong> — help us understand how visitors use our Site (e.g., Google Analytics)
                  </li>
                  <li>
                    <strong className="text-foreground">Advertising cookies</strong> — used to deliver relevant ads and measure campaign performance (e.g., Meta Pixel, Google Ads)
                  </li>
                </ul>
                <p className="mt-3">
                  You can manage your cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of our Site.
                </p>
              </div>

              {/* 4. Sharing Your Information */}
              <div>
                <h2 className="text-lg md:text-xl font-bold text-foreground mb-4">
                  4. How We Share Your Information
                </h2>
                <p>
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    <strong className="text-foreground">Service providers</strong> — third-party companies that help us operate our business (e.g., payment processors, scheduling software, email platforms)
                  </li>
                  <li>
                    <strong className="text-foreground">Advertising partners</strong> — platforms like Meta and Google for ad targeting and measurement
                  </li>
                  <li>
                    <strong className="text-foreground">Analytics providers</strong> — services like Google Analytics that help us understand website usage
                  </li>
                  <li>
                    <strong className="text-foreground">Legal requirements</strong> — when required by law, regulation, or legal process
                  </li>
                </ul>
              </div>

              {/* 5. Data Retention */}
              <div>
                <h2 className="text-lg md:text-xl font-bold text-foreground mb-4">
                  5. Data Retention
                </h2>
                <p>
                  We retain your personal information only as long as necessary to fulfill the purposes described in this policy, maintain our business records, comply with legal obligations, resolve disputes, and enforce our agreements. When your information is no longer needed, we securely delete or anonymize it.
                </p>
              </div>

              {/* 6. Data Security */}
              <div>
                <h2 className="text-lg md:text-xl font-bold text-foreground mb-4">
                  6. Data Security
                </h2>
                <p>
                  We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data.
                </p>
              </div>

              {/* 7. Your Rights and Choices */}
              <div>
                <h2 className="text-lg md:text-xl font-bold text-foreground mb-4">
                  7. Your Rights and Choices
                </h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction or deletion of your personal information</li>
                  <li>Opt out of marketing communications at any time</li>
                  <li>Opt out of targeted advertising</li>
                  <li>Request a copy of your data in a portable format</li>
                </ul>
                <p className="mt-3">
                  To exercise any of these rights, please contact us using the information provided below.
                </p>
              </div>

              {/* 8. Third-Party Links */}
              <div>
                <h2 className="text-lg md:text-xl font-bold text-foreground mb-4">
                  8. Third-Party Links
                </h2>
                <p>
                  Our Site may contain links to third-party websites or services that are not operated by us. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </div>

              {/* 9. Children's Privacy */}
              <div>
                <h2 className="text-lg md:text-xl font-bold text-foreground mb-4">
                  9. Children&rsquo;s Privacy
                </h2>
                <p>
                  Our Site and services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us and we will promptly delete it.
                </p>
              </div>

              {/* 10. Changes */}
              <div>
                <h2 className="text-lg md:text-xl font-bold text-foreground mb-4">
                  10. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. The updated policy will be posted on this page with a revised &ldquo;Last updated&rdquo; date. We encourage you to review this page periodically.
                </p>
              </div>

              {/* 11. Contact */}
              <div>
                <h2 className="text-lg md:text-xl font-bold text-foreground mb-4">
                  11. Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="mt-3 space-y-1">
                  <p>
                    <strong className="text-foreground">ProWorx Mobile Detailing L.L.C.</strong>
                  </p>
                  <p>Waxhaw, NC 28173</p>
                  <p>
                    Phone:{" "}
                    <a href="tel:+19802721903" className="text-gold hover:underline">
                      (980) 272-1903
                    </a>
                  </p>
                  <p>
                    Email:{" "}
                    <a href="mailto:proworxquo@outlook.com" className="text-gold hover:underline">
                      proworxquo@outlook.com
                    </a>
                  </p>
                  <p>
                    Website:{" "}
                    <a href="https://www.proworxdetailing.com" className="text-gold hover:underline">
                      proworxdetailing.com
                    </a>
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
