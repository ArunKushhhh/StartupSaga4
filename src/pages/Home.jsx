import React from "react";
import Hero from "../sections/Hero";
import Testimonials from "../sections/Testimonials";
import Gallery from "./Gallery";
import SponsorUs from "../sections/SponsorUs";

const Home = () => {
  return (
    <div className="flex flex-col gap-[150px]">
      <Hero />
      <Testimonials />
      <Gallery />
      <SponsorUs />
    </div>
  );
};

export default Home;
