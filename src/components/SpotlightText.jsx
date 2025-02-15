import { useState, useRef } from "react";

export default function SpotlightText() {
  const [pos, setPos] = useState({ x: "50%", y: "50%" });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPos({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <div
      ref={containerRef}
      className="flex justify-center items-center min-h-14 md:min-h-56 font-bold relative overflow-hidden cursor-default"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute text-[15vw] font-['inter'] inset-0 flex justify-center items-center text-opacity-20 text-gray-600 bg-clip-text"
        style={{
          backgroundImage: `url('/noise.svg')`,
          backgroundSize: "300px 300px",
        }}
      >
        Startup Saga
      </div>
      <div
        className="absolute text-[15vw] font-['inter'] inset-0 flex justify-center items-center text-transparent bg-clip-text footer-text"
        style={{
          backgroundImage: isHovered
            ? "linear-gradient(to top,  rgba(59, 130, 246, 0.6), rgba(236, 72, 153, 0.6),  rgba(255, 255, 255, 0.6) )"
            : "none",
          WebkitMaskImage: isHovered
            ? `radial-gradient(circle 120px at ${pos.x} ${pos.y}, white 10%, transparent 80%)`
            : "none",
          maskImage: isHovered
            ? `radial-gradient(circle 120px at ${pos.x} ${pos.y}, white 10%, transparent 80%)`
            : "none",
        }}
      >
        Startup Saga
      </div>
    </div>
  );
}
