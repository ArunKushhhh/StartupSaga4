import React from "react";
import { motion } from "framer-motion";

const DateItem = ({ date, isActive, onClick }) => {
  return (
    <motion.p
      className={`font-['shakuro'] text-2xl md:text-5xl cursor-pointer transition-colors duration-300 ease-in-out ${
        isActive ? "text-white" : "text-gray-800"
      }`}
      initial={{ opacity: 0.7 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {date}
    </motion.p>
  );
};

export default DateItem;
