"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function AnimatedCounter({
  end,
  duration = 2.5,
  decimals = 0,
  suffix = "",
  prefix = "",
  className = "",
}: AnimatedCounterProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <span ref={ref} className={className}>
      {inView ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          decimals={decimals}
          decimal=","
          suffix={suffix}
          prefix={prefix}
          useEasing
          easingFn={(t, b, c, d) => {
            // easeOutExpo
            return c * (-Math.pow(2, -10 * t / d) + 1) + b;
          }}
        />
      ) : (
        <span>{prefix}{end}{suffix}</span>
      )}
    </span>
  );
}
