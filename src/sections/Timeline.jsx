import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Fan from "../components/Fan";
import EventContent from "../components/EventContent";
import DateItem from "../components/DateItem";
import { events } from "../data/Events";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Circular navigation function
  const handleDateClick = (newIndex) => {
    setActiveIndex(newIndex);
  };

  // Circular positioning of dates
  const calculatePosition = (index, activeIndex, totalEvents) => {
    // Determine rotation based on screen size
    const isMobile = window.innerWidth < 768;
    const angle = (index - activeIndex) * (360 / totalEvents);
    const radius = 200; // Adjust radius as needed

    if (isMobile) {
      // For mobile, rotate 90 degrees
      return {
        x: radius * Math.sin(angle * (Math.PI / 180)),
        y: -radius * Math.cos(angle * (Math.PI / 180))
      };
    } else {
      // Desktop circular layout
      return {
        x: -radius * Math.cos(angle * (Math.PI / 180)),
        y: radius * Math.sin(angle * (Math.PI / 180))
      };
    }
  };

  return (
    <div className="relative flex flex-col gap-24 justify-start items-center min-h-[140vh] md:min-h-screen text-white overflow-x-hidden">
      <div className="uppercase text-center text-6xl md:text-9xl font-['shakuro'] text-white">
        Timeline
      </div>

      <div className="flex flex-col gap-32 md:flex-row justify-between items-center relative">
        <EventContent event={events[activeIndex]} />

        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
          <div className="absolute md:rotate-0 rotate-90">
            <Fan />
          </div>

          <AnimatePresence>
            {events.map((event, index) => {
              const { x, y } = calculatePosition(index, activeIndex, events.length);
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={event.date}
                  className="absolute"
                  initial={{ 
                    opacity: 0, 
                    scale: 0.5,
                    x: x,
                    y: y 
                  }}
                  animate={{ 
                    opacity: isActive ? 1 : 0.5,
                    scale: isActive ? 1.2 : 0.8,
                    x: x,
                    y: y 
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.5 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <DateItem
                    date={event.date}
                    isActive={isActive}
                    onClick={() => handleDateClick(index)}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Timeline;