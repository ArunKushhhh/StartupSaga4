import React from "react";
import Tree3 from "../../public/images/treelayer3.svg";
import UmbTree from "../../public/images/umbrellatree.svg";
import UmbTree2 from "../../public/images/umbrellatree2.svg";
import Tree2 from "../../public/images/treelayer2.svg";
import Tree1 from "../../public/images/treelayer1.svg";
import Horses from "../../public/images/horses.svg";
import Ground from "../../public/images/ground.svg";
import Treefront1 from "../../public/images/trre1.svg";
import Treefront2 from "../../public/images/tree2.svg";
import Dragon from "../../public/images/dragon.svg";
import Birds from "../../public/images/birds.svg";

const HeroBg = () => {
  return (
    <div className="relative inset-0 flex justify-between w-full mx-auto pointer-events-none">
      <div
        className="absolute top-[38%] left-1/2 -translate-x-1/2 border-4  w-[200px] h-[200px] rounded-full shadow-[0_0_4px_4px_rgba(255,255,255,0.25)]"
      />
      <img
        src={Tree3}
        alt="treeLayer3"
        style={{
          position: "absolute",
          top: "60%",
          width: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          objectFit: "fill",
        }}
        className="-translate-y-1/2"
      />
      <img
        src={UmbTree}
        alt="treeLayer3"
        className="absolute left-3/4 top-1/2 -translate-y-1/2"
      />

      <img
        src={UmbTree2}
        alt="treeLayer3"
        className="absolute left-1/4 top-1/2 -translate-y-52"
      />

      <img
        src={Tree2}
        alt="treeLayer3"
        style={{
          position: "absolute",
          top: "65%",
          width: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          objectFit: "fill",
        }}
        className="-translate-y-1/2"
      />
      <img
        src={Tree1}
        alt="treeLayer3"
        style={{
          position: "absolute",
          top: "72%",
          width: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          objectFit: "fill",
        }}
        className="-translate-y-1/2"
      />

      <img
        src={Horses}
        alt="Horses"
        className="absolute left-1/2 -translate-x-1/2 bottom-64"
      />

      <img
        src={Ground}
        alt="ground"
        style={{
          position: "absolute",
          bottom: "0%",
          width: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          objectFit: "fill",
        }}
      />

      <img
        src={Treefront1}
        alt="treefront1"
        className="absolute hidden lg:flex left-0 top-1/2 -translate-y-1/2"
      />

      <img
        src={Treefront2}
        alt="treefront2"
        className="absolute hidden lg:flex right-0 top-1/2 -translate-y-1/2"
      />

      <img
        src={Dragon}
        alt="Dragon"
        className="absolute left-1/2 top-1/4 -translate-y-1/2"
      />

      <img
        src={Birds}
        alt="Dragon"
        className="absolute left-1/3 top-1/3 -translate-x-1/4 -translate-y-1/2"
      />
    </div>
  );
};

export default HeroBg;
