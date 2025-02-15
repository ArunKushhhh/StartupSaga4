import React from "react";
import TestCard from "../components/TestCard";
import Stroke from "../components/Stroke";
import Stats from "../components/Stats";
import ClickSpark from "../components/ClickSpark";

const Testimonials = () => {
  return (
    <div className="flex w-full flex-col gap-24 justify-center items-center min-h-[100vh] ">
      <div className="uppercase text-center text-6xl md:text-9xl font-['shakuro'] text-white">
        testimonials
      </div>
      <div className="flex flex-col md:flex-row gap-16 justify-center items-center ">
        <TestCard
          content={
            "Creative, inovative and strategic. We have great achievements made together and looking to more."
          }
          person={"Henry Arthur"}
          designation={"Head of Engineering, Loom"}
        />
        <TestCard
          content={
            "Creative, inovative and strategic. We have great achievements made together and looking to more."
          }
          person={"Henry Arthur"}
          designation={"Head of Engineering, Loom"}
        />
        <TestCard
          content={
            "Creative, inovative and strategic. We have great achievements made together and looking to more."
          }
          person={"Henry Arthur"}
          designation={"Head of Engineering, Loom"}
        />
      </div>
      <Stroke />
      <Stats />
    </div>
  );
};

export default Testimonials;
