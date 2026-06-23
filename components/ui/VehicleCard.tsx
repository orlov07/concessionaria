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

const badgeStyles: Record<string, { background: string; color: string }> = {
  DESTAQUE: { background: '#C9A227', color: '#000' },
  NOVO: { background: '#10b981', color: '#fff' },
  OFERTA: { background: '#dc2626', color: '#fff' },
}

export function VehicleCard({ slug, brand, model, year, km, price, fuel, transmission, badge, image }: VehicleCardProps) {
  const waMsg = `Olá! Tenho interesse no ${brand} ${model} ${year} por R$ ${price.toLocaleString('pt-BR')}. Vi no site!`

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      style={{
        background: '#141414',
        border: '1px solid #1f1f1f',
        borderRadius: '4px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = '#C9A227'
        el.style.transform = 'translateY(-3px)'
        el.style.boxShadow = '0 0 20px rgba(201,162,39,0.15)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = '#1f1f1f'
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'none'
      }}
    >
      {/* Imagem */}
      <div style={{ position: 'relative', height: '200px', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {image ? (
          <img src={image} alt={`${brand} ${model}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{ textAlign: 'center' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" style={{ margin: '0 auto', display: 'block' }}>
              <path d="M5 17H3a2 2 0 0 1-2-2v-4l2.5-6h13L19 11v4a2 2 0 0 1-2 2h-2M5 17h10M5 17a2 2 0 1 0 4 0M15 17a2 2 0 1 0 4 0" />
            </svg>
            <div style={{ marginTop: '8px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: '#333' }}>
              Foto em breve
            </div>
          </div>
        )}

        {badge && (
          <span style={{
            position: 'absolute', top: '10px', left: '10px',
            background: badgeStyles[badge]?.background || '#C9A227',
            color: badgeStyles[badge]?.color || '#000',
            fontSize: '9px', fontWeight: 800,
            padding: '3px 8px', letterSpacing: '1px',
            borderRadius: '2px', textTransform: 'uppercase',
          }}>
            {badge}
          </span>
        )}
      </div>

      {/* Informações */}
      <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '4px' }}>
          {brand}
        </div>
        <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '17px', fontWeight: 800, color: '#fff', textTransform: 'uppercase', marginBottom: '8px', margin: '0 0 8px 0' }}>
          {model} · {year}
        </h3>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '12px', color: '#666', marginBottom: '10px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Gauge size={12} />
            {km.toLocaleString('pt-BR')} km
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Settings2 size={12} />
            {transmission}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Zap size={12} />
            {fuel}
          </span>
        </div>

        <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '30px', color: '#C9A227', letterSpacing: '1px', marginBottom: '12px', lineHeight: 1 }}>
          R$ {price.toLocaleString('pt-BR')}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: 'auto' }}>
          <Link
            href={`/estoque/${slug}`}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px',
              background: 'transparent', color: '#C9A227',
              border: '1px solid #2a2a2a', padding: '9px',
              fontSize: '11px', fontWeight: 700, letterSpacing: '1px',
              textTransform: 'uppercase', textDecoration: 'none',
              borderRadius: '2px',
            }}
          >
            <Eye size={13} />
            Ver detalhes
          </Link>
          <a
            href={WHATSAPP_URL(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px',
              background: '#C9A227', color: '#000',
              border: 'none', padding: '9px',
              fontSize: '11px', fontWeight: 800, letterSpacing: '1px',
              textTransform: 'uppercase', textDecoration: 'none',
              borderRadius: '2px',
            }}
          >
            <MessageCircle size={13} />
            WhatsApp
          </a>
        </div>
      </div>
    </motion.article>
  )
}
