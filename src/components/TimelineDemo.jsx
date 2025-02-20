import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { EventData } from '../data/Events';

const TimelineItem = ({ title, content, isFirst }) => (
  <div className="flex justify-start pt-10 md:pt-40 md:gap-10">
    <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
      <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
        <div className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 " />
      </div>
      <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500">
        {title}
      </h3>
    </div>
    <div className="relative pl-20 pr-4 md:pl-4 w-full">
      <h3 className="md:hidden block text-xl mb-4 text-left font-bold text-neutral-500">
        {title}
      </h3>
      {content}
    </div>
  </div>
);

const TimelineProgress = ({ height, heightTransform, opacityTransform }) => (
  <div
    style={{ height: `${height}px` }}
    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
  >
    <motion.div
      style={{
        height: heightTransform,
        opacity: opacityTransform,
      }}
      className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
    />
  </div>
);

const Timeline = ({ data = EventData }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // If no data is provided, show a message
  if (!data || data.length === 0) {
    return (
      <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10 p-8">
        <p className="text-neutral-300">No timeline data available.</p>
      </div>
    );
  }

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            content={item.content}
            isFirst={index === 0}
          />
        ))}
        <TimelineProgress
          height={height}
          heightTransform={heightTransform}
          opacityTransform={opacityTransform}
        />
      </div>
    </div>
  );
};

export default Timeline;