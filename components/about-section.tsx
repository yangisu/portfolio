import { SectionShell } from "./section-shell";

type AboutSectionProps = {
  description: string;
  workStyle: string[];
  strengths: string[];
  values: string[];
};

export function AboutSection({
  description,
  workStyle,
  strengths,
  values,
}: AboutSectionProps) {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="How I Build AI Products"
      description={description}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <div className="glass-card rounded-2xl p-5">
          <h3 className="mb-3 text-base font-semibold text-[#143325]">Work Style</h3>
          <ul className="space-y-2 text-sm theme-text-muted">
            {workStyle.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <h3 className="mb-3 text-base font-semibold text-[#143325]">Strengths</h3>
          <ul className="space-y-2 text-sm theme-text-muted">
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <h3 className="mb-3 text-base font-semibold text-[#143325]">Values</h3>
          <div className="flex flex-wrap gap-2">
            {values.map((value) => (
              <span key={value} className="theme-chip rounded-full px-3 py-1.5 text-xs">
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
