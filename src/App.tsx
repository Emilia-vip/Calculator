import React, { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState(""); 


  const handleClick = (value: string) => {
    setDisplay((prev) => prev + value);
  };


  const handleClear = () => {
    setDisplay("");
  };


  const handleCalculate = () => {
    try {
      const result = eval(display); 
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <div>
      <h1>Mini-kalkylator</h1>
      <input type="text" value={display} readOnly />

      <div>
       
        {[1,2,3,4,5,6,7,8,9,0].map((num) => (
          <button key={num} onClick={() => handleClick(num.toString())}>
            {num}
          </button>
        ))}

        
        {["+", "-", "*", "/"].map((op) => (
          <button key={op} onClick={() => handleClick(op)}>
            {op}
          </button>
        ))}

        
        <button onClick={handleClear}>C</button>
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
