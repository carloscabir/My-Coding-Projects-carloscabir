import React, { useState } from "react";

export const ElectronicBatery = () => {
  const [display, setDisplay] = useState("---");

  const acceptableValues = {
    Q: "Q",
    W: "W",
    E: "E",
    A: "A",
    S: "S",
    D: "D",
    Z: "Z",
    X: "X",
    C: "C",
  };

  const handleClick = (e) => {
    let $targetChildData = e.target.childNodes[1].data,
      $targetAudio = e.target.childNodes[0];

    if (!acceptableValues[$targetChildData]) return;

    setDisplay(e.target.id);
    $targetAudio.play();
  };

  document.addEventListener("keyup", (e) => {
    let $targetKey = e.key.toUpperCase(),
      $drum,
      $drumContainer;

    if (!acceptableValues[$targetKey]) return;

    $drum = document.getElementById($targetKey);
    $drumContainer = $drum.parentElement;

    setDisplay($drumContainer.id);
    $drum.play();
  });

  return (
    <div id="drum-machine" className="drum-machine">
      <div className="display-container">
        <h3 style={{ fontFamily: "monospace" }}>Display</h3>
        <h2 id="display" className="display">
          {display}
        </h2>
      </div>

      <div className="drum-buttons">
        <div className="drum-pad" id="Heater 1" onClick={handleClick}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            id="Q"
            className="clip"
          ></audio>
          Q
        </div>
        <div className="drum-pad" id="Heater 2" onClick={handleClick}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            id="W"
            className="clip"
          ></audio>
          W
        </div>
        <div className="drum-pad" id="Heater 3" onClick={handleClick}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            id="E"
            className="clip"
          ></audio>
          E
        </div>
        <div className="drum-pad" id="Heater 4" onClick={handleClick}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            id="A"
            className="clip"
          ></audio>
          A
        </div>
        <div className="drum-pad" id="Clap" onClick={handleClick}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            id="S"
            className="clip"
          ></audio>
          S
        </div>
        <div className="drum-pad" id="Open-HH" onClick={handleClick}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            id="D"
            className="clip"
          ></audio>
          D
        </div>
        <div className="drum-pad" id="Kick-n'-Hat" onClick={handleClick}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            id="Z"
            className="clip"
          ></audio>
          Z
        </div>
        <div className="drum-pad" id="Kick" onClick={handleClick}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            id="X"
            className="clip"
          ></audio>
          X
        </div>
        <div className="drum-pad" id="Closed-HH" onClick={handleClick}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            id="C"
            className="clip"
          ></audio>
          C
        </div>
      </div>
    </div>
  );
};
