import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarHeart,
  ClipboardList,
  Heart,
  House,
  MapPin,
  Phone,
  ShieldCheck,
  Smile,
  Sparkles,
} from "lucide-react";
import { pageHead, faqJsonLd } from "../lib/seo";
import { HOME_FAQS, servicePathForSpecialty, AREA_PAGES } from "../lib/seo-content";
import { FaqSection, ServiceImage } from "../components/SeoSections";
import { BUSINESS_INFO, CORE_SPECIALTIES, HELPING_HAND, PHONE_HREF } from "../lib/business-data";
import { QuoteRequestForm } from "../components/QuoteRequestForm";
import { WorkShowcaseGallery } from "../components/WorkShowcaseGallery";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "House Cleaning Services in Evansville, IN | Home Sweet Clean",
      description:
        "Evansville house cleaning: weekly, biweekly & monthly cleans, move-in/move-out and custom cleaning, plus errand help. Serving Newburgh, Boonville & Chandler.",
      path: "/",
      jsonLd: [faqJsonLd(HOME_FAQS)],
    }),
  component: Index,
});

const FLYER_LIST = [
  "Weekly, biweekly & monthly",
  "Kitchens & bathrooms",
  "Floors & vacuuming",
  "Bedrooms & living areas",
  "Custom cleaning available",
];

const PROMISES = [
  {
    icon: House,
    title: "Local",
    text: "We live and work right here in Evansville and Warrick County. When you hire us, you're hiring a neighbour.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable",
    text: "We show up when we say we will and give your home the same care every single visit.",
  },
  {
    icon: Smile,
    title: "Friendly",
    text: "Easy to talk to, easy to book, and always happy to customize the clean to your home.",
  },
];

const STEPS = [
  {
    icon: Phone,
    title: "Call, text or send the form",
    text: "Tell us about your home and what you need.",
  },
  {
    icon: ClipboardList,
    title: "Get your free quote",
    text: "We'll put together a price that fits your home.",
  },
  {
    icon: CalendarHeart,
    title: "Enjoy your clean home",
    text: "We handle the mess. You enjoy your home.",
  },
];

