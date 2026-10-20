'use client'

import { useRef, useState } from 'react'
import { jokes } from '@/lib/jokes'
import { SectionLabel } from './section-label'

function shuffledIndices(avoidFirst: number | null) {
  const order = jokes.map((_, i) => i)
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[order[i], order[j]] = [order[j], order[i]]
  }
  if (avoidFirst !== null && order.length > 1 && order[order.length - 1] === avoidFirst) {
    const swap = Math.floor(Math.random() * (order.length - 1))
    ;[order[order.length - 1], order[swap]] = [order[swap], order[order.length - 1]]
  }
  return order
}

type Issued = { index: number; serial: number; cycle: number; positionInCycle: number }

export function DadDepartment() {
  const bag = useRef<number[]>([])
  const cycle = useRef(0)
  const [issued, setIssued] = useState<Issued | null>(null)

  function issueJoke() {
    if (bag.current.length === 0) {
      bag.current = shuffledIndices(issued?.index ?? null)
      cycle.current += 1
    }
    const index = bag.current.pop() as number
    setIssued((previous) => ({
      index,
      serial: (previous?.serial ?? 0) + 1,
      cycle: cycle.current,
      positionInCycle: jokes.length - bag.current.length,
    }))
  }

  const joke = issued ? jokes[issued.index] : null

  return (
    <section
      id="dad-department"
      aria-labelledby="dad-title"
      className="border-t border-ink bg-paper py-20 sm:py-24"
    >
      <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-4">
          <SectionLabel number="04">Dad Department</SectionLabel>
          <h2
            id="dad-title"
            className="mt-8 text-balance font-serif text-4xl leading-[1] tracking-[-0.01em] text-ink sm:text-5xl"
            data-reveal
          >
            Department of Unnecessary Humor
          </h2>
          <p
            className="mt-6 max-w-sm text-pretty text-sm leading-relaxed text-graphite"
            data-reveal
            style={{ '--reveal-delay': '80ms' } as React.CSSProperties}
          >
            Visitors who have read this far are entitled to one dad joke, issued on request. Supply is
            ample. Demand remains unconfirmed.
          </p>
        </div>

        <div className="lg:col-span-7 lg:col-start-6" data-reveal style={{ '--reveal-delay': '120ms' } as React.CSSProperties}>
          <div className="border border-ink">
            <div className="meta flex items-center justify-between gap-4 border-b border-rule px-5 py-3 text-graphite sm:px-6">
              <span>
                Issue no.{' '}
                <span className="text-ink">{issued ? String(issued.serial).padStart(3, '0') : '—'}</span>
              </span>
              <span>
                {issued
                  ? `Cycle ${issued.cycle} · ${String(issued.positionInCycle).padStart(2, '0')} of ${jokes.length}`
                  : `${jokes.length} on file`}
              </span>
            </div>

            <div className="flex min-h-[13rem] flex-col justify-center px-5 py-8 sm:min-h-[12rem] sm:px-6" aria-live="polite">
              {joke && issued ? (
                <div key={issued.serial}>
                  <p className="joke-enter text-pretty font-serif text-2xl leading-snug text-ink sm:text-3xl">
                    {joke.setup}
                  </p>
                  <p
                    className="joke-enter mt-4 text-pretty text-lg leading-relaxed text-stamp"
                    style={{ '--d': '380ms' } as React.CSSProperties}
                  >
                    {joke.punchline}
                  </p>
                </div>
              ) : (
                <div>
                  <p className="font-serif text-2xl italic leading-snug text-graphite sm:text-3xl">
                    No joke has been issued.
                  </p>
                  <p className="mt-3 text-sm text-graphite">
                    Submit a request below. Processing is immediate, which is unusual for us.
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4 border-t border-rule px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <button type="button" onClick={issueJoke} className="btn btn-primary group w-full sm:w-auto">
                {issued ? 'Issue another' : 'Issue a joke'}
                <span aria-hidden="true" className="arrow-shift">
                  →
                </span>
              </button>
              <p className="meta max-w-[18rem] leading-relaxed text-graphite">
                Notice: This service has no useful purpose. It is provided in accordance with policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
