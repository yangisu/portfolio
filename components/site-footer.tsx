type SiteFooterProps = {
  name: string;
};

export function SiteFooter({ name }: SiteFooterProps) {
  return (
    <footer className="mt-6 border-t border-[#dce9df] py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-6 text-xs text-[#4b6054] md:flex-row md:items-center md:px-10">
        <p>{new Date().getFullYear()} {name}. All rights reserved.</p>
        <a
          href="#top"
          className="font-mono uppercase tracking-[0.14em] text-[#1e6b42] transition hover:text-[#0f5a34]"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
