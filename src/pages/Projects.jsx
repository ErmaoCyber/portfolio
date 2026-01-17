import ProjectsGrid from "../components/ProjectsGrid";

// Projects 页面：展示项目卡片网格
export default function Projects() {
  return (
    <section className="panel" aria-label="Projects">
      <header className="panel__header">
        <h2 className="panel__title">Projects</h2>
        <p className="panel__subtitle muted">
          Selected projects that demonstrate backend, data, testing, and clean architecture.
        </p>
      </header>

      <ProjectsGrid />
    </section>
  );
}
