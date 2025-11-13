import React, { useState } from "react";
import "./App.css";

function Calculator() {
  const [display, setDisplay] = useState("");

  const handleClick = (value: string) => setDisplay(prev => prev + value);
  const handleClear = () => setDisplay("");
  const handleCalculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };


  const buttons = [
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0","C","=","+"
  ];

  return (
    <div className="calculator-wrapper">
      <div className="calculator">
        <input type="text" value={display} readOnly />

        <div className="button-grid">
          {buttons.map(btn => {
            if (btn === "C") {
              return <button key={btn} className="clear" onClick={handleClear}>{btn}</button>;
            } else if (btn === "=") {
              return <button key={btn} className="equal" onClick={handleCalculate}>{btn}</button>;
            } else if (["/","*","-","+"].includes(btn)) {
              return <button key={btn} className="operator" onClick={() => handleClick(btn)}>{btn}</button>;
            } else {
              return <button key={btn} className="number" onClick={() => handleClick(btn)}>{btn}</button>;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
