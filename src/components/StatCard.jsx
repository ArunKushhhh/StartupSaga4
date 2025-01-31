import React from "react";
import CountUp from "./CountUp";

const StatCard = ({ data, tag }) => {
  return (
    <div className="flex font-['shakuro']  flex-col gap-0 text-white">
      <div className="flex items-center">
        <p className="text-8xl md:text-8xl">
          <CountUp
            from={0}
            to={data}
            separator=","
            direction="up"
            duration={2}
          />
        </p>
        <p className="text-8xl md:text-8xl">+</p>
      </div>

      <p className="text-2xl text-white">{tag}</p>
    </div>
  );
};

export default StatCard;
