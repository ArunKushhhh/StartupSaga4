import React, { useState } from "react";
import FAQCard from "../components/FAQCard";
import Send from "../../public/images/send-email.svg";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqData = [
    {
      question: "What services do you offer?",
      answer:
        "We offer web development, mobile app development, and UI/UX design services.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach our support team via email at support@example.com or call us at 555-0123.",
    },
    {
      question: "Can I use Atomic Template for commercial purposes?",
      answer:
        "The program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or at (at your option) any later version.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach our support team via email at support@example.com or call us at 555-0123.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach our support team via email at support@example.com or call us at 555-0123.",
    },
  ];

  return (
    <div className="flex flex-col gap-24 justify-center items-center min-h-[100vh]">
      <div className="flex flex-col gap-0 text-center  text-white">
        <div className="text-6xl md:text-9xl font-['shakuro']">
          FAQ <span className="text-7xl">s</span>
        </div>
        <p className="text-2xl font-['shakuro']">We’ve got the answers</p>
      </div>

      <div className="flex flex-col gap-6 w-[90%] md:w-[60%]">
        {faqData.map((faq, index) => (
          <FAQCard
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      <div className="md:w-1/3 flex flex-col justify-center items-center gap-6">
        <div className="text-xl text-white">
            Do you have any other queries? <span className="text-red-600">Mail Us!</span>
        </div>
        <div className="bg-white w-full rounded-full flex justify-between items-center">
          <p className="pl-6 text-black font-semibold py-3 text-xl">
            ecell@aitpune.edu.in
          </p>
          <button
            onClick={() =>
              (window.location.href = "mailto:ecell@aitpune.edu.in")
            }
            className="flex gap-3 bg-red-600 py-3 px-6 text-xl rounded-full text-white font-semibold"
          >
            Mail Us
            <img src={Send} alt="email" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
