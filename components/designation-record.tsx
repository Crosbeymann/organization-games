'use client'

import { useId, useState } from 'react'
import { studio } from '@/lib/studio'
import { cn } from '@/lib/utils'


function Initialed({ text }: { text: string }) {
  const words = text.split(' ')

  return (
    <>
      {words.map((word, index) => {
        const isSurplusF = word === 'Fedora-hats'

        return (
          <span key={index}>
            {index > 0 && ' '}
            {isSurplusF ? (
              word
            ) : (
              <>
                <span className="text-stamp">{word[0]}</span>
                {word.slice(1)}
              </>
            )}
          </span>
        )
      })}
    </>
  )
}


export function DesignationRecord() {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="border border-ink bg-paper" data-reveal>
      <div className="meta flex flex-wrap items-center justify-between gap-2 border-b border-ink px-5 py-3 text-graphite sm:px-6">
        <span>
          Record <span className="text-ink">OG/ADM-01</span>
        </span>
        <span>Official designation</span>
      </div>

      <div className="px-5 py-6 sm:px-6">
        <p className="meta text-graphite">Short form</p>
        <p className="mt-2 font-serif text-3xl leading-tight text-ink">Organization Games</p>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
          className="group mt-6 flex min-h-12 w-full items-center justify-between gap-4 border-t border-rule pt-4 text-left text-sm font-medium text-ink"
        >
          <span className="link-line">{open ? 'Collapse full designation' : 'Expand full designation'}</span>
          <span
            aria-hidden="true"
            className="relative grid size-7 shrink-0 place-items-center border border-ink transition-colors duration-[260ms] group-hover:bg-ink group-hover:text-paper"
          >
            <span className="absolute h-px w-3 bg-current" />
            <span
              className={cn(
                'absolute h-3 w-px bg-current transition-transform duration-[320ms] ease-[var(--ease-in-out)]',
                open && 'rotate-90 scale-y-0',
              )}
            />
          </span>
        </button>

        <div id={panelId} role="region" aria-label="Full designation" className="disclosure" data-open={open} inert={!open}>
          <div>
            <div className="disclosure-inner pt-6">
              <p className="meta text-graphite">Long form</p>
              <p className="mt-3 text-pretty font-serif text-2xl leading-snug text-ink sm:text-[1.75rem]">
                <Initialed text={studio.designation} />
              </p>
              <p className="meta mt-6 border-t border-rule pt-4 leading-relaxed text-graphite">
                Note 1: The designation yields eighteen initials. The studio name requires seventeen. The
                surplus F is being held in reserve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
