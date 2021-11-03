import React, { useState } from "react";
import "./App.css";
import FirstFrase from "./components/FirstFrase";
import SecondFrase from "./components/SecFrase";

function App() {
  const [str, setStr] = useState(<FirstFrase />);

  const handleClick = () => {
    if (str.type.name === "SecondFrase") {
      setStr(<FirstFrase />);
    } else if (str.type.name === "FirstFrase") {
      setStr(<SecondFrase />);
    }
  };

  return (
    <div className="App">
      <h2>{str}</h2>
      <button onClick={handleClick}>Clique aqui!</button>
    </div>
  );
}

export default App;
