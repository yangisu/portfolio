type SiteFooterProps = {
  name: string;
};

export function SiteFooter({ name }: SiteFooterProps) {
  return (
    <footer className="border-t border-[#2a2440] py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-6 text-xs text-[#958aaf] md:flex-row md:items-center md:px-10">
        <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
        <a
          href="#top"
          className="font-mono uppercase tracking-[0.14em] text-[#b89cff] transition hover:text-white"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
