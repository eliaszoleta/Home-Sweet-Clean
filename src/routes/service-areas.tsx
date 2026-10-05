import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { AREA_PAGES } from "../lib/seo-content";
import { breadcrumbJsonLd, pageHead } from "../lib/seo";
import { Breadcrumbs, QuoteSection, ServiceLinkGrid } from "../components/SeoSections";

export const Route = createFileRoute("/service-areas")({
  head: () =>
    pageHead({
      title: "Areas We Serve | Evansville & Warrick County | Home Sweet Clean",
      description:
        "Home Sweet Clean serves Evansville, Newburgh, Boonville, Chandler and the surrounding areas of Southern Indiana. Find house cleaning near you.",
      path: "/service-areas",
      jsonLd: [
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
        ]),
      ],
    }),
  component: ServiceAreasPage,
});

function ServiceAreasPage() {
  return (
    <div className="py-10 md:py-16 space-y-16 md:space-y-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Service Areas" }]} />
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            House Cleaning Service Areas in Southern Indiana
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            Home Sweet Clean is based in Evansville and cleans homes across Vanderburgh and Warrick
            County. Choose your town to see the services we offer there.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-4">
          {AREA_PAGES.map((area) => (
            <Link
              key={area.slug}
              to="/service-areas/$slug"
              params={{ slug: area.slug }}
              className="group bg-card border border-border rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-accent/60 transition-all space-y-2"
            >
              <div className="flex items-center gap-2 text-primary">
                <MapPin className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-widest">
                  {area.stateName}
                </span>
              </div>
              <h2 className="text-xl font-bold text-foreground group-hover:text-primary">
                {area.city}, {area.state}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {area.metaDescription}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                View {area.city} services <ArrowRight className="w-4 h-4 text-primary" />
              </span>
            </Link>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Don't see your town? We also serve the surrounding areas. Call, text or request a quote
          and we'll let you know if we can reach you.
        </p>
      </section>

      <ServiceLinkGrid />

      <QuoteSection />
    </div>
  );
}
