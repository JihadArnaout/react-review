import Link from "next/link";

export default function home() {
    return (
        <>
        <div className="text-2xl font-bold">Welcome to the </div>
        <div className="text-2xl font-bold color=yellow">Contact </div>
        <div className="text-2xl font-bold">page</div>
        <Link href="/" style={{ textDecoration: "underline", color: "blue" }}>
          Go to home
        </Link>
        </>
    )
}
