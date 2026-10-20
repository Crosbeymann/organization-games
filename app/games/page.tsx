import type { Metadata } from 'next'
import { GamesCatalogue } from '@/components/games-catalogue'
import { PageMasthead } from '@/components/page-masthead'

export const metadata: Metadata = {
  title: 'Games',
  description: 'The Organization Games catalogue: works in progress, reserved slots, and project files.',
}

export default function GamesPage() {
  return (
    <>
      <PageMasthead page="games" />
      <GamesCatalogue />
    </>
  )
}
