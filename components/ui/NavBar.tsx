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
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-md bg-[rgba(10,10,10,0.95)] border-b border-[#1f1f1f]' : 'bg-[#0a0a0a]'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20 xl:px-32">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 select-none">
            <span className="text-2xl">🦅</span>
            <div>
              <p className="font-oswald text-white text-lg leading-none tracking-wider uppercase">Fênix Veículos</p>
              <p className="text-[#C9A227] text-[10px] tracking-[0.2em] uppercase leading-none mt-0.5">Laranjal</p>
            </div>
          </Link>

          {/* Nav links (desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                  pathname === l.href ? 'text-[#C9A227]' : 'text-[#AAAAAA] hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA (desktop) */}
          <a
            href={WHATSAPP_URL()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-[#C9A227] text-black text-sm font-bold px-5 py-2.5 hover:bg-[#E8C84A] transition-colors uppercase tracking-wide"
          >
            <MessageCircle size={15} /> WhatsApp
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="fixed inset-y-0 right-0 z-50 w-72 bg-[#111] border-l border-[#1f1f1f] flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-[#1f1f1f]">
              <span className="font-oswald text-white text-lg uppercase tracking-wide">Menu</span>
              <button onClick={() => setMenuOpen(false)} className="text-[#AAA]"><X size={22} /></button>
            </div>
            <nav className="flex flex-col gap-1 p-4 flex-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium uppercase tracking-wide border-b border-[#1f1f1f] transition-colors ${
                    pathname === l.href ? 'text-[#C9A227]' : 'text-[#AAA] hover:text-white'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="p-4">
              <a
                href={WHATSAPP_URL()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#C9A227] text-black font-bold py-3 uppercase tracking-wide w-full"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
