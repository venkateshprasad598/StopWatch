import React, { useState } from "react";
import Card from "./Cards.js/Card";
import TotalCountCard from "./Cards.js/TotalCountCard";

const StopWatch = () => {
  const [cards] = useState([
    "Stop Watch 1",
    "Stop Watch 2",
    "Stop Watch 3",
    "Stop Watch 4",
  ]);

  return (
    <div className="stopWatches">
      <div className="header">
        <TotalCountCard />
      </div>
      <div className="cards">
        {cards.map((data) => {
          return <Card name={data} />;
        })}
      </div>
    </div>
  );
};

export default StopWatch;
