import React from "react";
import SpotlightText from "../components/SpotlightText";
import Send from "/images/send-email.svg";

const footerItems = [
  "Hero",
  "Timeline",
  "Testimonials",
  "Sponsors",
  "FAQs",
  "Sponsor Us",
];
const links = {
  Instagram: "https://www.instagram.com/ecell_ait/",
  Facebook: "https://www.facebook.com/ecellait/",
  Twitter: "https://x.com/ecell_aitpune",
  LinkedIn: "https://www.linkedin.com/company/innovation-entrepreneurship-cell/",
};

const Footer = () => {
  // Handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetPosition = element.offsetTop - 100; // Added offset for navbar

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Handle nav item click
  const handleNavClick = (e, item) => {
    e.preventDefault();
    const sectionId = item.toLowerCase().replace(/\s+/g, "-");
    scrollToSection(sectionId);
  };

  return (
    <div
      id="contact"
      className="flex flex-col gap-24 justify-start items-center w-full"
    >
      {/* Navigation menu */}
      <div className="flex justify-between md:items-center w-full px-4 md:px-16 mt-32">
        <div className="flex gap-6 h-full items-center">
          <div className="md:block flex flex-col md:flex-row gap-6">
            {footerItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="nav-hover-btn"
                onClick={(e) => handleNavClick(e, item)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="flex gap-6 h-full items-center">
          <div className="flex flex-col md:flex-row gap-6">
            {Object.entries(links).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="nav2-hover-btn"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Info and map */}
      <div className="min-h-32 text-white w-full flex flex-col md:flex-row justify-between gap-16 px-4 md:px-16">
        {/* contact info */}
        <div className="flex w-full md:w-1/3 flex-col gap-10 justify-center items-center">
          {/* heading */}
          <div className="font-['shakuro'] text-hover-btn text-4xl ">
            Contact Us
          </div>
          {/* contacts */}
          <div className="text-xl flex flex-col items-start w-full gap-6">
            <div className="flex flex-col gap-[6px]">
              <p className="text-[0.9em] md:text-[1.2em] font-semibold">
                Arun Kumar Kushwaha (Joint Secretary):
              </p>
              <p className="text-[14px] md:text-[16px]">+91 8619020789</p>
            </div>
            <div className="flex flex-col gap-[6px]">
              <p className="text-[0.9em] md:text-[1.2em] font-semibold">Swarup Baidya (Joint Secretary):</p>
              <p className="text-[14px] md:text-[16px]">+91 9330166052</p>
            </div>
          </div>
          {/* mail */}
          <div className="bg-white w-full rounded-full flex justify-between items-center">
            <p className="pl-6 text-black font-semibold py-3 text-sm md:text-xl">
              ecell@aitpune.edu.in
            </p>
            <button
              onClick={() =>
                (window.location.href = "mailto:ecell@aitpune.edu.in")
              }
              className="flex items-center gap-3 bg-red-600 py-3 px-6 text-sm md:text-xl rounded-full text-white font-semibold"
            >
              Mail Us
              <img src={Send} alt="email" />
            </button>
          </div>
        </div>

        {/* venue */}
        <div className="flex md:w-1/3 flex-col gap-10 justify-center items-center">
          <div className="font-['shakuro'] text-hover-btn text-4xl ">Venue</div>
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
