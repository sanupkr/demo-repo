'use client';
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count,setCount] = useState(0);
  const incrementCounter = (e:any)=>{
    e.preventdefault();
    setCount((c:number)=>c+1);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Hello world!!</p>
      <button onClick={incrementCounter}>Increment</button>
    </main>
  );
}
