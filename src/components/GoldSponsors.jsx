import React from "react";
import SponsorSlab from "./SponsorSlab";

const goldSponsors = [
  "/images/Devfolio.png",
  "/images/india.svg",
  "/images/india.svg",
];

const GoldSponsors = () => {
  return (
    <div className="flex w-full flex-col gap-8 justify-center items-center">
      <div className="text-2xl md:text-5xl font-['shakuro'] text-white uppercase">
        Gold sponsors
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-36 w-full">
        {goldSponsors.map((sponsor, index) => (
          <SponsorSlab key={index} sponsorImage={sponsor} />
        ))}
      </div>
    </div>
  );
};

export default GoldSponsors;