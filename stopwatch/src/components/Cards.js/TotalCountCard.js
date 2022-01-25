import React, { useEffect, useState } from "react";
import { formatTime } from "../formatTime";
import useTimer from "../useTimer";

const TotalCountCard = () => {
  //States
  const [totalCount, setTotalCount] = useState(0);

  //useTimer for starting Stopwatch and displaying the returned time string on the screen
  const { timer, handleStart } = useTimer(0);

  //Onload Starting Stopwatch
  useEffect(() => {
    handleStart();
  }, []);

  //Total Count Of Window Clicks
  useEffect(() => {
    function handleResize() {
      setTotalCount(totalCount + 1);
      console.log("Do resize stuff");
    }

    window.addEventListener("click", handleResize);

    return function cleanupListener() {
      window.removeEventListener("click", handleResize);
    };
  });

  return (
    <div className="headerCounter">
      <p className="timer">{formatTime(timer)}</p>
      <h2 className="totalCount">TOTAL CLICKS ON THE WINDOW</h2>
      <h1> {totalCount}</h1>
    </div>
  );
};

export default TotalCountCard;
