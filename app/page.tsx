import { Hero } from '@/components/hero'
import { SiteDirectory } from '@/components/site-directory'
import { StudioIntroduction } from '@/components/studio-introduction'
import { Ticker } from '@/components/ticker'

export default function Page() {
  return (
    <>
      <Hero />
      <Ticker />
      <StudioIntroduction />
      <SiteDirectory />
    </>
  )
}
