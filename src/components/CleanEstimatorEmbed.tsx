import { useEffect, useRef } from "react";

const COMPANY_ID = "4ecae3b0-dfef-4c02-9498-02fc4994d45b";

/** Clean Estimator cost calculator embed. Grows to fit its content via the widget's resize messages. */
export function CleanEstimatorEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      const iframe = iframeRef.current;
      if (
        iframe &&
        e.source === iframe.contentWindow &&
        e.data &&
        e.data.type === "cleancalc-resize" &&
        typeof e.data.height === "number"
      ) {
        iframe.style.height = `${Math.max(e.data.height, 300)}px`;
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
