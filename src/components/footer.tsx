"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";


export default function Footer() {
  return (
    <footer className="relative bg-white text-zinc-800 pt-12 pb-6 px-6 sm:px-12">
      {/* Blue gradient mask */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-blue-500/10 pointer-events-none z-0" />

      <div className="relative z-10  mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Left: Logo + Name */}
        <div className="flex items-center gap-3">
          <img src="/logo.avif" alt="Man Water Logo" className="w-10 h-10 object-contain rounded-md" />
          <span className="font-semibold text-lg sm:text-xl">Man Water Service</span>
        </div>

        {/* Social */}
        <div className="flex items-center gap-4">
          <Link href="https://www.instagram.com/man_water_service/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="w-5 h-5 hover:text-blue-600 transition-colors" />
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-zinc-200 w-full  mx-auto" />

      {/* Bottom: Links + Copyright */}
      <div className="relative z-10 l mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-zinc-600 gap-4">
        <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-start">
          <Link href="/#about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/#service" className="hover:text-blue-600 transition">Services</Link>
          <Link href="/#contact" className="hover:text-blue-600 transition">Contact</Link>
          <Link href="/gallary" className="hover:text-blue-600 transition">See our works</Link>
        </div>

        <div className="text-center sm:text-right flex flex-col sm:flex-row gap-2 sm:gap-6 items-center">
          <p>© {new Date().getFullYear()} Man Water. All rights reserved.</p>
          <Link
            href="https://www.instagram.com/man_01e/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Contact Developer
          </Link>
        </div>
      </div>
    </footer>
  );
}
