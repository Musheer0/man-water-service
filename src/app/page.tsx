
"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(
      new Date(Date.now()).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    );
  }, []);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
      <section className="w-full max-w-2xl text-center">

        <div className="inline-block border border-red-200 bg-red-50 text-red-700 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-10">
          Public Payment Notice
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-950 leading-tight mb-8">
          Development completed.
          <span className="block text-red-600">
            Payment pending.
          </span>
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          This website was developed and delivered following
          an understanding with its owner regarding payment
          for the development work.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          An original development fee of{" "}
          <strong className="text-gray-950">₹2,500</strong>{" "}
          was expected on <strong>25 July 2025</strong>.
          As of <strong>{today || "..."}</strong>, the
          payment remains unresolved.
        </p>

        <div className="border-y border-gray-200 py-9 mb-9 space-y-5">

          <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
            Payment Settlement Breakdown
          </p>

          <div className="flex justify-between items-center text-gray-600 text-base">
            <span>Original development fee</span>
            <strong className="text-gray-900">₹2,500</strong>
          </div>

          <div className="flex justify-between items-center text-gray-600 text-base">
            <span>Proposed delay compensation</span>
            <strong className="text-red-600">₹1,000</strong>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">
              Proposed Total Settlement
            </p>

            <p className="text-6xl font-bold tracking-tight text-red-600">
              ₹3,500
            </p>

            <p className="text-sm text-gray-400 mt-4">
              Original payment date: 25 July 2025
            </p>
          </div>
        </div>

        <p className="text-gray-500 text-sm leading-7 max-w-lg mx-auto">
          This notice is intended to bring transparency to
          an unresolved payment matter. The development work
          was completed, and the original payment remains
          outstanding. The additional compensation is a
          proposed settlement amount, subject to agreement.
          We remain open to resolving this matter professionally.
        </p>

        <div className="mt-16 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400 tracking-wide">
            NOTICE LAST UPDATED · {today || "..."}
          </p>
        </div>

      </section>
    </main>
  );
}
