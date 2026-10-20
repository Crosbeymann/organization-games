export function StatusStamp({ children }: { children: React.ReactNode }) {
  return (
    <span
      data-reveal="stamp"
      className="inline-flex shrink-0 items-center gap-2 border border-stamp px-2 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-stamp"
      style={{ '--stamp-rotate': '-3deg', '--reveal-delay': '260ms' } as React.CSSProperties}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-stamp" />
      {children}
    </span>
  )
}
