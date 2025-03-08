"use client"

import { POSTS_URL } from "@/config/urlUtils";
import useSmashStore from "@/util/smashStore";

const THRESHOLD = 0
const MAX_TAGS = 15

type TagScore = {
  tag: string;
  score: number;
}

export default function TagRatings() {
  const { scores } = useSmashStore()
  const tagData: TagScore[] = Object.entries(scores).map(([tag, score]) => ({ tag, score }))
  const sorted = tagData.sort((a, b) => b.score - a.score)
  const top: TagScore[] = sorted.filter(({ score }) => score > THRESHOLD).slice(0, MAX_TAGS)
  const bottom: TagScore[] = sorted.filter(({ score }) => score < -THRESHOLD).slice(-MAX_TAGS)

  return (
    <aside className="bg-slate-800 border-4 border-slate-600 p-4 rounded-lg w-60 overflow-y-auto">
      <h1 className="mb-1 font-bold text-lg">Tag Ratings</h1>
      <h2 className="mt-2">Top Tags</h2>
      <TagList tagData={top} />
      <h2 className="mt-2">Bottom Tags</h2>
      <TagList tagData={bottom} />
    </aside>
  )
}


function TagList({ tagData }: { tagData: TagScore[] }) {
  return (
    <ol className="mx-2">
      {tagData.map(({ tag, score }) => (
        <TagRating key={tag} tag={tag} score={score} />
      ))}
    </ol>
  )
}

const makeTagsUrl = (tag: string) => `${POSTS_URL}?tags=${tag}` // e.g. https://e926.net/posts?tags=dragon

function TagRating({ tag, score }: { tag: string, score: number }) {
  return (
    <li className="flex justify-between">
      <a className="truncate underline text-blue-300" href={makeTagsUrl(tag)}>{tag}</a>
      <span className={score > 0 ? "text-green-400" : "text-red-400"}>{score}</span>
    </li>
  )
}