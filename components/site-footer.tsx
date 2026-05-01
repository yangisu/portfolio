type SiteFooterProps = {
  name: string;
};

export function SiteFooter({ name }: SiteFooterProps) {
  return (
    <footer className="border-t border-[#24362f] py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-6 text-xs theme-text-muted md:flex-row md:items-center md:px-10">
        <p>{new Date().getFullYear()} {name}. All rights reserved.</p>
        <a
          href="#top"
          className="font-mono uppercase tracking-[0.14em] theme-eyebrow transition hover:text-white"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
