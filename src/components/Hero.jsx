import { useTypewriter, Cursor } from "react-simple-typewriter";
import SocialLinks from "./SocialLinks";
import HeroVisual from "./HeroVisual";
import { SITE } from "../config/site";
import { PAGES } from "../config/pages.js";

// Hero：首页主视觉区域
export default function Hero({ onNavigate }) {
  const [text] = useTypewriter({
    words: SITE.roles,
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 40,
    delaySpeed: 1400,
  });

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__left">
        <p className="hero__hello">Hi There! 👋</p>

        <h1 className="hero__title">
          I&apos;M <span className="accent">{SITE.name}</span>
        </h1>

        <div className="hero__type">
          <span className="mono">{text}</span>
          <Cursor cursorStyle="|" />
        </div>

        <p className="hero__desc">
          I build practical software through project-based learning, with a focus on clear code, teamwork, and continuous improvement.
        </p>

        <div className="hero__cta">
          <a className="btn btn--primary" href={SITE.resumePath} target="_blank" rel="noreferrer">
            View Resume
          </a>

          <a
            className="btn btn--ghost"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.(PAGES.PROJECTS);
            }}
          >
            View Projects
          </a>

          <a className="btn btn--ghost" href={`mailto:${SITE.email}`}>
            Contact
          </a>
        </div>

        <SocialLinks />
      </div>

      <div className="hero__right">
        <HeroVisual src={SITE.images.homeHero} alt={`${SITE.name} hero`} />
      </div>
    </section>
  );
}
