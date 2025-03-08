"use client"

import { Post } from "@/config/apiTypes";
import TagInput from "./TagInput";
import SmashPass from "./SmashPass";
import useSmashStore from "@/util/smashStore";

export default function ImageDisplay({ posts }: { posts: Post[] }) {
  const { index } = useSmashStore()
  const post = posts[index]
  return <main className="bg-slate-800 border-4 border-slate-600 p-4 rounded-lg flex flex-col items-center gap-4 flex-1 justify-between">
    <TagInput />
    <div className="overflow-hidden">
      {post && <img className="object-contain max-h-full max-w-full" src={post.file.url} />}
    </div>
    <SmashPass post={post} postLimit={posts.length} />
  </main>
}