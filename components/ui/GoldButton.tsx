'use client'
import { forwardRef } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button' | 'a'
  href?: string
  target?: string
  rel?: string
}

const sizeMap = {
  sm: 'px-4 py-2 text-xs tracking-[1px]',
  md: 'px-6 py-3 text-xs tracking-[2px]',
  lg: 'px-8 py-3.5 text-[13px] tracking-[2px]',
}

export const GoldButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'solid', size = 'md', children, className = '', as, href, target, rel, ...props }, ref) => {
    const base = `inline-flex items-center justify-center gap-2 rounded-sm font-inter font-extrabold uppercase transition-all duration-200 ${sizeMap[size]}`
    const solid = 'border border-transparent bg-[#C9A227] text-black hover:bg-[#E8C84A] active:bg-[#A07A10]'
    const ghost = 'border border-[#C9A227] bg-transparent text-[#C9A227] hover:bg-[#C9A227] hover:text-black'
    const cls = `${base} ${variant === 'solid' ? solid : ghost} ${className}`

    if (as === 'a' || href) {
      return (
        <motion.a
          href={href}
          target={target}
          rel={rel}
          className={cls}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.a>
      )
    }

    return (
      <motion.button
        ref={ref}
        className={cls}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...(props as any)}
      >
        {children}
      </motion.button>
    )
  }
)

GoldButton.displayName = 'GoldButton'

export const GhostButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <GoldButton ref={ref} {...props} variant="ghost" />
)
GhostButton.displayName = 'GhostButton'
