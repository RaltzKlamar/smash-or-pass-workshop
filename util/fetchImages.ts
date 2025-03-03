import { E621ApiResponse } from "../types/apiTypes";

export default async function fetchE621Images(tags = "", limit = 100): Promise<E621ApiResponse> {
  return { posts: [] }
}