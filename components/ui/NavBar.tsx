'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/data/constants'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Estoque', href: '/estoque' },
  { label: 'Financiamento', href: '/financiamento' },
  { label: 'Sobre Nós', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
]

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => undefined
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(10, 10, 10, 0.95)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid #1a1a1a',
        }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20 xl:px-32">
          <Link href="/" className="flex select-none items-center gap-2.5">
            <span className="text-2xl">🦅</span>
            <div>
              <p className="font-oswald text-lg leading-none tracking-wider text-white uppercase">Fênix Veículos</p>
              <p className="mt-0.5 text-[10px] leading-none tracking-[0.2em] text-[#C9A227] uppercase">Laranjal</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                  pathname === link.href ? 'text-[#C9A227]' : 'text-[#AAAAAA] hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 bg-[#C9A227] px-5 py-2.5 text-sm font-bold tracking-wide text-black uppercase transition-colors hover:bg-[#E8C84A] lg:flex"
          >
            <MessageCircle size={15} /> WhatsApp
          </a>

          <button className="p-1 text-white lg:hidden" onClick={() => setMenuOpen((current) => !current)} aria-label="Menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col border-l border-[#1f1f1f] bg-[#111]"
          >
            <div className="flex h-16 items-center justify-between border-b border-[#1f1f1f] px-6">
              <span className="font-oswald text-lg tracking-wide text-white uppercase">Menu</span>
              <button onClick={() => setMenuOpen(false)} className="text-[#AAA]">
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 p-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`border-b border-[#1f1f1f] px-4 py-3 text-sm font-medium tracking-wide uppercase transition-colors ${
                    pathname === link.href ? 'text-[#C9A227]' : 'text-[#AAA] hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="p-4">
              <a
                href={WHATSAPP_URL()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 bg-[#C9A227] py-3 font-bold tracking-wide text-black uppercase"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
        ) : null}
      </AnimatePresence>
    </>
  )
}
