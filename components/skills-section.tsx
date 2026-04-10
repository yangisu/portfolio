import { SectionShell } from "./section-shell";

type SkillGroup = {
  title: string;
  skills: string[];
};

type SkillsSectionProps = {
  groups: SkillGroup[];
};

export function SkillsSection({ groups }: SkillsSectionProps) {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="Frontend, Tools, and Workflow"
      description="A practical stack focused on maintainability, speed, and product impact."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {groups.map((group) => (
          <article key={group.title} className="glass-card rounded-2xl p-5">
            <h3 className="mb-3 text-base font-semibold text-white">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#3f365c] bg-[#161129] px-3 py-1.5 text-xs text-[#d5cfee]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
