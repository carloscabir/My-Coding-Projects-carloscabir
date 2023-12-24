import React, { useEffect, useState } from "react";
import { ButtonsCalculator } from "./ButtonsCalculator";
import { DisplayCalculator } from "./DisplayCalculator";

const operationInitial = "";
const resultInitial = null;

export const Calculator = () => {
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    const operationLeng = operation.length,
      isOperator = /[*/+-]/,
      endsWithDoubleDot = /[\.]{2}$/,
      endsWithOperator = /[*+-/]$/,
      endsWithNegativeSign = /\d[*/+-]{1}-$/,
      startsWithDoubleZero = /^0{2}/;

    let finalStr = operation.slice(operationLeng - 1);

    if (endsWithDoubleDot.test(operation))
      setOperation(operation.slice(0, operationLeng - 2) + finalStr);

    if (startsWithDoubleZero.test(operation)) {
      setOperation(operation.slice(1));
    }

    if (!isOperator.test(operation)) {
      return;
    }

    if (operation !== "-" && operationLeng === 1)
      setOperation(operationInitial);

    if (!endsWithOperator.test(operation)) return;

    if (
      isOperator.test(finalStr) &&
      isOperator.test(operation.slice(operationLeng - 2, operationLeng - 1))
    ) {
      if (endsWithNegativeSign.test(operation)) return;

      setOperation(operation.slice(0, operationLeng - 2) + finalStr);
    }

    if (finalStr === operation.slice(operationLeng - 2, operationLeng - 1)) {
      setOperation(operation.slice(0, operationLeng - 1));
    }
  }, [operation]);

  const handleOperation = (e) => {
    if (result) setResult(resultInitial);
    setOperation(operation + e.target.textContent);
  };

  const handleClear = (e) => {
    setResult(resultInitial);
    setOperation(operationInitial);
  };

  const handleEqual = () => {
    if (/[*+-/]{2}$/.test(operation)) {
      setOperation(operation.slice(0, operation.length - 2));
    } else if (/[*+-/]$/.test(operation)) {
      setOperation(operation.slice(0, operation.length - 1));
    }

    setResult(eval(operation));
    setOperation(operationInitial);
    // setOperation(`${eval(operation)}`);
  };

  return (
    <div className="calculator">
      <DisplayCalculator operation={operation} result={result} />
      <ButtonsCalculator
        handleOperation={handleOperation}
        handleClear={handleClear}
        handleEqual={handleEqual}
      />
    </div>
  );
};
