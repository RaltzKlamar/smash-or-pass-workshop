import ImageDisplay from "@/components/ImageDisplay";
import LikedImages from "@/components/LikedImages";
import TagRatings from "@/components/TagRatings";
import { E621ApiResponse } from "@/config/apiTypes";
import fetchCuratedImages from "@/mocks/fetchCuratedImages";
import fetchImages from "@/util/fetchImages";

export default async function Home({ searchParams }: { searchParams: { tags?: string } }) {
  const tags = (await searchParams).tags
  const imageData: E621ApiResponse = await fetchCuratedImages(tags)
  return (
    <div className="flex h-screen p-8 gap-4">
      <LikedImages />
      <ImageDisplay posts={imageData.posts} />
      <TagRatings />
    </div>
  );
}
