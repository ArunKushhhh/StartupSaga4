import React, { useState } from "react";
import Pagination from "./Pagination";

const ImageOverlay = ({ event, description, currentPage, totalPages, onPageChange }) => {
  return (
    <div className="text-white flex flex-col gap-6 ">
      <p className="text-3xl md:text-6xl font-black">{event}</p>
      <p className="text-sm md:text-xl w-[90%]">{description}</p>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default ImageOverlay;
