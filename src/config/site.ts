import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  author: 'Aria Moradi',
  title: 'Aria Moradi\'s Blog',
  description: 'A person on Earth.',
  url: 'https://armor.ir',
  repoUrl: 'https://github.com/AriaMoradi/armor.ir',
  slogan: 'Slogans are cool.',
  ogImage: 'https://armor.ir/og.jpg',
  links: {
    twitter: '#',
    github: '#',
    blueSky: '#',
    notion: '#',
    email: '#',
  },
  // pagination
  pagination: {
    pageSize: 10,
  },
  home: {
    displayNumber: 5,
  },
}
