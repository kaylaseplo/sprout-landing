function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="logo">
          <span className="logo-mark" aria-hidden="true">
            🌱
          </span>
          Sprout
        </a>
        <nav aria-label="Primary">
          <a href="#signup" className="btn btn-primary header-cta">
            Get early access
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
