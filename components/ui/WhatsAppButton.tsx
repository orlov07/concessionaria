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
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-2xl whatsapp-pulse hover:scale-110 transition-transform"
    >
      <MessageCircle size={26} fill="white" />
    </a>
  )
}
