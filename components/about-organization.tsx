import { departments } from '@/lib/studio'
import { DesignationRecord } from './designation-record'
import { SectionLabel } from './section-label'

export function AboutOrganization() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-ink bg-paper-deep/50 py-20 sm:py-28">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)]">
            <SectionLabel number="03">About the organization</SectionLabel>
            <h2
              id="about-title"
              className="mt-8 text-balance font-serif text-5xl leading-[0.95] tracking-[-0.015em] text-ink sm:text-6xl"
              data-reveal
            >
              A studio, formally speaking<span className="text-stamp">.</span>
            </h2>
            <div className="mt-8 max-w-md space-y-5 text-pretty leading-relaxed text-ink/85">
              <p data-reveal style={{ '--reveal-delay': '80ms' } as React.CSSProperties}>
                Organization Games is an independent studio that designs and develops its own games. We work on
                a small number of projects at a time, prototype early, and keep whatever survives the prototype.
              </p>
              <p data-reveal style={{ '--reveal-delay': '140ms' } as React.CSSProperties}>
                Our process is straightforward: find an idea worth committing to, give it a clear visual
                identity, build the fewest systems that make it work, and then refine those systems until they
                feel inevitable. The paperwork is ceremonial.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-10 lg:col-span-6 lg:col-start-7">
          <DesignationRecord />

          <div>
            <p className="meta text-graphite" data-reveal>
              Schedule A — Departments
            </p>
            <div aria-hidden="true" className="mt-3 h-px bg-ink" data-reveal="line" />
            <ul>
              {departments.map((dept, index) => (
                <li
                  key={dept.code}
                  className="grid grid-cols-[3.5rem_1fr] gap-x-4 gap-y-1 border-b border-rule py-4 sm:grid-cols-[3.5rem_1fr_1fr]"
                  data-reveal
                  style={{ '--reveal-delay': `${index * 60}ms` } as React.CSSProperties}
                >
                  <span className="meta pt-1 text-stamp">{dept.code}</span>
                  <span className="text-ink">{dept.name}</span>
                  <span className="col-start-2 text-sm text-graphite sm:col-start-3">{dept.remit}</span>
                </li>
              ))}
            </ul>
            <p className="meta mt-4 leading-relaxed text-graphite">
              All departments are currently staffed by the same department.
            </p>
          </div>

          <aside
            className="border-l-2 border-stamp pl-5"
            aria-label="Procedural note"
            data-reveal
          >
            <p className="meta text-stamp">Procedural note 7-B</p>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-ink/85">
              Requests to shorten the official designation must be submitted in writing, using the official
              designation in full.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
