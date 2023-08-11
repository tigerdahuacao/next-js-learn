import Link from "next/link";

function Home() {
    return (
        <ul>
            <li>
                <Link href="/post/abc">Go to pages/post/[pid].js</Link>
            </li>
            <li>
                <Link href="/post/abc?foo=bar">
                    Also goes to pages/post/[pid].js
                </Link>
            </li>
            <li>
                <Link href="/post/abc/a-comment">
                    Go to pages/post/[pid]/[comment].js
                </Link>
            </li>
            {/* Catch all routes */}
            <li>
                <Link href="/post/catch-all/a/b/c">Go to pages/post/catch-all/[...slug].js</Link>
            </li>

            {/* Optional catch all routes */}
            <li>
                <Link href="/post/option-catch-all/a/b/c">Go to pages/post/option-catch-all/[[...slug]].js</Link>
            </li>
        </ul>
    );
}

export default Home;
