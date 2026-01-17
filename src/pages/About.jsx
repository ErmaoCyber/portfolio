import { SITE } from "../config/site";
import HeroVisual from "../components/HeroVisual";

// About 页面数据：技能与工具列表
const SKILLSETS = {
  core: ["Java", "C#", "SQL", "REST APIs", "OOP", "Databases"],
  familiar: ["Git", "Agile", "Testing", "Debugging"],
  learning: ["Cloud Basics", "CI/CD"],
};

const TOOLS = ["VS Code", "IntelliJ", "Postman", "Docker", "GitHub Actions"];

export default function About() {
  return (
    <section className="about2" aria-label="About page">
      <header className="about2__hero">
        <div className="about2__left">
          <p className="about2__kicker">About</p>

          <h1 className="about2__title">
            Know Who <span className="accent">I’m</span>
          </h1>

          <p className="about2__text">
            I’m a Master of Software Development student at Victoria University of Wellington. I enjoy building practical software, learning through projects, and working in collaborative teams.
          </p>

          <ul className="about2__bullets">
            <li>Project-based learning: web, databases, testing, teamwork</li>
            <li>Comfortable with structured problem-solving and iteration</li>
            <li>Seeking graduate/junior opportunities in New Zealand IT</li>
          </ul>
        </div>

        <div className="about2__right">
          {/* 背景图模式：cover 自动铺满圆形 */}
          <HeroVisual
            className="visual--avatar visual--float"
            src={SITE.images.aboutHero}
            alt="Wellington view"
            mode="bg"
          />
          <p className="about2__location">{SITE.location}</p>
        </div>
      </header>

      <div className="about2__divider" />

      <section className="about2__section" aria-label="Professional skillset">
        <h2 className="about2__h2">
          Professional <span className="accent">Skillset</span>
        </h2>

        <div className="skillGroups">
          <div className="skillGroup">
            <p className="skillGroup__label">Core</p>
            <div className="tags">
              {SKILLSETS.core.map((s) => (
                <span key={s} className="tag2">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="skillGroup">
            <p className="skillGroup__label">Familiar</p>
            <div className="tags">
              {SKILLSETS.familiar.map((s) => (
                <span key={s} className="tag2">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="skillGroup">
            <p className="skillGroup__label">Learning</p>
            <div className="tags">
              {SKILLSETS.learning.map((s) => (
                <span key={s} className="tag2 tag2--learning">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="about2__divider" />

      <section className="about2__section" aria-label="Tools">
        <h2 className="about2__h2">
          Tools <span className="accent">I use</span>
        </h2>

        <div className="tags tags--tools">
          {TOOLS.map((t) => (
            <span key={t} className="tag2 tag2--tool">
              {t}
            </span>
          ))}
        </div>
      </section>
    </section>
  );
}
