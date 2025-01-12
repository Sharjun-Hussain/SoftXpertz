"use client";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import SocialMedia from "./socialMedia";

export function ContactSection() {
  const placeholders = [
    "Do you want Website?",
    "Are you suffering with Complex POS?",
    "Do you need CRM?",
    "Need a mentor",
    "How to assemble your own PC?",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <LampContainer className="relative">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl"
      >
        Please Drop Your Email <br /> We Will Contact You
        <div>
          <h2 className="mb-15 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black"></h2>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
      </motion.h1>
    </LampContainer>
  );
}
