import React from "react";
import SponsorSlab from "./SponsorSlab";

const platformSponsors = [
  "/images/ethindia.png",
  "/images/polygon.png",
];

const PlatformSponsors = () => {
  return (
    <div className="flex w-full flex-col gap-8 justify-center items-center">
      <div className="text-3xl md:text-6xl font-['shakuro'] text-white uppercase">
        Platform sponsors
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-36 w-full">
        {platformSponsors.map((sponsor, index) => (
          <SponsorSlab key={index} sponsorImage={sponsor} />
        ))}
      </div>
    </div>
  );
};

export default PlatformSponsors;