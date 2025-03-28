import { getCollection } from 'astro:content'

export async function getCategories() {
  const posts = await getCollection('post')
  const categories = [
    ...new Set(posts.map(post => post.data.category).flat()),
  ]
  return categories
}

export async function getPosts() {
  const posts = (await getCollection('post')).sort(
    (a, b) => b.data.updatedDate.valueOf() - a.data.updatedDate.valueOf(),
  )
  return posts
}

export async function getPostsByCategory(category: string) {
  const posts = (await getCollection('post'))
    .filter(post => post.data.category.includes(category))
    .sort((a, b) => b.data.updatedDate.valueOf() - a.data.updatedDate.valueOf())

  return posts
}
