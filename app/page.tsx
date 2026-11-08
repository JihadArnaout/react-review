'use client';

import { useState, useMemo } from "react";

const calculateIncome = () => {
  let number = 10;
  for (let i = 0; i < 10000; i++){
    number = number + i;
    }
    console.log("calculating...");
    return number;
}

export default function Home() {

  const [counter, setCounter] = useState(0);
  const [shouldCalculate, setshouldCalculate] = useState(false);
  const income = useMemo(() => calculateIncome(), [shouldCalculate]);
  
  const handleClick = () => {
    setCounter(counter + 1);
    setshouldCalculate(false)
    if (counter === 10) {
      setshouldCalculate(true);
      setCounter(0);
    }
  }

  return (
    <main>
      <div className="text-4xl font-bold"> Home </div>
      <div>counter: {counter} </div>
      <div>income: {income} </div>
      <button onClick={handleClick}>click to Focus </button>
    </main>
  );
}



// 'use client';

// import { useRef } from "react";

// export default function Home() {

//   const inputRef = useRef<HTMLInputElement>(null);
  
//   const handleClick = () => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   }

//   return (
//     <main>
//       <h1 className="text-4xl font-bold">Home</h1>
//       <input ref={inputRef} />
//       <button onClick={handleClick}>click to Focus</button>
//     </main>
//   );
// }



// export default function Home() {

//   const [counter, setCounter] = useState(0);
//   const [success, setSuccess] = useState(false);

  
//   const handleClick = () => {
//     setCounter(counter + 1);
//     setSuccess(true);
//     if (counter === 10) {
//       setSuccess(false);
//       setCounter(0);
//     }
//   };

//   useEffect(() => {
//     console.log("triggered useEffect");
//   }, [success]);

//   return (
//     <main>
//       <h1 className="text-4xl font-bold">Home</h1>
//       <div>counter: {counter}</div>
//       <button onClick={handleClick}> click to increment</button>
//     </main>
//   );
// }



// 'use client';
// import Description from "@/components/Description";
// import Header from "@/components/Header";
// import Style from "./page.module.css";
// import Link from "next/link";
// import { useState } from "react";

// export default function Home() {

//   const [counter, setCounter] = useState(0);

//   const handleClick = () => {
//     setCounter (counter + 1);
//   }

//   return (
//     <>
//       <main className={Style.section}> 
//         <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
//         <div>counter: {counter}</div>
//         <button onClick={handleClick}>click to increment</button>
//       </main>

//       <div className={Style.section}>

//       <Link href="/about" style={{ textDecoration: "underline", color: "blue" }}>
//         Go to about
//       </Link>

//       <br />

//       <Link href="/Contact" style={{ textDecoration: "underline", color: "blue" }}>
//         Go to contact
//       </Link>

//       </div>

//     </>
//   );
// }

