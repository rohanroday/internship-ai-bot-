export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="/" className="logo">
          <img src="/favicon.svg" alt="" width="28" height="28" />
          <span>Nestora Home</span>
        </a>
        <span className="header-tag">Help Center</span>
      </div>
    </header>
  );
}
