import React from "react";
import { formatTime } from "../formatTime";
import useTimer from "../useTimer";

const Card1 = () => {
  //useTimer for starting, Pausing, Resuming and Reseting the Stopwatch and displaying the returned time string on the screen

  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
    count,
  } = useTimer(0);

  return (
    <div className="app">
      <h3>Stopwatch 1</h3>
      <div className="stopwatch-card">
        <p>{formatTime(timer)}</p>
        <p>Count : {count}</p>
        <div className="buttons">
          {!isActive && !isPaused ? (
            <button onClick={handleStart}>Start</button>
          ) : isPaused ? (
            <button onClick={handlePause}>Pause</button>
          ) : (
            <button onClick={handleResume}>Resume</button>
          )}
          <button onClick={handleReset} className="Reset">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card1;
