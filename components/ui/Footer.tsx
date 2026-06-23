import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { CONSTANTS } from '@/data/constants'

const IgIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)
const FbIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#C9A227] mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-2xl">🦅</span>
              <div>
                <p className="font-oswald text-white text-xl uppercase tracking-wider">Fênix Veículos</p>
                <p className="text-[#C9A227] text-[10px] tracking-[0.25em] uppercase">Laranjal</p>
              </div>
            </div>
            <p className="text-[#666] text-sm leading-relaxed">
              Multimarcas referência em Laranjal, MG. Financiamento facilitado, as melhores taxas e o seu próximo carro sem complicação.
            </p>
            <div className="flex gap-3 mt-5">
              <a href={CONSTANTS.instagram} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-[#333] flex items-center justify-center text-[#AAA] hover:border-[#C9A227] hover:text-[#C9A227] transition-colors">
                <IgIcon />
              </a>
              <a href={CONSTANTS.facebook} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-[#333] flex items-center justify-center text-[#AAA] hover:border-[#C9A227] hover:text-[#C9A227] transition-colors">
                <FbIcon />
              </a>
              <a href={`https://wa.me/${CONSTANTS.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-[#333] flex items-center justify-center text-[#AAA] hover:border-[#C9A227] hover:text-[#C9A227] transition-colors">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-oswald text-white uppercase tracking-widest text-sm mb-5">Links Rápidos</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Estoque', href: '/estoque' },
                { label: 'Financiamento', href: '/financiamento' },
                { label: 'Sobre Nós', href: '/sobre' },
                { label: 'Contato', href: '/contato' },
              ].map((l) => (
                <Link key={l.href} href={l.href}
                  className="text-[#888] hover:text-[#C9A227] text-sm transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-oswald text-white uppercase tracking-widest text-sm mb-5">Contato</h4>
            <div className="flex flex-col gap-2 text-[#888] text-sm">
              <p>📍 {CONSTANTS.address}</p>
              <p>🕐 {CONSTANTS.hours}</p>
              <p>📸 @fenix_veiculos_laranjal</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#1f1f1f] flex flex-col md:flex-row justify-between gap-3 text-[#555] text-xs">
          <p>© 2024 Fênix Veículos Laranjal. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{' '}
            <a href="https://techbild.web.app" target="_blank" rel="noopener noreferrer"
              className="text-[#888] hover:text-[#C9A227] transition-colors">
              TechBild
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
