import { z } from "zod";

const envSchema = z.object({
  DEFAULT_TAGS: z.string(),
  USERNAME: z.string(),
})

const { USERNAME, DEFAULT_TAGS } = envSchema.parse(process.env);

export { USERNAME, DEFAULT_TAGS }