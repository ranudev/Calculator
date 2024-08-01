import React, { useState } from "react";
import "../../src/Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
    console.log("value", value);
    console.log("input", input);
  };

  const clear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const del = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <>
      <div className="cal">
        <div className="display"> {input}</div>
        <div className="btn">
          <button onClick={() => handleButtonClick("%")}>% </button>
          <button onClick={clear}>CE </button>
          <button onClick={clear}>C</button>

          <button onClick={del}>⌫</button>
          <button onClick={() => handleButtonClick("/")}>/ </button>
          <button onClick={() => handleButtonClick("7")}>7 </button>
          <button onClick={() => handleButtonClick("8")}>8 </button>
          <button onClick={() => handleButtonClick("9")}>9 </button>
          <button onClick={() => handleButtonClick("*")}>* </button>
          <button onClick={() => handleButtonClick("4")}>4 </button>
          <button onClick={() => handleButtonClick("5")}>5 </button>
          <button onClick={() => handleButtonClick("6")}>6 </button>
          <button onClick={() => handleButtonClick("-")}>-</button>
          <button onClick={() => handleButtonClick("1")}>1 </button>
          <button onClick={() => handleButtonClick("2")}>2 </button>
          <button onClick={() => handleButtonClick("3")}>3 </button>
          <button onClick={() => handleButtonClick("+")}>+ </button>
          <button onClick={() => handleButtonClick("0")}>0 </button>
          <button onClick={() => handleButtonClick(".")}>. </button>
          <button onClick={handleEqual}>=</button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
