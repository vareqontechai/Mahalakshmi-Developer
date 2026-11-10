"use client";

import { useEffect, useRef, useState } from "react";
import { X, Loader2, ShieldCheck, Landmark, MapPin } from "lucide-react";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import EnquirySuccess from "./EnquirySuccess";
import { PHONE_REGEX, whatsappLink, type Lead } from "@/lib/enquiry";

interface Props {
  defaultProject?: string;
  onClose: () => void;
}

type Status = "idle" | "submitting" | "success" | "error";
type Errors = { name?: string; phone?: string };

export default function EnquiryModal({ defaultProject = "", onClose }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [lead, setLead] = useState<Lead | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  // Lock page scroll, close on Escape, focus first field
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    nameRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const name = String(data.get("name") ?? "").trim();
  const phone = String(data.get("phone") ?? "").replace(/[\s-]/g, "");
  const project = String(data.get("project") ?? "");
  const website = String(data.get("website") ?? ""); // honeypot

  const next: Errors = {};
  if (name.length < 2) next.name = "Please enter your name";
  if (!PHONE_REGEX.test(phone)) next.phone = "Enter a valid 10-digit mobile number";
  setErrors(next);
  if (Object.keys(next).length > 0 || website) return;

  const newLead: Lead = { name, phone, project: project || undefined };
  // Must run directly inside the submit click, or browsers may block the new tab
  window.open(whatsappLink(newLead), "_blank", "noopener,noreferrer");
  setLead(newLead);
  setStatus("success");
}

  const selectable = projects.filter((p) => p.status !== "completed");

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-title"
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative grid max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl md:grid-cols-5">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-1.5 text-neutral-600 shadow transition hover:text-brand cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Left brand panel */}
        <div className="hidden flex-col justify-between bg-brand p-8 text-white md:col-span-2 md:flex">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Free Site Visit
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-snug">
              Own a plot in Nagpur&rsquo;s growth corridor
            </h2>
          </div>
          <ul className="mt-8 space-y-4 text-sm text-white/90">
            <li className="flex gap-3">
              <ShieldCheck size={18} className="mt-0.5 shrink-0 text-gold" />
              NIT / NMRDA sanctioned layouts
            </li>
            <li className="flex gap-3">
              <Landmark size={18} className="mt-0.5 shrink-0 text-gold" />
              Bank loan assistance
            </li>
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
              Near the Samruddhi Expressway
            </li>
          </ul>
        </div>

        {/* Right form panel */}
        <div className="p-6 sm:p-8 md:col-span-3">
          {status === "success" && lead ? (
            <EnquirySuccess lead={lead} onClose={onClose} />
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h3 id="enquiry-title" className="text-xl font-semibold text-brand">
                Get details &amp; book a visit
              </h3>
              <p className="mt-1 text-sm text-neutral-500">
                Share your details and we&rsquo;ll call you back.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="enq-name" className="mb-1 block text-sm font-medium text-neutral-700">
                    Full name
                  </label>
                  <input
                    ref={nameRef}
                    id="enq-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="enq-phone" className="mb-1 block text-sm font-medium text-neutral-700">
                    Mobile number
                  </label>
                  <div className="flex">
                    <span className="flex items-center rounded-l-lg border border-r-0 border-neutral-300 bg-neutral-50 px-3 text-sm text-neutral-600">
                      +91
                    </span>
                    <input
                      id="enq-phone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      placeholder="98765 43210"
                      className="w-full rounded-r-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="enq-project" className="mb-1 block text-sm font-medium text-neutral-700">
                    Interested in
                  </label>
                  <select
                    id="enq-project"
                    name="project"
                    defaultValue={defaultProject}
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 cursor-pointer"
                  >
                    <option value="">Not sure yet</option>
                    {selectable.map((p) => (
                      <option key={p.slug} value={p.name}>
                        {p.name} ({p.status === "upcoming" ? "Upcoming" : "Ongoing"})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Honeypot: hidden from humans, bots fill it */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                />
              </div>

              {status === "error" && (
                <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
                  Something went wrong. Please try again or call us at {site.phone}.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold-dark disabled:opacity-70 cursor-pointer"
              >
                {status === "submitting" && <Loader2 size={16} className="animate-spin" />}
                {status === "submitting" ? "Sending..." : "Send on WhatsApp"}
              </button>

              <p className="mt-3 text-center text-xs text-neutral-500">
                By submitting, you agree to be contacted by call or WhatsApp
                about our projects.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}