import { Project } from "@/data/portfolio";
import { SectionShell } from "./section-shell";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Featured AI Work"
      description="Selected projects focused on model reliability, practical deployment, and measurable outcomes."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="glass-card group rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-[#3e5f52]"
          >
            <h3 className="text-lg font-semibold text-[#143325]">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed theme-text-muted">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="theme-chip rounded-full px-3 py-1 text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="theme-outline-btn rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition"
                >
                  GitHub
                </a>
              ) : null}
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="theme-solid-btn rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition"
                >
                  Live Demo
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}


