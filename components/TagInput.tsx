"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"

export default function TagInput() {
  const router = useRouter()
  const params = useSearchParams()
  const tagsParam = params.get("tags") || ""
  const [tags, setTags] = useState(tagsParam)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    router.push(`/?tags=${tags}`);
  }
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTags(event.target.value)
  }

  return <form className="flex gap-2" onSubmit={onSubmit}>
    <label htmlFor="tag-search">Search Tags</label>
    <input className="text-slate-950 rounded-md px-2" type="text" value={tags} onChange={onChange} />
    <input className="bg-slate-300 border-slate-700 border px-2 rounded-md text-slate-950 ml-2" type="submit" value="Search" />
  </form>
}