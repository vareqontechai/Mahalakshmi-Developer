import { site } from "@/data/site";

const btn =
  "flex h-10 w-10 items-center justify-center rounded-full border border-brand/30 text-brand transition hover:border-gold hover:bg-gold hover:text-white";

const svgProps = {
  viewBox: "0 0 24 24",
  width: 20,
  height: 20,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export default function SocialLinks() {
  return (
    <div className="flex gap-3">
      <a
        href={site.social.youtube}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Mahalaxmi Infra on YouTube"
        className={btn}
      >
        <svg {...svgProps}>
          <rect x="2.5" y="5" width="19" height="14" rx="4" />
          <path d="m10 9.2 5 2.8-5 2.8z" fill="currentColor" />
        </svg>
      </a>
      <a
        href={site.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Mahalaxmi Infra on Instagram"
        className={btn}
      >
        <svg {...svgProps}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      </a>
    </div>
  );
}