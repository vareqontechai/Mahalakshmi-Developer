"use client";

import { CheckCircle2, MessageCircle } from "lucide-react";
import { whatsappLink, type Lead } from "@/lib/enquiry";

interface Props {
  lead: Lead;
  onClose: () => void;
  closeLabel?: string;
}

export default function EnquirySuccess({ lead, onClose, closeLabel = "Continue browsing" }: Props) {
  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
      <CheckCircle2 size={56} className="text-brand" />
      <h3 className="mt-4 text-xl font-semibold text-brand">Almost done, {lead.name}!</h3>
      <p className="mt-2 max-w-sm text-sm text-neutral-600">
        We opened WhatsApp with your details. Please tap <strong>Send</strong> there so we
        receive your enquiry and can call you back.
      </p>

      <a
        href={whatsappLink(lead)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
      >
        <MessageCircle size={18} /> Open WhatsApp again
      </a>

      <button
        type="button"
        onClick={onClose}
        className="mt-4 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-gold-dark"
      >
        {closeLabel}
      </button>
    </div>
  );
}