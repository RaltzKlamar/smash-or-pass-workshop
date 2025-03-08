"use client"

import { Post } from "@/config/apiTypes";
import useSmashStore from "@/util/smashStore";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import React from "react";

export default function SmashPass({ post, postLimit }: { post: Post, postLimit: number }) {
  const store = useSmashStore()
  const router = useRouter()

  const checkRefresh = () => {
    if (store.index + 1 === postLimit) {
      router.refresh()
      store.resetIndex()
    }
  }
  
  const smash = () => {
    checkRefresh()
    store.smash(post)
  }
  const pass = () => {
    checkRefresh()
    store.pass(post)
  }

  return <div className="flex flex-stretch w-full gap-2">
    <Button className="bg-green-900 border-green-600" onClick={smash}>Smash</Button>
    <Button className="bg-red-900 border-red-600" onClick={pass}>Pass</Button>
  </div>
}

function Button({ onClick, children, className }: { onClick: () => void, children: React.ReactNode, className?: string }) {
  return <button className={classNames("border-2 rounded-md flex-1 h-16 text-3xl", className)} onClick={onClick}>{children}</button>
}