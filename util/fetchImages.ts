import { E621ApiResponse } from "../config/apiTypes";
import { API_KEY, USERNAME } from "../config/environment";

const headers = {
  "Authorization": "Basic " + btoa(`${USERNAME}:${API_KEY}`),
  "User-Agent": `Smash-or-Pass/1.0 (by ${USERNAME} on e621)`
}

export default async function fetchImages(tags = ""): Promise<E621ApiResponse> {
  return { posts: [] }
}