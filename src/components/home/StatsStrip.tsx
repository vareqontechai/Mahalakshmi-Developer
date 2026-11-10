const stats = [
  { value: "Since 2010", label: "Trusted developer in Nagpur" },
  { value: "67+", label: "Projects completed" },
  { value: "15,000+", label: "Happy customers" },
  { value: "880+", label: "Acres developed" },
];

export default function StatsStrip() {
  return (
    <section className="bg-brand">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-semibold text-gold sm:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-white/80">{s.label}</p>
          </div>
        ))}
      </div>
      <p className="pb-4 text-center text-[11px] text-white/50">
        Mahalaxmi Infra group achievements
      </p>
    </section>
  );
}