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
      title="AI, Backend, and Product Delivery"
      description="A practical stack for building, evaluating, and shipping real-world AI systems."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {groups.map((group) => (
          <article key={group.title} className="glass-card rounded-2xl p-5">
            <h3 className="mb-3 text-base font-semibold text-white">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="theme-chip rounded-full px-3 py-1.5 text-xs">
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
