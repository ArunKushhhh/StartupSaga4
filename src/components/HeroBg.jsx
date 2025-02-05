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
      <div className="relative mx-auto w-full top-0">
        <div className="absolute lg:top-[48%] top-[38%] left-1/2 -translate-x-1/2 border-4 w-[200px] h-[200px] rounded-full shadow-[0_0_4px_4px_rgba(255,255,255,0.25)]" />

        <div className="absolute w-full bottom-0">
          <div className="relative flex items-end justify-center w-full">
            <img
              src={Treefront1}
              alt="treefront1"
              className="hidden md:block w-[240px] max-w-[300px] absolute left-0 bottom-0"
            />

            <div className="relative flex flex-col items-center justify-center w-full">
              <div className="relative -bottom-9">
                <img src={Horses} alt="Horses" />
              </div>

              <img
                src={Ground}
                alt="ground"
                className="w-full"
                style={{
                  bottom: "0%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  objectFit: "fill",
                }}
              />
            </div>

            <img
              src={Treefront2}
              alt="treefront2"
              className="hidden md:block w-[290px] max-w-[300px] absolute right-0 bottom-0"
            />
          </div>
        </div>
      </div>
</div>
    </div>
  );
};

export default HeroBg;
