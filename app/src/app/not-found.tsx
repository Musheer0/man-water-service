"use client"

import Link from "next/link"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-200 leading-none">404</h1>
          <div className="relative -mt-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="w-16 h-16 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-6">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or you entered the
            wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Quick Links:</p>
        <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-start">
          <Link href="/#about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/#service" className="hover:text-blue-600 transition">Services</Link>
          <Link href="/#contact" className="hover:text-blue-600 transition">Contact</Link>
          <Link href="/gallary" className="hover:text-blue-600 transition">See our works</Link>
        </div>
        </div>
      </div>
    </div>
  )
}
