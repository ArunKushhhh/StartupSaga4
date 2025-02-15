import React from "react";
import StatCard from "./StatCard";
import Stroke from "./Stroke";

const Stats = () => {
  return (
    <div className="flex w-full flex-col justify-between md:flex-row gap-16 md:w-[80%] ">
      <StatCard data={"3000"} tag={"Attendees"} />
      <div className="md:hidden">
        {/* <Stroke /> */}
      </div>
      <StatCard data={"5000"} tag={"Registrations"} />
      <div className="md:hidden">
        {/* <Stroke /> */}
      </div>
      <StatCard data={"100000"} tag={"Social Media Reach"} />
    </div>
  );
};

export default Stats;
