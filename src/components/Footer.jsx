import { SITE } from "../config/site";

// Footer：底部信息与链接
export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer__inner">
        <span className="footer__meta">
          © {new Date().getFullYear()} {SITE.name}
        </span>

        <span className="footer__sep" aria-hidden="true">
          •
        </span>

        <a className="footer__link" href={SITE.github} target="_blank" rel="noreferrer">
          GitHub
        </a>

        <span className="footer__sep" aria-hidden="true">
          •
        </span>

        <a className="footer__link" href={SITE.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>

        <span className="footer__sep" aria-hidden="true">
          •
        </span>

        <a className="footer__link" href={`mailto:${SITE.email}`}>
          Email
        </a>
      </div>
    </footer>
  );
}
