"use client";

import { Sparkles, Droplets, Car, Home, BrickWall } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";

const services = [
  {
    icon: <Droplets className="w-8 h-8 text-blue-600" />,
    title: "Water Tank Cleaning",
    desc: "Sanitize your tanks for pure, safe water you can trust.",
  },
  {
    icon: <Car className="w-8 h-8 text-blue-600" />,
    title: "Car Wash Magic",
    desc: "Inside & out—your ride’s about to flex harder than you.",
  },
  {
    icon: <Home className="w-8 h-8 text-blue-600" />,
    title: "House Cleaning Pro",
    desc: "From ceiling fans to floor tiles—we hit every corner.",
  },
  {
    icon: <BrickWall className="w-8 h-8 text-blue-600" />,
    title: "Interlock Floor Shine",
    desc: "Breathe new life into your dusty, crusty floors.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-blue-600" />,
    title: "Custom Service",
    desc: "Got weird cleaning needs? Bet. Let’s make it shine.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="service"
      className="w-full bg-white px-4 py-24 text-zinc-800 sm:px-8 overflow-hidden"
    >
      {/* Heading */}
{/* Unique Heading */}
<div className="max-w-4xl  mb-16 px-2 sm:px-4">
  <h2 className="text-3xl sm:text-5xl font-bold text-zinc-800 leading-tight">
    We <span className="text-blue-600 italic underline underline-offset-4">Slay</span> Dirt
  </h2>
  <p className="mt-3 text-zinc-600 text-sm sm:text-base max-w-xl">
    Whether it’s your ride, your roof, or your room—we handle it with precision, pressure, and pride.
  </p>
</div>


      {/* Card Flex */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="flex flex-wrap justify-center gap-6"
      >
        {services.slice(0, 3).map((service, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className={clsx(
              "w-full sm:w-[300px] flex-1 min-w-[260px]",
              "bg-zinc-50 border border-blue-100 p-6 rounded-2xl",
              "shadow hover:shadow-lg transition-all duration-300 flex flex-col gap-4"
            )}
          >
            {service.icon}
            <h3 className="text-lg font-semibold text-blue-700">{service.title}</h3>
            <p className="text-sm text-zinc-600">{service.desc}</p>
            <Link
              href="/#contact"
              className="mt-auto text-sm font-medium text-blue-600 hover:underline"
            >
              Book Now →
            </Link>
          </motion.div>
        ))}

        {/* Custom Card Last */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          className={clsx(
            "w-full sm:w-[300px] flex-1 min-w-[260px]",
            "bg-blue-600 text-white p-6 rounded-2xl shadow-md",
            "flex flex-col gap-4 hover:scale-[1.02] transition-all duration-300"
          )}
        >
          <Sparkles className="w-8 h-8 text-white" />
          <h3 className="text-lg font-semibold">Custom Service</h3>
          <p className="text-sm text-blue-100">
            Something unique? A challenge? We eat those for breakfast.
          </p>
          <Link
            href="/#contact"
            className="mt-auto text-sm font-medium text-white/90 hover:underline"
          >
            Let&apos;s Talk →
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
  className="mt-20 mx-auto"
>
  <div className="bg-blue-600 text-white rounded-2xl w-full px-6 py-10 sm:px-12 sm:py-12 shadow-xl overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
    <div className="text-center sm:text-left">
      <h3 className="text-2xl sm:text-3xl font-bold">
        READY TO JOIN THE CLEAN REVOLUTION? 🚀
      </h3>
      <p className="text-sm sm:text-base mt-2 text-white/90">
        Thousands of happy customers can&apos;t be wrong! Let&apos;s make your space sparkle too!
      </p>
    </div>
    <Link
      href="/#contact"
      className="bg-white text-blue-700 hover:bg-blue-100 transition-colors px-6 py-2 text-sm sm:text-base font-medium rounded-full shadow"
    >
      Book Now
    </Link>
  </div>
</motion.div>

    </section>
  );
}
