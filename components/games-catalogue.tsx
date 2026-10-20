import Link from 'next/link'
import { projects, type Project } from '@/lib/projects'
import { ProjectArtwork } from './project-artwork'
import { SectionLabel } from './section-label'
import { StatusStamp } from './status-stamp'

function ProjectEntry({ project }: { project: Project }) {
  return (
    <li data-reveal>
      <Link
        href={`/games/${project.slug}`}
        className="group grid gap-0 border border-rule bg-paper transition-[background-color,border-color] duration-[260ms] ease-[var(--ease-out)] hover:border-ink hover:bg-paper-deep/60 lg:grid-cols-12"
      >
        <div className="relative aspect-[8/5] overflow-hidden border-b border-rule bg-ink transition-colors duration-[260ms] group-hover:border-ink lg:col-span-7 lg:aspect-auto lg:min-h-[26rem] lg:border-b-0 lg:border-r">
          <div className="absolute inset-[-3%] transition-transform duration-[700ms] ease-[var(--ease-out)] group-hover:-translate-x-[1.5%] group-hover:translate-y-[-1%]">
            <ProjectArtwork />
          </div>
          <div aria-hidden="true" className="scanlines pointer-events-none absolute inset-0" />
          <p className="meta absolute bottom-3 left-3 bg-ink/80 px-2 py-1 text-paper/80">
            Fig. 1 — Site study. Not a screenshot.
          </p>
        </div>

        <div className="flex flex-col justify-between gap-10 p-6 sm:p-8 lg:col-span-5">
          <div>
            <div className="flex items-start justify-between gap-4">
              <p className="meta text-graphite">
                Project <span className="text-ink">{project.number}</span>
              </p>
              <StatusStamp>{project.status}</StatusStamp>
            </div>

            <h3 className="mt-8 font-serif text-4xl leading-[1] tracking-[-0.01em] text-ink sm:text-5xl">
              {project.workingTitle}
            </h3>
            <p className="meta mt-3 text-stamp">Working title — not final</p>

            <p className="mt-6 text-pretty leading-relaxed text-ink/85">{project.summary}</p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Categories">
              {project.tags.map((tag) => (
                <li key={tag} className="meta border border-rule px-2 py-1 text-graphite">
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <dl className="grid grid-cols-2 gap-px border border-rule bg-rule">
              {project.facts.slice(0, 4).map((fact) => (
                <div key={fact.label} className="bg-paper px-3 py-2.5">
                  <dt className="meta text-graphite">{fact.label}</dt>
                  <dd className="mt-1 text-sm text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 flex items-center justify-between border-t border-ink pt-4 text-sm font-medium text-ink">
              <span className="link-line">Open project file</span>
              <span aria-hidden="true" className="arrow-shift">
                →
              </span>
            </p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export function GamesCatalogue() {
  const nextNumber = String(projects.length + 1).padStart(3, '0')

  return (
    <section
      id="games"
      aria-labelledby="games-title"
      className="border-t border-ink bg-paper py-20 sm:py-28"
    >
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-6">
          <div className="lg:col-span-7">
            <SectionLabel number="02">Games catalogue</SectionLabel>
            <h2
              id="games-title"
              className="mt-8 font-serif text-5xl leading-[0.95] tracking-[-0.015em] text-ink sm:text-7xl"
              data-reveal
            >
              Works in progress<span className="text-stamp">.</span>
            </h2>
          </div>
          <dl
            className="meta grid grid-cols-2 gap-4 text-graphite lg:col-span-4 lg:col-start-9"
            data-reveal
            style={{ '--reveal-delay': '100ms' } as React.CSSProperties}
          >
            <div>
              <dt>Entries on file</dt>
              <dd className="mt-1 text-ink">{String(projects.length).padStart(2, '0')}</dd>
            </div>
            <div>
              <dt>Entries reserved</dt>
              <dd className="mt-1 text-ink">01</dd>
            </div>
          </dl>
        </div>

        <ul className="mt-12 space-y-6">
          {projects.map((project) => (
            <ProjectEntry key={project.slug} project={project} />
          ))}
          <li
            data-reveal
            className="grid gap-3 border border-dashed border-rule px-6 py-6 sm:grid-cols-12 sm:items-center sm:gap-6 sm:px-8"
          >
            <p className="meta text-graphite sm:col-span-3">Project {nextNumber}</p>
            <p className="text-pretty text-sm leading-relaxed text-graphite sm:col-span-6">
              This slot has been formally allocated to a future game. The future game has not yet been informed.
            </p>
            <p className="meta text-graphite sm:col-span-3 sm:text-right">Status: Reserved</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
