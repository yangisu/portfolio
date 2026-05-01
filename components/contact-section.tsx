type ContactSectionProps = {
  email?: string;
  github?: string;
  linkedin?: string;
};

export function ContactSection({ email, github, linkedin }: ContactSectionProps) {
  return (
    <section id="contact" className="section-fade scroll-mt-24">
      <div className="mb-8 max-w-3xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.28em] theme-eyebrow">
          Contact
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--ivory)] md:text-5xl">
          새로운 소통과 협업에
          <br />
          항상 열려 있습니다.
        </h2>
      </div>

      <div className="contact-panel rounded-[30px] p-5 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.5fr]">
          <div className="space-y-4">
            {email ? (
              <a
                href={`mailto:${email}`}
                className="glass-card block rounded-2xl p-4 hover:border-[#9cd9ae]"
              >
                <p className="text-xs uppercase tracking-[0.16em] theme-eyebrow">Email</p>
                <p className="mt-2 break-all text-base text-white">{email}</p>
              </a>
            ) : null}
            {github ? (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="glass-card block rounded-2xl p-4 hover:border-[#9cd9ae]"
              >
                <p className="text-xs uppercase tracking-[0.16em] theme-eyebrow">GitHub</p>
                <p className="mt-2 break-all text-base text-white">{github}</p>
              </a>
            ) : null}
            {linkedin ? (
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-card block rounded-2xl p-4 hover:border-[#9cd9ae]"
              >
                <p className="text-xs uppercase tracking-[0.16em] theme-eyebrow">LinkedIn</p>
                <p className="mt-2 break-all text-base text-white">{linkedin}</p>
              </a>
            ) : null}
          </div>

          <form className="glass-card rounded-2xl p-5 md:p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium text-[#d8e5dc]">
                이름
                <input className="contact-input mt-2" placeholder="홍길동" />
              </label>
              <label className="text-sm font-medium text-[#d8e5dc]">
                이메일
                <input className="contact-input mt-2" placeholder="email@example.com" />
              </label>
            </div>

            <label className="mt-4 block text-sm font-medium text-[#d8e5dc]">
              메시지
              <textarea
                className="contact-input mt-2 min-h-44 resize-y"
                placeholder="전하고 싶은 말을 남겨주세요."
              />
            </label>

            <button
              type="button"
              className="theme-solid-btn mt-5 rounded-2xl px-6 py-3 text-sm font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
