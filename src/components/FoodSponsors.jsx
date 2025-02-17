import React from "react";
import SponsorSlab from "./SponsorSlab";

const foodSponsors = ["/images/truel.png", "/images/soda.svg"];

const FoodSponsors = () => {
  return (
    <div className="flex w-full flex-col gap-8 justify-center items-center">
      <div className="text-2xl md:text-5xl font-['shakuro'] text-white uppercase">
        Food sponsors
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-36 w-full">
        {foodSponsors.map((sponsor, index) => (
          <SponsorSlab key={index} sponsorImage={sponsor} logoWidth={"w-1/3"} />
        ))}
      </div>
    </div>
  );
};

export default FoodSponsors;
