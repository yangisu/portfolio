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
          <p className="mb-4 inline-flex items-center rounded-full border border-[#3a3155] bg-[#150f27] px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-[#b592ff]">
            {role}
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            {name}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#c8c1db] md:text-lg">
            {introduction}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-[#9c6dff] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ad86ff]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[#4a4068] px-6 py-3 text-sm font-semibold text-[#e6deff] transition hover:border-[#9c6dff] hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>
        <aside className="glass-card accent-ring rounded-3xl p-6">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#9c6dff]">
            Snapshot
          </p>
          <p className="mt-3 text-sm text-[#d8d1eb]">
            Experience: <span className="text-white">{experience}</span>
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#3b3358] bg-[#141026] px-3 py-1 text-xs text-[#d4cce9]"
              >
                {item}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
