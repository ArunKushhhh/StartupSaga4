import React from "react";
import Castle from "/images/castle.svg";
import Form from "./Form";

const Ticket = () => {
  return (
    <div className="flex flex-col md:flex-row w-full md:min-h-[60vh] gap-0 px-4 md:px-16 text-black">
      <div className="relative w-full min-h-24 md:w-[10%] bg-[#FFFBF5] border-none outline-none rounded-t-3xl md:rounded-l-3xl overflow-hidden flex justify-center items-center">
        <div className="absolute left-0 md:left-[100%] bottom-0 md:top-0 w-14 h-14 rounded-full bg-[#001223] -translate-x-1/2 translate-y-1/2 md:-translate-y-1/2" />
        <div className="rotate-0 md:rotate-90 uppercase text-[0.9em] md:text-[1.2em] text-center tracking-[1rem]">
          Startup Saga
        </div>
        <div className="absolute right-0 bottom-0 w-14 h-14 rounded-full bg-[#001223] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative w-full md:w-[50%] bg-[#FFFBF5] overflow-hidden border-y md:border-x border-[#001223]">
        <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-[#001223] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute right-0 top-0 w-14 h-14 rounded-full bg-[#001223] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute left-0 bottom-0 w-14 h-14 rounded-full bg-[#001223] -translate-x-1/2 translate-y-1/2" />
        <div className="absolute right-0 bottom-0 w-14 h-14 rounded-full bg-[#001223] translate-x-1/2 translate-y-1/2" />
        <div className="flex flex-col gap-5 mt-6 justify-between h-full items-center">
          <div className="flex flex-col gap-5 mt-6 justify-center items-center">
            <p className="text-sm md:text-xl lg:text-2xl text-center tracking-[0.4rem]">
              SURPRISE! YOU&apos;RE GOING TO
            </p>
            <p className="text-3xl md:text-4xl lg:text-6xl text-center font-['shakuro']">
              STARTUP SAGA
            </p>
          </div>

          {/* Castle Image */}
          <img src={Castle} alt="castle" className="self-start" />
        </div>
      </div>

      <div className="relative w-full md:w-[40%] bg-[#FFFBF5] rounded-b-3xl md:rounded-r-3xl overflow-hidden flex justify-center items-center border-none outline-none">
        <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-[#001223] -translate-x-1/2 -translate-y-1/2" />

        <div className="absolute left-[100%] top-0 md:left-0 md:top-[100%] w-14 h-14 rounded-full bg-[#001223] -translate-x-1/2 -translate-y-1/2" />
        <div className="w-full flex flex-col justify-center items-center gap-6 my-6">
          <p className="text-3xl md:text-4xl lg:text-6xl text-center font-['shakuro']">
            SPONSOR US
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
