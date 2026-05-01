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
      description="A deeper view of architecture choices, evaluation strategy, and shipping outcomes."
    >
      <article className="glass-card accent-ring rounded-3xl p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] theme-eyebrow">
              Context
            </p>
            <p className="mt-2 text-sm leading-relaxed theme-text-muted">{context}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] theme-eyebrow">
              Challenge
            </p>
            <p className="mt-2 text-sm leading-relaxed theme-text-muted">
              {challenge}
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-[#9ecab0] bg-[#f3fff6] p-5">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] theme-eyebrow">
              Approach
            </p>
            <ul className="space-y-2 text-sm theme-text-muted">
              {approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#9ecab0] bg-[#f3fff6] p-5">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] theme-eyebrow">
              Outcome
            </p>
            <ul className="space-y-2 text-sm theme-text-muted">
              {outcome.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span key={item} className="theme-chip rounded-full px-3 py-1.5 text-xs">
              {item}
            </span>
          ))}
        </div>
      </article>
    </SectionShell>
  );
}

