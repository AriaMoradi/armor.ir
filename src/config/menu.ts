import type { MainNavItem } from '@/types'


export const links: (base: string) => MainNavItem[] = (base: string) => [
  {
    title: 'Post',
    href: `${base}/post/`
  },
  {
    title: 'Short',
    href: `${base}/short/`
  },
  {
    title: 'Projects',
    href: `${base}/projects/`
  },
  {
    title: 'Uses',
    href: `${base}/uses/`
  },
  {
    title: 'Collective',
    href: `${base}/collective/`
  }
]
