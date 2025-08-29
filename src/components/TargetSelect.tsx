"use client";
import { ReactNode, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface TargetSelectProps {
  children: ReactNode;
  borderWidth?: number;
  cornerSize?: number;
  duration?: number;
  className?: string;
  active?: boolean;
}

const TargetSelect: React.FC<TargetSelectProps> = ({
  children,
  borderWidth = 3,
  cornerSize = 12,
  duration = 0.4,
  className,
  active,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cornersRef = useRef<Array<HTMLDivElement | null>>([]);

  // move corners to center and hide borders
  const retractCorners = () => {
    if (active || !wrapperRef.current || cornersRef.current.length !== 4)
      return;

    const rect = wrapperRef.current.getBoundingClientRect();
    const centerX = rect.width / 2 - cornerSize / 2;
    const centerY = rect.height / 2 - cornerSize / 2;

    cornersRef.current.forEach((corner) => {
      if (!corner) return;

      gsap.to(corner, {
        x: centerX,
        y: centerY,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        duration,
        ease: "power3.out",
      });
    });
  };

  // move corners to target corners and animate border widths on relevant sides
  const expandCorners = () => {
    if (!wrapperRef.current || cornersRef.current.length !== 4) return;

    const rect = wrapperRef.current.getBoundingClientRect();

    const positions = [
      { x: 0, y: 0 },
      { x: rect.width - cornerSize, y: 0 },
      { x: rect.width - cornerSize, y: rect.height - cornerSize },
      { x: 0, y: rect.height - cornerSize },
    ];

    cornersRef.current.forEach((corner, i) => {
      if (!corner) return;

      gsap.to(corner, {
        x: positions[i].x,
        y: positions[i].y,
        borderTopWidth: i <= 1 ? borderWidth : 0,
        borderRightWidth: i === 1 || i === 2 ? borderWidth : 0,
        borderBottomWidth: i >= 2 ? borderWidth : 0,
        borderLeftWidth: i === 0 || i === 3 ? borderWidth : 0,
        duration,
        ease: "power2.out",
      });
    });
  };

  useEffect(() => {
    if (active) expandCorners();
    else retractCorners();
  }, [active]);

  return (
    <div
      ref={wrapperRef}
      className={cn(className, "relative")}
      onMouseEnter={expandCorners}
      onMouseLeave={retractCorners}
    >
      {children}

      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          ref={(el) => {
            cornersRef.current[i] = el;
          }}
          className={cn(
            "absolute top-0 left-0 box-border pointer-events-none border-solid border-white"
          )}
          style={{
            width: cornerSize,
            height: cornerSize,
            borderRadius: 2,
          }}
        />
      ))}
    </div>
  );
};

export default TargetSelect;
