"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({ content, contentClassName, id }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <div id={id}>
      <div className="text-center bg-black p-6 overflow-hidden">
        <ServicesHeading />
      </div>
      <motion.div
        animate={{
          backgroundColor:
            backgroundColors[activeCard % backgroundColors.length],
        }}
        className="h-[30rem] overflow-y-auto hideScrollbar flex justify-evenly relative space-x-10 rounded-md p-10"
        ref={ref}
      >
        <div className="relative flex items-start px-4 ">
          <div className="max-w-2xl h-40">
            {content.map((item, index) => (
              <div key={item.title + index} className="mt-20 mb-32 pb-20">
                {/* Enhanced Motion Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                    y: activeCard === index ? 0 : 50,
                    scale: activeCard === index ? 1.1 : 1,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="text-4xl font-semibold text-slate-100"
                >
                  {item.title}
                </motion.h2>

                {/* Enhanced Motion Paragraph */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                    y: activeCard === index ? 0 : 30,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.1,
                  }}
                  className="text-lg text-slate-300 max-w-sm mt-10"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>

        {/* Sticky content card */}
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </motion.div>
    </div>
  );
};

const ServicesHeading = () => {
  return (
    <div className="text-center bg-black p-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1.1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1.1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="text-5xl font-extrabold text-slate-100"
        >
          Our Services
        </motion.h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 1.2,
          ease: "easeIn",
        }}
      >
        <p className="text-lg text-slate-300 mt-4">
          Delivering high-quality services tailored to your needs. Explore our
          offerings below.
        </p>
      </motion.div>
    </div>
  );
};

export default ServicesHeading;
