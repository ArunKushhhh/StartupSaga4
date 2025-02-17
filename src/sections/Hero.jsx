import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroBg from "../components/HeroBg";
import Timeline from "./Timeline";
import Testimonials from "./Testimonials";
import Sponsors from "./Sponsors";
import Faq from "./Faq";
import SponsorUs from "./SponsorUs";
import Gallery from "../pages/Gallery";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const maskRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isLargeScreen) return;

    const isMobile = window.innerWidth <= 768;
    const initialSize = isMobile ? "100vh" : "0vh";
    const targetSize = isMobile ? "110vh" : "110vw";

    gsap.set(maskRef.current, {
      width: initialSize,
      height: initialSize,
      borderRadius: "50%",
    });

    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom center",
        scrub: 1,
        pin: false,
      },
    });

    clipAnimation.to(maskRef.current, {
      width: targetSize,
      height: targetSize,
      borderRadius: "0%",
      duration: 1,
      ease: "power2.inOut",
    });

    return () => {
      clipAnimation.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [isLargeScreen]);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden"
      >
        <div className="bg-[#D693A2] absolute inset-0">
          <div className="absolute -bottom-12 md:-bottom-64 inset-0 flex justify-between w-full mx-auto pointer-events-none">
            <HeroBg />
          </div>
        </div>

        {/* {isLargeScreen && (
          <div
            ref={maskRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#001223] rounded-full z-[100]"
          />
        )} */}
      </section>

      {/* Rest of the content outside the hero section */}
      <div className="mt-[150px] flex flex-col justify-center items-center gap-[150px] bg-[#001223] w-full">
        <Timeline />
        <Testimonials />
        <Sponsors />
        <Faq />
        <SponsorUs />
        <Gallery />
        <Footer />
      </div>
    </>
  );
};

export default Hero;
