import ProjectsGrid from "../components/ProjectsGrid";

export default function Projects() {
  return (
    <section className="panel" aria-label="Projects">
      <header className="panel__header">
        <h2 className="panel__title">Projects</h2>
      </header>

      <ProjectsGrid />
    </section>
  );
}