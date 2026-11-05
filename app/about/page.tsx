import Link from "next/link";

export default function AboutPage() {
  return (
    <>
  <div className="text-2xl font-bold">Welcome to the About page</div>
  <Link href="/" style={{ textDecoration: "underline", color: "blue" }}>
    Go to home
  </Link>
  </>
);
  
}
