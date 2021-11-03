import React from "react";
import { useCount } from "../../context/Count";
import "./index.css";

export default function Mirror() {
  const { count } = useCount();
  return (
    <div className="counter-btn">
      <span>
        <b>Mirror: </b>
        {count}
      </span>
    </div>
  );
}
