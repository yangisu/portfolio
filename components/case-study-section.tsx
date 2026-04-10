import { SectionShell } from "./section-shell";

type CaseStudySectionProps = {
  title: string;
  context: string;
  challenge: string;
  approach: string[];
  outcome: string[];
  stack: string[];
};

export function CaseStudySection({
  title,
  context,
  challenge,
  approach,
  outcome,
  stack,
}: CaseStudySectionProps) {
  return (
    <SectionShell
      id="case-study"
      eyebrow="Case Study"
      title={title}
      description="A deeper view into process, decision-making, and measurable outcomes."
    >
      <article className="glass-card accent-ring rounded-3xl p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#b592ff]">
              Context
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#d3cce8]">{context}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#b592ff]">
              Challenge
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#d3cce8]">
              {challenge}
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-[#342c50] bg-[#100d1f] p-5">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-[#9c6dff]">
              Approach
            </p>
            <ul className="space-y-2 text-sm text-[#cdc5e1]">
              {approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#342c50] bg-[#100d1f] p-5">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-[#9c6dff]">
              Outcome
            </p>
            <ul className="space-y-2 text-sm text-[#cdc5e1]">
              {outcome.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#3f355f] bg-[#17122b] px-3 py-1.5 text-xs text-[#d8d1ed]"
            >
              {item}
            </span>
          ))}
        </div>
      </article>
    </SectionShell>
  );
}
