import React from "react";
import { useState, useEffect, useRef } from 'react';


const CircleBar = (props) => {
  const { name, color, level } = props.element;
  const [progress, setProgress] = useState(50);
  const ref = useRef(null);

  const radius = 50;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Increment animation when visible
          let current = 0;
          const increment = level / 100; // Divide target into 100 steps

          const timer = setInterval(() => {
            current += increment;
            setProgress(Math.min(current, level));

            if (current >= level) {
              clearInterval(timer);
              setProgress(level); // Ensure exact final value
            }
          }, 20); // 20ms = smooth 50fps animation
          observer.disconnect(); // Run animation only once
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref}>
    <svg width="150" height="150" viewBox="0 0 120 120">
      {/* Background Circle */}
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#e7e7e7"
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Progress Circle */}
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke={color} // Dynamic color
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 60 60)"
      />
      {/* Text */}
      <text x="50%" y="50%" textAnchor="middle" dy="-2" fontSize="1rem" fill="#252525" fontWeight={600}>
        {name}
      </text>
      <text x="50%" y="50%" textAnchor="middle" dy="18" fontSize="1rem" fill="#3B3B3B" >
        {Math.round(progress)}%
      </text>
    </svg>
    </div>
  );
};

export default CircleBar;

