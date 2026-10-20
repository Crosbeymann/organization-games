export function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <p className="meta flex items-center gap-3 text-graphite" data-reveal="left">
      <span className="text-stamp">§ {number}</span>
      <span aria-hidden="true" className="h-px w-6 bg-rule" />
      <span>{children}</span>
    </p>
  )
}
