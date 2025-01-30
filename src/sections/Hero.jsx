import React from 'react';
import NavBar from '../components/Navbar';

const Hero = () => {
  return (
    <>
      <div className="bg-[#D693A2] min-h-[100vh] flex flex-col justify-center items-center relative">
        <div className="w-full max-w-[80em] mx-auto relative flex flex-col items-center">
          <NavBar />
        </div>
        <div className="absolute inset-0 flex justify-between w-full mx-auto pointer-events-none">
          {/* Left Tree */}
          <img src="/tree-left.svg" alt="hero" className="object-contain" />

          {/* Soldiers */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center space-x-4">
            <img
              src="/soldier-3.svg"
              alt="hero"
              className="h-[20em] object-contain"
            />
            <img
              src="/soldier-3.svg"
              alt="hero"
              className="h-[20em] object-contain"
            />
            <img
              src="/soldier-3.svg"
              alt="hero"
              className="h-[20em] object-contain"
            />
            <img
              src="/soldier-3.svg"
              alt="hero"
              className="h-[20em] object-contain"
            />
          </div>

          {/* Right Tree */}
          <img src="/tree-right.svg" alt="" className="object-contain" />
        </div>
      </div>
    </>
  );
};

export default Hero;
