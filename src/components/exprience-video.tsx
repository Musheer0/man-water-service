"use client";

import {  PlayIcon } from "lucide-react";
import { useRef, useState } from "react";
import clsx from "clsx";

export function ExperienceVideo({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
        video.muted = false
      video.play();
      setIsPaused(false);
    } else {
        video.muted = true
      video.pause();
      setIsPaused(true);
    }
  };

  return (
    <div
      onClick={togglePlay}
      onMouseEnter={() => {
        setIsPaused(false);
        videoRef.current?.play()
      }}
      onMouseLeave={() => {
        if (!isPaused) videoRef.current?.pause();
        setIsPaused(true)
      }}
      className={clsx(
        "relative w-[80%] sm:w-fit mx-auto aspect-[9/16] overflow-hidden rounded-xl shadow-md bg-zinc-200 cursor-pointer group",
        className
      )}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        className="w-full h-full object-cover pointer-events-none"
      />
      {isPaused && (
        <div className="absolute z-10 top-0 left-0 w-full h-full inset-0 flex items-center justify-center bg-black/30">
          <PlayIcon className="text-white w-10 h-10" />
        </div>
      )}
    </div>
  );
}
