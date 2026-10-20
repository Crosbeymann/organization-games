import Link from 'next/link'

const ledger = [
  { label: 'Department', value: 'Games, mostly' },
  { label: 'Active projects', value: 'One (1)' },
  { label: 'Operational status', value: 'Operational, pending review' },
  { label: 'Office hours', value: 'Whenever the build compiles' },
]

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative">
      <div className="shell pb-14 pt-8 sm:pt-12 lg:pb-20">
        <div className="meta flex flex-wrap items-center justify-between gap-x-6 gap-y-1 text-graphite">
          <p className="enter" style={{ '--d': '80ms' } as React.CSSProperties}>
            <span className="text-stamp">Doc. OG-000</span> / Front matter
          </p>
          <p className="enter" style={{ '--d': '140ms' } as React.CSSProperties}>
            Classification: Public, regrettably
          </p>
        </div>
        <div
          aria-hidden="true"
          className="enter-rule mt-3 h-px bg-ink"
          style={{ '--d': '120ms' } as React.CSSProperties}
        />

        <div className="relative mt-10 grid gap-10 sm:mt-14 lg:grid-cols-12 lg:gap-6">
          <h1
            id="hero-title"
            className="font-serif text-[clamp(2.75rem,11.5vw,9.75rem)] leading-[0.9] tracking-[-0.02em] text-ink lg:col-span-10"
          >
            <span className="line-mask">
              <span style={{ '--d': '220ms' } as React.CSSProperties}>Independent games.</span>
            </span>
            <span className="line-mask">
              <span className="italic text-graphite" style={{ '--d': '320ms' } as React.CSSProperties}>
                Unnecessary
              </span>
            </span>
            <span className="line-mask">
              <span style={{ '--d': '420ms' } as React.CSSProperties}>
                administration<span className="text-stamp">.</span>
              </span>
            </span>
          </h1>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-[38%] hidden select-none lg:block"
          >
            <div
              className="stamp enter-stamp border-2 border-stamp px-4 py-3 text-center text-stamp"
              style={{ '--d': '1000ms', '--stamp-rotate': '-8deg' } as React.CSSProperties}
            >
              <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em]">Approved</p>
              <p className="mt-1 border-t border-stamp/60 pt-1 font-mono text-[0.6rem] uppercase tracking-[0.14em]">
                For no stated reason
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-12 lg:gap-6">
          <p
            className="meta enter text-graphite lg:col-span-3"
            style={{ '--d': '760ms' } as React.CSSProperties}
          >
            § 0.1 — Purpose of this document
          </p>
          <div className="lg:col-span-6 lg:col-start-5">
            <p
              className="enter text-pretty text-lg leading-relaxed text-ink sm:text-xl"
              style={{ '--d': '560ms' } as React.CSSProperties}
            >
              Organization Games develops original games with distinct personalities, considered mechanics,
              and a willingness to take unusual ideas far more seriously than they ever asked to be taken.
            </p>
            <div
              className="enter mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ '--d': '660ms' } as React.CSSProperties}
            >
              <Link href="/games" className="btn btn-primary group">
                Explore our games
                <span aria-hidden="true" className="arrow-shift">
                  →
                </span>
              </Link>
              <Link href="/about" className="btn btn-secondary group">
                About the organization
                <span aria-hidden="true" className="arrow-shift">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-rule">
        <dl className="shell grid grid-cols-2 lg:grid-cols-4">
          {ledger.map((item, index) => (
            <div
              key={item.label}
              className="enter border-rule py-4 pr-4 odd:border-r even:pl-4 lg:border-r lg:pl-4 lg:first:pl-0 lg:last:border-r-0 [&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0"
              style={{ '--d': `${820 + index * 60}ms` } as React.CSSProperties}
            >
              <dt className="meta text-graphite">{item.label}</dt>
              <dd className="mt-1.5 text-sm text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
