// import React from 'react';
import Questions from "../components/Questions";
import Content from "../components/Content";
import Send from "../../public/images/send-email.svg";

const Faq = () => {
  return (
    <div className="flex flex-col gap-24 px-4 md:px-14 justify-between items-center">
      <div className="flex w-full lg:max-w-[35%] items-start justify-center mb-8 lg:mb-0">
        <Content />
      </div>
      <div className="flex flex-col gap-24 w-full lg:max-w-[60%] items-start justify-center">
        <Questions />
        <div className="bg-white w-full rounded-full flex justify-between items-center">
          <p className="pl-6 text-black font-semibold py-3 text-lg md:text-xl">
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
