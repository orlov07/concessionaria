'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Eye, Gauge, MessageCircle, Settings2, Zap } from 'lucide-react'
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

export function VehicleCard({ slug, brand, model, year, km, price, fuel, transmission, badge, image }: VehicleCardProps) {
  const waMsg = `Ola! Tenho interesse no ${brand} ${model} ${year} por R$ ${price.toLocaleString('pt-BR')}.`

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex h-full flex-col overflow-hidden rounded border border-[#1f1f1f] bg-[#141414] transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-[3px] hover:border-[#C9A227] hover:shadow-[0_0_20px_rgba(201,162,39,0.15)]"
    >
      <div className="relative flex h-[220px] w-full shrink-0 items-center justify-center overflow-hidden bg-[#1a1a1a]">
        {image ? (
          <img src={image} alt={`${brand} ${model}`} className="h-full w-full object-cover" />
        ) : (
          <div className="text-center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" className="mx-auto block">
              <path d="M5 17H3a2 2 0 0 1-2-2v-4l2.5-6h13L19 11v4a2 2 0 0 1-2 2h-2M5 17h10M5 17a2 2 0 1 0 4 0M15 17a2 2 0 1 0 4 0" />
            </svg>
            <div className="mt-2 text-[11px] uppercase tracking-[0.14em] text-[#333]">Foto em breve</div>
          </div>
        )}

        {badge ? (
          <span className="absolute left-3 top-3 rounded-sm bg-[#C9A227] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-black">
            {badge}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#666]">{brand}</div>
        <h3 className="font-oswald text-[32px] font-bold uppercase leading-none text-white">
          {model} - {year}
        </h3>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-[#777]">
          <span className="flex items-center gap-1.5">
            <Gauge size={13} />
            {km.toLocaleString('pt-BR')} km
          </span>
          <span className="flex items-center gap-1.5">
            <Settings2 size={13} />
            {transmission}
          </span>
          <span className="flex items-center gap-1.5">
            <Zap size={13} />
            {fuel}
          </span>
        </div>

        <div className="mt-4 font-bebas text-[44px] leading-none tracking-[0.03em] text-[#C9A227]">R$ {price.toLocaleString('pt-BR')}</div>

        <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Link
            href={`/estoque/${slug}`}
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#2a2a2a] px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#C9A227] no-underline transition-colors hover:border-[#C9A227]"
          >
            <Eye size={14} />
            Ver detalhes
          </Link>
          <a
            href={WHATSAPP_URL(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#C9A227] px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-black no-underline transition-colors hover:bg-[#E8C84A]"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>
      </div>
    </motion.article>
  )
}
