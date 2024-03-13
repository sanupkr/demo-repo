'use client';
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count,setCount] = useState(0);
  const incrementCounter = (e:any)=>{
    e.preventDefault();
    setCount((c:number)=>c+1);
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p>Hello world!!</p>
      <h1>{count}</h1>
      <button onClick={incrementCounter}>Increment</button>
    </main>
  );
}
