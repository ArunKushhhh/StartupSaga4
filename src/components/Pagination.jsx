import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePrevious = () => {
    const newPage = currentPage === 1 ? totalPages : currentPage - 1;
    onPageChange(newPage);
  };

  const handleNext = () => {
    const newPage = currentPage === totalPages ? 1 : currentPage + 1;
    onPageChange(newPage);
  };
  const renderPageCircles = () => {
    return Array.from({ length: totalPages }, (_, index) => {
      const pageNumber = index + 1;
      return (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`
            ${
              currentPage === pageNumber
                ? "w-8 h-2 rounded-full bg-white"
                : "w-2 h-2 rounded-full bg-white/50 "
            } 
            mx-1 transition-all duration-300 z-50
          `}
          aria-label={`Go to page ${pageNumber}`}
        />
      );
    });
  };

  return (
    <div className="flex items-center justify-between space-x-4 z-50 pointer-events-auto">
      <div
        className={`border-2 border-white rounded-full flex justify-center items-center h-10 w-10 transition-all duration-300`}
      >
        <button
          onClick={handlePrevious}
          className="text-white p-3 disabled:cursor-not-allowed"
          aria-label="Previous event"
        >
          <FaChevronLeft />
        </button>
      </div>

      <div className="flex items-center">{renderPageCircles()}</div>

      <div
        className={`border-2 border-white rounded-full flex justify-center items-center h-10 w-10 transition-all duration-300`}
      >
        <button
          onClick={handleNext}
          className="text-white disabled:opacity-50"
          aria-label="Next event"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
