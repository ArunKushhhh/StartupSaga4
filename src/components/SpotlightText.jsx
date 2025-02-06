import { useState, useRef } from "react";

export default function SpotlightText() {
  const [pos, setPos] = useState({ x: "50%", y: "50%" });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPos({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <div
      ref={containerRef}
      className="flex justify-center items-center min-h-14 md:min-h-56 font-bold relative overflow-hidden  cursor-default"
      onMouseMove={handleMouseMove}
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
        className="absolute text-[15vw] font-['inter'] inset-0 flex justify-center items-center bg-gradient-to-t from-blue-500 to-pink-500  text-transparent bg-clip-text footer-text "
        style={{
          WebkitMaskImage: `radial-gradient(circle 120px at ${pos.x} ${pos.y}, white 10%, transparent 80%)`,
          maskImage: `radial-gradient(circle 120px at ${pos.x} ${pos.y}, white 10%, transparent 80%)`,
        }}
      >
        Startup Saga
      </div>
    </div>
  );
}
