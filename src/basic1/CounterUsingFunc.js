import React, { useState } from "react";

const CounterUsingFunc = () => {
  const [count, setCount] = useState([0, 1, 2]);

  const add = (v) => {
    setCount((prev) => [...prev, v]);
    console.log(count);
  };

  const sub = () => {
    // setCount((prev) => [...count, prev]);
    setCount((prev) => [...prev, prev.slice(0, 1)]);
    console.log(count);
  };

  return (
    <div>
      CounterUsingFunc
      <button onClick={() => add(1)}>+ Add</button>
      Counter: {count}
      <button onClick={sub}>- Sub</button>
      {count.map((c, i) => (
        <li key={i}>
          i = {i}, c = {c}
        </li>
      ))}
    </div>
  );
};

export default CounterUsingFunc;
