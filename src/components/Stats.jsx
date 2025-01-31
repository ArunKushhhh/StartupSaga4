import React from "react";
import StatCard from "./StatCard";
import Stroke from "./Stroke";

const Stats = () => {
  return (
    <div className="flex flex-col justify-between md:flex-row gap-12 md:w-[60%] ">
      <StatCard data={"45"} tag={"Impressions"} />
      <div className="md:hidden">
        <Stroke />
      </div>
      <StatCard data={"45"} tag={"Impressions"} />
      <div className="md:hidden">
        <Stroke />
      </div>
      <StatCard data={"45"} tag={"Impressions"} />
    </div>
  );
};

export default Stats;
