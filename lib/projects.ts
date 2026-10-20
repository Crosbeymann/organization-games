export type ProjectFact = { label: string; value: string }
export type ProjectDirection = { label: string; note: string }

export type Project = {
  slug: string
  number: string
  workingTitle: string
  titleStatus: string
  status: string
  summary: string
  premise: string[]
  tags: string[]
  facts: ProjectFact[]
  directions: ProjectDirection[]
  notIncluded: string[]
}

export const projects: Project[] = [
  {
    slug: 'project-001',
    number: '001',
    workingTitle: 'Untitled Restaurant Project',
    titleStatus: 'Working title. The real one is under review.',
    status: 'In development',
    summary:
      'A small fried-chicken restaurant beside an empty road. Take the order. Prepare the food. Hand over the drink. It begins as an entirely ordinary shift.',
    premise: [
      'There is a road, and beside the road there is a fried-chicken restaurant, and inside the restaurant there is you. Customers arrive. They would like chicken. Occasionally they would like a drink.',
      'You can hold one thing at a time. This is not a limitation so much as a philosophy.',
      'The shift starts out recognizable. We are not yet prepared to say how it ends, partly for narrative reasons and partly because we are still deciding.',
    ],
    tags: ['Restaurant', 'First-person', 'Gradually unsettling'],
    facts: [
      { label: 'Engine', value: 'Unity' },
      { label: 'Visual treatment', value: 'Low-poly, low-resolution' },
      { label: 'Status', value: 'In development' },
      { label: 'Release', value: 'Not announced' },
      { label: 'Trailer', value: 'None exists. We checked.' },
    ],
    directions: [
      {
        label: 'A roadside establishment',
        note: 'One small restaurant, one road, a great deal of quiet.',
      },
      {
        label: 'Preparing orders',
        note: 'Handling food and objects behind the counter, in a sensible sequence, mostly.',
      },
      {
        label: 'Held-item interaction',
        note: 'A deliberately limited system built around what you are carrying, and what you are not.',
      },
      {
        label: 'Drinks and restaurant objects',
        note: 'Cups, bottles, and assorted fixtures with an unusually specific purpose.',
      },
      {
        label: 'An ordinary beginning',
        note: 'A familiar premise, with room for the evening to become increasingly difficult to explain.',
      },
    ],
    notIncluded: [
      'A final title',
      'A release date',
      'Gameplay screenshots',
      'Promises about features that are still being designed',
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
