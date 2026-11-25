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
          <span className="block text-red-600">Payment pending.</span>
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          This website was developed and delivered following
          an understanding with its owner regarding payment
          for the development work.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          A development fee of{" "}
          <strong className="text-gray-950">₹2,500</strong> was
          expected on <strong>25 July 2025</strong>. However,
          as of <strong>{today || "..."}</strong>, the payment
          remains unresolved.
        </p>

        <div className="border-y border-gray-200 py-9 mb-9">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">
            Outstanding Development Fee
          </p>
          <p className="text-6xl font-bold tracking-tight text-red-600">
            ₹2,500
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Payment expected since 25 July 2025
          </p>
        </div>

        <p className="text-gray-500 text-sm leading-7 max-w-lg mx-auto">
          This notice is published to bring transparency to
          an unresolved payment matter. The development work
          was completed, and payment is still awaited.
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