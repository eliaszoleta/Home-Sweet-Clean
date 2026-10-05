import { useEffect, useRef } from "react";

const COMPANY_ID = "4ecae3b0-dfef-4c02-9498-02fc4994d45b";

/**
 * Clean Estimator cost calculator embed. Listens for the widget's messages: `cleancalc-resize`
 * (grow to fit) and `cleancalc-scroll-to-top` (scroll back to the top of the widget between steps).
 */
export function CleanEstimatorEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      const iframe = iframeRef.current;
      if (!iframe || !e.data || e.source !== iframe.contentWindow) return;
      if (e.data.type === "cleancalc-resize" && typeof e.data.height === "number") {
        iframe.style.height = `${Math.max(e.data.height, 300)}px`;
      } else if (e.data.type === "cleancalc-scroll-to-top") {
        // Scroll so the top of the estimator sits just below the sticky site header
        // (the embed snippet's default is a fixed 70px offset).
        const header = document.querySelector("header");
        const offset = header ? header.getBoundingClientRect().height + 12 : 70;
        const top = iframe.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      id={`cleancalc-iframe-${COMPANY_ID}`}
      src={`https://cleanestimator.com/embed?company=${COMPANY_ID}`}
      width="100%"
      height="700"
      title="Cleaning Cost Estimator"
      className="block w-full bg-white"
      style={{
        border: "none",
        borderRadius: 12,
        boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
        height: 700,
      }}
    />
  );
}
