import React from "react";
import Hero from "../sections/Hero";
import Testimonials from "../sections/Testimonials";
import Gallery from "./Gallery";
import SponsorUs from "../sections/SponsorUs";
import Footer from "../sections/Footer";
import Faq from "../sections/Faq";
import Timeline from "../sections/Timeline";
import Sponsors from "../sections/Sponsors";

const Home = () => {
  return (
    <div className="flex flex-col gap-[150px]">
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
