import { useState, useRef } from "react";

const useTimer = (initialState = 0) => {
  //States
  const [timer, setTimer] = useState(initialState);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  //Starting the Stop Watch
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      console.log("Hello");
      setTimer((timer) => timer + 1);
    }, 1000);
    setCount(count + 1);
  };

  //Pausing the Stop Watch
  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
    setCount(count + 1);
  };

  //Resuming the Stop Watch
  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    setCount(count + 1);
  };

  //Resiting the Stop Watch
  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
    setCount(count + 1);
  };

  return {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
    count,
  };
};

export default useTimer;
