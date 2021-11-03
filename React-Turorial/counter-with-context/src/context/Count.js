import React, { createContext, useState } from "react";
import { useContext } from "react/cjs/react.development";

export const CountContext = createContext();

export default function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

export function useCount() {
  const context = useContext(CountContext);
  const { count, setCount } = context;
  return { count, setCount };
}
