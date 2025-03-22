import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  author: 'Aria Moradi',
  title: 'Aria Moradi\'s Blog',
  description: 'A person on Earth.',
  url: 'https://armor.ir',
  repoUrl: 'https://github.com/AriaMoradi/armor.ir',
  slogan: 'Slogans are cool.',
  ogImage: 'https://www.antzhu.com/og.jpg',
  links: {
    twitter: 'https://twitter.com/huakucha10',
    github: 'https://github.com/MagicalZhu',
    blueSky: 'https://bsky.app/profile/anthonyzhu.bsky.social',
    notion: 'https://huakucha.notion.site/1538b781a49980dfa194f936fb7f2422',
    email: 'hi@antzhu.com',
  },
  // pagination
  pagination: {
    pageSize: 10,
  },
  home: {
    displayNumber: 5,
  },
}
