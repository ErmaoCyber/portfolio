import { PROJECTS } from "../config/projects";

function isValidUrl(url) {
  return typeof url === "string" && url.startsWith("http");
}

export default function ProjectsGrid() {
  const sorted = [...PROJECTS].sort((a, b) => {
    const fa = a.featured ? 1 : 0;
    const fb = b.featured ? 1 : 0;
    return fb - fa;
  });

  return (
    <div className="grid" aria-label="Projects grid">
      {sorted.map((p) => (
        <article key={p.id} className="card card--project">
          {/* Cover */}
          <div className="card__cover">
            {p.image ? (
              <img className="card__coverImg" src={p.image} alt={`${p.title} cover`} loading="lazy" />
            ) : (
              <div className="card__coverFallback" aria-hidden="true" />
            )}
          </div>

          <div className="card__top">
            <div className="card__meta">
              <span className="pill">{p.status}</span>
              <span className="muted">{p.year}</span>
            </div>

            <h3 className="card__title">{p.title}</h3>
            <p className="card__desc">{p.oneLiner || p.desc}</p>

            {Array.isArray(p.highlights) && p.highlights.length > 0 && (
              <ul className="card__bullets">
                {p.highlights.slice(0, 3).map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="tags tags--compact">
            {p.tags?.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>

          <div className="card__actions card__actions--project">
            {isValidUrl(p.demoUrl) && (
              <a className="btn btn--primary" href={p.demoUrl} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            )}

            {isValidUrl(p.repoUrl) && (
              <a className="btn btn--ghost" href={p.repoUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}

            {!isValidUrl(p.demoUrl) && !isValidUrl(p.repoUrl) && (
              <span className="muted">Links coming soon</span>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
