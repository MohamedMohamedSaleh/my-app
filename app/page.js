import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
     <h1>Home</h1>
                 <br />
            <br />
            <Link href="/articles">
                <button>Go To articles</button>
            </Link>
            <br />
            <br />
            <Link href="/posts">
                <button>Go To posts</button>
            </Link>
    </div>
  );
}
