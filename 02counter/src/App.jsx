import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  const [counter, setCounter] = useState(20);

  const addValue = () => {
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  };

  const remove = () => {
    // counter =counter-1;
    setCounter((prev) => prev - 1);
    setCounter((prev) => prev - 1);
    setCounter((prev) => prev - 1);
    setCounter((prev) => prev - 1);
  };
  return (
    <>
      <h1>React Course with Hitesh</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={remove}>Remove Value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
