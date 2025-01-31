import React from "react";
import Hero from "../sections/Hero";
import Testimonials from "../sections/Testimonials";
import Gallery from "./Gallery";
import SponsorUs from "../sections/SponsorUs";
import Footer from "../sections/Footer";
import Faq from "../sections/Faq";

const Home = () => {
  return (
    <div className="flex flex-col gap-[150px]">
      <Hero />
      <Testimonials />
      <Faq />
      <SponsorUs />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
