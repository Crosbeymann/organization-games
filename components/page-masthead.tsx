import Link from 'next/link'
import { pageDocs } from '@/lib/studio'

export function PageMasthead({ page }: { page: keyof typeof pageDocs }) {
  const doc = pageDocs[page]

  return (
    <div className="shell pt-8 sm:pt-12">
      <div className="meta flex flex-wrap items-center justify-between gap-x-6 gap-y-1 text-graphite">
        <p className="enter" style={{ '--d': '420ms' } as React.CSSProperties}>
          <Link href="/" className="link-line hover:text-ink">
            Index
          </Link>{' '}
          / <span className="text-stamp">Doc. {doc.code}</span> / {doc.title}
        </p>
        <p className="enter" style={{ '--d': '480ms' } as React.CSSProperties}>
          Classification: Public, regrettably
        </p>
      </div>
      <div aria-hidden="true" className="enter-rule mt-3 h-px bg-ink" style={{ '--d': '460ms' } as React.CSSProperties} />
    </div>
  )
}
