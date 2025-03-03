import { E621ApiResponse, apiResponseSchema } from "../types/apiTypes";
import { DEFAULT_E621_TAGS, E621_API_KEY, USERNAME } from "./environment"

const E621_URL = "https://e926.net/posts.json"

export default async function fetchE621Images(tags = "", limit = 100): Promise<E621ApiResponse> {
  const tagSearch = `${DEFAULT_E621_TAGS} ${tags}`
  const searchParams = new URLSearchParams({ tags: tagSearch, limit: `${limit}` })
  const response = await fetch(`${E621_URL}?${searchParams}`, {
    headers: {
      "Authorization": "Basic " + btoa(`${USERNAME}:${E621_API_KEY}`),
      "User-Agent": `Smash-or-Pass/1.0 (by ${USERNAME} on e621)`
    }
  })
  const json = await response.json()
  return apiResponseSchema.parse(json)
}