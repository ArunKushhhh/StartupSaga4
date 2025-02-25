import React from "react";
import GridMotion from "../sections/GridMotion";
import Overlay from "../sections/Overlay";
import Meet1 from "/images/ecellMeet1.jpg";
import Shark from "/images/sharktank.jpg";
import Next from "/images/nextniche.jpg";

const items = [
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Shark} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Next} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Shark} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Next} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Shark} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Next} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Shark} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Next} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Shark} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Next} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Shark} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Next} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Shark} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Next} alt="meet1" className="h-full w-full object-fill" />,
  <img src={Next} alt="meet1" className="h-full w-full object-fill" />,
];

const Gallery = () => {
  return (
    <div id="memories" className="relative min-h-[100vh] overflow-hidden w-full">
      <div className="absolute z-0 top-1/4 translate-y-0 opacity-20">
        <GridMotion items={items} />
      </div>

      <div className="relative z-10 flex flex-col gap-72 md:gap-40 justify-center items-center">
        <div className="uppercase text-center text-5xl md:text-6xl lg:text-9xl font-['shakuro'] text-white">
          Memories
        </div>
        <Overlay />
      </div>
    </div>
  );
};

export default Gallery;
