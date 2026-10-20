import Link from 'next/link'
import { SectionLabel } from './section-label'

const entries = [
  {
    href: '/games',
    number: '02',
    title: 'Games',
    italic: 'catalogue',
    body: 'Works in progress, reserved slots, and one project file that has been opened more than is strictly necessary.',
  },
  {
    href: '/about',
    number: '03',
    title: 'About the',
    italic: 'organization',
    body: 'Principles, departments, and the full official designation, for those with the time.',
  },
  {
    href: '/dad-department',
    number: '04',
    title: 'Dad',
    italic: 'Department',
    body: 'Issues jokes on request. Not recommended. Not discontinued either.',
  },
]

export function SiteDirectory() {
  return (
    <section aria-labelledby="directory-title" className="border-t border-ink py-20 sm:py-28">
      <div className="shell">
        <SectionLabel number="—">Directory</SectionLabel>
        <h2
          id="directory-title"
          className="mt-8 font-serif text-5xl leading-[0.95] tracking-[-0.015em] text-ink sm:text-7xl"
          data-reveal
        >
          Please proceed to the relevant department<span className="text-stamp">.</span>
        </h2>

        <ul className="mt-14 border-t border-ink">
          {entries.map((entry, index) => (
            <li
              key={entry.href}
              data-reveal
              style={{ '--reveal-delay': `${index * 90}ms` } as React.CSSProperties}
            >
              <Link
                href={entry.href}
                className="sweep group relative grid gap-4 border-b border-ink py-8 sm:grid-cols-12 sm:items-center sm:gap-6 sm:py-10"
              >
                <span className="meta relative text-graphite transition-colors duration-[420ms] group-hover:text-paper/70 sm:col-span-1 sm:pl-4">
                  {entry.number}
                </span>
                <span className="relative font-serif text-5xl leading-none tracking-[-0.015em] text-ink transition-[color,transform] duration-[520ms] ease-[var(--ease-out)] group-hover:translate-x-3 group-hover:text-paper sm:col-span-6 sm:text-7xl">
                  {entry.title} <span className="italic text-graphite transition-colors duration-[420ms] group-hover:text-stamp">{entry.italic}</span>
                </span>
                <span className="relative text-pretty text-sm leading-relaxed text-graphite transition-colors duration-[420ms] group-hover:text-paper/80 sm:col-span-4">
                  {entry.body}
                </span>
                <span
                  aria-hidden="true"
                  className="relative hidden justify-self-end pr-4 text-2xl text-ink transition-[color,transform] duration-[520ms] ease-[var(--ease-out)] group-hover:-rotate-45 group-hover:text-paper sm:col-span-1 sm:block"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
