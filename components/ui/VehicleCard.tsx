'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle, Eye, Gauge, Zap, Settings2 } from 'lucide-react'
import { WHATSAPP_URL } from '@/data/constants'

interface VehicleCardProps {
  id: string
  slug: string
  brand: string
  model: string
  year: number
  km: number
  price: number
  fuel: string
  transmission: string
  badge?: string | null
  image?: string
}

const badgeColors: Record<string, string> = {
  DESTAQUE: 'bg-[#C9A227] text-black',
  NOVO: 'bg-emerald-500 text-white',
  OFERTA: 'bg-red-600 text-white',
}

export function VehicleCard({ slug, brand, model, year, km, price, fuel, transmission, badge, image }: VehicleCardProps) {
  const waMsg = `Ola! Tenho interesse no ${brand} ${model} ${year} por R$ ${price.toLocaleString('pt-BR')}. Vi no site!`

  return (
    <motion.article
      className="vehicle-card flex h-full flex-col overflow-hidden rounded"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative flex h-[200px] items-center justify-center bg-[#1a1a1a]">
        {image ? (
          <img src={image} alt={`${brand} ${model}`} className="h-full w-full object-cover" />
        ) : (
          <div className="text-center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" className="mx-auto">
              <path d="M5 17H3a2 2 0 0 1-2-2v-4l2.5-6h13L19 11v4a2 2 0 0 1-2 2h-2M5 17h10M5 17a2 2 0 1 0 4 0M15 17a2 2 0 1 0 4 0" />
            </svg>
            <div className="mt-2 text-[11px] uppercase tracking-[1px] text-[#333]">Foto em breve</div>
          </div>
        )}

        {badge && (
          <span className={`absolute left-3 top-3 rounded-sm px-2 py-1 text-[9px] font-extrabold uppercase tracking-[1px] ${badgeColors[badge] || 'bg-[#C9A227] text-black'}`}>
            {badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 text-[10px] uppercase tracking-[1.5px] text-[#666]">{brand}</div>
        <h3 className="font-oswald mb-2 text-[17px] font-extrabold uppercase text-white">
          {model} · {year}
        </h3>

        <div className="mb-3 flex flex-wrap gap-3 text-xs text-[#666]">
          <span className="flex items-center gap-1">
            <Gauge size={12} />
            {km.toLocaleString('pt-BR')} km
          </span>
          <span className="flex items-center gap-1">
            <Settings2 size={12} />
            {transmission}
          </span>
          <span className="flex items-center gap-1">
            <Zap size={12} />
            {fuel}
          </span>
        </div>

        <div className="mb-4 font-bebas text-[30px] leading-none tracking-[1px] text-[#C9A227]">
          R$ {price.toLocaleString('pt-BR')}
        </div>

        <div className="mt-auto grid grid-cols-2 gap-2">
          <Link
            href={`/estoque/${slug}`}
            className="flex items-center justify-center gap-1 rounded-sm border border-[#2a2a2a] bg-transparent px-3 py-2.5 text-[11px] font-bold uppercase tracking-[1px] text-[#C9A227] transition-colors hover:border-[#C9A227]"
          >
            <Eye size={13} />
            Ver detalhes
          </Link>
          <a
            href={WHATSAPP_URL(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 rounded-sm bg-[#C9A227] px-3 py-2.5 text-[11px] font-extrabold uppercase tracking-[1px] text-black transition-colors hover:bg-[#E8C84A]"
          >
            <MessageCircle size={13} />
            WhatsApp
          </a>
        </div>
      </div>
    </motion.article>
  )
}
