function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#top" className="logo">
          <span className="logo-mark" aria-hidden="true">
            🌱
          </span>
          Sprout
        </a>
        <p>The teacher&rsquo;s assistant that never clocks out.</p>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Sprout. Made for the people who
          make early childhood education work.
        </p>
      </div>
    </footer>
  )
}

export default Footer
