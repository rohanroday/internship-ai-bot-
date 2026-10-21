import { useEffect, useState } from "react";

// Loads an external script once and reports "idle" | "loading" | "ready" | "error".
// Pass null to wait (nothing is loaded until a src is given).
export default function useScript(src) {
  const [status, setStatus] = useState(src ? "loading" : "idle");

  useEffect(() => {
    if (!src) {
      setStatus("idle");
      return;
    }

    let script = document.querySelector(`script[src="${src}"]`);

    if (!script) {
      script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.dataset.status = "loading";
      document.body.appendChild(script);
    } else if (script.dataset.status !== "loading") {
      setStatus(script.dataset.status);
      return;
    }

    setStatus("loading");
    const onLoad = () => { script.dataset.status = "ready"; setStatus("ready"); };
    const onError = () => { script.dataset.status = "error"; setStatus("error"); };
    script.addEventListener("load", onLoad);
    script.addEventListener("error", onError);
    return () => {
      script.removeEventListener("load", onLoad);
      script.removeEventListener("error", onError);
    };
  }, [src]);

  return status;
}
