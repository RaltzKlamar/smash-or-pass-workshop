"use client"

import { Post } from "@/types/apiTypes";
import useSmashStore from "@/util/smashStore";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import Router from "next/router";
import React, { useEffect } from "react";

export default function SmashPass({ post, postLimit }: { post: Post, postLimit: number }) {
  const store = useSmashStore();
  const router = useRouter()

  const checkRefresh = () => {
    if (store.index + 1 === postLimit) {
      router.refresh()
      store.resetIndex()
    }
  }

  const smash = (post: Post) => {
    checkRefresh()
    store.smash(post)
  }

  const pass = (post: Post) => {
    checkRefresh()
    store.pass(post)
  }

  useEffect(() => {
    const onPress = (e: KeyboardEvent) => {
      if (e.key === "s") {
        smash(post)
      } else if (e.key === "a") {
        pass(post)
      }
    }

    document.addEventListener("keypress", onPress)

    return () => document.removeEventListener("keypress", onPress)
  }, [post, smash, pass])

  return <div className="flex flex-stretch w-full gap-2">
    <Button className="bg-green-900 border-green-600" onClick={() => smash(post)}>Smash</Button>
    <Button className="bg-red-900 border-red-600" onClick={() => pass(post)}>Pass</Button>
  </div>
}

function Button({ onClick, className, children }: { onClick: () => void, className: string, children: React.ReactNode }) {
  return (
    <button className={classNames("border-2 rounded-md flex-1 h-16 text-3xl", className)} onClick={onClick}>{children}</button>
  )
}