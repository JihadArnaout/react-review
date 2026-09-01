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
      <div className={Style.section}>

      <Link href="/about" style={{ textDecoration: "underline", color: "blue" }}>
        Go to about
      </Link>

      <br />

      <Link href="/home" style={{ textDecoration: "underline", color: "blue" }}>
        Go to home
      </Link>
      
      </div>

    </>
  );
}
