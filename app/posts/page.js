import Link from "next/link";
import styles from "./../page.module.css";

export default async function PostsPage() {
  const response = await fetch("https://dummyjson.com/posts", {
    // to controle the cache
    // cache: "force-cache",// or "no-store"
    next: {
      revalidate: 120, // in seconds to revalidate the page
    },
  });
  const data = await response.json();
  var handleClick = () => {};
  const posts = data.posts.map((post) => {
    return (
      <Link href={`/posts/${post.id}`} key={post.id} >
        <div className={styles.myPost} key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      </Link>
    );
  });
  return (
    <div>
      <h1>Posts Page</h1>
      <br />
      {
        /* Start Posts*/
        <div>{posts}</div>
        /* End  Posts*/
      }
      {/* /* {data.posts.map((post) => (
        <div className={styles.myPost} key={post.id}>
          <h3>{post.title}</h3>
        </div>
      ))} */}
      <br />
    </div>
  );
}
