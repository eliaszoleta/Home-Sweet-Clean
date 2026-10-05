import { pageHead, breadcrumbJsonLd } from "../lib/seo";
import { AREA_PAGES } from "../lib/seo-content";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BUSINESS_INFO, PHONE_HREF } from "../lib/business-data";
import { QuoteRequestForm } from "../components/QuoteRequestForm";
import { Phone, Mail, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact Us | Free Cleaning Quote Evansville | Home Sweet Clean",
      description:
        "Call or text (725) 261-6776 or request a free online quote. Home Sweet Clean cleans homes in Evansville, Newburgh, Boonville & Chandler, IN.",
      path: "/contact",
      jsonLd: [
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]),
      ],
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="py-12 md:py-20 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-accent/40 text-xs font-semibold uppercase tracking-widest text-primary">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span>Connect With Our Team</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground max-w-2xl mx-auto">
          Get a Free Cleaning Quote
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
          Weekly, biweekly or monthly house cleaning, a move-out clean, a custom clean or a helping
          hand: tell us what you need and we'll get back to you with a free quote. Call, text or use
          the form below.
        </p>
      </section>

      {/* Main Grid: Direct Info + Integrated Booking Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Business Details Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-card rounded-3xl border border-border p-8 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Company & Contact Information</h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary shrink-0 border border-border">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Based In</h3>
                    <p className="text-muted-foreground">
                      {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
                    </p>
                    <p className="text-muted-foreground">
                      Serving Newburgh, Boonville &amp; Chandler
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary shrink-0 border border-border">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Call or Text</h3>
                    <a
                      href={PHONE_HREF}
                      className="text-primary hover:text-primary font-semibold transition-colors text-base"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-xs text-muted-foreground">
                      Call or text for quotes and scheduling
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary shrink-0 border border-border">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-primary hover:text-primary font-medium transition-colors break-all"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas Card */}
            <div className="bg-card rounded-3xl border border-border p-8 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-foreground">Service Footprint</h3>
              <p className="text-xs text-muted-foreground">
                We clean homes in Evansville and Warrick County:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {AREA_PAGES.map((area) => (
                  <Link
                    key={area.slug}
                    to="/service-areas/$slug"
                    params={{ slug: area.slug }}
                    className="flex items-center gap-2 text-xs font-medium text-foreground hover:text-primary hover:underline underline-offset-4"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    <span>
                      {area.city}, {area.state}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="p-3 bg-secondary/80 rounded-xl border border-border/60 text-[11px] text-muted-foreground mt-2">
                Don't see your town? We also serve the surrounding areas. Call or text and we'll let
                you know if we can reach you.
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <QuoteRequestForm />
          </div>
        </div>
      </section>
    </div>
  );
}
