import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "../components/Navbar";
import HeroBg from "../components/HeroBg";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    // Function to check if device is mobile
    const isMobile = window.innerWidth <= 768;
    
    // Initial size based on device type
    const initialSize = isMobile ? "100vh" : "0";
    
    // Target size based on device type
    const targetSize = isMobile ? "110vh" : "110vw";
    
    // Set initial styles
    gsap.set(maskRef.current, {
      width: initialSize,
      height: initialSize,
      borderRadius: "100%"
    });

    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        // markers: true
      },
    });

    clipAnimation.to(maskRef.current, {
      width: targetSize,
      height: targetSize,
      borderRadius: "100%",
      duration: 1,
      ease: "power2.out",
    });

    // Update animation on resize
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      const newSize = isMobile ? "110vh" : "110vw";
      
      gsap.set(maskRef.current, {
        width: isMobile ? "100vh" : "0",
        height: isMobile ? "100vh" : "0"
      });
      
      clipAnimation.clear();
      clipAnimation.to(maskRef.current, {
        width: newSize,
        height: newSize,
        borderRadius: "100%",
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clipAnimation.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div className="bg-[#D693A2] absolute inset-0">
        <div className="absolute -bottom-12 md:-bottom-64 inset-0 flex justify-between w-full mx-auto pointer-events-none">
          <HeroBg />
        </div>
      </div>

      {/* Mask overlay */}
      <div
        ref={maskRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-[#001223] rounded-full z-[100]"
      />
    </div>
  );
};

export default Hero;