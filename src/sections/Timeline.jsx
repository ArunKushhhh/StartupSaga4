import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Fan from "../components/Fan";
import EventContent from "../components/EventContent";
import DateItem from "../components/DateItem";
import TimelineDemo from "../components/TimelineDemo";


const Timeline = () => {
  
  return (
    <div className="relative w-screen flex flex-col gap-24 justify-start items-center min-h-[140vh] md:min-h-screen text-white overflow-x-hidden">
      <div className="uppercase text-center text-6xl md:text-9xl font-['shakuro'] text-white">
        Timeline
      </div>

      <TimelineDemo />
    </div>
  );
};

export default Timeline;
