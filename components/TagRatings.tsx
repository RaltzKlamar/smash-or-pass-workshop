"use client"

import useSmashStore from "@/util/smashStore";
import React from "react";


type TagScore = {
  tag: string;
  score: number;
}

export default function TagRatings({ threshold = 0, count = 10 }: { threshold?: number, count?: number }) {
  const { scores } = useSmashStore()
  const tagData: TagScore[] = Object.entries(scores).map(([tag, score]) => ({ tag, score }))
  const sorted = tagData.toSorted((a, b) => b.score - a.score)
  const top = sorted.filter(({ score }) => score > threshold).slice(0, count)
  const bottom = sorted.filter(({ score }) => score < -threshold).slice(-count)

  return (
    <aside className="bg-slate-800 border-4 border-slate-600 p-4 rounded-lg flex-0 w-60">
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
        <li key={tag} className="flex justify-between">
          <a className="truncate underline text-blue-300" href={`https://e621.net/posts?tags=${tag}`}>
            {tag}</a> <span className={score > 0 ? "text-green-400" : "text-red-400"}>{score}</span>

        </li>
      ))}
    </ol>
  )
}

