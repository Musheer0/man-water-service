"use client"

import type React from "react"
import {
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react"
import { motion, useMotionValue, animate } from "framer-motion"

interface CompareProps {
  firstItem: React.ReactNode
  secondItem: React.ReactNode
  firstItemClassName?: string
  secondItemClassName?: string
  initialSliderPercentage?: number
  slideMode?: "hover" | "click"
  showHandleBar?: boolean
  handleClassName?: string
  className?: string
}

export default function Compare({
  firstItem,
  secondItem,
  firstItemClassName = "",
  secondItemClassName = "",
  initialSliderPercentage = 0,
  slideMode = "hover",
  showHandleBar = true,
  handleClassName = "",
  className = "",
}: CompareProps) {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage)
  const sliderMotionValue = useMotionValue(initialSliderPercentage)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Animate on load from 0 to 50%
  useEffect(() => {
    const controls = animate(sliderMotionValue, 50, {
      duration: 0.5,
      ease: "easeInOut",
      onUpdate: (latest) => {
        setSliderXPercent(latest)
      },
    })
    return () => controls.stop()
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!sliderRef.current) return
      if (slideMode === "hover" || isDragging) {
        const rect = sliderRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const percent = (x / rect.width) * 100
        setSliderXPercent(Math.max(0, Math.min(100, percent)))
      }
    },
    [slideMode, isDragging],
  )

  const handleMouseDown = useCallback(() => {
    setIsDragging(true)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (!sliderRef.current) return
      if (slideMode === "hover" || isDragging) {
        const rect = sliderRef.current.getBoundingClientRect()
        const x = e.touches[0].clientX - rect.left
        const percent = (x / rect.width) * 100
        setSliderXPercent(Math.max(0, Math.min(100, percent)))
      }
    },
    [slideMode, isDragging],
  )

  return (
    <div
      ref={sliderRef}
      className={`relative w-full overflow-hidden select-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      <div className="opacity-0 pointer-events-none">{firstItem}</div>

      {/* First Item (Background) */}
      <div className={`absolute inset-0 ${firstItemClassName}`}>
        {firstItem}
      </div>

      {/* Second Item (Foreground with clip) */}
      <motion.div
        className={`absolute inset-0 h-full ${secondItemClassName}`}
        style={{
          clipPath: `polygon(0 0, ${sliderXPercent}% 0, ${sliderXPercent}% 100%, 0 100%)`,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {secondItem}
      </motion.div>

      {/* Handle Bar */}
      {showHandleBar && (
        <motion.div
          className={`absolute top-0 bottom-0 w-1 bg-white shadow-lg ${handleClassName}`}
          style={{
            left: `${sliderXPercent}%`,
            transform: "translateX(-50%)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Handle Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="w-6 h-6 bg-white rounded-full shadow-lg border-2 border-gray-200 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex space-x-0.5">
                <div className="w-0.5 h-3 bg-gray-400 rounded-full"></div>
                <div className="w-0.5 h-3 bg-gray-400 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
