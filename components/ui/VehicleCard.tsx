'use client'
import { motion } from 'framer-motion'
import { MessageCircle, Eye, Gauge, Zap, Settings2 } from 'lucide-react'
import { WHATSAPP_URL } from '@/data/constants'
import Link from 'next/link'

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
  const waMsg = `Olá! Tenho interesse no ${brand} ${model} ${year} por R$${price.toLocaleString('pt-BR')}. Vi no site!`

  return (
    <motion.div
      className="vehicle-card rounded-lg overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
    >
      {/* Image */}
      <div className="relative h-48 bg-[#0f0f0f] flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={`${brand} ${model}`} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-[#333]">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <rect x="1" y="3" width="22" height="14" rx="2" />
              <path d="M8 17v2M16 17v2M3 10h18" />
              <circle cx="7" cy="15" r="1" />
              <circle cx="17" cy="15" r="1" />
            </svg>
            <span className="text-xs tracking-wider uppercase">Foto em breve</span>
          </div>
        )}
        {badge && (
          <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 tracking-widest ${badgeColors[badge] || 'bg-[#C9A227] text-black'}`}>
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-3">
        <div>
          <p className="text-[#666] text-xs uppercase tracking-widest font-medium">{brand}</p>
          <h3 className="font-oswald text-lg text-white uppercase mt-0.5">{model} · {year}</h3>
        </div>

        <div className="flex items-center gap-3 text-[#888] text-xs">
          <span className="flex items-center gap-1"><Gauge size={12} /> {km.toLocaleString('pt-BR')} km</span>
          <span className="flex items-center gap-1"><Settings2 size={12} /> {transmission}</span>
          <span className="flex items-center gap-1"><Zap size={12} /> {fuel}</span>
        </div>

        <div className="mt-auto">
          <p className="font-bebas text-2xl text-[#C9A227] tracking-wide">
            R$ {price.toLocaleString('pt-BR')}
          </p>
        </div>

        <div className="flex gap-2 mt-1">
          <Link
            href={`/estoque/${slug}`}
            className="flex-1 flex items-center justify-center gap-1.5 border border-[#333] text-[#AAA] hover:border-[#C9A227] hover:text-[#C9A227] text-xs py-2.5 transition-all font-semibold uppercase tracking-wide"
          >
            <Eye size={13} /> Ver Detalhes
          </Link>
          <a
            href={WHATSAPP_URL(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-[#C9A227] text-black hover:bg-[#E8C84A] text-xs py-2.5 transition-all font-bold uppercase tracking-wide"
          >
            <MessageCircle size={13} /> WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  )
}
