import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  function clickHandler() {
    setCount(count + 1);
  }
  function clickHandler2() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={clickHandler}>Increment</button>
      <button onClick={clickHandler2}>Decrement</button>
    </div>
  );
}
