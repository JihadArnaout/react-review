import Link from "next/link";

export default function home() {
    return (
        <>
        <div>Hello, Next.js!</div>
        <Link href="/" style={{ textDecoration: "underline", color: "blue" }}>
          Go to home
        </Link>
        </>
    )
}
