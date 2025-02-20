import React, { useState, useEffect } from "react";
import Digit from "./Digit";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-03-27T00:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-8 md:gap-8">
        <div className="relative flex flex-col items-center">
          <div className="flex gap-1 mb-8">
            <Digit value={Math.floor(timeLeft.days / 10)} />
            <Digit value={timeLeft.days % 10} />
          </div>
          <p className="absolute top-[100%] md:mt-9 left-1/2 -translate-x-1/2 text-base md:text-lg font-['shakuro'] whitespace-nowrap z-10">
            Days
          </p>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="flex gap-1 mb-8">
            <Digit value={Math.floor(timeLeft.hours / 10)} />
            <Digit value={timeLeft.hours % 10} />
          </div>
          <p className="absolute top-[100%] md:mt-9 left-1/2 -translate-x-1/2 text-base md:text-lg font-['shakuro'] whitespace-nowrap z-10">
            Hours
          </p>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="flex gap-1 mb-8">
            <Digit value={Math.floor(timeLeft.minutes / 10)} />
            <Digit value={timeLeft.minutes % 10} />
          </div>
          <p className="absolute top-[100%] md:mt-9 left-1/2 -translate-x-1/2 text-base md:text-lg font-['shakuro'] whitespace-nowrap z-10">
            Minutes
          </p>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="flex gap-1 mb-8">
            <Digit value={Math.floor(timeLeft.seconds / 10)} />
            <Digit value={timeLeft.seconds % 10} />
          </div>
          <p className="absolute top-[100%] md:mt-9 left-1/2 -translate-x-1/2 text-base md:text-lg font-['shakuro'] whitespace-nowrap z-10">
            Seconds
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;