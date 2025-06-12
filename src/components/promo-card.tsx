"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function PromoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full my-10 mx-auto px-4"
    >
      <div className={clsx(
        "w-full bg-gradient-to-br from-blue-100 to-blue-200 text-zinc-900",
        "rounded-2xl px-6 py-10 sm:py-14 flex flex-col sm:flex-row",
        "items-center justify-between gap-6 "
      )}>
        
        {/* Left: Text + Icon */}
        <div className="flex items-center gap-4">
          <div className="bg-white rounded-2xl p-3 shadow-sm">
            <Sparkles className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl sm:text-3xl font-bold leading-tight">
              Clean Faster. <br className="sm:hidden" />
              Shine More with <span className="text-blue-600">💧Man Water</span>
            </h3>
          </div>
        </div>

        {/* Right: Neighbors Badge */}
        <div className="bg-white rounded-xl px-4 py-3 shadow text-center text-xs sm:text-sm font-semibold text-zinc-800">
          <div className="flex justify-center gap-2 mb-1">
            <span className="w-3 h-3 bg-blue-500 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="w-3 h-3 bg-purple-500 rounded-full" />
            <span className="text-yellow-500">⭐</span>
          </div>
          CALL AND CLEAN WITH<br />YOUR NEIGHBORS
        </div>
      </div>
    </motion.div>
  );
}
