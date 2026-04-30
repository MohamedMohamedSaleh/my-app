import Link from "next/link";



export default function ArticlesPage() {
    return (
        <div>
            <h1>Articles Page</h1>
            <br />
            <br />
            <Link href="/">
                <button>Go To Home</button>
            </Link>
            <br />
            <br />
            <Link href="/posts">
                <button>Go To posts</button>
            </Link>
        </div>
    );
}