import { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className="section-fade scroll-mt-20">
      <div className="mb-8 max-w-2xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.28em] theme-eyebrow">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed theme-text-muted md:text-base">
          {description}
        </p>
      </div>
      {children}
    </section>
  );
}
