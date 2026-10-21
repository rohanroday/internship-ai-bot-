import { useState } from "react";
import { SearchIcon, ArrowIcon, SparkIcon, BookIcon, ShieldIcon } from "./icons";
import { askZia } from "../utils/ziaChat";

const POPULAR = [
  "Is shipping free on a ₹850 order?",
  "How do I return something?",
  "It says delivered but I didn't get it.",
  "Is there a discount for new customers?",
];

export default function Hero() {
  const [question, setQuestion] = useState("");

  async function submit(e) {
    e.preventDefault();
    const q = question.trim();
    if (!q) return;
    const sent = await askZia(q);
    if (sent) setQuestion("");
  }

  return (
    <section className="hero" id="top">
      <div className="hero-glow hero-glow-1" aria-hidden="true" />
      <div className="hero-glow hero-glow-2" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow"><SparkIcon size={14} /> AI support assistant · 24×7</span>
          <h1>
            Order answers, <span className="hero-highlight">in seconds.</span>
          </h1>
          <p className="hero-lead">
            Ask about delivery, returns, refunds, coupons, gift cards and reward points. Our assistant
            answers only from Nestora's official policies, so you get the right answer, not a guess.
          </p>

          <form className="ask-bar" onSubmit={submit} role="search">
            <SearchIcon size={20} className="ask-icon" />
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask anything, e.g. How long will delivery take?"
              aria-label="Ask the assistant a question"
            />
            <button type="submit" className="btn btn-accent" disabled={!question.trim()}>
              Ask <ArrowIcon size={16} />
            </button>
          </form>

          <div className="chips" aria-label="Popular questions">
            <span className="chips-label">Popular:</span>
            {POPULAR.map((q) => (
              <button key={q} type="button" className="chip" onClick={() => askZia(q)}>{q}</button>
            ))}
          </div>
        </div>

        <div className="hero-visual reveal" aria-hidden="true">
          <div className="preview">
            <div className="preview-head">
              <span className="preview-avatar"><SparkIcon size={16} /></span>
              <div>
                <strong>Nestora Order Assistant</strong>
                <span className="preview-status"><i /> Online</span>
              </div>
            </div>
            <div className="preview-body">
              <div className="bubble bubble-user">Is shipping free on a ₹850 order?</div>
              <div className="bubble bubble-bot">
                Not quite. Standard delivery is free for orders of <b>₹999 or more</b>.
                For an ₹850 order, shipping is <b>₹79</b>.
              </div>
              <div className="source-tag"><BookIcon size={13} /> From: Shipping charges policy</div>
              <div className="bubble bubble-user">What's the weather today?</div>
              <div className="bubble bubble-bot muted">
                Sorry, I can only help with orders, delivery, returns and exchanges.
              </div>
            </div>
          </div>
          <div className="float-badge float-badge-1"><ShieldIcon size={16} /> Policy-checked answers</div>
          <div className="float-badge float-badge-2"><SparkIcon size={16} /> Replies in ~5 sec</div>
        </div>
      </div>
    </section>
  );
}
