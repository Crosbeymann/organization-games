import type { Metadata } from 'next'
import { AboutOrganization } from '@/components/about-organization'
import { PageMasthead } from '@/components/page-masthead'

export const metadata: Metadata = {
  title: 'About',
  description: 'Principles, departments, and the full official designation of Organization Games.',
}

export default function AboutPage() {
  return (
    <>
      <PageMasthead page="about" />
      <AboutOrganization />
    </>
  )
}
