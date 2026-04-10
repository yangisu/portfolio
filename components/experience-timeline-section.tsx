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
      description="A concise timeline of the environments and responsibilities that shaped my product engineering mindset."
    >
      <div className="relative space-y-5 border-l border-[#322a4d] pl-6 md:pl-8">
        {items.map((item) => (
          <article key={`${item.period}-${item.title}`} className="relative">
            <span className="absolute -left-[2.05rem] top-1.5 h-3 w-3 rounded-full bg-[#9c6dff] shadow-[0_0_0_5px_rgba(156,109,255,0.18)] md:-left-[2.55rem]" />
            <div className="glass-card rounded-2xl p-5">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#b592ff]">
                {item.period}
              </p>
              <h3 className="mt-2 text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm text-[#e0d8f7]">{item.company}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#c6bed9]">
                {item.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
