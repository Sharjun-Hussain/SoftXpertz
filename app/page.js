"use client";
import { BackgroundLines } from "@/components/ui/background-lines";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Spotlight } from "@/components/ui/Spolight";
import Image from "next/image";
import project1 from "@/public/project1.png";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { links, products, Services, services, testimonials } from "@/lib/Data";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { ContactSection } from "./Components/contact";
import logo from "@/public/logo.jpg";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion } from "framer-motion";
import ProductCard from "./Components/products-card";
import ContactUs from "./Components/contact-us";

export default function Home() {
  const cards = Services.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  const words = `Crafting Tailored Software Solutions that Drive Innovation and Growth.`;
  return (
    <div className="h-screen w-full bg-black   bg-grid-white/[0.2] relative items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div id="home">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        {/* <FloatingNav /> */}

        <Spotlight />
        <BackgroundLines className="flex items-center  justify-center w-full flex-col px-4">
          <Image src={logo} alt="image" width={300} />
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Empowering Your Businesses with <div>SoftXpertz</div>
          </h2>
          <p className="max-w-[70%] mx-auto text-sm md:text-lg text-neutral-400 text-center">
            At SoftXpertz, we are a best IT company in srilanka near you,
            specializing in a wide range of services including graphic design,
            video editing, digital marketing, website development, and mobile
            app development. Our mission is to empower your business with
            innovative and effective solutions that drive success.
          </p>
        </BackgroundLines>
      </div>

      <div
        id="products"
        className="w-full relative h-full bg-black bg-grid-white/[0.2]  py-20"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl  font-bold text-neutral-200 font-sans">
          Our Services
        </h2>
        <Carousel items={cards} />
      </div>

      <div className="flex  flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl mt-44 font-semibold  mb-6 text-white">
                Meet our Main Product <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-6  leading-none">
                  BOOKING SYSTEM
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={project1}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>

      <div className="w-full p-24 mb-24 flex justify-center">
        <TextGenerateEffect words={words} />
      </div>
      <HeroParallax products={products} />

      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <div className="w-full h-[150px] items-center flex justify-center">
          <h1 className="text-5xl font-bold  text-white text-center ">
            Testimonials
          </h1>
        </div>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>

      {/* <StickyScroll id="services" content={services} /> */}

      <div className="h-screen bg-black">
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
              Our Products
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
              Delivering high-quality services tailored to your needs. Explore
              our offerings below.
            </p>
          </motion.div>
        </div>
        <ProductCard />
      </div>

      <div className="relative">
        {/* <SocialMedia className="absolute left-4 top-4 flex flex-col gap-4 space-x-3" /> */}
        {/* <ContactSection /> */}
        <ContactUs />
      </div>
      <div className="">
        <FloatingDock
          desktopClassName="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50"
          mobileClassName="fixed bottom-4 right-1 transform -translate-x-1/2 z-50" // only for demo, remove for production
          items={links}
        />
      </div>
    </div>
  );
}
