import { useEffect, useRef } from "react";
import Hero from "../sections/Hero";
import Testimonials from "../sections/Testimonials";
import Gallery from "./Gallery";
import SponsorUs from "../sections/SponsorUs";
import Footer from "../sections/Footer";
import Faq from "../sections/Faq";
import Timeline from "../sections/Timeline";
import Sponsors from "../sections/Sponsors";
import NavBar from "../components/Navbar";
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
      <div className="bg-[#D693A2] absolute inset-0">
        <div className="w-full max-w-[80em] mx-auto relative flex flex-col items-center">
          <NavBar />
        </div>
      </div>
      <Hero />
      <Timeline />
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
