"use client";

import { useEffect, useState } from "react";
import "../styles/Clock.css";

const defaultBreakLength = 5 * 60;
const defaultSessionLength = 25 * 60;

const addZero = (num) => (num < 10 ? `0${num}` : num);

//

// To-do:
// Code refactoring SOLID
const ClockTimer = ({ timeLeft }) => {
  return (
    <h3 id="time-left" className="time-left">
      {addZero(Math.floor(timeLeft / 60))}:{addZero(timeLeft % 60)}
    </h3>
  );
};

const ClockView = ({ isSession, timeLeft }) => {
  return (
    <div className="session-time-container">
      <h2
        id="timer-label"
        className={`timer-label ${
          isSession ? "bg-red-secondary-mate" : "bg-blue-secondary-mate"
        }`}
      >
        Pomodoro
      </h2>
      <ClockTimer timeLeft={timeLeft} />
    </div>
  );
};

const ClockControls = ({
  isSession,
  isRunning,
  startStopClock,
  resetClock,
}) => {
  return (
    <div className="clock-start-stop-buttons-container">
      <button
        id="start_stop"
        className={`start-stop-button ${
          isSession ? "cl-red-primary-mate" : "cl-blue-primary-mate"
        }`}
        onClick={startStopClock}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <i
        id="reset"
        className="reset-button fa-solid fa-rotate-right fa-2xl icon-wh"
        onClick={resetClock}
      ></i>
    </div>
  );
};

// Not made due to Freecodecamp testing requires some elements
// const ClockTimeIncreaserDecreaser = () => {};

const ClockSettings = ({
  sessionLength,
  decreaseSessionLength,
  increaseSessionLength,
  breakLength,
  decreaseBreakLength,
  increaseBreakLength,
  isRunning,
}) => {
  return (
    <div className="clock-time-managment-container">
      <div className="handler-container">
        <h3 id="session-label" className="label-length">
          Session Length
        </h3>
        <div className="level-buttons-container">
          <button
            id="session-decrement"
            className={`label-button-dec fa-solid fa-minus fa-2xl icon-wh ${
              isRunning ? "btn-disabled" : ""
            }`}
            onClick={decreaseSessionLength}
            disabled={isRunning}
          ></button>
          <label id="session-length" className="session-length">
            {sessionLength / 60}
          </label>
          <button
            id="session-increment"
            className={`label-button-inc fa-solid fa-plus fa-2xl icon-wh ${
              isRunning ? "btn-disabled" : ""
            }`}
            onClick={increaseSessionLength}
            disabled={isRunning}
          ></button>
        </div>
      </div>
      <div className="handler-container">
        <h3 id="break-label" className="label-length">
          Break Length
        </h3>
        <div className="level-buttons-container">
          <button
            id="break-decrement"
            className={`label-button-dec fa-solid fa-minus fa-2xl icon-wh ${
              isRunning ? "btn-disabled" : ""
            }`}
            onClick={decreaseBreakLength}
            disabled={isRunning}
          ></button>
          <label id="break-length" className="break-length">
            {breakLength / 60}
          </label>
          <button
            id="break-increment"
            className={`label-button-inc fa-solid fa-plus fa-2xl icon-wh ${
              isRunning ? "btn-disabled" : ""
            }`}
            onClick={increaseBreakLength}
            disabled={isRunning}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default function Clock() {
  // Seconds is the general format time

  const [breakLength, setBreakLength] = useState(defaultBreakLength);
  const [sessionLength, setSessionLength] = useState(defaultSessionLength);
  const [isSession, setIsSession] = useState(true);
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  const [isRunning, setIsRunning] = useState(false);
  const [playAudio, setPlayAudio] = useState(false);

  const resetClock = () => {
    setBreakLength(defaultBreakLength);
    setSessionLength(defaultSessionLength);
    setIsRunning(false);
    setTimeLeft(sessionLength);
    setPlayAudio(false);
  };

  const startStopClock = () => setIsRunning(!isRunning);

  const increaseBreakLength = () => {
    if (breakLength === 60 * 60) return;
    setBreakLength(breakLength + 60);
  };
  const decreaseBreakLength = () => {
    if (breakLength === 60) return;
    setBreakLength(breakLength - 60);
  };

  const increaseSessionLength = () => {
    if (sessionLength === 60 * 60) return;
    setSessionLength(sessionLength + 60);
  };
  const decreaseSessionLength = () => {
    if (sessionLength === 60) return;
    setSessionLength(sessionLength - 60);
  };

  useEffect(() => setTimeLeft(sessionLength), [sessionLength]);

  // Do the clock part
  useEffect(() => {
    const beepAudio = document.getElementById("beep");

    if (playAudio) {
      beepAudio.play();
      beepAudio.currentTime = 0;
      setPlayAudio(!playAudio);
    }

    if (timeLeft === 0 && isSession) {
      setPlayAudio(!playAudio);
      setIsRunning(!isRunning);
      setIsSession(!isSession);
      setTimeLeft(breakLength);
    }

    if (timeLeft === 0 && !isSession) {
      setPlayAudio(!playAudio);
      setIsRunning(!isRunning);
      setIsSession(!isSession);
      setTimeLeft(sessionLength);
    }

    if (isRunning) {
      const interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  });

  return (
    <div className={`clock-container `}>
      <div
        className={`clock ${
          isSession ? "bg-red-primary-mate" : "bg-blue-primary-mate"
        }`}
      >
        <ClockView isSession={isSession} timeLeft={timeLeft} />
        <ClockControls
          isSession={isSession}
          isRunning={isRunning}
          startStopClock={startStopClock}
          resetClock={resetClock}
        />
        <ClockSettings
          sessionLength={sessionLength}
          increaseSessionLength={increaseSessionLength}
          decreaseSessionLength={decreaseSessionLength}
          breakLength={breakLength}
          increaseBreakLength={increaseBreakLength}
          decreaseBreakLength={decreaseBreakLength}
          isRunning={isRunning}
        />
      </div>
    </div>
  );
}
