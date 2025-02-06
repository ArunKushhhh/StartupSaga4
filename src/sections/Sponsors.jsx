import React from "react";
import SponsorsBg from "../components/SponsorsBg";
import PlatinumSponsors from "../components/PlatinumSponsors";
import GoldSponsors from "../components/GoldSponsors";
import SilverSponsors from "../components/SilverSponsors";
import PlatformSponsors from "../components/PlatformSponsors";
import FoodSponsors from "../components/FoodSponsors";
import ApparelSponsors from "../components/ApparelSponsor";

const Sponsors = () => {
  return (
    <div className="relative flex flex-col gap-24 justify-center items-center min-h-[100vh] my-52 py-44">
      <div className="absolute top-0 w-full h-full -z-30">
        <SponsorsBg />
      </div>
      <div className="flex flex-col gap-2 uppercase text-center font-['shakuro'] text-white">
        <p className="text-2xl md:text-4xl">Our Past</p>
        <p className="text-6xl md:text-9xl ">Sponsors</p>
      </div>

      <div className="w-full flex flex-col gap-36">
        <PlatinumSponsors />
        <GoldSponsors />
        <SilverSponsors />
        <PlatformSponsors />
        <FoodSponsors />
        <ApparelSponsors />
      </div>
      
    </div>
  );
};

export default Sponsors;
