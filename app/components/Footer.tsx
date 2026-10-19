import { StyledHeadingWords } from "./StyledHeading";
import { telHref } from "../lib/phone";
import type { HomePage, SiteSettings } from "../sanity/types";

export function Footer({
  content,
  settings,
}: {
  content: HomePage["contact"];
  settings: SiteSettings;
}) {
  const { address } = settings;

  return (
    <footer className="footer index-footer" id="footer">
      <div className="footer__content">
        <h2 className="h2 footer__title">
          <StyledHeadingWords value={content.heading} />
        </h2>

        <div className="footer__contact">
          <div className="footer__address">
            <p>{settings.firmName.toUpperCase()}</p>
            <p>{address.street}</p>
            <p>
              {address.city}, {address.region} {address.postalCode}
            </p>
            <p>{address.country}</p>
          </div>
          <div className="link-container">
            <a className="link__plain" href={`mailto:${settings.email}`}>
              <span>E {settings.email}</span>
            </a>
          </div>
          <div className="link-container">
            <a className="link__plain" href={telHref(settings.phone)}>
              <span>T {settings.phone}</span>
            </a>
          </div>
          {settings.fax && (
            <div className="link-container">
              <span className="link__plain link__plain--static">F {settings.fax}</span>
            </div>
          )}
        </div>

        {content.blurb && (
          <div className="footer__directions">
            <div>
              <p>{content.blurb}</p>
            </div>
          </div>
        )}

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} {settings.firmName}
          </p>
        </div>
      </div>
    </footer>
  );
}
