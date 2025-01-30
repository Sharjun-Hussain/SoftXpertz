"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, X } from "lucide-react";
import logo from "@/public/logo.png";
import Image from "next/image";

export default function FooterWithLogo() {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Twitter", icon: X, href: "https://twitter.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  ];

  const footerLinks = [
    { name: "Blog", href: "/blog" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "User Agreement", href: "/user-agreement" },
    { name: "Community Guidelines", href: "/community-guidelines" },
    { name: "Security Policy", href: "/security-policy" },
    { name: "Copyrights Received", href: "/copyrights" },
  ];

  const container = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <motion.footer
      className="w-full bg-gradient-to-br from-zinc-900 to-slate-900 p-6 md:px-10 md:py-6"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Logo Section */}
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <motion.div
          className="flex items-center gap-4 mb-6 md:mb-0"
          variants={item}
        >
          <div className="text-sm text-zinc-400">
            Copyright © 2025 SoftXpertz (PVT) Ltd
          </div>
          {/* <Image
            src={logo}
            alt="image"
            className=" object-cover "
            width={300}
          /> */}
          {/* <img
            src="/logo.png"
            alt="SoftXpertz"
            className="w-16 h-16 object-cover rounded-full"
          /> */}
          {/* <h1 className="lg:text-2xl text-lg font-bold text-white">
            SoftXpertz (PVT) Ltd
          </h1> */}
        </motion.div>

        {/* Social Media Links */}
        <motion.div className="flex gap-4" variants={container}>
          {socialLinks.map(({ name, icon: Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-800 rounded-full shadow-md hover:scale-110 hover:shadow-xl transition-transform duration-300"
              variants={item}
            >
              <Icon className="w-4 h-4 text-gray-800 dark:text-gray-200" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Footer Links */}
      {/* <motion.div
        className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-zinc-600 dark:text-gray-400"
        variants={container}
      >
        {footerLinks.map(({ name, href }, index) => (
          <motion.a
            key={index}
            href={href}
            className="hover:text-blue-500 transition-colors duration-200"
            variants={item}
          >
            {name}
          </motion.a>
        ))}
      </motion.div> */}
    </motion.footer>
  );
}
