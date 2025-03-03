import fetchImages from '@/util/fetchImages'
import TagRatings from '../components/TagRatings';
import ImageDisplay from '@/components/ImageDisplay';
import LikedImages from '@/components/LikedImages';
import fetchCuratedImages from '@/util/fetchCuratedImages';

const tagList = [
  { tag: "dragon", score: 50 },
  { tag: "blue", score: 23 },
  { tag: "big", score: -2 },
  { tag: "scary", score: -18 },
  { tag: "kobold", score: 12 },
  { tag: "magic", score: 15 },
  { tag: "heavy", score: 8 },
  { tag: "scaled", score: 13 },
  { tag: "fur", score: -41 },
  { tag: "ready", score: 11 },
  { tag: "red", score: -11 },
]

export default async function Home({ searchParams }: { searchParams: { tags?: string } }) {
  const { posts } = await fetchCuratedImages((await searchParams).tags)
  return (
    <div className="flex h-screen p-8 gap-4 font-[family-name:var(--font-geist-sans)]">
      <LikedImages />
      <ImageDisplay posts={posts} />
      <TagRatings threshold={0} />
    </div>
  );
}
