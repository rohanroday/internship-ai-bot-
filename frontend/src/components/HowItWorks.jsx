import { ChatIcon, BookIcon, CheckIcon } from "./icons";

const STEPS = [
  { Icon: ChatIcon, title: "Ask your question", text: "Type it in the chat, or tap a suggested question." },
  { Icon: BookIcon, title: "It checks our policy", text: "The assistant searches Nestora's official policies on orders, returns, offers and rewards." },
  { Icon: CheckIcon, title: "Get a clear answer", text: "A short, accurate reply, or the right human contact if it can't help." },
];

export default function HowItWorks() {
  return (
    <section className="section how" id="how">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">How it works</span>
          <h2>Built to give the right answer, not a guess</h2>
          <p>The assistant never invents prices, dates or policies. If something isn't covered, it says so.</p>
        </div>
        <ol className="steps">
          {STEPS.map(({ Icon, title, text }, i) => (
            <li key={title} className="step reveal">
              <span className="step-num">{i + 1}</span>
              <span className="step-icon"><Icon size={24} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
