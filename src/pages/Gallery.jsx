import React from "react";
import GridMotion from "../sections/GridMotion";
import Overlay from "../sections/Overlay";
import Meet1 from "../../public/images/ecellMeet1.jpg";

const items = [
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
  <img src={Meet1} alt="meet1" className="h-full w-full object-fill"/>,
];

const Gallery = () => {
  return (
    <div className="relative min-h-[100vh] overflow-hidden">
      <div className="absolute z-0 top-1/4 translate-y-0 opacity-20">
        <GridMotion items={items} />
      </div>

      <div className="relative z-10 flex flex-col gap-40 justify-center items-center">
        <div className="uppercase text-center text-6xl md:text-9xl font-['shakuro'] text-white">
          Memories
        </div>
        <Overlay />
      </div>
    </div>
  );
};

export default Gallery;
