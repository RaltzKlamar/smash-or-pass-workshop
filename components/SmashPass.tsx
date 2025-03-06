"use client"

import { Post } from "@/config/apiTypes";
import React from "react";

export default function SmashPass({ post, postLimit }: { post: Post, postLimit: number }) {
  const smash = () => { }
  const pass = () => { }

  return <div className="flex flex-stretch w-full gap-2">
    <Button className="bg-green-900 border-green-600" onClick={smash}>Smash</Button>
    <Button className="bg-red-900 border-red-600" onClick={pass}>Pass</Button>
  </div>
}

function Button({ onClick, children, className }: { onClick: () => void, children: React.ReactNode, className?: string }) {
  return <button className="" onClick={onClick}>{children}</button>
}