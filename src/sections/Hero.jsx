import React from "react";
import NavBar from "../components/Navbar";
import HeroBg from "../components/HeroBg";

const Hero = () => {
  return (
    <>
      <div className="bg-[#D693A2] min-h-screen md:min-h-[130vh] flex flex-col justify-center items-center relative overflow-hidden">
        <div className="w-full max-w-[80em] mx-auto relative flex flex-col items-center">
          <NavBar />
        </div>
        <div className="absolute inset-0 flex justify-between w-full mx-auto pointer-events-none">
          <HeroBg />
        </div>
      </div>
    </>
  );
};

export default Hero;
