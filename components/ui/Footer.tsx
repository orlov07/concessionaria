import Link from 'next/link'
import { MessageCircle, MapPin, Clock } from 'lucide-react'
import { CONSTANTS, WHATSAPP_URL } from '@/data/constants'

function InstagramGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer style={{ background: '#080808', borderTop: '2px solid #C9A227' }}>
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 lg:px-20 xl:px-32">
        <div className="grid grid-cols-1 gap-10 border-b border-[#1a1a1a] pb-8 md:grid-cols-3">
          <div>
            <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '22px', fontWeight: 800, color: '#C9A227', letterSpacing: '2px', marginBottom: '4px' }}>
              FÊNIX VEÍCULOS
            </div>
            <div style={{ fontSize: '11px', color: '#555', letterSpacing: '2px', marginBottom: '16px' }}>LARANJAL</div>
            <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.7, maxWidth: '300px' }}>
              Multimarcas referência em Laranjal, MG. Financiamento facilitado, as melhores taxas e o seu próximo carro sem complicação.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href={CONSTANTS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded border border-[#2a2a2a] bg-[#1a1a1a] text-[#AAAAAA] transition-colors hover:border-[#C9A227] hover:text-[#C9A227]"
              >
                <InstagramGlyph />
              </a>
              <a
                href={CONSTANTS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded border border-[#2a2a2a] bg-[#1a1a1a] text-[#AAAAAA] transition-colors hover:border-[#C9A227] hover:text-[#C9A227]"
              >
                <FacebookGlyph />
              </a>
              <a
                href={WHATSAPP_URL()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded border border-[#2a2a2a] bg-[#1a1a1a] text-[#AAAAAA] transition-colors hover:border-[#C9A227] hover:text-[#C9A227]"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '11px', color: '#fff', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              LINKS RÁPIDOS
            </div>
            <nav className="space-y-3">
              {[
                { label: 'Estoque', href: '/estoque' },
                { label: 'Financiamento', href: '/financiamento' },
                { label: 'Sobre Nós', href: '/sobre' },
                { label: 'Contato', href: '/contato' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="block text-sm text-[#555] transition-colors hover:text-[#C9A227]">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <div style={{ fontSize: '11px', color: '#fff', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              CONTATO
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-[#555]">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#C9A227]" />
                <span>{CONSTANTS.address}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-[#555]">
                <Clock size={14} className="mt-0.5 shrink-0 text-[#C9A227]" />
                <span>{CONSTANTS.hours}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-[#555]">
                <span className="mt-0.5 shrink-0 text-[#C9A227]"><InstagramGlyph /></span>
                <span>@fenix_veiculos_laranjal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-5 text-xs text-[#333]">
          <span>© 2024 Fênix Veículos Laranjal. Todos os direitos reservados.</span>
          <span>
            Desenvolvido por{' '}
            <a href="https://techbild.web.app" target="_blank" rel="noopener noreferrer" className="font-bold text-[#C9A227] no-underline">
              TechBild
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
