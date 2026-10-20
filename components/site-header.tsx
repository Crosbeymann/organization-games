'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { navIdForPath, navItems, pageDocs } from '@/lib/studio'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './theme-toggle'
import { Wordmark } from './wordmark'

export function SiteHeader() {
  const pathname = usePathname()
  const active = navIdForPath(pathname)
  const doc = pageDocs[active]
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="enter-nav sticky top-0 z-50 border-b border-rule bg-paper/92 backdrop-blur-sm">
      <div className="shell flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link href="/" className="group -my-2 py-2" aria-label="Organization Games, home" onClick={() => setOpen(false)}>
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'nav-tab relative inline-flex items-baseline gap-1.5 px-3 py-2 text-sm transition-colors duration-[260ms]',
                      isActive ? 'text-paper' : 'text-graphite hover:text-ink',
                    )}
                  >
                    {item.note && (
                      <span className={cn('meta relative', isActive ? 'text-paper/70' : 'text-stamp')}>{item.note}</span>
                    )}
                    <span className="relative">{item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <span key={pathname} className="meta doc-flip hidden text-graphite lg:block" aria-hidden="true">
            Doc. {doc?.code ?? 'OG-0XX'} · Rev. 4
          </span>
          <ThemeToggle />
          <button
            type="button"
            className="meta -mr-2 inline-flex min-h-11 items-center gap-2 px-2 text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span>{open ? 'Close' : 'Menu'}</span>
            <span aria-hidden="true" className="relative block h-2.5 w-4">
              <span
                className={cn(
                  'absolute left-0 top-0 h-px w-4 bg-ink transition-transform duration-[260ms] ease-[var(--ease-out)]',
                  open && 'translate-y-[5px] rotate-45',
                )}
              />
              <span
                className={cn(
                  'absolute bottom-0 left-0 h-px w-4 bg-ink transition-transform duration-[260ms] ease-[var(--ease-out)]',
                  open && '-translate-y-[4px] -rotate-45',
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div id="mobile-nav" className="disclosure md:hidden" data-open={open} inert={!open}>
        <div>
          <nav aria-label="Mobile" className="disclosure-inner shell border-t border-rule pt-2 pb-6">
            <ul>
              {navItems.map((item, index) => (
                <li key={item.id} className="border-b border-rule last:border-b-0">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active === item.id ? 'page' : undefined}
                    className="group flex min-h-14 items-center justify-between gap-4"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="meta w-6 text-graphite">{String(index).padStart(2, '0')}</span>
                      <span
                        className={cn(
                          'font-serif text-3xl leading-none',
                          active === item.id ? 'text-stamp' : 'text-ink/70',
                        )}
                      >
                        {item.label}
                      </span>
                    </span>
                    <span aria-hidden="true" className="arrow-shift text-graphite">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
