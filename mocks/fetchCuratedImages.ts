import { Post } from '@/config/apiTypes'
import curatedData from './data.json'

export default async function fetchCuratedImages(tags: string = "") {
  let posts = curatedData as Post[]
  const tagArray = tags === '' ? [] : tags.split(" ")
  tagArray.forEach(tag => {
    const isNegative = tag.startsWith('-')
    const fixedTag = isNegative ? tag : tag.replace('-', "");
    const filter = isNegative ? (post: Post) => !post.tags.includes(fixedTag) : (post: Post) => post.tags.includes(fixedTag)
    posts = posts.filter(filter)
  })
  return { posts };
}