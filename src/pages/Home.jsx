import { useState, useRef, useEffect } from "react";
import Hero from "../sections/Hero";
import NavBar from "../components/Navbar";
import Lenis from "@studio-freight/lenis";

const Home = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smooth: true,
      smoothTouch: false,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative">
      <div className="w-full mx-auto relative flex flex-col items-center">
        <NavBar />
      </div>
      <Hero />
    </div>
  );
};

export default Home;
