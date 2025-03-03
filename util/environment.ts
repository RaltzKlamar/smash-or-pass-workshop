import { z } from "zod";

const envSchema = z.object({
  API_KEY: z.string(),
  DEFAULT_TAGS: z.string(),
  USERNAME: z.string(),
})

const { API_KEY, USERNAME, DEFAULT_TAGS } = envSchema.parse(process.env);

export { API_KEY, USERNAME, DEFAULT_TAGS }