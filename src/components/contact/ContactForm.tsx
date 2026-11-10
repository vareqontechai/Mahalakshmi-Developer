"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { EMAIL_REGEX, PHONE_REGEX, whatsappLink, type Lead } from "@/lib/enquiry";
import EnquirySuccess from "@/components/enquiry/EnquirySuccess";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = { name?: string; phone?: string; email?: string };

const field =
  "w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";
const label = "mb-1 block text-sm font-medium text-neutral-700";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [lead, setLead] = useState<Lead | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const d = new FormData(e.currentTarget);
  const name = String(d.get("name") ?? "").trim();
  const phone = String(d.get("phone") ?? "").replace(/[\s-]/g, "");
  const email = String(d.get("email") ?? "").trim();
  const project = String(d.get("project") ?? "");
  const message = String(d.get("message") ?? "").trim();
  const website = String(d.get("website") ?? ""); // honeypot

  const next: Errors = {};
  if (name.length < 2) next.name = "Please enter your name";
  if (!PHONE_REGEX.test(phone)) next.phone = "Enter a valid 10-digit mobile number";
  if (email && !EMAIL_REGEX.test(email)) next.email = "Enter a valid email address";
  setErrors(next);
  if (Object.keys(next).length > 0 || website) return;

  const newLead: Lead = {
    name,
    phone,
    email: email || undefined,
    project: project || undefined,
    message: message || undefined,
  };
  window.open(whatsappLink(newLead), "_blank", "noopener,noreferrer");
  setLead(newLead);
  setStatus("success");
}

  if (status === "success" && lead) {
    return (
      <EnquirySuccess
        lead={lead}
        closeLabel="Send another enquiry"
        onClose={() => {
          setLead(null);
          setStatus("idle");
        }}
      />
    );
  }

  const selectable = projects.filter((p) => p.status !== "completed");

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className={label}>Full name</label>
          <input id="c-name" name="name" type="text" autoComplete="name" placeholder="Your name" className={field} />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="c-phone" className={label}>Mobile number</label>
          <input id="c-phone" name="phone" type="tel" inputMode="numeric" autoComplete="tel-national" placeholder="98765 43210" className={field} />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-email" className={label}>Email (optional)</label>
          <input id="c-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className={field} />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="c-project" className={label}>Interested in</label>
          <select id="c-project" name="project" defaultValue="" className={field}>
            <option value="">Not sure yet</option>
            {selectable.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name} ({p.status === "upcoming" ? "Upcoming" : "Ongoing"})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="c-message" className={label}>Message (optional)</label>
        <textarea id="c-message" name="message" rows={4} placeholder="Plot size, budget, preferred visit time..." className={field} />
      </div>

      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
          Something went wrong. Please try again or call us at {site.phone}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold-dark disabled:opacity-70 sm:w-auto sm:px-10"
      >
        {status === "submitting" && <Loader2 size={16} className="animate-spin" />}
        {status === "submitting" ? "Sending..." : "Send on WhatsApp"}
      </button>

      <p className="text-xs text-neutral-500">
        By submitting, you agree to be contacted by call or WhatsApp about our projects.
      </p>
    </form>
  );
}