import React, { useCallback, useEffect, useRef, useState } from "react";

/**
 * Textarea that grows to fit its text (and its placeholder while empty), so nothing is cut off on
 * narrow phone screens. Re-measures when the text changes or the screen width changes.
 */
function AutoGrowTextarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const resize = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    let height = el.scrollHeight;
    if (!el.value && el.placeholder) {
      // Measure the placeholder by briefly putting it in as the value (never painted).
      el.value = el.placeholder;
      height = el.scrollHeight;
      el.value = "";
    }
    const border = el.offsetHeight - el.clientHeight;
    el.style.height = `${height + border}px`;
  }, []);
  useEffect(resize, [resize, props.value]);
  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [resize]);
  return <textarea ref={ref} {...props} />;
}
import {
  CheckCircle2,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowRight,
  Loader2,
  Smile,
} from "lucide-react";
import { BUSINESS_INFO, PHONE_HREF } from "../lib/business-data";

type Option = { value: string; label: string };

export const SERVICE_OPTIONS = [
  "House Cleaning",
  "Move-In / Move-Out Cleaning",
  "One-Time / Custom Cleaning",
  "A Helping Hand (Errands & Household Help)",
] as const;

export const CITY_OPTIONS: Option[] = [
  { value: "Evansville", label: "Evansville, IN" },
  { value: "Newburgh", label: "Newburgh, IN" },
  { value: "Boonville", label: "Boonville, IN" },
  { value: "Chandler", label: "Chandler, IN" },
  { value: "Surrounding Area", label: "Surrounding area" },
];

// The "size" and "frequency" questions depend on the service: a helping hand is booked by the
// hour, and move cleans are one-off jobs.
const HOME_SIZE_OPTIONS: Option[] = [
  { value: "1-2 Bedrooms", label: "1-2 Bedrooms" },
  { value: "3 Bedrooms", label: "3 Bedrooms" },
  { value: "4 Bedrooms", label: "4 Bedrooms" },
  { value: "5+ Bedrooms", label: "5+ Bedrooms" },
];
const HELPER_HOURS_OPTIONS: Option[] = [
  { value: "Helping hand: 2 hours", label: "2 hours (minimum)" },
  { value: "Helping hand: 3 hours", label: "3 hours" },
  { value: "Helping hand: 4+ hours", label: "4+ hours" },
  { value: "Helping hand: not sure yet", label: "Not sure yet" },
];
const RECURRING_OPTIONS: Option[] = [
  { value: "Weekly", label: "Weekly" },
  { value: "Biweekly", label: "Biweekly" },
  { value: "Monthly", label: "Monthly" },
  { value: "One-time", label: "One-time" },
];
const ONE_TIME_OPTIONS: Option[] = [
  { value: "As soon as possible", label: "As soon as possible" },
  { value: "Within 2 weeks", label: "Within 2 weeks" },
  { value: "Flexible / not sure yet", label: "Flexible / not sure yet" },
];
const HELPER_FREQUENCY_OPTIONS: Option[] = [
  { value: "One-time", label: "One-time" },
  { value: "Weekly", label: "Weekly" },
  { value: "As needed", label: "As needed" },
];

const isOneTimeJob = (service: string) =>
  service === "Move-In / Move-Out Cleaning" || service === "One-Time / Custom Cleaning";
const isHelpingHand = (service: string) => service.startsWith("A Helping Hand");

function sizeQuestion(service: string) {
  if (isHelpingHand(service))
    return { label: "Hours Needed", options: HELPER_HOURS_OPTIONS, fallback: 0 };
  return { label: "Home Size", options: HOME_SIZE_OPTIONS, fallback: 1 };
}

function frequencyOptions(service: string) {
  if (isHelpingHand(service)) return HELPER_FREQUENCY_OPTIONS;
  if (isOneTimeJob(service)) return ONE_TIME_OPTIONS;
  return RECURRING_OPTIONS;
}

const frequencyLabel = (service: string) =>
  isOneTimeJob(service) ? "When Do You Need It?" : "How Often?";

const defaultFrequency = (service: string) =>
  service === "House Cleaning" ? "Biweekly" : frequencyOptions(service)[0]!.value;

const defaultSize = (service: string) => {
  const q = sizeQuestion(service);
  return q.options[q.fallback]!.value;
};

interface QuoteFormProps {
  defaultService?: string | undefined;
  defaultCity?: string | undefined;
}

