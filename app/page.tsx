import Description from "@/components/Description";
import Header from "@/components/Header";
import Style from "./page.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <main className={Style.section}>
       
        <p>Hello, Next.js!</p>
        <Header text="Jihad Arnaout" text2="The Conqueror" />
        <Description />

      </main>
      
      <Link href="/about" style={{ textDecoration: "underline" }}>
        Go to about
      </Link>
    </>
  );
}