export function Index() {
  return (
    <div className="space-y-20 md:space-y-28">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#fff3b8] via-[#ffe57a] to-[#ffd84d] pt-10 pb-24 md:pt-16 md:pb-32 overflow-hidden">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-[70px] text-background"
        >
          <path
            fill="currentColor"
            d="M0,50 C240,10 480,80 720,45 C960,10 1200,70 1440,35 L1440,80 L0,80 Z"
          />
        </svg>
        <Heart className="hidden lg:block absolute top-6 right-[44%] w-10 h-10 text-heart/30 fill-heart/20 rotate-12" />
        <Sparkles className="hidden lg:block absolute bottom-24 right-[3%] w-12 h-12 text-white/80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="font-script text-3xl sm:text-4xl text-heart -rotate-2 origin-left">
              Life is messy. Your house doesn't have to be.
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05]">
              Evansville House Cleaning Services
            </h1>
            <p className="text-base sm:text-lg text-foreground/80 max-w-xl leading-relaxed">
              <strong>Home Sweet Clean</strong> provides dependable house cleaning for busy families
              in Evansville, Newburgh, Boonville and Chandler. We'll tackle the dust, the dirt and
              the "I'll get to that later" pile, so you can enjoy your home.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 max-w-xl">
              {FLYER_LIST.map((item) => (
                <li key={item} className="flex items-center gap-2 font-semibold text-foreground">
                  <Heart className="w-4 h-4 text-heart fill-heart shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#quote-section"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-lg shadow-[0_5px_0_0_oklch(0.4_0.13_245)] hover:translate-y-0.5 hover:shadow-[0_3px_0_0_oklch(0.4_0.13_245)] transition-all"
              >
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-primary font-heading font-semibold text-lg shadow-sm hover:shadow-md transition-all"
              >
                <Phone className="w-5 h-5" /> {BUSINESS_INFO.phone}
              </a>
            </div>

            <ul className="flex flex-wrap gap-3 pt-1">
              {PROMISES.map(({ icon: Icon, title }) => (
                <li
                  key={title}
                  className="inline-flex items-center gap-2 bg-white/80 rounded-full pl-2 pr-4 py-1.5 font-heading font-semibold text-sm"
                >
                  <span className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </span>
                  {title}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 relative pb-10 sm:pb-0">
            <div className="relative rounded-[2rem] overflow-hidden border-[6px] border-white shadow-2xl aspect-[4/3.3] bg-[#fcd34d]">
              <img
                src="/images/house-cleaning-services-evansville-in.jpg"
                alt="Sparkling clean kitchen and living room after house cleaning services in Evansville, IN"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <figure className="absolute -bottom-6 -left-2 sm:-left-8 w-[58%] sm:w-[52%] bg-white p-2 pb-3 rounded-2xl shadow-xl -rotate-3">
              <img
                src="/images/home-sweet-clean-owners-evansville-in.jpg"
                alt="Illustration of the Home Sweet Clean team in Evansville"
                className="w-full aspect-[3/1.5] object-cover object-top rounded-xl"
              />
              <figcaption className="font-script text-xl text-center text-foreground mt-1">
                Your local cleaning team ♥
              </figcaption>
            </figure>
            <div className="absolute -top-5 -right-2 sm:-right-5 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-heart text-white flex flex-col items-center justify-center text-center rotate-12 shadow-xl p-3">
              <span className="font-heading font-bold text-lg leading-tight">
                New Client Special!
              </span>
              <span className="text-xs font-semibold leading-tight mt-1">
                Book your first clean &amp; save
              </span>
            </div>
          </div>
        </div>
      </section>

      <WorkShowcaseGallery />

      {/* Dust bunny evictions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary text-primary-foreground p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10" />
          <div className="absolute -left-10 -bottom-20 w-56 h-56 rounded-full bg-white/10" />
          <div className="relative space-y-4">
            <p className="font-script text-3xl text-accent">
              Home Sweet Clean is accepting applications for...
            </p>
            <h2 className="text-4xl sm:text-6xl font-bold text-white leading-[0.95]">
              Dust Bunny Evictions!
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-md">
              Goodbye dust bunnies... you're <span className="font-bold text-accent">fired!</span>{" "}
              Let us handle the mess so you can enjoy your home.
            </p>
            <a
              href="#quote-section"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-heading font-semibold text-lg hover:brightness-105"
            >
              Serve the eviction notice <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <ul className="relative grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PROMISES.map(({ icon: Icon, title, text }) => (
              <li key={title} className="bg-white text-foreground rounded-3xl p-5 shadow-lg">
                <span className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </span>
                <h3 className="text-xl font-bold mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services (alternating rows) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <p className="font-script text-3xl text-heart">How we can help</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground">Our Cleaning Services</h2>
        </div>
        <div className="space-y-10 md:space-y-14">
          {CORE_SPECIALTIES.map((item, i) => (
            <article
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center"
            >
              <Link
                to={servicePathForSpecialty(item.id)}
                className={`group relative block rounded-[2rem] overflow-hidden aspect-[4/3] shadow-lg ${
                  i % 2 === 1 ? "md:order-2 md:rotate-1" : "md:-rotate-1"
                }`}
              >
                <ServiceImage
                  src={item.image}
                  alt={item.imageAlt ?? item.title}
                  label={item.title}
                  slug={item.id}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="space-y-4">
                <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {item.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  <Link to={servicePathForSpecialty(item.id)} className="hover:text-primary">
                    {item.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground leading-relaxed">{item.summary}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm font-semibold">
                      <Heart className="w-4 h-4 text-heart fill-heart shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                {item.id === "helping-hand" && (
                  <p className="inline-flex items-baseline gap-2 bg-secondary rounded-2xl px-4 py-2">
                    <span className="font-heading text-3xl font-bold text-primary">
                      ${HELPING_HAND.rate}
                    </span>
                    <span className="text-sm font-semibold">
                      / hour per helper · {HELPING_HAND.minimumHours}-hour minimum
                    </span>
                  </p>
                )}
                <div className="flex flex-wrap gap-3 pt-1">
                  <Link
                    to={servicePathForSpecialty(item.id)}
                    className="inline-flex items-center gap-1.5 font-heading font-semibold text-primary hover:underline underline-offset-4"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <p className="font-script text-3xl text-heart">Easy peasy</p>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground">How It Works</h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-10 left-[16%] right-[16%] border-t-4 border-dashed border-primary/25"
            />
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="relative text-center">
                <span className="relative mx-auto w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center">
                  <Icon className="w-9 h-9 text-primary" />
                  <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-accent text-accent-foreground font-heading font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </span>
                <h3 className="text-xl font-bold mt-4 mb-1">{title}</h3>
                <p className="text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Quote */}
      <section id="quote-section" className="scroll-mt-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <p className="font-script text-3xl text-heart">Let us handle the mess</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground">Get Your Free Quote</h2>
          <p className="text-muted-foreground">
            Fill out the form, or call or text{" "}
            <a href={PHONE_HREF} className="font-bold text-primary">
              {BUSINESS_INFO.phone}
            </a>
            . New clients: ask about saving on your first cleaning!
          </p>
        </div>
        <QuoteRequestForm />
      </section>

      {/* Areas */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <p className="font-script text-3xl text-heart">Proudly local</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground">Areas We Serve</h2>
          <p className="text-muted-foreground">
            Evansville, Newburgh, Boonville, Chandler &amp; surrounding areas
          </p>
        </div>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {AREA_PAGES.map((area, i) => (
            <li key={area.slug}>
              <Link
                to="/service-areas/$slug"
                params={{ slug: area.slug }}
                className={`group block rounded-3xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all ${
                  i % 2 === 0 ? "bg-[#fff3b8]" : "bg-secondary"
                }`}
              >
                <MapPin className="w-8 h-8 mx-auto text-primary mb-2" />
                <span className="block font-heading text-xl font-bold">{area.city}</span>
                <span className="block text-sm text-muted-foreground">Indiana</span>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-primary mt-2 group-hover:underline">
                  House cleaning <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Meet the team teaser */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#fff3b8] rounded-[2.5rem] p-6 sm:p-10">
          <img
            src="/images/home-sweet-clean-owners-evansville-in.jpg"
            alt="Illustration of the Home Sweet Clean team"
            className="w-full rounded-[1.75rem] border-4 border-white shadow-lg"
            loading="lazy"
          />
          <div className="space-y-4">
            <p className="font-script text-3xl text-heart">Meet Home Sweet Clean</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Because a clean house makes for a happy family!
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              We're a local Evansville team who started Home Sweet Clean to help busy families get
              their free time back. No judgement, just a fresh, comfortable home.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-heading font-semibold"
            >
              About us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <FaqSection faqs={HOME_FAQS} />
    </div>
  );
}
