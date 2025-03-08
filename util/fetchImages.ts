import { API_POSTS_URL } from "@/config/urlUtils";
import { E621ApiResponse, apiResponseSchema } from "../config/apiTypes";
import { API_KEY, DEFAULT_TAGS, USERNAME } from "../config/environment";

const headers = {
  "Authorization": "Basic " + btoa(`${USERNAME}:${API_KEY}`),
  "User-Agent": `Smash-or-Pass/1.0 (by ${USERNAME} on e621)`
}

export default async function fetchImages(tags = ""): Promise<E621ApiResponse> {
  const tagSearch = `${DEFAULT_TAGS} ${tags}`
  const search = new URLSearchParams({ tags: tagSearch })
  const response = await fetch(`${API_POSTS_URL}?${search}`, {
    headers,
  })
  const json = await response.json()
  console.log(json)
  return apiResponseSchema.parse(json)
}