import { useState, useEffect } from "react";
import BookFetcher from "./BookFetcher";
 

function BadEffectExample() {
  const [count, setCount] = useState(0);
  const [renders, setRenders] = useState(1); // Tracks excessive renders

  // useEffect(() => {
  //   console.log(`Effect triggered ${renders} times`);
  //   setRenders(prev => prev + 1); // 🚨 This causes an infinite loop!
  // }); // ❌ Missing dependency array

  return (
    <div className="p-6 bg-red-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">🚨 Bad useEffect Example (Uncontrolled Re-renders)</h2>
      <p>Effect ran: {renders} times (Check console!)</p>
      <button 
        className="px-4 py-2 bg-red-500 text-white rounded-md mt-4"
        onClick={() => setCount(count + 1)}
      >
        Trigger Re-render ({count})
      </button>
    </div>
  );
}

function CleanupExample() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Starting interval...");
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => {
      console.log("Cleaning up interval...");
      clearInterval(interval);
    };
  }, []); // ✅ Runs once & properly cleans up.

  return (
    <div className="p-6 bg-green-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">✅ useEffect Cleanup Example</h2>
      <p>Seconds elapsed: {seconds}</p>
    </div>
  );
}

export default function UseEffectReview() {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col gap-6">
      <h1 className="text-3xl font-extrabold text-gray-800">useEffect Review Section</h1>
      <BookFetcher />
      <BadEffectExample />
      <CleanupExample />
    </div>
  );
}