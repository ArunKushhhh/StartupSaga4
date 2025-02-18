import React from "react";
import Spark from "/images/arc-reactor.svg";
import Reviews from "./Reviews";

const TestCard = ({ content, person, designation }) => {
  return (
    <div className="flex flex-col gap-14 justify-center items-center text-[0.9em] md:text-[1.2em] ">
      <div className="border-4 border-[#D693A2] rounded-full p-2">
        <img src={Spark} alt="spark" />
      </div>
      <div className="flex justify-center items-center">
        <p className="text-[#B1B1B1] text-center w-[90%]">"{content}"</p>
      </div>
      <Reviews />
      <div>
        <p className="text-white text-center">{person}</p>
        <p className="text-[#B1B1B1] text-center">{designation}</p>
      </div>
    </div>
  );
};

export default TestCard;
