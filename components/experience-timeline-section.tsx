import { SectionShell } from "./section-shell";

type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  summary: string;
};

type ExperienceTimelineSectionProps = {
  items: ExperienceItem[];
};

export function ExperienceTimelineSection({
  items,
}: ExperienceTimelineSectionProps) {
  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="Career Timeline"
      description="A concise timeline focused on AI product execution and cross-functional delivery."
    >
      <div className="relative space-y-5 border-l border-[#284036] pl-6 md:pl-8">
        {items.map((item) => (
          <article key={`${item.period}-${item.title}`} className="relative">
            <span className="absolute -left-[2.05rem] top-1.5 h-3 w-3 rounded-full bg-[#7fb58f] shadow-[0_0_0_5px_rgba(127,181,143,0.2)] md:-left-[2.55rem]" />
            <div className="glass-card rounded-2xl p-5">
              <p className="font-mono text-xs uppercase tracking-[0.14em] theme-eyebrow">
                {item.period}
              </p>
              <h3 className="mt-2 text-base font-semibold text-[#143325]">
                {item.title}
              </h3>
              <p className="text-sm text-[#2d4638]">{item.company}</p>
              <p className="mt-3 text-sm leading-relaxed theme-text-muted">
                {item.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

