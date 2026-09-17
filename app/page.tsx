'use client';
import Description from "@/components/Description";
import Header from "@/components/Header";
import Style from "./page.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter (counter + 1);
  }

  return (
    <>
      <main className={Style.section}> 
        <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
        <div>counter: {counter}</div>
        <button onClick={handleClick}>click to increment</button>
      </main>

      <div className={Style.section}>

      <Link href="/about" style={{ textDecoration: "underline", color: "blue" }}>
        Go to about
      </Link>

      <br />

      <Link href="/Contact" style={{ textDecoration: "underline", color: "blue" }}>
        Go to contact
      </Link>

      </div>

    </>
  );
}
