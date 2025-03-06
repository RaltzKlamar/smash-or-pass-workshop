import { E621ApiResponse } from "../types/apiTypes";
import { IMAGE_BOARD_URL } from "./environment";

const API_URL = `${IMAGE_BOARD_URL}/posts.json`

export default async function fetchE621Images(tags = ""): Promise<E621ApiResponse> {
  return { posts: [] }
}