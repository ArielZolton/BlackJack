import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function UseStateReview() {
  const [count, setCount] = useState(0);

  // Using a callback to ensure we're updating based on the previous state
  const increment = () => {
    setCount(prevCount => prevCount + 10);
  };

  // A common mistake: directly modifying state without considering previous values
  const badIncrement = () => {
    setCount(count + 2);
    setCount(count + 1);
    setCount(count + 3);
  };

  return (
    <>

    <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md">
  <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
  State Review Section:
</h1>
    <DarkModeToggle/>
      <h2 className="text-xl font-bold">useState Callback Example</h2>
      <p className="text-lg">Count: {count}</p>
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={increment}>
          Correct Increment
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={badIncrement}>
          Incorrect Increment
        </button>
      </div>
    </div>
    </>
  );
}