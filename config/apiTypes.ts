import { z } from 'zod';

const extensions = ["png", "jpg", "jpeg", "gif", "apng", "webm", "swf"] as const

const fileSchema = z.object({
  width: z.number().int(),
  height: z.number().int(),
  ext: z.enum(extensions),
  size: z.number().int(),
  md5: z.string().length(32),
  url: z.union([z.string().url(), z.null()]).transform(url => url ?? ''),
});

const previewSchema = z.object({
  width: z.number().int(),
  height: z.number().int(),
  url: z.union([z.string().url(), z.null()]).transform(url => url ?? ''),
});

const scoreSchema = z.object({
  up: z.number().int(),
  down: z.number().int(),
  total: z.number().int(),
});

const tagsSchema = z.object({
  general: z.array(z.string()),
  artist: z.array(z.string()),
  contributor: z.array(z.string()),
  copyright: z.array(z.string()),
  character: z.array(z.string()),
  species: z.array(z.string()),
  invalid: z.array(z.string()),
  meta: z.array(z.string()),
  lore: z.array(z.string()),
});

const relationshipsSchema = z.object({
  parent_id: z.union([z.number().int(), z.null()]),
  has_children: z.boolean(),
  has_active_children: z.boolean(),
  children: z.array(z.number().int()),
});

export enum Ratings {
  Safe = 's',
  Questionable = 'q',
  Explicit = 'e',
}

const ratingEnum = z.enum([Ratings.Safe, Ratings.Questionable, Ratings.Explicit])

const postSchema = z.object({
  id: z.number().int(),
  created_at: z.string().datetime({ offset: true }),
  updated_at: z.string().datetime({ offset: true }),
  file: fileSchema,
  preview: previewSchema,
  score: scoreSchema.transform(score => score.total),
  tags: tagsSchema.transform(tags => Object.values(tags).flat()),
  rating: ratingEnum,
  sources: z.array(z.string()),
  relationships: relationshipsSchema,
  description: z.string(),
  duration: z.union([z.number(), z.null()]),
});

export const apiResponseSchema = z.object({
  posts: z.array(postSchema)
})

export type Extensions = typeof extensions[number]
export type File = z.infer<typeof fileSchema>
export type Preview = z.infer<typeof previewSchema>
export type Tag = z.infer<typeof tagsSchema>
export type Post = z.infer<typeof postSchema>
export type E621ApiResponse = z.infer<typeof apiResponseSchema>