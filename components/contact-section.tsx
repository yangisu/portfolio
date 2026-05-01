type ContactSectionProps = {
  email?: string;
  github?: string;
  linkedin?: string;
};

export function ContactSection({ email, github, linkedin }: ContactSectionProps) {
  return (
    <section id="contact" className="section-fade scroll-mt-24">
      <div className="contact-stage rounded-[34px] p-6 md:p-10">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-[#8effb7]">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-6xl">
            새로운 소통과 협업에
            <br />
            항상 열려 있습니다.
          </h2>
        </div>

        <div className="contact-panel rounded-[28px] p-5 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.45fr]">
            <div className="space-y-4">
              {email ? (
                <a
                  href={`mailto:${email}`}
                  className="block rounded-2xl border border-[#4f7f64] bg-[#13261c] p-4 transition hover:border-[#8effb7]"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-[#99efbb]">Email</p>
                  <p className="mt-2 break-all text-base text-white">{email}</p>
                </a>
              ) : null}
              {github ? (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl border border-[#4f7f64] bg-[#13261c] p-4 transition hover:border-[#8effb7]"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-[#99efbb]">GitHub</p>
                  <p className="mt-2 break-all text-base text-white">{github}</p>
                </a>
              ) : null}
              {linkedin ? (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl border border-[#4f7f64] bg-[#13261c] p-4 transition hover:border-[#8effb7]"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-[#99efbb]">LinkedIn</p>
                  <p className="mt-2 break-all text-base text-white">{linkedin}</p>
                </a>
              ) : null}
            </div>

            <form className="rounded-2xl border border-[#446e57] bg-[#112218] p-5 md:p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm font-medium text-[#c9f4d6]">
                  이름
                  <input className="contact-input mt-2" placeholder="홍길동" />
                </label>
                <label className="text-sm font-medium text-[#c9f4d6]">
                  이메일
                  <input className="contact-input mt-2" placeholder="email@example.com" />
                </label>
              </div>

              <label className="mt-4 block text-sm font-medium text-[#c9f4d6]">
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
      </div>
    </section>
  );
}
