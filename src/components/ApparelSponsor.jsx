import React from "react";
import SponsorSlab from "./SponsorSlab";

const apparelSponsors = [
  "/images/TheDopeStore.svg",
];

const ApparelSponsors = () => {
  return (
    <div className="flex w-full flex-col gap-8 justify-center items-center">
      <div className="text-3xl md:text-6xl font-['shakuro'] text-white uppercase">
        Apparel sponsors
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-36 w-full">
        {apparelSponsors.map((sponsor, index) => (
          <SponsorSlab key={index} sponsorImage={sponsor} />
        ))}
      </div>
    </div>
  );
};

export default ApparelSponsors;