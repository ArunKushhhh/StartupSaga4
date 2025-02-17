import React from "react";
// import SponsorsBg from "../components/SponsorsBg";
import PlatinumSponsors from "../components/PlatinumSponsors";
import GoldSponsors from "../components/GoldSponsors";
import SilverSponsors from "../components/SilverSponsors";
import PlatformSponsors from "../components/PlatformSponsors";
import FoodSponsors from "../components/FoodSponsors";
import ApparelSponsors from "../components/ApparelSponsor";
import Clouds from "/images/clouds.svg";
import CloudsB from "/images/cloudsbottom.svg";

const Sponsors = () => {
  const bgUrl = new URL('/images/bgpattern.svg', import.meta.url).href;
  return (
    <div
      className="relative overflow-x-clip flex flex-col gap-24 justify-center items-center w-full min-h-[100vh] my-52 py-8 md:py-32"
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute left-1/2 -translate-x-1/2 top-0  w-[120%]  h-full">
        <img src={Clouds} alt="" className="w-full -translate-y-[99%]"/>
      </div>
      <div className="flex flex-col gap-2 uppercase text-center font-['shakuro'] text-white">
        <p className="text-2xl md:text-3xl lg:text-4xl">Our Past</p>
        <p className="text-5xl md:text-6xl lg:text-9xl ">Sponsors</p>
      </div>

      <div className="w-full flex flex-col gap-36 justify-center items-center">
        <PlatinumSponsors />
        <GoldSponsors />
        <SilverSponsors />
        <PlatformSponsors />
        <FoodSponsors />
        <ApparelSponsors />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-[100%] w-[120%]  h-full">
        <img src={CloudsB} alt="" className="w-full"/>
      </div>
    </div>
  );
};

export default Sponsors;
