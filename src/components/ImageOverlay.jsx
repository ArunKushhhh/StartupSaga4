import React, { useState } from "react";
import Pagination from "./Pagination";

const ImageOverlay = ({ event, description }) => {
  const totalPages = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="text-white flex flex-col gap-6 ">
      <p className="text-6xl font-black">{event}</p>
      <p className="text-xl w-[90%]">{description}</p>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ImageOverlay;
