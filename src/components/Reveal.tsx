"use client";
import { motion, useAnimation, useInView } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  duration?: number;
  delay?: number;
  className?: string;
}

export const Reveal = ({
  children,
  width = "fit-content",
  duration,
  delay,
  className,
}: RevealProps) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration ? duration : 0.5, delay }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};
