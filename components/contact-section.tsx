import { SectionShell } from "./section-shell";

type ContactSectionProps = {
  email?: string;
  github?: string;
  linkedin?: string;
};

type ContactCardProps = {
  label: string;
  value: string;
  href: string;
};

function ContactCard({ label, value, href }: ContactCardProps) {
  return (
    <a
      href={href}
      className="glass-card rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-[#3e5f52]"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <p className="font-mono text-xs uppercase tracking-[0.18em] theme-eyebrow">
        {label}
      </p>
      <p className="mt-2 break-all text-sm text-white md:text-base">{value}</p>
    </a>
  );
}

export function ContactSection({ email, github, linkedin }: ContactSectionProps) {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Let's Build AI Products That Matter"
      description="If you are hiring an AI developer or planning an AI feature, I would love to connect."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {email ? <ContactCard label="Email" value={email} href={`mailto:${email}`} /> : null}
        {github ? <ContactCard label="GitHub" value={github} href={github} /> : null}
        {linkedin ? <ContactCard label="LinkedIn" value={linkedin} href={linkedin} /> : null}
      </div>
    </SectionShell>
  );
}

