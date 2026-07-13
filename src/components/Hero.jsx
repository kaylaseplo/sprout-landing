function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">For nursery &amp; daycare classrooms</p>
          <h1>The teacher&rsquo;s assistant that never clocks out.</h1>
          <p className="hero-sub">
            Sprout is an AI classroom assistant that cuts the documentation
            busywork, backs you up in tough moments, and keeps every
            teacher&rsquo;s hard-won know-how from walking out the door.
          </p>
          <div className="hero-actions">
            <a href="#signup" className="btn btn-primary">
              Get early access
            </a>
            <a href="#features" className="btn btn-secondary">
              See how it works
            </a>
          </div>
          <p className="hero-note">
            Free during early access &middot; takes 10 seconds to join
          </p>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="preview-card preview-photo">
            <span className="preview-icon">📸</span>
            <div>
              <strong>Photo tagged</strong>
              <p>Maya &amp; Owen &middot; caption drafted</p>
            </div>
          </div>
          <div className="preview-card preview-activity">
            <span className="preview-icon">🎨</span>
            <div>
              <strong>3 activity ideas</strong>
              <p>Ready for high-energy indoor play</p>
            </div>
          </div>
          <div className="preview-card preview-chat">
            <span className="preview-icon">💬</span>
            <div>
              <strong>&ldquo;Won&rsquo;t separate at drop-off?&rdquo;</strong>
              <p>Guidance in seconds, not a search away</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
