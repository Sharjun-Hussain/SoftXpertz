import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BackgroundLines } from "@/components/ui/background-lines";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Spotlight } from "@/components/ui/Spolight";
import { motion } from "framer-motion";
import Image from "next/image";
import project1 from "@/public/project1.png";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { products, testimonials } from "@/lib/Data";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { GoogleGeminiEffectDemo } from "./Components/google-gemini";
import { ContactSection } from "./Components/contact";

export default function Home() {
  const words = `Crafting Tailored Software Solutions that Drive Innovation and Growth.`;
  return (
    <div>
      <FloatingNav />
      <Spotlight />
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Sanjana Airlines, <br /> Sajana Textiles.
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Get the best advices from our experts, including expert artists,
          painters, marathon enthusiasts and RDX, totally free.
        </p>
      </BackgroundLines>

      <BackgroundBeamsWithCollision>
        <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          What&apos;s cooler than Beams?{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">Exploding beams.</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="">Exploding beams.</span>
            </div>
          </div>
        </h2>
        {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Join now
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Signup
          </button>
        </div> */}
      </BackgroundBeamsWithCollision>

      <HeroHighlight>
        {/* <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          With insomnia, nothing&apos;s real. Everything is far away. Everything
          is a{" "}
          <Highlight className="text-black dark:text-white">
            copy, of a copy, of a copy.
          </Highlight>
        </motion.h1> */}
      </HeroHighlight>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black mb-6 dark:text-white">
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

      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <div className="w-full h-[150px] items-center flex justify-center">
          <h1 className="text-5xl font-bold  text-center ">Testimonials</h1>
        </div>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>

      <GoogleGeminiEffectDemo />

      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Sanjana Airlines, <br /> Sajana Textiles.
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Get the best advices from our experts, including expert artists,
          painters, marathon enthusiasts and RDX, totally free.
        </p>
      </BackgroundLines>
      <ContactSection />
    </div>
  );
}
