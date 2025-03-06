"use client"

import { FormEvent } from "react"

export default function TagInput() {
  const onSubmit = (event: FormEvent) => { }

  return <form className="flex gap-2" onSubmit={onSubmit}>
    <label htmlFor="tag-search">Search Tags</label>
    <input className="text-slate-950 rounded-md px-2" type="text" />
    <input className="bg-slate-300 border-slate-700 border px-2 rounded-md text-slate-950 ml-2" type="submit" value="Search" />
  </form>
}