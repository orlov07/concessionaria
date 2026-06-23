'use client'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/data/constants'

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="whatsapp-pulse fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.35)] transition-transform hover:scale-110 md:h-14 md:w-14"
    >
      <MessageCircle size={26} fill="white" />
    </a>
  )
}
