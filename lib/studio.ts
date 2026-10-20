export const studio = {
  name: 'Organization Games',
  designation:
    'Official Regional Gaming Agencies Never Inventing Zero Association Tristate Inators Owning Neighborhoods Give All Mad Evil Spies fedora-hats.',
  description:
    'Organization Games is an independent game studio developing original games with distinct personalities, considered mechanics, and a willingness to take unusual ideas seriously.',
}

export type NavItem = {
  id: string
  label: string
  href: string
  note?: string
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'games', label: 'Games', href: '/games' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'dad-department', label: 'Dad Dept.', href: '/dad-department', note: '§04' },
]

export const pageDocs: Record<string, { code: string; title: string }> = {
  home: { code: 'OG-000', title: 'Front matter' },
  games: { code: 'OG-002', title: 'Games catalogue' },
  about: { code: 'OG-003', title: 'The organization' },
  'dad-department': { code: 'OG-004', title: 'Dad Department' },
}

export function navIdForPath(pathname: string) {
  if (pathname === '/') return 'home'
  const segment = pathname.split('/')[1]
  return navItems.some((item) => item.id === segment) ? segment : ''
}

export const principles = [
  {
    title: 'Original ideas',
    body: 'We start from premises that have not been made before, or at least not in this particular order.',
  },
  {
    title: 'Recognizable identities',
    body: 'Every game should be identifiable from a single frame, ideally at a distance, ideally in poor lighting.',
  },
  {
    title: 'Memorable mechanics',
    body: 'Fewer systems, chosen carefully, understood completely. If a mechanic needs a manual, it needs a meeting.',
  },
  {
    title: 'A reason to exist',
    body: 'Each project must justify itself before production begins. The justification may be brief. It may be a chicken.',
  },
]

export const departments = [
  { code: 'D-01', name: 'Department of Games', remit: 'Primary function. Makes the games.' },
  { code: 'D-02', name: 'Office of Things Being Held', remit: 'Oversees the holding of one item at a time.' },
  { code: 'D-03', name: 'Bureau of the Second Draft', remit: 'Responsible for everything, eventually.' },
  { code: 'D-04', name: 'Department of Unnecessary Humor', remit: 'See Section 04. Not recommended.' },
]
