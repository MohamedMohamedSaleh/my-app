import Link from "next/link";

export default function PostsPage() {
    return (
        <div>
            <h1>Posts Page</h1>
                        <br />
            <br />
            <Link href="/">
                <button>Go To Home</button>
            </Link>
            <br />
            <br />
            <Link href="/articles">
                <button>Go To articles</button>
            </Link>
        </div>
    );
}