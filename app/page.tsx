import Description from "@/components/Description";
import Header from "@/components/Header";
import Style from "util";


export default function Home() {
  return (
      <main style={{color: "green", backgroundColor: "white"}}>
       
        <p>Hello, Next.js!</p>
        <Header text="Jihad Arnaout" text2="The Conqueror" />
        <Description />

      </main>
  );
}
