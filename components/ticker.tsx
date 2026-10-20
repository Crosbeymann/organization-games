const notices = [
  'Approved for no stated reason',
  'Project 001 pending review',
  'Fedora inventory: adequate',
  'Office hours whenever the build compiles',
  'One (1) active project',
  'Dad Department remains operational',
  'Forms available on request',
]

function TickerRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {notices.map((notice) => (
        <li key={notice} className="meta flex items-center gap-6 pr-6 text-paper">
          <span>{notice}</span>
          <span aria-hidden="true" className="block size-1.5 rotate-45 bg-stamp" />
        </li>
      ))}
    </ul>
  )
}

export function Ticker() {
  return (
    <div className="ticker group overflow-hidden border-b border-ink bg-ink py-3" aria-label="Studio notices">
      <div className="ticker-track flex w-max">
        <TickerRow />
        <TickerRow hidden />
      </div>
    </div>
  )
}
