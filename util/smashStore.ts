import { Post } from "@/config/apiTypes";
import { create } from "zustand";

type TagName = string
type Scores = Record<TagName, number>

type Store = {
  scores: Scores;
  smashList: Post[];
  index: number;
  resetIndex: () => void;
  smash: (post: Post) => void;
  pass: (post: Post) => void;
}

function addTagScores(scores: Scores, tags: TagName[], addValue: number): Scores {
  const scoreCopies = { ...scores }
  tags.forEach(tag => {
    const score = scoreCopies[tag] || 0;
    scoreCopies[tag] = score + addValue
  })
  return scoreCopies;
}

const useSmashStore = create<Store>()((set) => ({
  scores: {},
  smashList: [],
  index: 0,
  resetIndex: () => set(() => ({})),
  smash: (post: Post) => set(state => {
    return {}
  }),
  pass: (post: Post) => set(state => {
    return {}
  }),
}))

export default useSmashStore