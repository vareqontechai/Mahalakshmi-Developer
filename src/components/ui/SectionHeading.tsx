interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ eyebrow, title, subtitle, light }: Props) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-3 text-3xl font-semibold sm:text-4xl ${light ? "text-white" : "text-brand"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/80" : "text-neutral-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}