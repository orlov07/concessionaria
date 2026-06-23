'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  highlight?: string
  subtitle?: string
  centered?: boolean
  action?: React.ReactNode
}

export function SectionHeader({ title, highlight, subtitle, centered, action }: SectionHeaderProps) {
  const parts = highlight ? title.split(highlight) : [title]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="mb-10"
    >
      <div className={`flex flex-col gap-4 ${centered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'}`}>
        <div>
          <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', color: '#fff', lineHeight: 1.1 }}>
            {highlight ? (
              <>
                {parts[0]}
                <span style={{ color: '#C9A227' }}>{highlight}</span>
                {parts[1]}
              </>
            ) : (
              title
            )}
          </h2>
          <div style={{ marginTop: '12px', height: '3px', width: '48px', background: '#C9A227', ...(centered ? { marginLeft: 'auto', marginRight: 'auto' } : {}) }} />
          {subtitle ? <p className="mt-4 max-w-2xl text-sm leading-7 text-[#888] md:text-base">{subtitle}</p> : null}
        </div>
        {!centered && action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </motion.div>
  )
}
