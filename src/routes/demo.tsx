import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "../lib/seo";
import { HomePage } from "../components/HomePage";
import { CleanEstimatorEmbed } from "../components/CleanEstimatorEmbed";

// Demo of the home page with the Clean Estimator in place of the quote form. Kept out of Google (noindex) and the
// sitemap so it doesn't compete with the real home page as duplicate content.
export const Route = createFileRoute("/demo")({
  head: () => {
    const head = pageHead({
      title: "Instant Cleaning Estimate | Home Sweet Clean",
      description:
        "Get an instant house cleaning estimate from Home Sweet Clean in Evansville, Newburgh, Boonville and Chandler, IN.",
      path: "/demo",
    });
    return { ...head, meta: [...head.meta, { name: "robots", content: "noindex, follow" }] };
  },
  component: () => <HomePage quoteWidget={<CleanEstimatorEmbed />} />,
});