export function QuoteRequestForm({
  defaultService = "House Cleaning",
  defaultCity = "Evansville",
}: QuoteFormProps) {
  const [service, setService] = useState(defaultService);
  const [propertySize, setPropertySize] = useState(() => defaultSize(defaultService));
  const [frequency, setFrequency] = useState(() => defaultFrequency(defaultService));
  const size = sizeQuestion(service);
  const frequencies = frequencyOptions(service);

  // Switching services keeps the answers if they still apply, otherwise resets to that service's defaults.
  const changeService = (next: string) => {
    setService(next);
    if (!sizeQuestion(next).options.some((o) => o.value === propertySize)) {
      setPropertySize(defaultSize(next));
    }
    if (!frequencyOptions(next).some((o) => o.value === frequency)) {
      setFrequency(defaultFrequency(next));
    }
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState(defaultCity);
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const summary = [
    `Quote request from ${[firstName, lastName].filter(Boolean).join(" ")}`,
    `Service: ${service}`,
    `${size.label}: ${propertySize}`,
    `Frequency: ${frequency}`,
    `City: ${city}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Notes: ${notes || "None"}`,
  ].join("\n");
  const mailtoHref = `mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent(
    `Cleaning quote request - ${service}`,
  )}&body=${encodeURIComponent(summary)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName || !phone || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(false);

    // Send the lead to the GHL workflow (Inbound Webhook) via our own server route.
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          city,
          service,
          property_size: propertySize,
          frequency,
          notes,
          page_url: window.location.href,
          company_website: honeypot,
        }),
      });
      if (!res.ok) throw new Error(`Quote request failed (${res.status})`);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      setSubmitError(true);
      return;
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-card text-card-foreground p-8 md:p-12 rounded-2xl border border-accent/40 shadow-2xl text-center space-y-6 animate-in fade-in-50">
        <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent text-primary mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-3xl font-bold text-foreground">Quote Request Received</h3>
          <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
            Thank you, <span className="font-semibold text-foreground">{firstName}</span>. We've
            received your request for <span className="font-medium text-foreground">{service}</span>{" "}
            and we'll get back to you as soon as possible to go over the details and get you on the
            schedule!
          </p>
        </div>

        <div className="text-xs text-muted-foreground space-y-1">
          <p className="font-medium text-foreground">
            Need us right away? Call or text us at{" "}
            <a href={PHONE_HREF} className="text-primary underline font-bold">
              {BUSINESS_INFO.phone}
            </a>
            .
          </p>
        </div>

        <button
          onClick={() => setIsSubmitted(false)}
          className="text-xs font-semibold tracking-wider uppercase text-muted-foreground hover:text-foreground underline pt-2"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-3xl border border-border/80 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-[oklch(0.62_0.13_235)] text-primary-foreground p-6 sm:p-8 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Free Quote Request</span>
          </div>
          <span className="inline-flex items-center gap-1.5 bg-white/15 border border-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full">
            <Smile className="w-3.5 h-3.5" />
            <span>No Obligation</span>
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white">Get Your Free Quote</h3>
        <p className="text-primary-foreground/80 text-xs sm:text-sm">
          Tell us a little about your space and we'll get back to you with a free quote as soon as
          possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
        {/* Spam trap: hidden from people, often filled in by bots */}
        <div aria-hidden="true" className="absolute -left-[10000px] w-px h-px overflow-hidden">
          <label>
            Company website
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </label>
        </div>
        {/* Cleaning details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Specialty / Service
            </label>
            <select
              value={service}
              onChange={(e) => changeService(e.target.value)}
              className="w-full bg-secondary border border-border rounded-xl px-3 py-2.5 text-sm font-medium focus:ring-2 focus:ring-accent focus:outline-hidden"
            >
              {SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {size.label}
            </label>
            <select
              value={propertySize}
              onChange={(e) => setPropertySize(e.target.value)}
              className="w-full bg-secondary border border-border rounded-xl px-3 py-2.5 text-sm font-medium focus:ring-2 focus:ring-accent focus:outline-hidden"
            >
              {size.options.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {frequencyLabel(service)}
            </label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full bg-secondary border border-border rounded-xl px-3 py-2.5 text-sm font-medium focus:ring-2 focus:ring-accent focus:outline-hidden"
            >
              {frequencies.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Contact details */}
        <div className="pt-2 border-t border-border/70 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Your Contact Information
            </span>
            <span className="text-[11px] text-muted-foreground flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Privacy Protected
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                required
                placeholder="First Name *"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full bg-secondary border border-border rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-accent focus:outline-hidden"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full bg-secondary border border-border rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-accent focus:outline-hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-1">
              <input
                type="email"
                required
                placeholder="Email Address *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-secondary border border-border rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-accent focus:outline-hidden"
              />
            </div>
            <div className="sm:col-span-1">
              <input
                type="tel"
                required
                placeholder="Phone Number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-secondary border border-border rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-accent focus:outline-hidden"
              />
            </div>
            <div className="sm:col-span-1">
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-secondary border border-border rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-accent focus:outline-hidden"
              >
                {CITY_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <AutoGrowTextarea
              rows={3}
              placeholder="Tell us about your home or business and any special requests (e.g. pets, problem areas, preferred days)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full resize-none overflow-hidden bg-secondary border border-border rounded-xl px-3.5 py-2.5 text-sm leading-relaxed focus:ring-2 focus:ring-accent focus:outline-hidden"
            />
          </div>
        </div>

        {submitError && (
          <p
            role="alert"
            className="text-sm font-medium text-destructive bg-destructive/10 border border-destructive/30 rounded-lg px-4 py-3"
          >
            Sorry, we couldn't send your request. Please call or text us at{" "}
            <a href={PHONE_HREF} className="underline font-bold">
              {BUSINESS_INFO.phone}
            </a>
            , or{" "}
            <a href={mailtoHref} className="underline font-bold">
              email your request to us
            </a>
            .
          </p>
        )}

        {/* Action button & guarantees */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-heart" /> New Client Special
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-primary">
              <Smile className="w-4 h-4 text-primary" /> Free, No-Obligation Quote
            </span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3.5 bg-accent text-accent-foreground font-bold rounded-full text-sm uppercase tracking-widest hover:brightness-105 transition-all shadow-lg shadow-accent/30 flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
