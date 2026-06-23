'use client'
import { Share2 } from 'lucide-react'

export function ShareButton() {
  return (
    <button
      onClick={() => {
        if (typeof navigator !== 'undefined' && navigator.share) {
          navigator.share({ title: document.title, url: window.location.href })
        } else {
          navigator.clipboard?.writeText(window.location.href)
        }
      }}
      className="flex items-center justify-center gap-2 border border-[#333] text-[#888] py-3 text-sm hover:border-[#C9A227] hover:text-[#C9A227] transition-all w-full"
    >
      <Share2 size={14} /> Compartilhar
    </button>
  )
}
