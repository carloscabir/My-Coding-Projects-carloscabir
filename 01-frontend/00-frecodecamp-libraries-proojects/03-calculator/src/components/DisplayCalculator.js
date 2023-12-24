import React from "react";

export const DisplayCalculator = ({ operation, result }) => {
  // console.log(Function("return " + "5.5 + 5.5")());
  return (
    <div className="display">
      <div className="result" id="display">
        {result ? result : operation ? operation : 0}
      </div>
    </div>
  );
};
