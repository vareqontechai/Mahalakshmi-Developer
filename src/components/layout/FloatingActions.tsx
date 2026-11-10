import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";

export default function FloatingActions() {
  const msg = encodeURIComponent(
    "Hello, I'm interested in your plots in Nagpur. Please share details."
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${site.whatsapp}?text=${msg}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
      >
        <MessageCircle size={26} />
      </a>
      <a
        href={site.phoneHref}
        aria-label="Call us"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg transition hover:scale-105"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}