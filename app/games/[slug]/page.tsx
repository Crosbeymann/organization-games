import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ProjectArtwork } from '@/components/project-artwork'
import { StatusStamp } from '@/components/status-stamp'
import { getProject, projects } from '@/lib/projects'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `Project ${project.number} (working title)`,
    description: project.summary,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <article aria-labelledby="project-title">
      <div className="shell pb-12 pt-8 sm:pt-12">
        <nav aria-label="Breadcrumb" className="meta enter text-graphite">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/games" className="link-line text-ink">
                Games catalogue
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Project {project.number}</li>
          </ol>
        </nav>
        <div aria-hidden="true" className="enter-rule mt-3 h-px bg-ink" style={{ '--d': '80ms' } as React.CSSProperties} />

        <div className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-12 lg:items-end lg:gap-6">
          <div className="lg:col-span-8">
            <p className="meta enter text-graphite" style={{ '--d': '120ms' } as React.CSSProperties}>
              Project file <span className="text-ink">{project.number}</span>
            </p>
            <h1
              id="project-title"
              className="mt-6 font-serif text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.92] tracking-[-0.02em] text-ink"
            >
              <span className="line-mask">
                <span style={{ '--d': '200ms' } as React.CSSProperties}>{project.workingTitle}</span>
              </span>
            </h1>
            <p className="meta enter mt-4 text-stamp" style={{ '--d': '420ms' } as React.CSSProperties}>
              {project.titleStatus}
            </p>
          </div>
          <div className="enter lg:col-span-3 lg:col-start-10 lg:justify-self-end" style={{ '--d': '520ms' } as React.CSSProperties}>
            <StatusStamp>{project.status}</StatusStamp>
          </div>
        </div>
      </div>

      <figure className="shell enter" style={{ '--d': '480ms' } as React.CSSProperties}>
        <div className="relative aspect-[16/10] overflow-hidden border border-ink bg-ink sm:aspect-[16/8]">
          <ProjectArtwork />
          <div aria-hidden="true" className="scanlines pointer-events-none absolute inset-0" />
        </div>
        <figcaption className="meta mt-3 text-graphite">
          Fig. 1 — Site study of the establishment, drawn for this file. It is not a screenshot, and no
          screenshots have been released.
        </figcaption>
      </figure>

      <div className="shell grid gap-14 py-20 sm:py-24 lg:grid-cols-12 lg:gap-6">
        <section aria-labelledby="premise-title" className="lg:col-span-6">
          <p className="meta text-stamp" data-reveal="left">
            Part 1
          </p>
          <h2 id="premise-title" className="mt-3 font-serif text-4xl text-ink" data-reveal>
            Premise
          </h2>
          <div className="mt-6 space-y-5 text-pretty text-lg leading-relaxed text-ink/85">
            {project.premise.map((paragraph, index) => (
              <p key={index} data-reveal style={{ '--reveal-delay': `${index * 70}ms` } as React.CSSProperties}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section aria-labelledby="facts-title" className="lg:col-span-4 lg:col-start-9">
          <p className="meta text-stamp" data-reveal="left">
            Part 2
          </p>
          <h2 id="facts-title" className="mt-3 font-serif text-4xl text-ink" data-reveal>
            Particulars
          </h2>
          <dl className="mt-6 border-t border-ink">
            {project.facts.map((fact) => (
              <div key={fact.label} className="flex items-baseline justify-between gap-6 border-b border-rule py-3" data-reveal>
                <dt className="meta text-graphite">{fact.label}</dt>
                <dd className="text-right text-sm text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      <section aria-labelledby="direction-title" className="border-t border-ink bg-paper-deep/50 py-20 sm:py-24">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="meta text-stamp" data-reveal="left">
                Part 3
              </p>
              <h2 id="direction-title" className="mt-3 font-serif text-4xl text-ink sm:text-5xl" data-reveal>
                Design direction
              </h2>
            </div>
            <p
              className="text-pretty leading-relaxed text-graphite lg:col-span-5 lg:col-start-8 lg:pt-8"
              data-reveal
            >
              The following describes current intentions. Intentions are subject to playtesting, revision, and
              the occasional late-night change of heart. Nothing below is a commitment.
            </p>
          </div>

          <div aria-hidden="true" className="mt-12 h-px bg-ink" data-reveal="line" />
          <ol>
            {project.directions.map((direction, index) => (
              <li
                key={direction.label}
                className="grid gap-2 border-b border-rule py-5 sm:grid-cols-12 sm:gap-6"
                data-reveal
                style={{ '--reveal-delay': `${index * 60}ms` } as React.CSSProperties}
              >
                <span className="meta text-stamp sm:col-span-1 sm:pt-1">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="font-serif text-2xl leading-tight text-ink sm:col-span-4">{direction.label}</h3>
                <p className="text-pretty leading-relaxed text-graphite sm:col-span-5">{direction.note}</p>
                <span className="meta text-graphite sm:col-span-2 sm:pt-1 sm:text-right">Exploratory</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="omitted-title" className="shell grid gap-10 py-20 sm:py-24 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-5">
          <p className="meta text-stamp" data-reveal="left">
            Part 4
          </p>
          <h2 id="omitted-title" className="mt-3 font-serif text-4xl text-ink" data-reveal>
            Not included in this file
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ul className="border-t border-ink">
            {project.notIncluded.map((item) => (
              <li key={item} className="flex items-center justify-between gap-6 border-b border-rule py-3" data-reveal>
                <span className="text-ink">{item}</span>
                <span className="meta text-graphite">Withheld</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-graphite">
            When any of the above exists, it will appear here first. Until then, this file is complete in its
            incompleteness.
          </p>
          <Link href="/games" className="btn btn-secondary group mt-10">
            <span aria-hidden="true" className="transition-transform duration-[260ms] group-hover:-translate-x-1">
              ←
            </span>
            Return to catalogue
          </Link>
        </div>
      </section>
    </article>
  )
}
