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
    <section id="top" className="section-fade relative scroll-mt-20">
      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end">
        <div>
          <p className="mb-4 inline-flex items-center rounded-full border border-[#2d4339] bg-[#0f1b16] px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] theme-eyebrow">
            {role}
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            {name}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed theme-text-muted md:text-lg">
            {introduction}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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
        <aside className="glass-card accent-ring rounded-3xl p-6">
          <p className="font-mono text-xs uppercase tracking-[0.18em] theme-eyebrow">
            Snapshot
          </p>
          <p className="mt-3 text-sm text-[#d8e1da]">
            Experience: <span className="text-white">{experience}</span>
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span key={item} className="theme-chip rounded-full px-3 py-1 text-xs">
                {item}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
