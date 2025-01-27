import React from "react";
import EcellMeet from "../../public/images/Ecell-cover.jpg";
import Pagination from "../components/Pagination";
import ImageOverlay from "../components/ImageOverlay";

const Overlay = () => {
  return (
    <div className="relative h-[65vh] w-[55vw] bg-red-400 overflow-hidden group">
      <div
        className="w-full h-full group-hover:scale-105 transition duration-400"
        style={{
          background: `url("${EcellMeet}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute flex flex-col justify-end px-6 pb-6 opacity-0 group-hover:opacity-100 transition duration-400 pointer-events-none z-10 top-0 w-full h-full bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,1)]">
        <ImageOverlay event={"E-Cell Meet"} description={"The gathering of key stakeholders of E-cell from the various colleges across Pune to connect is not just a boring party but it’s like engaging in discussions and sharing insights. This gathering is a creative melting pot where like-minded people come to collaborate."} />
      </div>
    </div>
  );
};

export default Overlay;
