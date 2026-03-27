import ImageDisplay from "@/components/ImageDisplay";
import LikedImages from "@/components/LikedImages";
import TagRatings from "@/components/TagRatings";
import { E621ApiResponse, Post } from "@/config/apiTypes";
import fetchImages from "@/util/fetchImages";

export default async function Home() {
  const tags = undefined
  const imageData: Post[] = await fetchImages(tags)
  return (
    <div className="flex h-screen p-8 gap-4">
      <LikedImages />
      <ImageDisplay posts={imageData} />
      <TagRatings />
    </div>
  );
}
