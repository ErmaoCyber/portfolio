import { PROJECTS } from "../config/projects";

// ProjectsGrid：以网格形式渲染项目卡片
export default function ProjectsGrid() {
  return (
    <div className="grid" aria-label="Projects grid">
      {PROJECTS.map((p) => (
        <article key={p.title} className="card">
          <div className="card__top">
            <h3 className="card__title">{p.title}</h3>
            <p className="card__desc">{p.desc}</p>
          </div>

          <div className="tags tags--compact">
            {p.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>

          <div className="card__actions">
            <a
              className="btn btn--ghost"
              href={p.href}
              onClick={(e) => p.href === "#" && e.preventDefault()}
            >
              View
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
