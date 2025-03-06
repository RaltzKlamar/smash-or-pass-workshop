import { z } from "zod";

const envSchema = z.object({
  API_KEY: z.string(),
  DEFAULT_TAGS: z.string(),
  USERNAME: z.string(),
  IMAGE_BOARD_URL: z.string(),
})

const { API_KEY, USERNAME, DEFAULT_TAGS, IMAGE_BOARD_URL } = envSchema.parse(process.env);

export { API_KEY, USERNAME, DEFAULT_TAGS, IMAGE_BOARD_URL }