import  { useEffect, useRef } from "react";
import Hero from "../sections/Hero";
import Testimonials from "../sections/Testimonials";
import Gallery from "./Gallery";
import SponsorUs from "../sections/SponsorUs";
import Footer from "../sections/Footer";
import Faq from "../sections/Faq";
import Timeline from "../sections/Timeline";
import Sponsors from "../sections/Sponsors";
import { gsap } from "gsap";

const Home = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    gsap.to(".timeline-wrapper", {
      opacity: 1,
      y: 0,
      duration: 1.5,
      delay: 4, // Sync with HeroBg zoom-in animation
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="flex flex-col gap-[150px]">
      <Hero />
      <div ref={timelineRef} className="timeline-wrapper opacity-0 translate-y-20">
        <Timeline />
      </div>
      <Testimonials />
      <Sponsors />
      <Faq />
      <SponsorUs />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
