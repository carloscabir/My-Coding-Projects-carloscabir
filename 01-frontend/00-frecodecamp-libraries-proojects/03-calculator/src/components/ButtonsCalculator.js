import React from "react";

export const ButtonsCalculator = ({
  handleOperation,
  handleClear,
  handleEqual,
}) => {
  return (
    <div className="buttons">
      <button id="seven" onClick={handleOperation}>
        7
      </button>
      <button id="eight" onClick={handleOperation}>
        8
      </button>
      <button id="nine" onClick={handleOperation}>
        9
      </button>
      <button class="orange" id="add" onClick={handleOperation}>
        +
      </button>
      <button id="four" onClick={handleOperation}>
        4
      </button>
      <button id="five" onClick={handleOperation}>
        5
      </button>
      <button id="six" onClick={handleOperation}>
        6
      </button>
      <button className="orange" id="subtract" onClick={handleOperation}>
        -
      </button>
      <button id="one" onClick={handleOperation}>
        1
      </button>
      <button id="two" onClick={handleOperation}>
        2
      </button>
      <button id="three" onClick={handleOperation}>
        3
      </button>
      <button className="orange" id="multiply" onClick={handleOperation}>
        *
      </button>
      <button className="gray" id="zero" onClick={handleOperation}>
        0
      </button>
      <button className="gray" id="clear" onClick={handleClear}>
        C
      </button>
      <button className="orange" id="equals" onClick={handleEqual}>
        =
      </button>
      <button className="orange" id="divide" onClick={handleOperation}>
        /
      </button>
      <button style={{background: "#222", color: "gray", fontWeight: "bold"}} id="decimal" onClick={handleOperation}>
        .
      </button>
    </div>
  );
};
