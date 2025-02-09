import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tree3 from "../../public/images/treelayer3.svg";
import UmbTree from "../../public/images/umbrellatree.svg";
import UmbTree2 from "../../public/images/umbrellatree2.svg";
import Tree2 from "../../public/images/treelayer2.svg";
import Tree1 from "../../public/images/treelayer1.svg";
import Horses from "../../public/images/horses.svg";
import Ground from "../../public/images/ground.svg";
import Treefront1 from "../../public/images/trre1.svg";
import Devfolio from "../../public/images/devfolio.svg";
import Treefront2 from "../../public/images/tree2.svg";
import Dragon from "../../public/images/dragon.svg";
import Birds from "../../public/images/birds.svg";
import "../styles/tubelight.css";

gsap.registerPlugin(ScrollTrigger);

const HeroBg = () => {
  // const heroRef = useRef(null);

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: heroRef.current,
  //       start: "70% 50%",
  //       end: "bottom top",
  //       scrub: 0.2,
  //       // pin: true,
  //       markers: true,
  //     },
  //   });

  //   tl.to(heroRef.current, {
  //     // scale: 1.5,
  //     width: "110vw",
  //     height: "110vw",
  //     duration: 3,
  //     ease: "power2.out",
  //   });

  //   // return () => {
  //   //   tl.kill();
  //   // };
  // }, []);

  return (
    <div className="animated relative inset-0 flex justify-between w-full mx-auto pointer-events-none">
      <div className="absolute top-[10vw] left-1/2 -translate-x-1/2 z-10 text-center w-full">
        <h1 className="tubelight mb-4" style={{ fontFamily: "shakuro" }}>
          <span>S</span>
          <span>T</span>
          <span>A</span>
          <span>R</span>
          <span>T</span>
          <span>U</span>
          <span>P</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>S</span>
          <span>A</span>
          <span>G</span>
          <span>A</span>
        </h1>
        <h3 className="tubelight-subtitle" style={{ fontFamily: "shakuro" }}>
          <span>S</span>
          <span>E</span>
          <span>A</span>
          <span>S</span>
          <span>O</span>
          <span>N</span>
          <span>IV</span>
        </h3>
        <h2
          className="tubelight-subtitle mt-4"
          style={{ fontFamily: "shakuro" }}
        >
          <span>F</span>
          <span>R</span>
          <span>O</span>
          <span>M</span>
          <span>&nbsp;</span>
          <span>S</span>
          <span>T</span>
          <span>O</span>
          <span>R</span>
          <span>M</span>
          <span>S</span>
          <span>&nbsp;</span>
          <span>T</span>
          <span>O</span>
          <span>&nbsp;</span>
          <span>S</span>
          <span>E</span>
          <span>R</span>
          <span>E</span>
          <span>N</span>
          <span>I</span>
          <span>T</span>
          <span>Y</span>
        </h2>
        <button
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-7 py-2.5 text-center me-2 mb-2 dark:bg-red-800 dark:hover:bg-red-700 dark:focus:ring-red-900 relative top-[15vh]"
          style={{ fontFamily: "shakuro" }}
        >
          <div className="flex gap-2">
            <img src={Devfolio} className="w-5 h-5" />
            Register With Devfolio
          </div>
        </button>
      </div>
      <div className="relative mx-auto w-full top-0">
        <div className="absolute top-1/2 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 border-4 w-[200px] h-[200px] rounded-full shadow-[0_0_4px_4px_rgba(255,255,255,0.25)]" />
        {/* <div
          ref={heroRef}
          className="overlay w-0 h-0 bg-[#001223] rounded-full z-[100] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        /> */}
        <div className="absolute w-full bottom-0">
          <div className="relative flex items-end justify-center w-full">
            <div className="absolute scale-[1.8] md:scale-100 bottom-40 md:bottom-64 w-full">
              <img
                src={Tree3}
                alt="Tree3"
                style={{
                  width: "100%",
                }}
              />
              <img
                src={UmbTree}
                alt="umbtree1"
                className="absolute w-1/5 lg:w-[200px] -top-16 left-20 lg:-top-44 lg:left-1/4"
              />
              <img
                src={UmbTree2}
                alt="umbtree2"
                className="absolute w-1/4 lg:w-[250px] -top-14 right-20 lg:-top-44 lg:right-1/4"
              />
              <img
                src={Tree2}
                alt="Tree2"
                className="absolute -bottom-10 md:-bottom-28"
                style={{
                  width: "100%",
                }}
              />
              <img
                src={Tree1}
                alt="Tree1"
                className="absolute -bottom-16 md:-bottom-52"
                style={{
                  width: "100%",
                }}
              />
            </div>
            <div className="relative flex flex-col items-center justify-center w-full">
              <div className="relative -bottom-10">
                <img src={Horses} alt="Horses" height={1} />
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
              className="hidden lg:block absolute right-0 bottom-0"
            />
            <img
              src={Treefront1}
              alt="treefront1"
              className="hidden lg:block absolute left-0 bottom-0"
            />
          </div>
        </div>

        <img
          src={Dragon}
          alt="dragon"
          className="absolute left-1/2 w-44 top-1/4 md:w-auto -z-20"
        />
        <img
          src={Birds}
          alt="birds"
          className="absolute left-1/2 -translate-x-1/2 top-1/3 md:top-32 md:w-auto "
        />
      </div>
    </div>
  );
};

export default HeroBg;
