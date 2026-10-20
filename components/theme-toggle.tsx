'use client'

import { Moon, Sun } from 'lucide-react'
import { useSyncExternalStore } from 'react'
import { flushSync } from 'react-dom'
import { cn } from '@/lib/utils'

const THEME_EVENT = 'og-theme-change'

function subscribe(callback: () => void) {
  window.addEventListener(THEME_EVENT, callback)
  return () => window.removeEventListener(THEME_EVENT, callback)
}

const getSnapshot = () => document.documentElement.classList.contains('dark')
const getServerSnapshot = () => false

function applyTheme(dark: boolean) {
  const root = document.documentElement
  root.classList.toggle('dark', dark)
  root.style.colorScheme = dark ? 'dark' : 'light'
  try {
    localStorage.setItem('og-theme', dark ? 'dark' : 'light')
  } catch {}
  window.dispatchEvent(new Event(THEME_EVENT))
}

export function ThemeToggle({ className }: { className?: string }) {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  function toggle(event: React.MouseEvent<HTMLButtonElement>) {
    const next = !isDark
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!('startViewTransition' in document) || reduceMotion) {
      applyTheme(next)
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

    const transition = document.startViewTransition(() => {
      flushSync(() => applyTheme(next))
    })

    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 720, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', pseudoElement: '::view-transition-new(root)' },
      )
    })
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className={cn(
        'group relative inline-flex size-10 items-center justify-center overflow-hidden border border-rule text-ink transition-colors duration-[260ms] hover:border-ink',
        className,
      )}
    >
      <Sun
        aria-hidden="true"
        className={cn(
          'absolute size-4 transition-all duration-[420ms] ease-[var(--ease-press)]',
          isDark ? 'translate-y-0 rotate-0 opacity-100' : 'translate-y-6 rotate-90 opacity-0',
        )}
      />
      <Moon
        aria-hidden="true"
        className={cn(
          'absolute size-4 transition-all duration-[420ms] ease-[var(--ease-press)]',
          isDark ? '-translate-y-6 -rotate-90 opacity-0' : 'translate-y-0 rotate-0 opacity-100',
        )}
      />
    </button>
  )
}
