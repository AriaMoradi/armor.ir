export interface MainNavItem {
  icon?: string
  class?: string
  title: string
  href: string
}

export interface SiteConfig {
  author: string
  title: string
  description: string
  url: string
  repoUrl: string
  slogan: string
  ogImage: string
  links: {
    twitter: string
    github: string
    blueSky: string
    notion: string
    email: string
  }
  pagination: {
    pageSize: number
  }
  home: {
    displayNumber: number
  }
}