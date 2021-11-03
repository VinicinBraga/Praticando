import React from "react";
import CountProvider from "./context/Count";
import Counter from "./components/Counter";
import Mirror from "./components/Mirror";
import "./App.css";

function App() {
  return (
    <CountProvider>
      <div className="App">
        <Counter />
        <hr />
        <Mirror />
      </div>
    </CountProvider>
  );
}

export default App;
