"use client"

import { Post } from "@/types/apiTypes";
import React from "react";

export default function SmashPass({ post, postLimit }: { post: Post, postLimit: number }) {
  const smash = () => { }
  const pass = () => { }

  return <div className="flex flex-stretch w-full gap-2">
    <Button onClick={smash} className="">Smash</Button>
    <Button onClick={pass} className="">Pass</Button>
  </div>
}

function Button({ onClick, children, className }: { onClick: () => void, children: React.ReactNode, className?: string }) {
  return <button onClick={onClick}>{children}</button>
}