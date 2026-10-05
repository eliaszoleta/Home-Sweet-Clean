import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportVibeError } from "../lib/vibe-error-reporting";
import { SiteHeader, SiteFooter } from "../components/SiteNavigation";
import { BUSINESS_INFO, SOCIAL_LINKS } from "../lib/business-data";
import { AREA_PAGES, SERVICE_PAGES } from "../lib/seo-content";
import { BUSINESS_ID, DEFAULT_OG_IMAGE, WEBSITE_ID } from "../lib/seo";
import { absoluteUrl } from "../lib/site-config";

// Site-wide LocalBusiness data: tells Google who the business is, where it is, when it's open
// and which cities it serves. Keep it in sync with BUSINESS_INFO.
// Opening hours aren't listed yet: add openingHoursSpecification here once the owners confirm them.
const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": BUSINESS_ID,
  name: BUSINESS_INFO.name,
  description:
    "Local house cleaning service in Evansville, Indiana offering weekly, biweekly and monthly house cleaning, move-in and move-out cleaning, one-time and custom cleaning, and errand and household help in Evansville, Newburgh, Boonville and Chandler.",
  slogan: BUSINESS_INFO.tagline,
  url: absoluteUrl("/"),
  logo: absoluteUrl("/logo.png"),
  image: absoluteUrl(DEFAULT_OG_IMAGE),
  telephone: `+1-${BUSINESS_INFO.phoneRaw.slice(0, 3)}-${BUSINESS_INFO.phoneRaw.slice(3, 6)}-${BUSINESS_INFO.phoneRaw.slice(6)}`,
  email: BUSINESS_INFO.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS_INFO.city,
    addressRegion: BUSINESS_INFO.state,
    postalCode: BUSINESS_INFO.zip,
    addressCountry: "US",
  },
  areaServed: AREA_PAGES.map((area) => ({
    "@type": "City",
    name: area.city,
    containedInPlace: { "@type": "State", name: area.stateName },
  })),
  ...(SOCIAL_LINKS.length ? { sameAs: SOCIAL_LINKS.map((link) => link.url) } : {}),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cleaning services",
    itemListElement: SERVICE_PAGES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        url: absoluteUrl(`/services/${service.slug}`),
      },
    })),
  },
};

// GoHighLevel chat widget id (from the widget's embed code in GHL). Empty = no chat bubble yet.
const GHL_CHAT_WIDGET_ID = "";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportVibeError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Home Sweet Clean | House Cleaning in Evansville, IN" },
      {
        name: "description",
        content:
          "Weekly, biweekly & monthly house cleaning, move-out cleaning and errand help in Evansville, Newburgh, Boonville & Chandler, IN.",
      },
      { name: "author", content: BUSINESS_INFO.name },
      { name: "theme-color", content: "#2b7bc4" },
      { name: "geo.region", content: "US-IN" },
      { name: "geo.placename", content: "Evansville" },
      { property: "og:site_name", content: BUSINESS_INFO.name },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: absoluteUrl(DEFAULT_OG_IMAGE) },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(LOCAL_BUSINESS_JSON_LD),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": WEBSITE_ID,
          url: absoluteUrl("/"),
          name: BUSINESS_INFO.name,
          publisher: { "@id": BUSINESS_ID },
        }),
      },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        {/* GoHighLevel chat widget (bottom-right on every page; position/colors are set in GHL).
            Lives in the shell, not head(), so client-side navigation doesn't load it again.
            Shows up once GHL_CHAT_WIDGET_ID is filled in. */}
        {GHL_CHAT_WIDGET_ID && (
          <script
            src="https://widgets.leadconnectorhq.com/loader.js"
            data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
            data-widget-id={GHL_CHAT_WIDGET_ID}
            defer
          />
        )}
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-accent/30 selection:text-primary">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
