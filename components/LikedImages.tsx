"use client"

import { POSTS_URL } from "@/config/urlUtils"

const makePostUrl = (postId: string | number) => `${POSTS_URL}/${postId}` // e.g. https://e926.net/posts/4444444

export default function LikedImages() {
  return <aside className="bg-slate-800 border-4 border-slate-600 p-4 rounded-lg w-60 overflow-y-auto">
    <ul className="flex flex-col gap-2 items-center">
      { }
    </ul>
  </aside>
}