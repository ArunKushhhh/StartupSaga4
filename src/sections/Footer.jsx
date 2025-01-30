import React from "react";
import Button from "../components/Button";
import SpotlightText from "../components/SpotlightText";
import Send from "../../public/images/send-email.svg";

const footerItems = ["Prizes", "Timeline", "FAQs", "Testimonials", "Contact"];
const links = ["Instagram", "Facebook", "Twitter", "LinkedIn"];

const Footer = () => {
  return (
    <div className="flex flex-col gap-24 justify-start items-center min-h-32">
      {/* Navigation menu */}
      <div className="flex justify-between items-center w-full px-16 mt-32">
        <div className="flex gap-6 h-full items-center">
          <div className="hidden md:block">
            {footerItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="nav-hover-btn"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="flex gap-6 h-full items-center">
          <div className="hidden md:block">
            {links.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="nav2-hover-btn"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Info and map */}
      <div className="min-h-32 text-white w-full flex justify-between px-16">
        {/* contact info */}
        <div className="flex w-1/3 flex-col gap-10 justify-center items-center">
          {/* heading */}
          <div className="font-['shakuro'] text-hover-btn text-4xl ">
            Contact Us
          </div>
          {/* contacts */}
          <div className="text-xl flex flex-col items-start w-full gap-6">
            <div className="flex flex-col gap-[6px]">
              <p className="font-bold">Gulshan Singh(Secretary):</p>
              <p>9064099186</p>
            </div>
            <div className="flex flex-col gap-[6px]">
              <p className="font-bold">Tanishk Soam(Secretary):</p>
              <p>9897283397</p>
            </div>
          </div>
          {/* mail */}
          <div className="bg-white w-full rounded-full flex justify-between items-center">
            <p className="pl-6 text-black font-semibold py-[10px] text-xl">
              ecell@aitpune.edu.in
            </p>
            <button
              onClick={() =>
                (window.location.href = "mailto:ecell@aitpune.edu.in")
              }
              className="flex gap-3 bg-red-600 py-[10px] px-6 text-xl rounded-full"
            >
              Submit
              <img src={Send} alt="email" />
            </button>
          </div>
        </div>

        {/* venue */}
        <div className="flex w-1/3 flex-col gap-10 justify-center items-center">
          <div className="font-['shakuro'] text-hover-btn text-4xl ">
            Venue
          </div>
          <iframe
            className="rounded-xl w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.64883570219!2d73.87434400449611!3d18.607325966357873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c70090000001%3A0x160a20f3d0273495!2sArmy%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1700741837638!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full">
        <SpotlightText />
        <div className="flex justify-center items-center w-full py-[10px] text-white bg-[#0B0F1A]">
          ~Creating Synergy ❤️
        </div>
      </div>
    </div>
  );
};

export default Footer;
