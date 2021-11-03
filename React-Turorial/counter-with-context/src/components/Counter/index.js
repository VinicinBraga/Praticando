import React from "react";
import { useCount } from "../../context/Count";
import "./index.css";

export default function Counter() {
  const { count, setCount } = useCount();

  return (
    <div className="counter-btn">
      <span>
        <b>Count: </b>
        {count}
      </span>
      <br />
      <button className="increase-btn" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <br />
      <button className="decrease-btn" onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}
