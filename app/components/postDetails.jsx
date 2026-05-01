export default async function PostDetails({ postId }) {
  const response = await fetch(`https://dummyjson.com/posts/${postId}`, {
    // to controle the cache
    cache: "no-store",// or "no-store"
    // next: {
    //   revalidate: 120, // in seconds to revalidate the page
    // },
  });
  const post = await response.json();
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
