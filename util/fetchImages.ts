import { API_POSTS_URL } from "@/config/urlUtils";
import { DEFAULT_TAGS, USERNAME } from "../config/environment";
import { ApiGetPostsResponse, Post, apiResponseSchema } from "@/config/apiTypes";

let headers = { }

export default async function fetchImages(tagString = ""): Promise<Post[]> {
  return []
}