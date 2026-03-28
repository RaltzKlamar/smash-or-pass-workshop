import ImageDisplay from "@/components/ImageDisplay";
import LikedImages from "@/components/LikedImages";
import TagRatings from "@/components/TagRatings";
import { Post } from "@/config/apiTypes";
import fetchImages from "@/util/fetchImages";

// TODO 1: Fetch images on page load
export default async function Home() {
  const tags = undefined // TODO 9: Filter based on tags from the search params 
  const imageData: Post[] = await fetchImages(tags)
  return (
    <div className="flex h-screen p-8 gap-4">
      <LikedImages />
      <ImageDisplay posts={imageData} />
      <TagRatings />
    </div>
  );
}
