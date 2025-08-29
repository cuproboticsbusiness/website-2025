"use client";
import { useInView } from "motion/react";
import { useRef } from "react";
import CountUp from "react-countup";

const STATS = [
  { end: 70, label: "Members", duration: 3 },
  { end: 4, label: "Subteams", duration: 3 },
  { end: 7, label: "Majors", duration: 3 },
  { end: 30000, label: "Hours of work each year", duration: 3, separator: "," },
];

const StatsBar = () => {
  const countUpRef = useRef(null);
  const isInView = useInView(countUpRef, { once: true });

  return (
    <div
      className="flex justify-evenly items-center flex-wrap gap-y-4"
      ref={countUpRef}
    >
      {STATS.map(({ end, label, duration, separator }, i) => (
        <div key={i} className="text-center p-2">
          <p className="text-[clamp(2.5rem,6vw,4rem)]">
            {isInView && (
              <CountUp end={end} duration={duration} separator={separator} />
            )}
          </p>
          <p className="text-sm sm:text-base lg:text-xl tracking-widest uppercase whitespace-nowrap">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;
