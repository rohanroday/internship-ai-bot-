const TOPICS = [
  { icon: "📦", title: "Orders", text: "Place, change or cancel an order.", example: "Can I change my address?" },
  { icon: "🚚", title: "Delivery & tracking", text: "Delivery times, charges and tracking.", example: "Is shipping free on ₹850?" },
  { icon: "🛠️", title: "Damaged or wrong item", text: "Report a problem within 48 hours.", example: "My item arrived damaged." },
  { icon: "↩️", title: "Returns & exchanges", text: "Return windows and how to return.", example: "How long to return a rug?" },
  { icon: "💸", title: "Refund timing", text: "When refunds reach you after a return.", example: "When will my refund arrive?" },
];

export default function TopicCards() {
  return (
    <section className="topics container">
      <h2>What the assistant can help with</h2>
      <div className="topic-grid">
        {TOPICS.map((t) => (
          <article key={t.title} className="topic-card">
            <span className="topic-icon" aria-hidden="true">{t.icon}</span>
            <h3>{t.title}</h3>
            <p>{t.text}</p>
            <p className="topic-example">Try: “{t.example}”</p>
          </article>
        ))}
      </div>
    </section>
  );
}
