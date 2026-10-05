import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { BUSINESS_INFO, PHONE_HREF, SOCIAL_LINKS } from "../lib/business-data";
import { AREA_PAGES, SERVICE_PAGES } from "../lib/seo-content";
import { Heart, Mail, MapPin, Menu, Phone, Sparkles, X } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/service-areas", label: "Areas We Serve" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-[0_2px_0_0_var(--color-border)]">
      {/* Promo strip */}
      <div className="bg-accent text-accent-foreground text-xs sm:text-sm font-bold py-2 px-4 text-center">
        <Sparkles className="inline w-4 h-4 -mt-0.5 mr-1.5" />
        New client special: book your first cleaning and save!{" "}
        <a href={PHONE_HREF} className="underline underline-offset-2 hover:text-primary">
          Call {BUSINESS_INFO.phone}
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between gap-4">
        <Link to="/" aria-label={`${BUSINESS_INFO.name} home`} className="shrink-0">
          <img
            src={BUSINESS_INFO.logoUrl}
            alt={`${BUSINESS_INFO.name} logo`}
            width={900}
            height={439}
            className="h-14 sm:h-[4.5rem] w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 font-heading font-semibold text-[15px]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "!text-primary bg-secondary" }}
              className="px-4 py-2 rounded-full text-foreground/75 hover:text-primary hover:bg-secondary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm text-primary hover:bg-secondary"
          >
            <Phone className="w-4 h-4" /> {BUSINESS_INFO.phone}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-heading font-semibold shadow-[0_4px_0_0_oklch(0.4_0.13_245)] hover:translate-y-0.5 hover:shadow-[0_2px_0_0_oklch(0.4_0.13_245)] transition-all"
          >
            Free Quote
          </Link>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-2xl bg-secondary text-primary"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border px-6 pt-2 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col font-heading font-semibold text-lg">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 border-b border-border/70 text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={PHONE_HREF}
              className="text-center py-3 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call Us
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-3 rounded-full bg-primary text-primary-foreground font-bold"
            >
              Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-16 bg-primary text-primary-foreground">
      {/* Wavy top edge */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="absolute -top-[59px] left-0 w-full h-[60px] text-primary"
      >
        <path
          fill="currentColor"
          d="M0,40 C180,0 360,60 540,35 C720,10 900,55 1080,35 C1260,15 1350,30 1440,25 L1440,60 L0,60 Z"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/15">
          <div className="space-y-4">
            <span className="inline-block bg-white rounded-3xl p-3 shadow-lg">
              <img
                src={BUSINESS_INFO.logoUrl}
                alt={`${BUSINESS_INFO.name} logo`}
                className="h-20 w-auto"
                loading="lazy"
              />
            </span>
            <p className="font-script text-3xl text-accent leading-none">
              Clean homes make happy families!
            </p>
            <p className="text-sm text-primary-foreground/85 leading-relaxed">
              Local, reliable and friendly house cleaning in Evansville, Newburgh, Boonville and
              Chandler, Indiana.
            </p>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-bold text-accent hover:text-white"
              >
                Find us on {link.label} →
              </a>
            ))}
          </div>

          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-lg text-white">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/85">
              {SERVICE_PAGES.map((page) => (
                <li key={page.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: page.slug }}
                    className="hover:text-accent transition-colors"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-lg text-white">Areas We Serve</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/85">
              {AREA_PAGES.map((area) => (
                <li key={area.slug} className="flex items-center gap-2">
                  <Heart className="w-3.5 h-3.5 text-heart fill-heart" />
                  <Link
                    to="/service-areas/$slug"
                    params={{ slug: area.slug }}
                    className="hover:text-accent transition-colors"
                  >
                    House cleaning in {area.city}, {area.state}
                  </Link>
                </li>
              ))}
              <li className="text-primary-foreground/70 pl-5">& surrounding areas</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg text-white">Say Hello</h4>
            <div className="space-y-3 text-sm">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2.5 font-bold hover:text-accent"
              >
                <Phone className="w-4 h-4 text-accent shrink-0" /> Call or text{" "}
                {BUSINESS_INFO.phone}
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2.5 hover:text-accent break-all"
              >
                <Mail className="w-4 h-4 text-accent shrink-0" />
                {BUSINESS_INFO.email}
              </a>
              <p className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-block py-3 px-6 rounded-full bg-accent text-accent-foreground font-heading font-semibold shadow hover:brightness-105"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-primary-foreground/70 gap-3">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <p>Life is messy. Your house doesn't have to be.</p>
        </div>
      </div>
    </footer>
  );
}
