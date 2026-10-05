import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Heart, House, Phone, ShieldCheck, Smile } from "lucide-react";
import { BUSINESS_INFO, PHONE_HREF } from "../lib/business-data";
import { BUSINESS_ID, breadcrumbJsonLd, pageHead } from "../lib/seo";
import { absoluteUrl } from "../lib/site-config";
import {
  AreaLinkList,
  Breadcrumbs,
  QuoteSection,
  ServiceLinkGrid,
} from "../components/SeoSections";

const ABOUT_IMAGE = "/images/home-sweet-clean-owners-evansville-in.jpg";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About Us | Home Sweet Clean, Evansville, IN Cleaners",
      description:
        "Meet Home Sweet Clean, a local, reliable and friendly house cleaning team in Evansville, Indiana serving Newburgh, Boonville and Chandler.",
      path: "/about",
      image: ABOUT_IMAGE,
      imageAlt: "Illustration of the Home Sweet Clean team",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: absoluteUrl("/about"),
          name: "About Home Sweet Clean",
          about: { "@id": BUSINESS_ID },
        },
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]),
      ],
    }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: House,
    title: "Local",
    text: "We're Evansville locals cleaning for our neighbours in Evansville, Newburgh, Boonville and Chandler.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable",
    text: "Dependable residential cleaning you can count on, visit after visit.",
  },
  {
    icon: Smile,
    title: "Friendly",
    text: "We keep it fun and easy, and we never judge the mess. That's what we're here for!",
  },
  {
    icon: Heart,
    title: "Family first",
    text: "Because a clean house makes for a happy family, and more free time to enjoy it.",
  },
];

function AboutPage() {
  return (
    <div className="py-10 md:py-16 space-y-16 md:space-y-20">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About" }]} />
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="font-script text-3xl sm:text-4xl text-heart">Nice to meet you!</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            About Home Sweet Clean
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a local cleaning team in Evansville, Indiana. We provide dependable residential
            cleaning for busy families who want a fresh, comfortable home without having to spend
            their free time cleaning.
          </p>
        </div>
        <div className="rounded-[2.5rem] overflow-hidden border-8 border-[#fff3b8] shadow-xl">
          <img
            src={ABOUT_IMAGE}
            alt="Illustration of the Home Sweet Clean team with a mop"
            className="w-full"
            loading="eager"
          />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary rounded-[2.5rem] p-8 sm:p-12 space-y-5 text-lg leading-relaxed">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Story</h2>
          <p>
            Life is messy. Your house doesn't have to be. We started Home Sweet Clean because we
            know how hard it is to keep up with work, family and everything in between, and how good
            it feels to walk into a clean home at the end of the day.
          </p>
          <p>
            So we'll tackle the dust, the dirt and the "I'll get to that later" pile. Weekly,
            biweekly or monthly, a one-time clean, a move-out, or just a helping hand with the dog,
            the mail or the groceries. Let us handle the mess, so you can enjoy your home.
          </p>
          <p className="font-script text-3xl text-heart">
            Because clean homes make happy families! ♥
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-base"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-primary font-heading font-semibold text-base"
            >
              <Phone className="w-4 h-4" /> Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">What We're About</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-card rounded-3xl p-6 border-2 border-border text-center">
              <span className="mx-auto w-14 h-14 rounded-full bg-[#fff3b8] flex items-center justify-center mb-3">
                <Icon className="w-7 h-7 text-primary" />
              </span>
              <h3 className="text-xl font-bold mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <ServiceLinkGrid title="How We Can Help" />

      <AreaLinkList title="Where We Clean" />

      <QuoteSection heading="Let Us Handle the Mess" />
    </div>
  );
}
