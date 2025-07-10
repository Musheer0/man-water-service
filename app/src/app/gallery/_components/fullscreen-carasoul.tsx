"use client"
import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"

interface MediaItem {
  video: string
  poster: string
}

interface FullScreenCarouselProps {
  items: MediaItem
  onClose: () => void
}

export function FullScreenCarousel({ items, onClose}: FullScreenCarouselProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const fullscreenRef = useRef<HTMLDivElement>(null)

  // Fullscreen functionality
  const enterFullscreen = async () => {
    if (fullscreenRef.current && document.fullscreenElement !== fullscreenRef.current) {
      try {
        await fullscreenRef.current.requestFullscreen()
      } catch (error) {
        console.error("Error entering fullscreen:", error)
      }
    }
  }


  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!document.fullscreenElement
      setIsFullscreen(isCurrentlyFullscreen)

      // If we just exited fullscreen (and it wasn't programmatic), close the carousel
      if (!isCurrentlyFullscreen && isFullscreen) {
        // Small delay to ensure fullscreen exit is complete
        setTimeout(() => {
          onClose()
        }, 100)
      }
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [isFullscreen, onClose])

  // Auto-enter fullscreen when carousel opens
  useEffect(() => {
    const timer = setTimeout(() => {
      enterFullscreen()
    }, 100) // Small delay to ensure DOM is ready

    return () => clearTimeout(timer)
  }, [])


  // Prevent body scroll when carousel is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <div ref={fullscreenRef} className="fixed inset-0 bg-black bg-opacity-95 z-50">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-200"
        aria-label="Close carousel"
      >
        <X className="w-6 h-6 " />
      </button>

 
      {/* Horizontal scroll container */}
      <div
        className="w-full h-full overflow-x-auto overflow-y-hidden flex"
       
      >
         <div
            className="flex-shrink-0 w-full h-full flex items-center justify-center p-4"
            style={{ scrollSnapAlign: "start" }}
          >
            <video
             src={items.video}
              controls
              autoPlay
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
      </div>

  

      {/* Hide scrollbar */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
