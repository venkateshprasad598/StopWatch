import React from "react";
import Card1 from "./Cards.js/Card1";
import Card2 from "./Cards.js/Card2";
import Card3 from "./Cards.js/Card3";
import Card4 from "./Cards.js/Card4";
import TotalCountCard from "./Cards.js/TotalCountCard";

const StopWatch = () => {
  return (
    <div className="stopWatches">
      <div className="header">
        <TotalCountCard />
      </div>
      <div className="cards">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </div>
    </div>
  );
};

export default StopWatch;
