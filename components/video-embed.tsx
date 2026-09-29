"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { cn } from "@/lib/utils"

interface VideoEmbedProps {
  videoId: string
  title?: string
  posterSrc?: string
  className?: string
}

export function VideoEmbed({
  videoId,
  title = "Video player",
  posterSrc = "/gpv-video-poster.jpg",
  className,
}: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const handlePopState = () => {
      setIsPlaying(false)
    }

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  const handlePlay = useCallback(() => {
    window.history.pushState({ videoEmbed: videoId }, "")
    setIsPlaying(true)
  }, [videoId])

  const embedParams = new URLSearchParams({
    autoplay: "1",
    modestbranding: "1",
    rel: "0",
    iv_load_policy: "3",
    playsinline: "1",
  })

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?${embedParams}`

  return (
    <div
      className={cn(
        "relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black ring-1 ring-black/10",
        className
      )}
    >
      {isPlaying ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <>
          <Image
            src={posterSrc}
            alt={title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
          <button
            type="button"
            onClick={handlePlay}
            className="group absolute inset-0 z-10 flex cursor-pointer items-center justify-center"
            aria-label={`Play ${title}`}
          >
            <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/35" />
            <span className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-blue-600/90 text-white shadow-lg backdrop-blur-sm transition-transform group-hover:scale-110 group-hover:bg-blue-700">
              <Play className="h-8 w-8 sm:h-10 sm:w-10 fill-white ml-1" />
            </span>
          </button>
        </>
      )}
    </div>
  )
}
