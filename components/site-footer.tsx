import Link from 'next/link'
import { navItems } from '@/lib/studio'
import { Wordmark } from './wordmark'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink bg-paper">
      <div className="shell grid gap-10 py-12 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-5">
          <Link href="/" aria-label="Organization Games, home">
            <Wordmark />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-graphite">
            Independent games. Unnecessary administration.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-4">
          <p className="meta mb-4 text-graphite">Index</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="link-line py-1 text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/games/project-001" className="link-line py-1 text-ink">
                Project 001
              </Link>
            </li>
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="meta mb-4 text-graphite">Notice</p>
          <p className="text-sm leading-relaxed text-graphite">
            This website has been reviewed by the Department of Websites. They had notes.
          </p>
        </div>
      </div>

      <div className="border-t border-rule">
        <div className="shell meta flex flex-col gap-2 py-5 text-graphite sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Organization Games. All rights reserved, including several we have not found a use for.
          </p>
          <p aria-hidden="true">End of document</p>
        </div>
      </div>
    </footer>
  )
}
