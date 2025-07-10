"use client"

import { useState } from "react"
import { FullScreenCarousel } from "./fullscreen-carasoul"
import { media } from "../data"

interface MediaItem {
  video: string
  poster: string
}

const mediaItems: MediaItem[] = media
export default function PhotoGrid() {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openCarousel = (index: number) => {
    setCurrentIndex(index)
    setIsCarouselOpen(true)
  }

  const closeCarousel = () => {
    setIsCarouselOpen(false)
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              onClick={() => openCarousel(index)}
            >
              <img
              loading="lazy"
                src={item.poster || "/placeholder.svg"}
                alt={`Gallery item ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-auto object-cover group-hover:brightness-110 transition-all duration-300"
              />
              <div className="absolute inset-0 group-hover:bg-black   group-hover:opacity-60 transition-all duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isCarouselOpen && (
        <FullScreenCarousel
          items={mediaItems[currentIndex]}
          onClose={closeCarousel}
        />
      )}
    </>
  )
}
