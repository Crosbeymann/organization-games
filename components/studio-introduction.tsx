import { principles } from '@/lib/studio'
import { SectionLabel } from './section-label'

export function StudioIntroduction() {
  return (
    <section id="studio" aria-labelledby="studio-title" className="shell py-20 sm:py-28">
      <SectionLabel number="01">Statement of intent</SectionLabel>

      <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-6">
        <h2
          id="studio-title"
          className="text-balance font-serif text-4xl leading-[1.02] tracking-[-0.01em] text-ink sm:text-5xl lg:col-span-6 lg:text-6xl"
          data-reveal
        >
          We make games that have a reason to exist. Occasionally the reason is a chicken.
          <sup className="ml-1 align-super font-mono text-base text-stamp">*</sup>
        </h2>

        <div className="space-y-5 text-pretty leading-relaxed text-ink/85 lg:col-span-5 lg:col-start-8 lg:pt-3">
          <p data-reveal style={{ '--reveal-delay': '80ms' } as React.CSSProperties}>
            Organization Games is a small, independent studio. We are interested in games with a recognizable
            point of view: a world you can identify from a single frame, a mechanic you remember after the
            credits, and an idea strange enough to be worth the effort.
          </p>
          <p data-reveal style={{ '--reveal-delay': '140ms' } as React.CSSProperties}>
            We would rather build one thing carefully than many things adequately. Every project is reviewed,
            reconsidered, and occasionally stamped. The stamping is not strictly necessary. We do it anyway.
          </p>
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <div aria-hidden="true" className="h-px bg-ink" data-reveal="line" />
        <ol>
          {principles.map((principle, index) => (
            <li
              key={principle.title}
              className="grid gap-2 border-b border-rule py-6 sm:grid-cols-12 sm:gap-6"
              data-reveal
              style={{ '--reveal-delay': `${index * 70}ms` } as React.CSSProperties}
            >
              <span className="meta text-stamp sm:col-span-1 sm:pt-1.5">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="font-serif text-2xl leading-tight text-ink sm:col-span-4">{principle.title}</h3>
              <p className="text-pretty leading-relaxed text-graphite sm:col-span-6 sm:col-start-7 sm:pt-1">
                {principle.body}
              </p>
            </li>
          ))}
        </ol>
        <p className="meta mt-6 text-graphite">
          <span className="text-stamp">*</span> The chicken is addressed in Section 02.
        </p>
      </div>
    </section>
  )
}
