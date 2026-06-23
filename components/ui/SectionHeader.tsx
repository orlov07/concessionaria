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
      transition={{ duration: 0.5 }}
      className={`mb-10 ${centered ? 'text-center' : ''}`}
    >
      <div className={`flex items-end ${centered ? 'justify-center' : 'justify-between'} gap-4 flex-wrap`}>
        <div>
          <h2 className="font-oswald text-3xl md:text-4xl font-bold text-white uppercase tracking-wide">
            {highlight ? (
              <>
                {parts[0]}
                <span className="text-[#C9A227]">{highlight}</span>
                {parts[1]}
              </>
            ) : title}
          </h2>
          <div className="w-10 h-[3px] bg-[#C9A227] mt-2" />
        </div>
        {action && !centered && <div>{action}</div>}
      </div>
      {subtitle && (
        <p className="mt-3 text-[#AAAAAA] text-base max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
