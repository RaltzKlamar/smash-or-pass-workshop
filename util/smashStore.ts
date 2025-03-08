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
  index: 1,
  resetIndex: () => set(() => ({ index: 0 })),
  smash: (post: Post) => set(state => {
    const index = state.index + 1
    const scores = addTagScores(state.scores, post.tags, 1)
    const smashList = [post, ...state.smashList]
    return { index, scores, smashList }
  }),
  pass: (post: Post) => set(state => {
    const index = state.index + 1
    const scores = addTagScores(state.scores, post.tags, -1)
    return { index, scores }
  }),
}))

export default useSmashStore