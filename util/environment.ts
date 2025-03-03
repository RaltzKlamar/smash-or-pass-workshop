import { z } from "zod";

const envSchema = z.object({
  PIXABAY_API_KEY: z.string(),
  E621_API_KEY: z.string(),
  DEFAULT_E621_TAGS: z.string(),
  USERNAME: z.string(),
  E621_URL: z.string(),
})

const { PIXABAY_API_KEY, E621_API_KEY, USERNAME, DEFAULT_E621_TAGS, E621_URL } = envSchema.parse(process.env);

export { PIXABAY_API_KEY, E621_API_KEY, USERNAME, DEFAULT_E621_TAGS, E621_URL }