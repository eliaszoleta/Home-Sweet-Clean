import { createFileRoute } from "@tanstack/react-router";
import { pageHead, faqJsonLd } from "../lib/seo";
import { HOME_FAQS } from "../lib/seo-content";
import { HomePage } from "../components/HomePage";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "House Cleaning Services in Evansville, IN | Home Sweet Clean",
      description:
        "Evansville house cleaning: weekly, biweekly & monthly cleans, move-in/move-out and custom cleaning, plus errand help. Serving Newburgh, Boonville & Chandler.",
      path: "/",
      jsonLd: [faqJsonLd(HOME_FAQS)],
    }),
  component: () => <HomePage />,
});
