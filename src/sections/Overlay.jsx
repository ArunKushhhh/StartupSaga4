import React, { useState } from "react";
import ImageOverlay from "../components/ImageOverlay";
import { eventData } from "../data/EventData";

const Overlay = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = eventData.length;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentEvent = eventData[currentPage - 1];
  return (
    <div className="relative h-[40vh] w-[90vw] md:h-[65vh] md:w-[55vw] bg-red-400 overflow-hidden group">
      <div
        className="w-full h-full group-hover:scale-105 transition duration-400"
        style={{
          background: `url("${currentEvent.image}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute flex flex-col justify-end px-6 pb-6 opacity-0 group-hover:opacity-100 transition duration-400 pointer-events-none z-10 top-0 w-full h-full bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,1)]">
        <ImageOverlay
          event={currentEvent.event}
          description={currentEvent.description}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Overlay;
