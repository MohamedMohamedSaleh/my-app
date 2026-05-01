import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";

export default async function PostPage({ params }) {
  const { postId } = await params;

  return (
    <div>
      <h1>Post Details</h1>
      <Suspense fallback={<h2>Loading component...</h2>}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}
