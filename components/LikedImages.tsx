"use client"

import useSmashStore from "@/util/smashStore"

export default function LikedImages() {
  const { smashList } = useSmashStore()

  return <aside className="bg-slate-800 border-4 border-slate-600 p-4 rounded-lg flex-0 w-60 overflow-y-auto">
    <ul className=" flex flex-col gap-2 items-center">
      {smashList.map(post => <li key={post.id}>
        <a href={`http://e621.net/posts/${post.id}`}>
          <img src={post.preview.url} width={post.preview.width} height={post.preview.height} />
        </a>
      </li>
      )}
    </ul>
  </aside>
}