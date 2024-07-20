import React from "react";
import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [pendingOperation, setPedingOperation] = useState(null);
  const [pendingValue, setPendingValue] = useState(null);
  const [completeOperation, setCompleteOperation] = useState("");

  const keypadnumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const operations = ["+", "-", "*", "/"];

  const handleclick = (val) => {
    setCurrentValue((prevValue) => {
      if (prevValue === "0") {
        return val;
      } else {
        return prevValue + val;
      }
    });
    setCompleteOperation((prevOperation) => prevOperation + val);
  };

  const handleOperation = (operation) => {
    setCompleteOperation(currentValue + " " + operation + " ");
    setPedingOperation(operation);
    setPendingValue(currentValue);
    setCurrentValue("0");
  };

  const handleClear = () => {
    setCurrentValue("0");
    setPedingOperation(null);
    setPendingValue(null);
    setCompleteOperation("");
  };

  const handleCalculate = () => {
    if (!pendingOperation || !pendingValue) {
      return;
    }
    const num1 = parseFloat(pendingValue);
    const num2 = parseFloat(currentValue);

    let result;

    switch (pendingOperation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/ ":
        if (num2 != 0) {
          result = num1 / num2;
        } else {
          setCurrentValue("Invalid");
          setCompleteOperation("Invalid");
          setPedingOperation(null);
          setPendingValue(null);
          return;
        }

        break;


      default:
        break;
    }

    setCompleteOperation(
      pendingValue +
      " " +
      pendingOperation +
      " " +
      currentValue +
      " = " +
      result
    );
    setCurrentValue(result.toString());
    setPedingOperation(null);
    setPendingValue(null);
  };

  return (
    <div className="calculator">
      <div className="complete-operation">{completeOperation}</div>
      <div className="display">{currentValue}</div>
      <div className="buttons">
        <button onClick={handleClear}>AC</button>
        {keypadnumbers.map((num) => (
          <button key={num} onClick={() => handleclick(num)}>
            {num}
          </button>
        ))}
        {operations.map((operation) => (
          <button key={operation} onClick={() => handleOperation(operation)}>
            {operation}
          </button>
        ))}
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
