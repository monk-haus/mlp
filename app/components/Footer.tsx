export function Footer() {
  return (
    <footer className="footer index-footer" id="footer">
      <div className="footer__content">
        <h2 className="h2 footer__title">
          <span className="italic">Let&rsquo;s </span>
          <span>talk </span>
        </h2>

        <div className="footer__contact">
          <div className="footer__address">
            <p>MAYA LAW PRACTICE</p>
            <p>1742 Silver Bark Ave</p>
            <p>Ottawa, ON K1C 7A8</p>
            <p>Canada</p>
          </div>
          <div className="link-container">
            <a className="link__plain" href="mailto:mlp@mlawpractice.com">
              <span>E mlp@mlawpractice.com</span>
            </a>
          </div>
          <div className="link-container">
            <a className="link__plain" href="tel:+16138623449">
              <span>T 613-862-3449</span>
            </a>
          </div>
        </div>

        <div className="footer__directions">
          <div>
            <p>
              MLP is a boutique Ottawa civil practice serving clients across
              Ontario.
              Consultations are available by appointment — reach out to discuss
              your matter directly with the lawyer who will handle it.
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Maya Law Practice</p>
        </div>
      </div>
    </footer>
  );
}
