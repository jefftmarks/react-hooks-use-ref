import React, { useState, useRef } from "react";

function CounterState() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((count) => count + 1);
  }

  let refCount = useRef(0);

  function handleRefClick() {
    refCount.current += 1;
  }

  return (
    <div>
      <h1>CounterState</h1>
      <button onClick={handleClick}>{count}</button>
      <h1>CounterRef</h1>
      <button onClick={handleRefClick}>{refCount.current}</button>
    </div>
  );
}

export default CounterState;
