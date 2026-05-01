type HeroSectionProps = {
  name: string;
  role: string;
  introduction: string;
  stack: string[];
  experience: string;
};

export function HeroSection({
  name,
  role,
  introduction,
  stack,
  experience,
}: HeroSectionProps) {
  return (
    <section id="top" className="section-fade relative scroll-mt-24">
      <div className="hero-grid grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-stretch">
        <div className="glass-card accent-ring rounded-[28px] p-7 md:p-9">
          <p className="mb-5 inline-flex items-center rounded-full border border-[#76b38f] bg-[#e5f8ec] px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-[#0f5a34]">
            {role}
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#112218] md:text-6xl">
            {name}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed theme-text-muted md:text-lg">
            {introduction}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="theme-solid-btn rounded-full px-6 py-3 text-sm font-semibold transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="theme-outline-btn rounded-full px-6 py-3 text-sm font-semibold transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <aside className="glass-card rounded-[28px] p-6 md:p-7">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#0f5a34]">
            Snapshot
          </p>
          <p className="mt-4 text-sm text-[#2d4638]">
            Experience: <span className="text-[#112218]">{experience}</span>
          </p>

          <div className="mt-5 space-y-2">
            {stack.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-xl border border-[#a4cdb2] bg-[#eefaf2] px-3 py-2"
              >
                <span className="text-sm text-[#1d3e2e]">{item}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#1e8e53]" />
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
