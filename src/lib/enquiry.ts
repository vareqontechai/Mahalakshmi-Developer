import { site } from "@/data/site";

export const PHONE_REGEX = /^(\+91|91|0)?[6-9]\d{9}$/;
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface Lead {
  name: string;
  phone: string;
  email?: string;
  project?: string;
  message?: string;
}

export function whatsappMessage(l: Lead): string {
  const interest = l.project
    ? `I'm interested in ${l.project}.`
    : "I'm interested in your plots in Nagpur. Please share details.";
  return [
    `Hello, I'm ${l.name}.`,
    interest,
    `Mobile: ${l.phone}`,
    l.email ? `Email: ${l.email}` : null,
    l.message ? `Message: ${l.message}` : null,
    "Please call me back.",
  ]
    .filter(Boolean)
    .join("\n");
}

export const whatsappLink = (l: Lead) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(whatsappMessage(l))}`;