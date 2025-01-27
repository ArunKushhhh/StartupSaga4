import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
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
                : "w-2 h-2 rounded-full bg-white/50"
            } 
            mx-1 transition-all duration-300 z-50
          `}
        />
      );
    });
  };

  return (
    <div className="flex items-center justify-between space-x-4 z-50">
      <div className="border-2 border-white rounded-full flex justify-center items-center h-10 w-10">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="text-white disabled:opacity-50"
        >
          <FaChevronLeft />
        </button>
      </div>

      <div className="flex items-center">{renderPageCircles()}</div>

      <div className="border-2 border-white rounded-full flex justify-center items-center h-10 w-10">
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="text-white disabled:opacity-50"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
