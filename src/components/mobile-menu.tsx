"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Menu } from "lucide-react"
import { DM_Sans } from "next/font/google"

const dmSans = DM_Sans({ subsets: ["latin"] })
// Menu links
const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Service", href: "/#service" },
  { label: "Gallery", href: "/gallery" },
]

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // ✅ Detect screen width on mount and resize
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkScreen() // Initial check
    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
  }, [])

  if (!isMobile) return null // 🚫 Don't even render if screen >= sm

  const toggleMenu = () => setIsOpen((prev) => !prev)

  const menuVariants = {
    closed: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const linkVariants = {
    closed: { opacity: 0, y: 50, transition: { duration: 0.2 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  return (
    <>
      {/* 🍔 Toggle Button */}
      <motion.button
        onClick={toggleMenu}
        className=" z-50   transition"
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X size={30} strokeWidth={2.5} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
              className="bg-zinc-900 p-1.5 text-zinc-50 rounded-full"
            >
              <Menu size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* 📱 Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={toggleMenu}
            />

            {/* Menu Content */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-white z-40 flex flex-col"
            >
              {/* Links */}
              <nav className="flex flex-col justify-center h-full pl-8 space-y-6">
                {links.map((link) => (
                  <motion.div key={link.href} variants={linkVariants} className={`relative overflow-hidden  ${dmSans.className}`}>
                    <motion.a
                      href={link.href}
                      onClick={toggleMenu}
                      className="block text-5xl font-light text-gray-900 hover:text-red-500 transition-colors duration-300 py-2 relative"
                      whileTap={{ scale: 0.98 }}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      style={{ fontFamily: "DM Sans, serif" }}
                    >
                      {link.label}
                      {/* Borders */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                        variants={{
                          rest: { scaleX: 0, originX: 0 },
                          hover: { scaleX: 1, originX: 0 },
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-red-300 rounded-full"
                        variants={{
                          rest: { scaleX: 0, originX: 0 },
                          hover: { scaleX: 1, originX: 0 },
                        }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      />
                    </motion.a>
                  </motion.div>
                ))}
              </nav>

              {/* Footer */}
              <motion.div
                className="absolute bottom-10 left-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <p className="text-gray-400 text-sm font-light">Navigate</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileMenu
