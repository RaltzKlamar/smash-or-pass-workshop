import ImageDisplay from "@/components/ImageDisplay";
import LikedImages from "@/components/LikedImages";
import TagRatings from "@/components/TagRatings";
import { E621ApiResponse } from "@/types/apiTypes";

export default async function Home() {
  const imageData: E621ApiResponse = { posts: [] }
  return (
    <div className="flex h-screen p-8 gap-4">
      <LikedImages />
      <ImageDisplay posts={imageData.posts} />
      <TagRatings />
    </div>
  );
}
