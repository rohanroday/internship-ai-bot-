import { useEffect, useRef, useState } from "react";
import { QUESTION_GROUPS } from "../config/questions";
import { askZia } from "../utils/ziaChat";

// Floating button that opens a list of questions. Clicking one sends it to the chat.
export default function SuggestedQuestions() {
  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const panelRef = useRef(null);

  // Close on Escape or a click outside the panel
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onClick = (e) => panelRef.current && !panelRef.current.contains(e.target) && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  // Hide the notice after a few seconds
  useEffect(() => {
    if (!notice) return;
    const t = setTimeout(() => setNotice(""), 3500);
    return () => clearTimeout(t);
  }, [notice]);

  async function handleAsk(question) {
    setOpen(false);
    const sent = await askZia(question);
    if (sent) return;
    // Fallback: copy it so the user can paste it into the chat
    try {
      await navigator.clipboard.writeText(question);
      setNotice("Question copied. Paste it into the chat.");
    } catch {
      setNotice("Couldn't reach the chat. Please type your question there.");
    }
  }

  return (
    <div className="sq" ref={panelRef}>
      {open && (
        <div className="sq-panel" role="dialog" aria-label="Suggested questions">
          <div className="sq-panel-head">
            <strong>Suggested questions</strong>
            <span>Tap one to ask the assistant</span>
          </div>
          <div className="sq-list">
            {QUESTION_GROUPS.map((group) => (
              <section key={group.topic} className="sq-group">
                <h4>{group.topic}</h4>
                {group.questions.map((q) => (
                  <button key={q} type="button" className="sq-question" onClick={() => handleAsk(q)}>
                    {q}
                  </button>
                ))}
              </section>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        className="sq-toggle"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "✕ Close" : "💬 Suggested questions"}
      </button>

      {notice && <p className="sq-notice" role="status">{notice}</p>}
    </div>
  );
}
