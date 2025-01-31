"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      setDirection();
      setSpeed();
      setStart(true);
    }
  }

  const setDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const setSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden mask-gradient",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-6 py-6 w-max flex-nowrap animate-scroll",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <motion.li
            key={item.name}
            className="relative w-[350px] max-w-full md:w-[450px] flex-shrink-0 rounded-2xl bg-glass border border-gray-700 shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:rotate-3 hover:skew-y-2"
            whileHover={{ rotate: 5, scale: 1.05 }}
          >
            {/* Rotating background shape */}
            <motion.div
              className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 blur-2xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            <blockquote className="relative z-20">
              {/* User Image */}
              <div className="flex items-center gap-4">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full border-2 border-gray-300 shadow-sm"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white text-xl">
                    👤
                  </div>
                )}
                <div>
                  <span className="text-sm text-gray-400 font-semibold">
                    {item.name}
                  </span>
                  <p className="text-xs text-gray-500">{item.title}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="mt-4 text-gray-200 text-lg font-medium leading-relaxed">
                "{item.quote}"
              </p>
            </blockquote>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
