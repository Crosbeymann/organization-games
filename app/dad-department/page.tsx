import type { Metadata } from 'next'
import { DadDepartment } from '@/components/dad-department'
import { PageMasthead } from '@/components/page-masthead'

export const metadata: Metadata = {
  title: 'Dad Department',
  description: 'The Organization Games Department of Unnecessary Humor. Jokes issued on request.',
}

export default function DadDepartmentPage() {
  return (
    <>
      <PageMasthead page="dad-department" />
      <DadDepartment />
    </>
  )
}
