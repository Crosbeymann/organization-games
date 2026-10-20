'use client'

import { usePathname } from 'next/navigation'
import { navIdForPath, pageDocs } from '@/lib/studio'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const doc = pageDocs[navIdForPath(pathname)] ?? { code: 'OG-0XX', title: 'Project file' }

  return (
    <>
      <div aria-hidden="true" className="page-wipe pointer-events-none fixed inset-x-0 bottom-0 top-[var(--header-h)] z-40">
        <div className="page-wipe-panel absolute inset-0 bg-ink" />
        <div className="page-wipe-accent absolute inset-0 bg-stamp" />
        <div className="page-wipe-label absolute inset-0 flex items-center justify-center">
          <p className="meta text-paper">
            Filing <span className="text-paper/60">Doc. {doc.code}</span> — {doc.title}
          </p>
        </div>
      </div>
      <div className="page-enter">{children}</div>
    </>
  )
}
