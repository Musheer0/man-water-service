"use client";

import { Copy } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const numbers = ["9746408824", "6235878231", "7012450655"];

export default function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, number: string) => {
    e.stopPropagation(); // stops tel click
    navigator.clipboard.writeText(number);
    setCopied(number);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <section className="bg-white text-zinc-800 px-4 py-20 sm:px-8" id="contact">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold font-handwriting text-blue-700"
        >
     Ready for the ultimate clean?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-base text-zinc-600"
        >
          Tap a number to call us, or copy it if you&apos;re still deciding 😌
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center items-center mt-10"
        >
          {numbers.map((num) => (
            <motion.div
              key={num}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                show: { opacity: 1, scale: 1 },
              }}
              onClick={() => handleCall(num)}
              className={clsx(
                "relative group",
                "w-full sm:w-auto",
                "flex items-center justify-between gap-4",
                "px-6 py-4 bg-blue-100 text-blue-800 font-semibold",
                "rounded-full shadow-sm",
                "cursor-pointer transition-all duration-300",
                "hover:bg-blue-200 hover:shadow-md active:scale-95"
              )}
            >
              <span className="text-lg">{num}</span>

              <button
                onClick={(e) => handleCopy(e, num)}
                className="p-1 rounded-full text-blue-600 hover:bg-blue-200 transition"
              >
                <Copy className="w-5 h-5" />
              </button>

              {copied === num && (
                <span className="absolute -bottom-6 text-xs text-blue-600 font-medium">
                  Copied!
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
