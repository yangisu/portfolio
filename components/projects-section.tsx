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
      title="Featured Work"
      description="Selected projects focused on product quality, measurable outcomes, and maintainable architecture."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="glass-card group rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-[#4f4371]"
          >
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#c9c2dd]">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#3f355d] bg-[#161229] px-3 py-1 text-xs text-[#d9d2f0]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#4b3f6e] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#dfd6f7] transition hover:border-[#9c6dff] hover:text-white"
              >
                GitHub
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#9c6dff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#ae87ff]"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
