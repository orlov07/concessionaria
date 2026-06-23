'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, MessageCircle, X } from 'lucide-react'
import { WHATSAPP_URL } from '@/data/constants'

const links = [
  { label: 'Estoque', href: '/estoque' },
  { label: 'Financiamento', href: '/financiamento' },
  { label: 'Sobre nos', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
]

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <header className="sticky top-0 z-100 border-b border-[#1a1a1a] bg-[rgba(10,10,10,0.95)] backdrop-blur-xl">
        <div className="section-shell">
          <div className="page-shell flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded border border-[#2a2a2a] bg-[#111] text-[#C9A227]">
                <span className="text-xl">F</span>
              </div>
              <div>
                <p className="font-oswald text-[28px] uppercase leading-none tracking-[0.04em] text-white">Fenix Veiculos</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.36em] text-[#C9A227]">Laranjal</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 xl:flex">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold uppercase tracking-[0.12em] transition-colors ${
                    pathname === link.href ? 'text-[#C9A227]' : 'text-[#A8A8A8] hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_URL()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-sm bg-[#C9A227] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-black transition-colors hover:bg-[#E8C84A] lg:inline-flex"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>

              <button className="p-1 text-white xl:hidden" onClick={() => setMenuOpen((current) => !current)} aria-label="Menu">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/70"
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.22 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[86vw] max-w-sm flex-col border-l border-[#1f1f1f] bg-[#111]"
            >
              <div className="flex h-20 items-center justify-between border-b border-[#1f1f1f] px-6">
                <span className="font-oswald text-2xl uppercase tracking-[0.08em] text-white">Menu</span>
                <button onClick={() => setMenuOpen(false)} className="text-[#AAA]" aria-label="Fechar menu">
                  <X size={22} />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-1 p-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded border border-transparent px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-colors ${
                      pathname === link.href ? 'border-[#2a2a2a] bg-[#161616] text-[#C9A227]' : 'text-[#AAA] hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="border-t border-[#1f1f1f] p-4">
                <a
                  href={WHATSAPP_URL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#C9A227] py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-black"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  )
}
