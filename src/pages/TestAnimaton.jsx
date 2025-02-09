import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TestAnimation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const { innerHeight } = window;

    // Zoom-out effect for section1
    gsap.from("#section1", {
      scale: 1.5,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#section1",
        start: "top 80%", // Starts animation when 80% of #section1 is in view
        end: `+=${innerHeight * 0.5}`,
        scrub: 1,
      },
    });

    // Zoom-in effect for section2
    gsap.from("#section2", {
      scale: 1.5,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#section2",
        start: "top 80%", // Starts when 80% of section2 is visible
        end: `+=${innerHeight * 0.7}`,
        scrub: 1,
      },
    });
  }, []);

  return (
    <div>
      <div
        id="section1"
        style={{
          height: "100vh",
          background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#fff",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2>ROBO</h2>
      </div>

      <div
        id="section2"
        style={{
          height: "100vh",
          background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#333",
          textShadow: "1px 1px 5px rgba(255, 255, 255, 0.5)",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <p>Hello world...</p>
      </div>
    </div>
  );
};

export default TestAnimation;
