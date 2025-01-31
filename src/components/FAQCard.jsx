import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const FAQCard = ({ question, answer, isOpen, onClick }) => {
  return (
    <div 
      className={`${
        isOpen ? "border bg-[#1D252F] border-white" : ""
      } flex flex-col justify-center items-start gap-8 p-6 text-white rounded-lg overflow-hidden transition duration-300`}
    >
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center"
      >
        <h3 className="text-xl font-semibold">{question}</h3>
        <span className="flex-shrink-0 ml-4 transition duration-300">
          {isOpen ? (
            <div className="w-[30px] h-[30px] border border-white rounded-full flex justify-center items-center">
              <AiOutlinePlus className="w-6 h-6 text-white transition-transform duration-300 -rotate-45" />
            </div>
          ) : (
            <div className="w-[30px] h-[30px] border border-white rounded-full flex justify-center items-center">
              <AiOutlinePlus className="w-6 h-6 text-white transition-transform duration-300" />
            </div>
          )}
        </span>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden w-[90%]
          ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="text-xl text-[#B1B1B1]">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQCard;