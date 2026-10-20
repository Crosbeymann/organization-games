import { cn } from '@/lib/utils'

export function Wordmark({ className, size = 'sm' }: { className?: string; size?: 'sm' | 'lg' }) {
  return (
    <span
      className={cn(
        'inline-flex items-baseline gap-2 font-sans font-semibold uppercase leading-none text-ink',
        size === 'sm' ? 'text-[0.8125rem] tracking-[0.16em]' : 'text-2xl tracking-[0.14em] sm:text-3xl',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn('inline-block shrink-0 bg-stamp', size === 'sm' ? 'size-[0.6rem]' : 'size-[0.9rem]')}
      />
      <span>
        Organization<span className="font-normal text-graphite"> Games</span>
      </span>
    </span>
  )
}
