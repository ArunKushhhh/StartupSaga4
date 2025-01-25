import React from "react";

const StatCard = ({data, tag}) => {
  return (
    <div className="flex font-['shakuro']  flex-col gap-0 text-white">
      <p className="text-8xl md:text-8xl">{data}</p>
      <p className="text-2xl text-white">{tag}</p>
    </div>
  );
};

export default StatCard;
