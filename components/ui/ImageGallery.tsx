'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageGalleryProps {
  images: string[]
  alt: string
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const placeholders = images.length > 0 ? images : Array(4).fill(null)

  const prev = () => setCurrent((c) => (c - 1 + placeholders.length) % placeholders.length)
  const next = () => setCurrent((c) => (c + 1) % placeholders.length)

  return (
    <>
      <div className="flex flex-col gap-2">
        {/* Main image */}
        <div
          className="relative bg-[#111] border border-[#1f1f1f] aspect-[4/3] flex items-center justify-center cursor-pointer overflow-hidden"
          onClick={() => setLightbox(true)}
        >
          {placeholders[current] ? (
            <img src={placeholders[current]} alt={alt} className="w-full h-full object-cover" />
          ) : (
            <div className="flex flex-col items-center gap-3 text-[#333]">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
                <rect x="1" y="3" width="22" height="14" rx="2" />
                <path d="M8 17v2M16 17v2M3 10h18" />
                <circle cx="7" cy="15" r="1" />
                <circle cx="17" cy="15" r="1" />
              </svg>
              <span className="text-sm tracking-widest uppercase">Foto em breve</span>
            </div>
          )}
          {placeholders.length > 1 && (
            <>
              <button onClick={(e) => { e.stopPropagation(); prev() }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 flex items-center justify-center text-white hover:bg-[#C9A227] hover:text-black transition-colors">
                <ChevronLeft size={16} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); next() }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 flex items-center justify-center text-white hover:bg-[#C9A227] hover:text-black transition-colors">
                <ChevronRight size={16} />
              </button>
              <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1">
                {current + 1}/{placeholders.length}
              </span>
            </>
          )}
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-2">
          {placeholders.slice(0, 4).map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`aspect-[4/3] bg-[#111] border overflow-hidden transition-colors ${
                current === i ? 'border-[#C9A227]' : 'border-[#1f1f1f] hover:border-[#333]'
              }`}
            >
              {img ? (
                <img src={img} alt={`${alt} ${i + 1}`} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#333]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="1" y="3" width="22" height="14" rx="2" />
                    <path d="M8 17v2M16 17v2" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setLightbox(false)}
          >
            <button className="absolute top-4 right-4 text-white hover:text-[#C9A227]" onClick={() => setLightbox(false)}>
              <X size={28} />
            </button>
            <div className="max-w-4xl w-full px-4">
              {placeholders[current] ? (
                <img src={placeholders[current]} alt={alt} className="w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
              ) : (
                <div className="aspect-video bg-[#111] flex items-center justify-center text-[#333]">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
                    <rect x="1" y="3" width="22" height="14" rx="2" />
                    <path d="M8 17v2M16 17v2M3 10h18" />
                  </svg>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
