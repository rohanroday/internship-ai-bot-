// Key policy facts, taken from the Orders, Delivery & Returns knowledge base.
const STATS = [
  { value: "₹999+", label: "Free standard delivery" },
  { value: "2–4 days", label: "Metro delivery time" },
  { value: "10 days", label: "Returns on decor & bedding" },
  { value: "24×7", label: "AI assistant available" },
];

export default function StatsStrip() {
  return (
    <section className="stats container reveal" aria-label="Key facts">
      {STATS.map((s) => (
        <div key={s.label} className="stat">
          <strong>{s.value}</strong>
          <span>{s.label}</span>
        </div>
      ))}
    </section>
  );
}
