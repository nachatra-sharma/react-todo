import React, { useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='counter-container'>
      <p>Counter - {count}</p>
      <h3>The number is {count % 2 === 0 ? "Even" : "Odd"}</h3>
      <div className='counter-btn'>
        <button
          onClick={() => {
            if (count > 19) return;
            else return setCount(count + 1);
          }}>
          Increment
        </button>
        <button
          onClick={() => {
            if (count < 1) return;
            else setCount(count - 1);
          }}>
          Decrement
        </button>
      </div>
    </div>
  );
};
