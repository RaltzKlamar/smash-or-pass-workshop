"use client"

import { POSTS_URL } from "@/config/urlUtils"
import useSmashStore from "@/util/smashStore"

const makePostUrl = (postId: string | number) => `${POSTS_URL}/${postId}` // e.g. https://e926.net/posts/4444444

export default function LikedImages() {
  const { smashList } = useSmashStore()

  return <aside className="bg-slate-800 border-4 border-slate-600 p-4 rounded-lg w-60 overflow-y-auto">
    <ul className="flex flex-col gap-2 items-center">
      {smashList.map(post => (
        <li>
          <a href={`${POSTS_URL}/${post.id}`}>
            <img src={post.preview.url} width={post.preview.width} height={post.preview.height} />
          </a>
        </li>
      ))}
    </ul>
  </aside>
}