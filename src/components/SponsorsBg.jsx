import React from "react";
// import Clouds from "../../public/images/clouds.svg";
// import CloudsB from "../../public/images/cloudsbottom.svg";
// import Bg from "../../public/images/bgpattern.svg";
import SponsorBg from "../../public/images/sponsorbg.svg";
// import SponsorBg2 from "../../public/images/sponsorbg.png";


const SponsorsBg = () => {
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[120%] h-full flex justify-center items-center"
      >
        <img src={SponsorBg} alt="sponsorbg" className="w-full h-full" />
      </div>
      {/* <div className="absolute left-0 top-0 w-full h-full opacity-10 overflow-hidden">
            <img src={Bg} alt="bgpattern" style={{
                width: "100%",
            }}/>
        </div>
      <div className="absolute left-1/2 -translate-x-1/2 -top-[9%] w-[110%] flex justify-center items-center">
        <img src={Clouds} alt="clouds" style={{
            width: "100%"
        }}/>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-[9%] w-[110%] flex justify-center items-center">
        <img src={CloudsB} alt="clouds" style={{
            width: "100%"
        }}/>
      </div> */}
    </div>
  );
};

export default SponsorsBg;
