"use client";

import { motion } from "framer-motion";
import { ExperienceVideo } from "./exprience-video";

export default function ExperienceSection() {
  const videos = ["/exp1.mp4", "/exp2.mp4", "/exp3.mp4"];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15, // base delay between kids
        delayChildren: 0.2, // starts 0.2s later
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, filter: "blur(8px)", y: 20 },
    show: (i = 1) => ({
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.2, // i = custom prop
      },
    }),
  };

  return (
    <section className="relative w-full bg-white h-full mb-20 text-zinc-800 px-4 py-16 sm:px-8 overflow-hidden">
      {/* Heading */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl mx-auto text-center space-y-4 mb-12"
      >
        <motion.h2
          variants={textVariants}
          custom={1} // controls delay
          className="sm:text-6xl text-4xl font-bold font-handwriting"
        >
          We are very experienced in <br className="hidden sm:block" /> cleaning services
        </motion.h2>
        <motion.p
          variants={textVariants}
          custom={2}
          className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto"
        >
          At our locally owned and operated cleaning service, we’re committed to delivering
          top-notch results with every clean. Our certified, highly skilled technicians are
          trusted professionals—vetted, trained, and dedicated to making your space spotless.
        </motion.p>
      </motion.div>

      {/* Videos */}
     <div className="relative flex flex-col sm:flex-row gap-6 justify-center items-end sm:items-start">
  {videos.map((src, i) => {
    // Middle video comes first, side ones after a delay
    const isMiddle = i === 1;
    const delay = isMiddle ? 0 : 0.06;

    return (
      <motion.div
        key={src}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2}}
        transition={{ duration: 0.3, ease: "easeOut", delay }}
        className={
          i === 0
            ? "sm:translate-y-24"
            : i === 2
            ? "sm:translate-y-24 sm:flex hidden"
            : "sm:flex hidden"
        }
      >
        <ExperienceVideo src={src} />
      </motion.div>
    );
  })}
</div>

      {/* Fade mask */}
      <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
