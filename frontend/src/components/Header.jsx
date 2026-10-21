import { useEffect, useState } from "react";
import { HomeIcon, ChatIcon } from "./icons";
import { openZiaChat } from "../utils/ziaChat";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#top" className="logo" aria-label="Nestora Home, back to top">
          <span className="logo-mark"><HomeIcon size={18} /></span>
          <span className="logo-text">Nestora<span>Home</span></span>
          <span className="logo-tag">Help Center</span>
        </a>
        <nav className="nav" aria-label="Main">
          <a href="#topics">Help topics</a>
          <a href="#how">How it works</a>
          <a href="#contact">Contact</a>
        </nav>
        <button type="button" className="btn btn-small btn-light" onClick={openZiaChat}>
          <ChatIcon size={16} /> Chat with us
        </button>
      </div>
    </header>
  );
}
