import { useEffect, useRef, useState } from "react";
import useScript from "../hooks/useScript";
import { ZIA_SDK_URL, ZIA_ORG_ID, ZIA_ENTITY_ID, ziaAgentsAttr } from "../config/agent";

const configured = Boolean(ZIA_ORG_ID && ZIA_ENTITY_ID);

// Mounts the <agents-chatkit> element, then loads the Zia Agents SDK.
// Order matters: the SDK looks for the element as soon as it loads (same as Zoho's snippet).
export default function ChatWidget() {
  const hostRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const status = useScript(mounted ? ZIA_SDK_URL : null);

  useEffect(() => {
    const host = hostRef.current;
    if (!configured || !host) return;
    if (!host.querySelector("agents-chatkit")) {
      // setAttribute keeps the exact attribute name and value Zoho's snippet uses
      const chat = document.createElement("agents-chatkit");
      chat.setAttribute("ziaAgents", ziaAgentsAttr);
      host.appendChild(chat);
    }
    setMounted(true);
  }, []);

  if (!configured) {
    return <p className="chat-status error">Chat is not configured. Add the IDs to the .env file.</p>;
  }

  return (
    <>
      {status === "loading" && <p className="chat-status">Loading chat assistant…</p>}
      {status === "error" && (
        <p className="chat-status error">The chat assistant couldn't load. Check your internet connection and refresh.</p>
      )}
      <div ref={hostRef} className="chat-host" />
    </>
  );
}
